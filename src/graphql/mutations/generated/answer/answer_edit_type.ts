// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import {
  GraphQLBoolean,
  GraphQLFieldConfig,
  GraphQLFieldConfigMap,
  GraphQLID,
  GraphQLInputFieldConfigMap,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLResolveInfo,
  GraphQLString,
} from "graphql";
import { RequestContext } from "@snowtop/ent";
import { mustDecodeIDFromGQLID } from "@snowtop/ent/graphql";
import { Answer } from "src/ent/";
import EditAnswerAction, {
  AnswerEditInput,
} from "src/ent/answer/actions/edit_answer_action";
import { AnswerType } from "src/graphql/resolvers/";

interface customAnswerEditInput extends AnswerEditInput {
  answerID: string;
  questionID: string;
  authorID: string;
}

interface AnswerEditPayload {
  answer: Answer;
}

export const AnswerEditInputType = new GraphQLInputObjectType({
  name: "AnswerEditInput",
  fields: (): GraphQLInputFieldConfigMap => ({
    answerID: {
      type: GraphQLNonNull(GraphQLID),
    },
    body: {
      type: GraphQLString,
    },
    acceptedAnswer: {
      type: GraphQLBoolean,
    },
    questionID: {
      type: GraphQLID,
    },
    authorID: {
      type: GraphQLID,
    },
  }),
});

export const AnswerEditPayloadType = new GraphQLObjectType({
  name: "AnswerEditPayload",
  fields: (): GraphQLFieldConfigMap<AnswerEditPayload, RequestContext> => ({
    answer: {
      type: GraphQLNonNull(AnswerType),
    },
  }),
});

export const AnswerEditType: GraphQLFieldConfig<
  undefined,
  RequestContext,
  { [input: string]: customAnswerEditInput }
> = {
  type: GraphQLNonNull(AnswerEditPayloadType),
  args: {
    input: {
      description: "",
      type: GraphQLNonNull(AnswerEditInputType),
    },
  },
  resolve: async (
    _source,
    { input },
    context: RequestContext,
    _info: GraphQLResolveInfo,
  ): Promise<AnswerEditPayload> => {
    let answer = await EditAnswerAction.saveXFromID(
      context.getViewer(),
      mustDecodeIDFromGQLID(input.answerID),
      {
        body: input.body,
        acceptedAnswer: input.acceptedAnswer,
      },
    );
    return { answer: answer };
  },
};
