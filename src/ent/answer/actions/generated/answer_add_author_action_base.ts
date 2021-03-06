// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import {
  AllowIfViewerHasIdentityPrivacyPolicy,
  AssocEdgeInputOptions,
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
import { Answer, User } from "src/ent/";
import {
  AnswerBuilder,
  AnswerInput,
} from "src/ent/answer/actions/answer_builder";

export class AnswerAddAuthorActionBase implements Action<Answer> {
  public readonly builder: AnswerBuilder;
  public readonly viewer: Viewer;
  protected answer: Answer;

  constructor(viewer: Viewer, answer: Answer) {
    this.viewer = viewer;
    this.builder = new AnswerBuilder(
      this.viewer,
      WriteOperation.Edit,
      this,
      answer,
    );
    this.answer = answer;
  }

  getPrivacyPolicy(): PrivacyPolicy {
    return AllowIfViewerHasIdentityPrivacyPolicy;
  }

  getInput(): AnswerInput {
    return {};
  }

  addAuthor(...ids: ID[]): this;
  addAuthor(...nodes: User[]): this;
  addAuthor(...nodes: Builder<User>[]): this;
  addAuthor(...nodes: ID[] | User[] | Builder<User>[]): this {
    nodes.forEach((node) => this.builder.addAuthor(node));
    return this;
  }

  addAuthorID(id: ID | Builder<User>, options?: AssocEdgeInputOptions): this {
    this.builder.addAuthorID(id, options);
    return this;
  }
  async changeset(): Promise<Changeset<Answer>> {
    return this.builder.build();
  }

  async valid(): Promise<boolean> {
    return this.builder.valid();
  }

  async validX(): Promise<void> {
    await this.builder.validX();
  }

  async save(): Promise<Answer | null> {
    await this.builder.save();
    return await this.builder.editedEnt();
  }

  async saveX(): Promise<Answer> {
    await this.builder.saveX();
    return await this.builder.editedEntX();
  }

  static create<T extends AnswerAddAuthorActionBase>(
    this: new (viewer: Viewer, answer: Answer) => T,
    viewer: Viewer,
    answer: Answer,
  ): AnswerAddAuthorActionBase {
    return new this(viewer, answer);
  }

  static async saveXFromID<T extends AnswerAddAuthorActionBase>(
    this: new (viewer: Viewer, answer: Answer) => T,
    viewer: Viewer,
    id: ID,
    authorID: ID,
  ): Promise<Answer> {
    let answer = await Answer.loadX(viewer, id);
    return await new this(viewer, answer).addAuthor(authorID).saveX();
  }
}
