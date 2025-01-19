import { Option } from "@/types/Option";

export enum QuestionType {
  SHORT_ANSWER = 1,
  LONG_ANSWER = 2,
  DROPDOWN = 3,
  RADIOBUTTON = 4,
  CHECKBOX = 5,
  FILE_UPLOAD = 6,
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

export type NewQuestion = Omit<Question, "questionId" | "formId">;
