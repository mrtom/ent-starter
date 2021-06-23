// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import {
  GraphQLBoolean,
  GraphQLFieldConfigMap,
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { RequestContext } from "@lolopinto/ent";
import {
  GraphQLEdgeConnection,
  GraphQLNodeInterface,
  nodeIDEncoder,
} from "@lolopinto/ent/graphql";
import {
  Question,
  QuestionToAnswersQuery,
  QuestionToAuthorsQuery,
  QuestionToCommentsQuery,
} from "src/ent/";
import {
  QuestionToAnswersConnectionType,
  QuestionToAuthorsConnectionType,
  QuestionToCommentsConnectionType,
  UserType,
} from "src/graphql/resolvers/internal";

export const QuestionType = new GraphQLObjectType({
  name: "Question",
  fields: (): GraphQLFieldConfigMap<Question, RequestContext> => ({
    author: {
      type: UserType,
      resolve: (question: Question, args: {}, context: RequestContext) => {
        return question.loadAuthor();
      },
    },
    id: {
      type: GraphQLNonNull(GraphQLID),
      resolve: nodeIDEncoder,
    },
    title: {
      type: GraphQLNonNull(GraphQLString),
    },
    questionBody: {
      type: GraphQLNonNull(GraphQLString),
    },
    answered: {
      type: GraphQLNonNull(GraphQLBoolean),
    },
    answers: {
      type: GraphQLNonNull(QuestionToAnswersConnectionType()),
      args: {
        first: {
          description: "",
          type: GraphQLInt,
        },
        after: {
          description: "",
          type: GraphQLString,
        },
        last: {
          description: "",
          type: GraphQLInt,
        },
        before: {
          description: "",
          type: GraphQLString,
        },
      },
      resolve: (question: Question, args: {}, context: RequestContext) => {
        return new GraphQLEdgeConnection(
          question.viewer,
          question,
          (v, question: Question) => QuestionToAnswersQuery.query(v, question),
          args,
        );
      },
    },
    authors: {
      type: GraphQLNonNull(QuestionToAuthorsConnectionType()),
      args: {
        first: {
          description: "",
          type: GraphQLInt,
        },
        after: {
          description: "",
          type: GraphQLString,
        },
        last: {
          description: "",
          type: GraphQLInt,
        },
        before: {
          description: "",
          type: GraphQLString,
        },
      },
      resolve: (question: Question, args: {}, context: RequestContext) => {
        return new GraphQLEdgeConnection(
          question.viewer,
          question,
          (v, question: Question) => QuestionToAuthorsQuery.query(v, question),
          args,
        );
      },
    },
    comments: {
      type: GraphQLNonNull(QuestionToCommentsConnectionType()),
      args: {
        first: {
          description: "",
          type: GraphQLInt,
        },
        after: {
          description: "",
          type: GraphQLString,
        },
        last: {
          description: "",
          type: GraphQLInt,
        },
        before: {
          description: "",
          type: GraphQLString,
        },
      },
      resolve: (question: Question, args: {}, context: RequestContext) => {
        return new GraphQLEdgeConnection(
          question.viewer,
          question,
          (v, question: Question) => QuestionToCommentsQuery.query(v, question),
          args,
        );
      },
    },
  }),
  interfaces: [GraphQLNodeInterface],
  isTypeOf(obj) {
    return obj instanceof Question;
  },
});