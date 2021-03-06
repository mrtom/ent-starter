// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import { AssocEdgeInputOptions, Ent, ID, Viewer } from "@snowtop/ent";
import {
  Action,
  Builder,
  Changeset,
  Orchestrator,
  WriteOperation,
  saveBuilder,
  saveBuilderX,
} from "@snowtop/ent/action";
import { Question, QuestionVote, User, VoteType } from "src/ent/";
import { EdgeType, NodeType } from "src/ent/const";
import schema from "src/schema/question_vote";

export interface QuestionVoteInput {
  voteType?: VoteType;
  questionID?: ID | Builder<Question>;
  voterID?: ID | Builder<User>;
}

export interface QuestionVoteAction extends Action<QuestionVote> {
  getInput(): QuestionVoteInput;
}

function randomNum(): string {
  return Math.random().toString(10).substring(2);
}

export class QuestionVoteBuilder implements Builder<QuestionVote> {
  orchestrator: Orchestrator<QuestionVote>;
  readonly placeholderID: ID;
  readonly ent = QuestionVote;
  private input: QuestionVoteInput;

  public constructor(
    public readonly viewer: Viewer,
    public readonly operation: WriteOperation,
    action: QuestionVoteAction,
    public readonly existingEnt?: QuestionVote | undefined,
  ) {
    this.placeholderID = `$ent.idPlaceholderID$ ${randomNum()}-QuestionVote`;
    this.input = action.getInput();

    this.orchestrator = new Orchestrator({
      viewer: viewer,
      operation: this.operation,
      tableName: "question_votes",
      key: "id",
      loaderOptions: QuestionVote.loaderOptions(),
      builder: this,
      action: action,
      schema: schema,
      editedFields: () => {
        return this.getEditedFields.apply(this);
      },
    });
  }

  getInput(): QuestionVoteInput {
    return this.input;
  }

  updateInput(input: QuestionVoteInput) {
    // override input
    this.input = {
      ...this.input,
      ...input,
    };
  }

  // this gets the inputs that have been written for a given edgeType and operation
  // WriteOperation.Insert for adding an edge and WriteOperation.Delete for deleting an edge
  getEdgeInputData(edgeType: EdgeType, op: WriteOperation) {
    return this.orchestrator.getInputEdges(edgeType, op);
  }

  clearInputEdges(edgeType: EdgeType, op: WriteOperation, id?: ID) {
    this.orchestrator.clearInputEdges(edgeType, op, id);
  }
  addVoter(...ids: ID[]): QuestionVoteBuilder;
  addVoter(...nodes: User[]): QuestionVoteBuilder;
  addVoter(...nodes: Builder<User>[]): QuestionVoteBuilder;
  addVoter(...nodes: ID[] | User[] | Builder<User>[]): QuestionVoteBuilder {
    for (const node of nodes) {
      if (this.isBuilder(node)) {
        this.addVoterID(node);
      } else if (typeof node === "object") {
        this.addVoterID(node.id);
      } else {
        this.addVoterID(node);
      }
    }
    return this;
  }

  addVoterID(
    id: ID | Builder<User>,
    options?: AssocEdgeInputOptions,
  ): QuestionVoteBuilder {
    this.orchestrator.addOutboundEdge(
      id,
      EdgeType.QuestionVoteToVoters,
      NodeType.User,
      options,
    );
    return this;
  }

  removeVoter(...ids: ID[]): QuestionVoteBuilder;
  removeVoter(...nodes: User[]): QuestionVoteBuilder;
  removeVoter(...nodes: ID[] | User[]): QuestionVoteBuilder {
    for (const node of nodes) {
      if (typeof node === "object") {
        this.orchestrator.removeOutboundEdge(
          node.id,
          EdgeType.QuestionVoteToVoters,
        );
      } else {
        this.orchestrator.removeOutboundEdge(
          node,
          EdgeType.QuestionVoteToVoters,
        );
      }
    }
    return this;
  }

  async build(): Promise<Changeset<QuestionVote>> {
    return this.orchestrator.build();
  }

  async valid(): Promise<boolean> {
    return this.orchestrator.valid();
  }

  async validX(): Promise<void> {
    return this.orchestrator.validX();
  }

  async save(): Promise<void> {
    await saveBuilder(this);
  }

  async saveX(): Promise<void> {
    await saveBuilderX(this);
  }

  async editedEnt(): Promise<QuestionVote | null> {
    return await this.orchestrator.editedEnt();
  }

  async editedEntX(): Promise<QuestionVote> {
    return await this.orchestrator.editedEntX();
  }

  private getEditedFields(): Map<string, any> {
    const fields = this.input;

    let result = new Map<string, any>();

    const addField = function (key: string, value: any) {
      if (value !== undefined) {
        result.set(key, value);
      }
    };
    addField("VoteType", fields.voteType);
    addField("questionID", fields.questionID);
    if (fields.questionID) {
      this.orchestrator.addInboundEdge(
        fields.questionID,
        EdgeType.QuestionToVotes,
        NodeType.Question,
      );
    }
    addField("voterID", fields.voterID);
    if (fields.voterID) {
      this.orchestrator.addInboundEdge(
        fields.voterID,
        EdgeType.UserToQuestionsVoted,
        NodeType.User,
      );
    }
    return result;
  }

  isBuilder(node: ID | Ent | Builder<Ent>): node is Builder<Ent> {
    return (node as Builder<Ent>).placeholderID !== undefined;
  }

  // get value of VoteType. Retrieves it from the input if specified or takes it from existingEnt
  getNewVoteTypeValue(): VoteType | undefined {
    return this.input.voteType || this.existingEnt?.voteType;
  }

  // get value of questionID. Retrieves it from the input if specified or takes it from existingEnt
  getNewQuestionIDValue(): ID | Builder<Question> | undefined {
    return this.input.questionID || this.existingEnt?.questionID;
  }

  // get value of voterID. Retrieves it from the input if specified or takes it from existingEnt
  getNewVoterIDValue(): ID | Builder<User> | undefined {
    return this.input.voterID || this.existingEnt?.voterID;
  }
}
