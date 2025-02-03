import { Option } from "@/types/Option";

export enum QuestionType {
  SHORT_ANSWER = 1,
  LONG_ANSWER = 2,
  DROPDOWN = 3,
  RADIOBUTTON = 4,
  CHECKBOX = 5,
  SINGLEDATE = 6,
  DATERANGE = 7,
  FILE_UPLOAD = 8,
}

export interface Validation {
  required?: boolean;
}

export interface Question {
  questionId: string;
  formId: string;
  questionType: QuestionType;
  title?: string;
  description?: string;
  options?: Option[];
  isRequired: boolean;
  validation?: Validation;
  question_order: number;
}

export type NewQuestion = Omit<Question, "questionId" | "formId">;

export type DynamicQuestionCard = { id: number } & NewQuestion;
