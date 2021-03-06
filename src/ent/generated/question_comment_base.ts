// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import {
  AllowIfViewerPrivacyPolicy,
  AssocEdge,
  Context,
  CustomQuery,
  Data,
  ID,
  LoadEntOptions,
  ObjectLoaderFactory,
  PrivacyPolicy,
  Viewer,
  convertDate,
  loadCustomData,
  loadCustomEnts,
  loadEnt,
  loadEntX,
  loadEnts,
} from "@snowtop/ent";
import { Field, getFields } from "@snowtop/ent/schema";
import {
  EdgeType,
  NodeType,
  Question,
  QuestionCommentToAuthorsQuery,
  User,
} from "src/ent/internal";
import schema from "src/schema/question_comment";

const tableName = "question_comments";
const fields = [
  "id",
  "created_at",
  "updated_at",
  "body",
  "question_id",
  "user_id",
];

export class QuestionCommentBase {
  readonly nodeType = NodeType.QuestionComment;
  readonly id: ID;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly body: string;
  readonly questionID: ID;
  readonly authorID: ID;

  constructor(public viewer: Viewer, data: Data) {
    this.id = data.id;
    this.createdAt = convertDate(data.created_at);
    this.updatedAt = convertDate(data.updated_at);
    this.body = data.body;
    this.questionID = data.question_id;
    this.authorID = data.user_id;
  }

  // default privacyPolicy is Viewer can see themselves
  privacyPolicy: PrivacyPolicy = AllowIfViewerPrivacyPolicy;

  static async load<T extends QuestionCommentBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    id: ID,
  ): Promise<T | null> {
    return loadEnt(viewer, id, QuestionCommentBase.loaderOptions.apply(this));
  }

  static async loadX<T extends QuestionCommentBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    id: ID,
  ): Promise<T> {
    return loadEntX(viewer, id, QuestionCommentBase.loaderOptions.apply(this));
  }

  static async loadMany<T extends QuestionCommentBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    ...ids: ID[]
  ): Promise<T[]> {
    return loadEnts(
      viewer,
      QuestionCommentBase.loaderOptions.apply(this),
      ...ids,
    );
  }

  static async loadCustom<T extends QuestionCommentBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    query: CustomQuery,
  ): Promise<T[]> {
    return loadCustomEnts(
      viewer,
      QuestionCommentBase.loaderOptions.apply(this),
      query,
    );
  }

  static async loadCustomData<T extends QuestionCommentBase>(
    this: new (viewer: Viewer, data: Data) => T,
    query: CustomQuery,
    context?: Context,
  ): Promise<Data[]> {
    return loadCustomData(
      QuestionCommentBase.loaderOptions.apply(this),
      query,
      context,
    );
  }

  static async loadRawData<T extends QuestionCommentBase>(
    this: new (viewer: Viewer, data: Data) => T,
    id: ID,
    context?: Context,
  ): Promise<Data | null> {
    return await questionCommentLoader.createLoader(context).load(id);
  }

  static async loadRawDataX<T extends QuestionCommentBase>(
    this: new (viewer: Viewer, data: Data) => T,
    id: ID,
    context?: Context,
  ): Promise<Data> {
    const row = await questionCommentLoader.createLoader(context).load(id);
    if (!row) {
      throw new Error(`couldn't load row for ${id}`);
    }
    return row;
  }

  static loaderOptions<T extends QuestionCommentBase>(
    this: new (viewer: Viewer, data: Data) => T,
  ): LoadEntOptions<T> {
    return {
      tableName: tableName,
      fields: fields,
      ent: this,
      loaderFactory: questionCommentLoader,
    };
  }

  private static schemaFields: Map<string, Field>;

  private static getSchemaFields(): Map<string, Field> {
    if (QuestionCommentBase.schemaFields != null) {
      return QuestionCommentBase.schemaFields;
    }
    return (QuestionCommentBase.schemaFields = getFields(schema));
  }

  static getField(key: string): Field | undefined {
    return QuestionCommentBase.getSchemaFields().get(key);
  }

  queryAuthors(): QuestionCommentToAuthorsQuery {
    return QuestionCommentToAuthorsQuery.query(this.viewer, this.id);
  }

  async loadAuthor(): Promise<User | null> {
    return loadEnt(this.viewer, this.authorID, User.loaderOptions());
  }

  loadAuthorX(): Promise<User> {
    return loadEntX(this.viewer, this.authorID, User.loaderOptions());
  }

  async loadQuestion(): Promise<Question | null> {
    return loadEnt(this.viewer, this.questionID, Question.loaderOptions());
  }

  loadQuestionX(): Promise<Question> {
    return loadEntX(this.viewer, this.questionID, Question.loaderOptions());
  }
}

export const questionCommentLoader = new ObjectLoaderFactory({
  tableName,
  fields,
  key: "id",
});
