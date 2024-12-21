import HostQuestionCardRoot from "./_common/host-question-card-root";
import { ScreeningQuestionType } from "@/types/Question";
import { useMemo, useState } from "react";
import {
  HostScreeningDropdownAdditionalActions,
  HostScreeningDropdownQuestion,
} from "./_common/host-screening-dropdown-question";
import Dropdown from "@components/common/form/dropdown";

const HostScreeningQuestionCard: React.FC = () => {
  const [questionType, setQuestionType] = useState<string>(
    ScreeningQuestionType.DROPDOWN
  );

  const questionContent = useMemo(() => {
    switch (questionType) {
      case ScreeningQuestionType.DROPDOWN:
        return <HostScreeningDropdownQuestion />;
      default:
        return <></>;
    }
  }, [questionType]);

  const actions = useMemo(() => {
    switch (questionType) {
      case ScreeningQuestionType.DROPDOWN:
        return <HostScreeningDropdownAdditionalActions />;
      default:
        return <></>;
    }
  }, [questionType]);

  return (
    <HostQuestionCardRoot additionalActions={actions}>
      <div className="flex items-center gap-4">
        <label className="font-bold text-body-regular text-nowrap">
          Question Type
        </label>
        <Dropdown
          label={""}
          description={""}
          handleChange={(val) => setQuestionType(val.value)}
          options={[
            { label: "Dropdown", value: ScreeningQuestionType.DROPDOWN },
            { label: "Test Invalid", value: "non existent type" }, // test
          ]}
        />
      </div>
      {questionContent}
    </HostQuestionCardRoot>
  );
};

export default HostScreeningQuestionCard;
