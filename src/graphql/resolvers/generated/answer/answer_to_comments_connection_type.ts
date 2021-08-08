// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import { GraphQLObjectType } from "graphql";
import { GraphQLConnectionType } from "@snowtop/ent/graphql";
import { AnswerToCommentsEdge } from "src/ent/";
import { AnswerCommentType } from "src/graphql/resolvers/internal";

var connType: GraphQLConnectionType<GraphQLObjectType, AnswerToCommentsEdge>;

export const AnswerToCommentsConnectionType = () => {
  if (connType === undefined) {
    connType = new GraphQLConnectionType("AnswerToComments", AnswerCommentType);
  }
  return connType;
};
