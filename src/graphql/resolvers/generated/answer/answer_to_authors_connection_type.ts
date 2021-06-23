// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import { GraphQLObjectType } from "graphql";
import { GraphQLConnectionType } from "@lolopinto/ent/graphql";
import { AnswerToAuthorsEdge } from "src/ent/";
import { UserType } from "src/graphql/resolvers/internal";

var connType: GraphQLConnectionType<GraphQLObjectType, AnswerToAuthorsEdge>;

export const AnswerToAuthorsConnectionType = () => {
  if (connType === undefined) {
    connType = new GraphQLConnectionType("AnswerToAuthors", UserType);
  }
  return connType;
};