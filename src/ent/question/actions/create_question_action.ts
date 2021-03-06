import {
  PrivacyPolicy,
  AllowIfViewerHasIdentityPrivacyPolicy,
} from "@snowtop/ent";

import {
  CreateQuestionActionBase,
  QuestionCreateInput,
} from "src/ent/question/actions/generated/create_question_action_base";

export { QuestionCreateInput };

export default class CreateQuestionAction extends CreateQuestionActionBase {
  getPrivacyPolicy(): PrivacyPolicy {
    return AllowIfViewerHasIdentityPrivacyPolicy;
  }
}
