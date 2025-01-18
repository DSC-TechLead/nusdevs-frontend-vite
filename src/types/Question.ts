export enum QuestionType {
  SHORT_ANSWER = 1,
  LONG_ANSWER = 2,
  DROPDOWN = 3,
  RADIOBUTTON = 4,
  CHECKBOX = 5,
  FILEU_PLOAD = 6,
}

export interface Option {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface Validation {
  required?: boolean;
}

export interface Question {
  questionId: string;
  formId: string;
  questionType: QuestionType;
  options?: Option[];
  isRequired: boolean;
  validation?: Validation;
  question_order: number;
}
