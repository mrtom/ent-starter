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
import { Answer, AnswerComment, User } from "src/ent/";
import { EdgeType, NodeType } from "src/ent/const";
import schema from "src/schema/answer_comment";

export interface AnswerCommentInput {
  body?: string;
  answerID?: ID | Builder<Answer>;
  authorID?: ID | Builder<User>;
}

export interface AnswerCommentAction extends Action<AnswerComment> {
  getInput(): AnswerCommentInput;
}

function randomNum(): string {
  return Math.random().toString(10).substring(2);
}

export class AnswerCommentBuilder implements Builder<AnswerComment> {
  orchestrator: Orchestrator<AnswerComment>;
  readonly placeholderID: ID;
  readonly ent = AnswerComment;
  private input: AnswerCommentInput;

  public constructor(
    public readonly viewer: Viewer,
    public readonly operation: WriteOperation,
    action: AnswerCommentAction,
    public readonly existingEnt?: AnswerComment | undefined,
  ) {
    this.placeholderID = `$ent.idPlaceholderID$ ${randomNum()}-AnswerComment`;
    this.input = action.getInput();

    this.orchestrator = new Orchestrator({
      viewer: viewer,
      operation: this.operation,
      tableName: "answer_comments",
      key: "id",
      loaderOptions: AnswerComment.loaderOptions(),
      builder: this,
      action: action,
      schema: schema,
      editedFields: () => {
        return this.getEditedFields.apply(this);
      },
    });
  }

  getInput(): AnswerCommentInput {
    return this.input;
  }

  updateInput(input: AnswerCommentInput) {
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
  addAuthor(...ids: ID[]): AnswerCommentBuilder;
  addAuthor(...nodes: User[]): AnswerCommentBuilder;
  addAuthor(...nodes: Builder<User>[]): AnswerCommentBuilder;
  addAuthor(...nodes: ID[] | User[] | Builder<User>[]): AnswerCommentBuilder {
    for (const node of nodes) {
      if (this.isBuilder(node)) {
        this.addAuthorID(node);
      } else if (typeof node === "object") {
        this.addAuthorID(node.id);
      } else {
        this.addAuthorID(node);
      }
    }
    return this;
  }

  addAuthorID(
    id: ID | Builder<User>,
    options?: AssocEdgeInputOptions,
  ): AnswerCommentBuilder {
    this.orchestrator.addOutboundEdge(
      id,
      EdgeType.AnswerCommentToAuthors,
      NodeType.User,
      options,
    );
    return this;
  }

  removeAuthor(...ids: ID[]): AnswerCommentBuilder;
  removeAuthor(...nodes: User[]): AnswerCommentBuilder;
  removeAuthor(...nodes: ID[] | User[]): AnswerCommentBuilder {
    for (const node of nodes) {
      if (typeof node === "object") {
        this.orchestrator.removeOutboundEdge(
          node.id,
          EdgeType.AnswerCommentToAuthors,
        );
      } else {
        this.orchestrator.removeOutboundEdge(
          node,
          EdgeType.AnswerCommentToAuthors,
        );
      }
    }
    return this;
  }

  async build(): Promise<Changeset<AnswerComment>> {
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

  async editedEnt(): Promise<AnswerComment | null> {
    return await this.orchestrator.editedEnt();
  }

  async editedEntX(): Promise<AnswerComment> {
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
    addField("body", fields.body);
    addField("answerID", fields.answerID);
    if (fields.answerID) {
      this.orchestrator.addInboundEdge(
        fields.answerID,
        EdgeType.AnswerToComments,
        NodeType.Answer,
      );
    }
    addField("authorID", fields.authorID);
    if (fields.authorID) {
      this.orchestrator.addInboundEdge(
        fields.authorID,
        EdgeType.UserToAuthoredAnswerComments,
        NodeType.User,
      );
    }
    return result;
  }

  isBuilder(node: ID | Ent | Builder<Ent>): node is Builder<Ent> {
    return (node as Builder<Ent>).placeholderID !== undefined;
  }

  // get value of body. Retrieves it from the input if specified or takes it from existingEnt
  getNewBodyValue(): string | undefined {
    return this.input.body || this.existingEnt?.body;
  }

  // get value of answerID. Retrieves it from the input if specified or takes it from existingEnt
  getNewAnswerIDValue(): ID | Builder<Answer> | undefined {
    return this.input.answerID || this.existingEnt?.answerID;
  }

  // get value of authorID. Retrieves it from the input if specified or takes it from existingEnt
  getNewAuthorIDValue(): ID | Builder<User> | undefined {
    return this.input.authorID || this.existingEnt?.authorID;
  }
}
