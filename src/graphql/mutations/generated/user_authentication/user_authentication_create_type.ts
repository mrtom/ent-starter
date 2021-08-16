// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import {
  GraphQLFieldConfig,
  GraphQLFieldConfigMap,
  GraphQLInputFieldConfigMap,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLResolveInfo,
  GraphQLString,
} from "graphql";
import { RequestContext } from "@snowtop/ent";
import { UserAuthentication } from "src/ent/";
import CreateUserAuthenticationAction, {
  UserAuthenticationCreateInput,
} from "src/ent/user_authentication/actions/create_user_authentication_action";
import { UserAuthenticationType } from "src/graphql/resolvers/";

interface UserAuthenticationCreatePayload {
  userAuthentication: UserAuthentication;
}

export const UserAuthenticationCreateInputType = new GraphQLInputObjectType({
  name: "UserAuthenticationCreateInput",
  fields: (): GraphQLInputFieldConfigMap => ({
    emailAddress: {
      type: GraphQLNonNull(GraphQLString),
    },
    password: {
      type: GraphQLNonNull(GraphQLString),
    },
  }),
});

export const UserAuthenticationCreatePayloadType = new GraphQLObjectType({
  name: "UserAuthenticationCreatePayload",
  fields: (): GraphQLFieldConfigMap<
    UserAuthenticationCreatePayload,
    RequestContext
  > => ({
    userAuthentication: {
      type: GraphQLNonNull(UserAuthenticationType),
    },
  }),
});

export const UserAuthenticationCreateType: GraphQLFieldConfig<
  undefined,
  RequestContext,
  { [input: string]: UserAuthenticationCreateInput }
> = {
  type: GraphQLNonNull(UserAuthenticationCreatePayloadType),
  args: {
    input: {
      description: "",
      type: GraphQLNonNull(UserAuthenticationCreateInputType),
    },
  },
  resolve: async (
    _source,
    { input },
    context: RequestContext,
    _info: GraphQLResolveInfo,
  ): Promise<UserAuthenticationCreatePayload> => {
    let userAuthentication = await CreateUserAuthenticationAction.create(
      context.getViewer(),
      {
        emailAddress: input.emailAddress,
        password: input.password,
      },
    ).saveX();
    return { userAuthentication: userAuthentication };
  },
};
