import TextInput from "@components/common/form/textinput";
import { DropdownOption } from "@components/common/form/dropdown";
import { useCallback, useState } from "react";
import { Button } from "@components/common/button";
import { HiOutlineTrash } from "react-icons/hi";

export const HostScreeningDropdownQuestion = () => {
  const [options, setOptions] = useState<DropdownOption[]>([
    { label: "", value: "" },
  ]);

  const addOption = useCallback(() => {
    setOptions((prev) => [...prev, { label: "", value: "" }]);
  }, []);

  const handleOptionChange = useCallback(
    (index: number, newOption: DropdownOption) => {
      setOptions((prevOptions) =>
        prevOptions.map((option, i) =>
          i === index
            ? { label: newOption.label, value: newOption.value }
            : option
        )
      );
    },
    []
  );

  const handleDeleteOption = useCallback((index: number) => {
    setOptions((prevOptions) => prevOptions.filter((_, i) => i !== index));
  }, []);

  return (
    <>
      {options.map((option, index) => {
        return (
          <_HostDropdownOptionField
            index={index}
            option={option}
            handleOptionChange={handleOptionChange}
            handleDeleteOption={handleDeleteOption}
          />
        );
      })}
      <Button
        className="self-start underline text-primary-text hover:text-primary"
        variant="link"
        onClick={addOption}
      >
        Add Option
      </Button>
    </>
  );
};

interface _HostDropdownOptionFieldProps {
  index: number;
  option: DropdownOption;
  handleOptionChange: (index: number, newOption: DropdownOption) => void;
  handleDeleteOption: (index: number) => void;
}

const _HostDropdownOptionField: React.FC<_HostDropdownOptionFieldProps> = ({
  index,
  option,
  handleOptionChange,
  handleDeleteOption,
}) => {
  return (
    <div className="flex items-center justify-center gap-5">
      <label>{index + 1}.</label>
      <TextInput
        placeholder={"Option"}
        value={option.value}
        handleInputChange={function (val: string): void {
          handleOptionChange(index, { label: val, value: val });
        }}
      />
      <Button variant="outline" onClick={() => handleDeleteOption(index)}>
        <HiOutlineTrash />
      </Button>
    </div>
  );
};

// For consistency with other screening questions
export const HostScreeningDropdownAdditionalActions: React.FC = () => {
  return <></>;
};
