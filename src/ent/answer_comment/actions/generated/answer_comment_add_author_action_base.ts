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
import { AnswerComment, User } from "src/ent/";
import {
  AnswerCommentBuilder,
  AnswerCommentInput,
} from "src/ent/answer_comment/actions/answer_comment_builder";

export class AnswerCommentAddAuthorActionBase implements Action<AnswerComment> {
  public readonly builder: AnswerCommentBuilder;
  public readonly viewer: Viewer;
  protected answerComment: AnswerComment;

  constructor(viewer: Viewer, answerComment: AnswerComment) {
    this.viewer = viewer;
    this.builder = new AnswerCommentBuilder(
      this.viewer,
      WriteOperation.Edit,
      this,
      answerComment,
    );
    this.answerComment = answerComment;
  }

  getPrivacyPolicy(): PrivacyPolicy {
    return AllowIfViewerHasIdentityPrivacyPolicy;
  }

  getInput(): AnswerCommentInput {
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
  async changeset(): Promise<Changeset<AnswerComment>> {
    return this.builder.build();
  }

  async valid(): Promise<boolean> {
    return this.builder.valid();
  }

  async validX(): Promise<void> {
    await this.builder.validX();
  }

  async save(): Promise<AnswerComment | null> {
    await this.builder.save();
    return await this.builder.editedEnt();
  }

  async saveX(): Promise<AnswerComment> {
    await this.builder.saveX();
    return await this.builder.editedEntX();
  }

  static create<T extends AnswerCommentAddAuthorActionBase>(
    this: new (viewer: Viewer, answerComment: AnswerComment) => T,
    viewer: Viewer,
    answerComment: AnswerComment,
  ): AnswerCommentAddAuthorActionBase {
    return new this(viewer, answerComment);
  }

  static async saveXFromID<T extends AnswerCommentAddAuthorActionBase>(
    this: new (viewer: Viewer, answerComment: AnswerComment) => T,
    viewer: Viewer,
    id: ID,
    authorID: ID,
  ): Promise<AnswerComment> {
    let answerComment = await AnswerComment.loadX(viewer, id);
    return await new this(viewer, answerComment).addAuthor(authorID).saveX();
  }
}
