// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import { GraphQLObjectType } from "graphql";
import { GraphQLConnectionType } from "@snowtop/ent/graphql";
import { QuestionToAuthorsEdge } from "src/ent/";
import { UserType } from "src/graphql/resolvers/internal";

var connType: GraphQLConnectionType<GraphQLObjectType, QuestionToAuthorsEdge>;

export const QuestionToAuthorsConnectionType = () => {
  if (connType === undefined) {
    connType = new GraphQLConnectionType("QuestionToAuthors", UserType);
  }
  return connType;
};
