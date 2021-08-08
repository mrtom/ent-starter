// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import {
  GraphQLFieldConfigMap,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { RequestContext } from "@snowtop/ent";
import {
  GraphQLEdgeConnection,
  GraphQLNodeInterface,
  nodeIDEncoder,
} from "@snowtop/ent/graphql";
import {
  User,
  UserToAuthorToAuthoredAnswerCommentsQuery,
  UserToAuthorToAuthoredAnswersQuery,
  UserToAuthorToAuthoredQuestionCommentsQuery,
  UserToAuthorToAuthoredQuestionsQuery,
  UserToAuthoredAnswerCommentsQuery,
  UserToAuthoredAnswersQuery,
  UserToAuthoredQuestionCommentsQuery,
  UserToAuthoredQuestionsQuery,
  UserToQuestionPrivateNotesQuery,
  UserToUserQuestionPrivateNotesQuery,
} from "src/ent/";
import {
  QuestionType,
  UserToAuthorToAuthoredAnswerCommentsConnectionType,
  UserToAuthorToAuthoredAnswersConnectionType,
  UserToAuthorToAuthoredQuestionCommentsConnectionType,
  UserToAuthorToAuthoredQuestionsConnectionType,
  UserToAuthoredAnswerCommentsConnectionType,
  UserToAuthoredAnswersConnectionType,
  UserToAuthoredQuestionCommentsConnectionType,
  UserToAuthoredQuestionsConnectionType,
  UserToQuestionPrivateNotesConnectionType,
  UserToUserQuestionPrivateNotesConnectionType,
} from "src/graphql/resolvers/internal";

export const UserType = new GraphQLObjectType({
  name: "User",
  fields: (): GraphQLFieldConfigMap<User, RequestContext> => ({
    id: {
      type: GraphQLNonNull(GraphQLID),
      resolve: nodeIDEncoder,
    },
    firstName: {
      type: GraphQLNonNull(GraphQLString),
    },
    lastName: {
      type: GraphQLNonNull(GraphQLString),
    },
    emailAddress: {
      type: GraphQLNonNull(GraphQLString),
    },
    authorToAuthoredAnswerComments: {
      type: GraphQLNonNull(
        UserToAuthorToAuthoredAnswerCommentsConnectionType(),
      ),
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
      resolve: (user: User, args: {}, context: RequestContext) => {
        return new GraphQLEdgeConnection(
          user.viewer,
          user,
          (v, user: User) =>
            UserToAuthorToAuthoredAnswerCommentsQuery.query(v, user),
          args,
        );
      },
    },
    authorToAuthoredAnswers: {
      type: GraphQLNonNull(UserToAuthorToAuthoredAnswersConnectionType()),
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
      resolve: (user: User, args: {}, context: RequestContext) => {
        return new GraphQLEdgeConnection(
          user.viewer,
          user,
          (v, user: User) => UserToAuthorToAuthoredAnswersQuery.query(v, user),
          args,
        );
      },
    },
    authorToAuthoredQuestionComments: {
      type: GraphQLNonNull(
        UserToAuthorToAuthoredQuestionCommentsConnectionType(),
      ),
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
      resolve: (user: User, args: {}, context: RequestContext) => {
        return new GraphQLEdgeConnection(
          user.viewer,
          user,
          (v, user: User) =>
            UserToAuthorToAuthoredQuestionCommentsQuery.query(v, user),
          args,
        );
      },
    },
    authorToAuthoredQuestions: {
      type: GraphQLNonNull(UserToAuthorToAuthoredQuestionsConnectionType()),
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
      resolve: (user: User, args: {}, context: RequestContext) => {
        return new GraphQLEdgeConnection(
          user.viewer,
          user,
          (v, user: User) =>
            UserToAuthorToAuthoredQuestionsQuery.query(v, user),
          args,
        );
      },
    },
    authoredAnswerComments: {
      type: GraphQLNonNull(UserToAuthoredAnswerCommentsConnectionType()),
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
      resolve: (user: User, args: {}, context: RequestContext) => {
        return new GraphQLEdgeConnection(
          user.viewer,
          user,
          (v, user: User) => UserToAuthoredAnswerCommentsQuery.query(v, user),
          args,
        );
      },
    },
    authoredAnswers: {
      type: GraphQLNonNull(UserToAuthoredAnswersConnectionType()),
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
      resolve: (user: User, args: {}, context: RequestContext) => {
        return new GraphQLEdgeConnection(
          user.viewer,
          user,
          (v, user: User) => UserToAuthoredAnswersQuery.query(v, user),
          args,
        );
      },
    },
    authoredQuestionComments: {
      type: GraphQLNonNull(UserToAuthoredQuestionCommentsConnectionType()),
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
      resolve: (user: User, args: {}, context: RequestContext) => {
        return new GraphQLEdgeConnection(
          user.viewer,
          user,
          (v, user: User) => UserToAuthoredQuestionCommentsQuery.query(v, user),
          args,
        );
      },
    },
    authoredQuestions: {
      type: GraphQLNonNull(UserToAuthoredQuestionsConnectionType()),
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
      resolve: (user: User, args: {}, context: RequestContext) => {
        return new GraphQLEdgeConnection(
          user.viewer,
          user,
          (v, user: User) => UserToAuthoredQuestionsQuery.query(v, user),
          args,
        );
      },
    },
    questionPrivateNotes: {
      type: GraphQLNonNull(UserToQuestionPrivateNotesConnectionType()),
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
      resolve: (user: User, args: {}, context: RequestContext) => {
        return new GraphQLEdgeConnection(
          user.viewer,
          user,
          (v, user: User) => UserToQuestionPrivateNotesQuery.query(v, user),
          args,
        );
      },
    },
    userQuestionPrivateNotes: {
      type: GraphQLNonNull(UserToUserQuestionPrivateNotesConnectionType()),
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
      resolve: (user: User, args: {}, context: RequestContext) => {
        return new GraphQLEdgeConnection(
          user.viewer,
          user,
          (v, user: User) => UserToUserQuestionPrivateNotesQuery.query(v, user),
          args,
        );
      },
    },
    howLong: {
      type: GraphQLNonNull(GraphQLInt),
      resolve: (user: User, args: {}, context: RequestContext) => {
        return user.howLong();
      },
    },
    questionsFeed: {
      type: GraphQLNonNull(GraphQLList(GraphQLNonNull(QuestionType))),
      resolve: async (user: User, args: {}, context: RequestContext) => {
        return user.questionsFeed(context);
      },
    },
  }),
  interfaces: [GraphQLNodeInterface],
  isTypeOf(obj) {
    return obj instanceof User;
  },
});
