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
import { Answer, AnswerComment } from "src/ent/";
import {
  AnswerCommentBuilder,
  AnswerCommentInput,
} from "src/ent/answer_comment/actions/answer_comment_builder";

export interface AnswerCommentCreateInput {
  body: string;
  answerID: ID | Builder<Answer>;
}

export class CreateAnswerCommentActionBase implements Action<AnswerComment> {
  public readonly builder: AnswerCommentBuilder;
  public readonly viewer: Viewer;
  protected input: AnswerCommentCreateInput;

  constructor(viewer: Viewer, input: AnswerCommentCreateInput) {
    this.viewer = viewer;
    this.input = input;
    this.builder = new AnswerCommentBuilder(
      this.viewer,
      WriteOperation.Insert,
      this,
    );
  }

  getPrivacyPolicy(): PrivacyPolicy {
    return AllowIfViewerHasIdentityPrivacyPolicy;
  }

  getInput(): AnswerCommentInput {
    return this.input;
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

  static create<T extends CreateAnswerCommentActionBase>(
    this: new (viewer: Viewer, input: AnswerCommentCreateInput) => T,
    viewer: Viewer,
    input: AnswerCommentCreateInput,
  ): CreateAnswerCommentActionBase {
    return new this(viewer, input);
  }
}
