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
import { QuestionVote, User } from "src/ent/";
import {
  QuestionVoteBuilder,
  QuestionVoteInput,
} from "src/ent/question_vote/actions/question_vote_builder";

export class QuestionVoteAddVoterActionBase implements Action<QuestionVote> {
  public readonly builder: QuestionVoteBuilder;
  public readonly viewer: Viewer;
  protected questionVote: QuestionVote;

  constructor(viewer: Viewer, questionVote: QuestionVote) {
    this.viewer = viewer;
    this.builder = new QuestionVoteBuilder(
      this.viewer,
      WriteOperation.Edit,
      this,
      questionVote,
    );
    this.questionVote = questionVote;
  }

  getPrivacyPolicy(): PrivacyPolicy {
    return AllowIfViewerHasIdentityPrivacyPolicy;
  }

  getInput(): QuestionVoteInput {
    return {};
  }

  addVoter(...ids: ID[]): this;
  addVoter(...nodes: User[]): this;
  addVoter(...nodes: Builder<User>[]): this;
  addVoter(...nodes: ID[] | User[] | Builder<User>[]): this {
    nodes.forEach((node) => this.builder.addVoter(node));
    return this;
  }

  addVoterID(id: ID | Builder<User>, options?: AssocEdgeInputOptions): this {
    this.builder.addVoterID(id, options);
    return this;
  }
  async changeset(): Promise<Changeset<QuestionVote>> {
    return this.builder.build();
  }

  async valid(): Promise<boolean> {
    return this.builder.valid();
  }

  async validX(): Promise<void> {
    await this.builder.validX();
  }

  async save(): Promise<QuestionVote | null> {
    await this.builder.save();
    return await this.builder.editedEnt();
  }

  async saveX(): Promise<QuestionVote> {
    await this.builder.saveX();
    return await this.builder.editedEntX();
  }

  static create<T extends QuestionVoteAddVoterActionBase>(
    this: new (viewer: Viewer, questionVote: QuestionVote) => T,
    viewer: Viewer,
    questionVote: QuestionVote,
  ): QuestionVoteAddVoterActionBase {
    return new this(viewer, questionVote);
  }

  static async saveXFromID<T extends QuestionVoteAddVoterActionBase>(
    this: new (viewer: Viewer, questionVote: QuestionVote) => T,
    viewer: Viewer,
    id: ID,
    voterID: ID,
  ): Promise<QuestionVote> {
    let questionVote = await QuestionVote.loadX(viewer, id);
    return await new this(viewer, questionVote).addVoter(voterID).saveX();
  }
}
