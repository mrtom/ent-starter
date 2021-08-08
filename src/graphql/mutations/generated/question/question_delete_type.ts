// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import {
  GraphQLFieldConfig,
  GraphQLFieldConfigMap,
  GraphQLID,
  GraphQLInputFieldConfigMap,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLResolveInfo,
} from "graphql";
import { RequestContext } from "@snowtop/ent";
import { mustDecodeIDFromGQLID } from "@snowtop/ent/graphql";
import { Question } from "src/ent/";
import DeleteQuestionAction from "src/ent/question/actions/delete_question_action";

interface customQuestionDeleteInput {
  questionID: string;
}

interface QuestionDeletePayload {
  deletedQuestionID: string;
}

export const QuestionDeleteInputType = new GraphQLInputObjectType({
  name: "QuestionDeleteInput",
  fields: (): GraphQLInputFieldConfigMap => ({
    questionID: {
      type: GraphQLNonNull(GraphQLID),
    },
  }),
});

export const QuestionDeletePayloadType = new GraphQLObjectType({
  name: "QuestionDeletePayload",
  fields: (): GraphQLFieldConfigMap<QuestionDeletePayload, RequestContext> => ({
    deletedQuestionID: {
      type: GraphQLID,
    },
  }),
});

export const QuestionDeleteType: GraphQLFieldConfig<
  undefined,
  RequestContext,
  { [input: string]: customQuestionDeleteInput }
> = {
  type: GraphQLNonNull(QuestionDeletePayloadType),
  args: {
    input: {
      description: "",
      type: GraphQLNonNull(QuestionDeleteInputType),
    },
  },
  resolve: async (
    _source,
    { input },
    context: RequestContext,
    _info: GraphQLResolveInfo,
  ): Promise<QuestionDeletePayload> => {
    await DeleteQuestionAction.saveXFromID(
      context.getViewer(),
      mustDecodeIDFromGQLID(input.questionID),
    );
    return { deletedQuestionID: input.questionID };
  },
};
