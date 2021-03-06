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
import { UserAuthentication } from "src/ent/";
import UserAuthenticationAddUserAction from "src/ent/user_authentication/actions/user_authentication_add_user_action";
import { UserAuthenticationType } from "src/graphql/resolvers/";

interface customUserAuthenticationAddUserInput {
  userAuthenticationID: string;
  userID: string;
}

interface UserAuthenticationAddUserPayload {
  userAuthentication: UserAuthentication;
}

export const UserAuthenticationAddUserInputType = new GraphQLInputObjectType({
  name: "UserAuthenticationAddUserInput",
  fields: (): GraphQLInputFieldConfigMap => ({
    userAuthenticationID: {
      type: GraphQLNonNull(GraphQLID),
    },
    userID: {
      type: GraphQLNonNull(GraphQLID),
    },
  }),
});

export const UserAuthenticationAddUserPayloadType = new GraphQLObjectType({
  name: "UserAuthenticationAddUserPayload",
  fields: (): GraphQLFieldConfigMap<
    UserAuthenticationAddUserPayload,
    RequestContext
  > => ({
    userAuthentication: {
      type: GraphQLNonNull(UserAuthenticationType),
    },
  }),
});

export const UserAuthenticationAddUserType: GraphQLFieldConfig<
  undefined,
  RequestContext,
  { [input: string]: customUserAuthenticationAddUserInput }
> = {
  type: GraphQLNonNull(UserAuthenticationAddUserPayloadType),
  args: {
    input: {
      description: "",
      type: GraphQLNonNull(UserAuthenticationAddUserInputType),
    },
  },
  resolve: async (
    _source,
    { input },
    context: RequestContext,
    _info: GraphQLResolveInfo,
  ): Promise<UserAuthenticationAddUserPayload> => {
    let userAuthentication = await UserAuthenticationAddUserAction.saveXFromID(
      context.getViewer(),
      mustDecodeIDFromGQLID(input.userAuthenticationID),
      mustDecodeIDFromGQLID(input.userID),
    );
    return { userAuthentication: userAuthentication };
  },
};
