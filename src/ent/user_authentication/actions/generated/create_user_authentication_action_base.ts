// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import {
  AllowIfViewerHasIdentityPrivacyPolicy,
  ID,
  PrivacyPolicy,
  Viewer,
} from "@snowtop/ent";
import {
  Action,
  Builder,
  Changeset,
  WriteOperation,
} from "@snowtop/ent/action";
import { User, UserAuthentication } from "src/ent/";
import {
  UserAuthenticationBuilder,
  UserAuthenticationInput,
} from "src/ent/user_authentication/actions/user_authentication_builder";

export interface UserAuthenticationCreateInput {
  emailAddress: string;
  password: string;
  userID: ID | Builder<User>;
}

export class CreateUserAuthenticationActionBase
  implements Action<UserAuthentication>
{
  public readonly builder: UserAuthenticationBuilder;
  public readonly viewer: Viewer;
  protected input: UserAuthenticationCreateInput;

  constructor(viewer: Viewer, input: UserAuthenticationCreateInput) {
    this.viewer = viewer;
    this.input = input;
    this.builder = new UserAuthenticationBuilder(
      this.viewer,
      WriteOperation.Insert,
      this,
    );
  }

  getPrivacyPolicy(): PrivacyPolicy {
    return AllowIfViewerHasIdentityPrivacyPolicy;
  }

  getInput(): UserAuthenticationInput {
    return this.input;
  }

  async changeset(): Promise<Changeset<UserAuthentication>> {
    return this.builder.build();
  }

  async valid(): Promise<boolean> {
    return this.builder.valid();
  }

  async validX(): Promise<void> {
    await this.builder.validX();
  }

  async save(): Promise<UserAuthentication | null> {
    await this.builder.save();
    return await this.builder.editedEnt();
  }

  async saveX(): Promise<UserAuthentication> {
    await this.builder.saveX();
    return await this.builder.editedEntX();
  }

  static create<T extends CreateUserAuthenticationActionBase>(
    this: new (viewer: Viewer, input: UserAuthenticationCreateInput) => T,
    viewer: Viewer,
    input: UserAuthenticationCreateInput,
  ): CreateUserAuthenticationActionBase {
    return new this(viewer, input);
  }
}
