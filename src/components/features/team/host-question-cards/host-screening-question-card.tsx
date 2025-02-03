import HostQuestionCardRoot from "./_common/host-question-card-root";
import { NewQuestion, QuestionType } from "@/types/Question";
import { forwardRef, useMemo, useState } from "react";
import { HostScreeningDropdownQuestion } from "./_common/host-screening-dropdown-question";
import Dropdown from "@components/common/form/dropdown";
import { DropdownMenuItem } from "@/components/common/dropdown-menu";
import TextInput from "@/components/common/form/textinput";
import { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities";
import { HostScreeningUploadDocumentQuestion } from "./_common/host-screening-upload-document-question";
import HostScreeningShortQuestion from "./_common/host-screening-short-question";
import HostScreeningLongQuestion from "./_common/host-screening-long-question";
import { HostScreeningRadioQuestion } from "./_common/host-screening-radio-question";
import { HostScreeningCheckQuestion } from "./_common/host-screening-checkbox-question";
import HostScreeningSingleDateQuestion from "./_common/host-screening-single-date-question";
import HostScreeningDateRangeQuestion from "./_common/host-screening-date-range-question";

export interface HostScreeningQuestionProps {
  isQuestionDropdownEnabled?: boolean;
  question: NewQuestion;
  listeners?: SyntheticListenerMap;
  onDeleteHandler: () => void;
  onShiftToTopHandler: () => void;
}

const HostScreeningQuestionCard = forwardRef<
  HTMLDivElement,
  HostScreeningQuestionProps
>(
  (
    {
      isQuestionDropdownEnabled = false,
      question,
      listeners,
      onShiftToTopHandler,
      onDeleteHandler,
    },
    ref
  ) => {
    const [isDescriptionInputEnabled, setIsDescriptionInputEnabled] =
      useState<boolean>(false);

    const [questionType, setQuestionType] = useState<QuestionType>(
      question.questionType
    );

    const questionContent = useMemo(() => {
      switch (questionType) {
        case QuestionType.SHORT_ANSWER:
          return <HostScreeningShortQuestion />;
        case QuestionType.LONG_ANSWER:
          return <HostScreeningLongQuestion />;
        case QuestionType.DROPDOWN:
          return <HostScreeningDropdownQuestion />;
        case QuestionType.RADIOBUTTON:
          return <HostScreeningRadioQuestion />;
        case QuestionType.CHECKBOX:
          return <HostScreeningCheckQuestion />;
        case QuestionType.SINGLEDATE:
          return <HostScreeningSingleDateQuestion />;
        case QuestionType.DATERANGE:
          return <HostScreeningDateRangeQuestion />;
        case QuestionType.FILE_UPLOAD:
          return <HostScreeningUploadDocumentQuestion question={question} />;
        default:
          return <></>;
      }
    }, [question, questionType]);

    return (
      <HostQuestionCardRoot
        ref={ref}
        listeners={listeners}
        additionalHeaders={
          isDescriptionInputEnabled ? (
            <TextInput
              placeholder="Description"
              value={""}
              // TODO: input change
              handleInputChange={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          ) : (
            <></>
          )
        }
        additionalActions={
          <>
            <DropdownMenuItem
              handleClick={function (): void {
                setIsDescriptionInputEnabled((prev) => !prev);
              }}
            >
              {`${isDescriptionInputEnabled ? "Remove" : "Add"} Description`}
            </DropdownMenuItem>
            <DropdownMenuItem handleClick={onShiftToTopHandler}>
              Shift to Top
            </DropdownMenuItem>
          </>
        }
        onDeleteHandler={onDeleteHandler}
      >
        {isQuestionDropdownEnabled && (
          <div className="flex items-center gap-4">
            <label className="font-bold text-body-regular text-nowrap">
              Question Type
            </label>
            <Dropdown
              label={""}
              description={""}
              value={questionType}
              handleChange={(val) => setQuestionType(val.value)}
              options={[
                { label: "Short Answer", value: QuestionType.SHORT_ANSWER },
                { label: "Long Answer", value: QuestionType.LONG_ANSWER },
                { label: "Dropdown", value: QuestionType.DROPDOWN },
                { label: "Radio Button", value: QuestionType.RADIOBUTTON },
                { label: "Checkbox", value: QuestionType.CHECKBOX },
                { label: "Single Date", value: QuestionType.SINGLEDATE },
                { label: "Start & End Date", value: QuestionType.DATERANGE },
                // TODO: add the rest
              ]}
            />
          </div>
        )}

        {questionContent}
      </HostQuestionCardRoot>
    );
  }
);

export default HostScreeningQuestionCard;
