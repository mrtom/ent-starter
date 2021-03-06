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
import { QuestionVote } from "src/ent/";
import CreateQuestionVoteAction, {
  QuestionVoteCreateInput,
} from "src/ent/question_vote/actions/create_question_vote_action";
import { QuestionVoteType, VoteTypeType } from "src/graphql/resolvers/";

interface customQuestionVoteCreateInput extends QuestionVoteCreateInput {
  questionID: string;
}

interface QuestionVoteCreatePayload {
  questionVote: QuestionVote;
}

export const QuestionVoteCreateInputType = new GraphQLInputObjectType({
  name: "QuestionVoteCreateInput",
  fields: (): GraphQLInputFieldConfigMap => ({
    voteType: {
      type: GraphQLNonNull(VoteTypeType),
    },
    questionID: {
      type: GraphQLNonNull(GraphQLID),
    },
  }),
});

export const QuestionVoteCreatePayloadType = new GraphQLObjectType({
  name: "QuestionVoteCreatePayload",
  fields: (): GraphQLFieldConfigMap<
    QuestionVoteCreatePayload,
    RequestContext
  > => ({
    questionVote: {
      type: GraphQLNonNull(QuestionVoteType),
    },
  }),
});

export const QuestionVoteCreateType: GraphQLFieldConfig<
  undefined,
  RequestContext,
  { [input: string]: customQuestionVoteCreateInput }
> = {
  type: GraphQLNonNull(QuestionVoteCreatePayloadType),
  args: {
    input: {
      description: "",
      type: GraphQLNonNull(QuestionVoteCreateInputType),
    },
  },
  resolve: async (
    _source,
    { input },
    context: RequestContext,
    _info: GraphQLResolveInfo,
  ): Promise<QuestionVoteCreatePayload> => {
    let questionVote = await CreateQuestionVoteAction.create(
      context.getViewer(),
      {
        voteType: input.voteType,
        questionID: mustDecodeIDFromGQLID(input.questionID),
      },
    ).saveX();
    return { questionVote: questionVote };
  },
};
