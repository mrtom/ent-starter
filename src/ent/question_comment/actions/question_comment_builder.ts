// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import { AssocEdgeInputOptions, Ent, ID, Viewer } from "@lolopinto/ent";
import {
  Action,
  Builder,
  Changeset,
  Orchestrator,
  WriteOperation,
  saveBuilder,
  saveBuilderX,
} from "@lolopinto/ent/action";
import { Question, QuestionComment, User } from "src/ent/";
import { EdgeType, NodeType } from "src/ent/const";
import schema from "src/schema/question_comment";

export interface QuestionCommentInput {
  body?: string;
  questionID?: ID | Builder<Question>;
  authorID?: ID | Builder<User>;
}

export interface QuestionCommentAction extends Action<QuestionComment> {
  getInput(): QuestionCommentInput;
}

function randomNum(): string {
  return Math.random().toString(10).substring(2);
}

export class QuestionCommentBuilder implements Builder<QuestionComment> {
  orchestrator: Orchestrator<QuestionComment>;
  readonly placeholderID: ID;
  readonly ent = QuestionComment;
  private input: QuestionCommentInput;

  public constructor(
    public readonly viewer: Viewer,
    public readonly operation: WriteOperation,
    action: QuestionCommentAction,
    public readonly existingEnt?: QuestionComment | undefined,
  ) {
    this.placeholderID = `$ent.idPlaceholderID$ ${randomNum()}-QuestionComment`;
    this.input = action.getInput();

    this.orchestrator = new Orchestrator({
      viewer: viewer,
      operation: this.operation,
      tableName: "question_comments",
      key: "id",
      loaderOptions: QuestionComment.loaderOptions(),
      builder: this,
      action: action,
      schema: schema,
      editedFields: () => {
        return this.getEditedFields.apply(this);
      },
    });
  }

  getInput(): QuestionCommentInput {
    return this.input;
  }

  updateInput(input: QuestionCommentInput) {
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
  addAuthor(...ids: ID[]): QuestionCommentBuilder;
  addAuthor(...nodes: User[]): QuestionCommentBuilder;
  addAuthor(...nodes: Builder<User>[]): QuestionCommentBuilder;
  addAuthor(...nodes: ID[] | User[] | Builder<User>[]): QuestionCommentBuilder {
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
  ): QuestionCommentBuilder {
    this.orchestrator.addOutboundEdge(
      id,
      EdgeType.QuestionCommentToAuthors,
      NodeType.User,
      options,
    );
    return this;
  }

  removeAuthor(...ids: ID[]): QuestionCommentBuilder;
  removeAuthor(...nodes: User[]): QuestionCommentBuilder;
  removeAuthor(...nodes: ID[] | User[]): QuestionCommentBuilder {
    for (const node of nodes) {
      if (typeof node === "object") {
        this.orchestrator.removeOutboundEdge(
          node.id,
          EdgeType.QuestionCommentToAuthors,
        );
      } else {
        this.orchestrator.removeOutboundEdge(
          node,
          EdgeType.QuestionCommentToAuthors,
        );
      }
    }
    return this;
  }

  async build(): Promise<Changeset<QuestionComment>> {
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

  async editedEnt(): Promise<QuestionComment | null> {
    return await this.orchestrator.editedEnt();
  }

  async editedEntX(): Promise<QuestionComment> {
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
    addField("questionID", fields.questionID);
    if (fields.questionID) {
      this.orchestrator.addInboundEdge(
        fields.questionID,
        EdgeType.QuestionToComments,
        NodeType.Question,
      );
    }
    addField("authorID", fields.authorID);
    if (fields.authorID) {
      this.orchestrator.addInboundEdge(
        fields.authorID,
        EdgeType.UserToAuthoredQuestionComments,
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

  // get value of questionID. Retrieves it from the input if specified or takes it from existingEnt
  getNewQuestionIDValue(): ID | Builder<Question> | undefined {
    return this.input.questionID || this.existingEnt?.questionID;
  }

  // get value of authorID. Retrieves it from the input if specified or takes it from existingEnt
  getNewAuthorIDValue(): ID | Builder<User> | undefined {
    return this.input.authorID || this.existingEnt?.authorID;
  }
}