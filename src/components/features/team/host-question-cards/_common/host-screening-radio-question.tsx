import { Button } from "@/components/common/button";
import { RadioElement } from "@/components/common/form/radioSelect";
import TextInput from "@/components/common/form/textinput";
import { useCallback, useState } from "react";
import { HiOutlineTrash } from "react-icons/hi2";
import { Option } from "@/types/Option";

export const HostScreeningRadioQuestion = () => {
  const [options, setOptions] = useState<Option[]>([
    { label: "", value: "" },
    { label: "", value: "" },
  ]);

  const [isOtherOptionEnabled, setIsOtherOptionEnabled] =
    useState<boolean>(false);

  const addOption = useCallback(() => {
    setOptions((prev) => [...prev, { label: "", value: "" }]);
  }, []);

  const handleOptionChange = useCallback((index: number, newOption: Option) => {
    setOptions((prevOptions) =>
      prevOptions.map((option, i) =>
        i === index
          ? { label: newOption.label, value: newOption.value }
          : option
      )
    );
  }, []);

  const handleDeleteOption = useCallback((index: number) => {
    setOptions((prevOptions) => prevOptions.filter((_, i) => i !== index));
  }, []);

  const handleEnableIsOtherOption = useCallback(
    () => setIsOtherOptionEnabled(true),
    []
  );

  const handleDisableIsOtherOption = useCallback(
    () => setIsOtherOptionEnabled(false),
    []
  );

  return (
    <>
      {options.map((option, index) => (
        <HostRadioOptionField
          key={index}
          index={index}
          option={option}
          isDeleteDisabled={options.length <= 2}
          handleOptionChange={handleOptionChange}
          handleDeleteOption={handleDeleteOption}
        />
      ))}
      {isOtherOptionEnabled && (
        <HostRadioOtherOptionField
          handleDeleteOption={handleDisableIsOtherOption}
        />
      )}

      <div className="flex items-center gap-3">
        <RadioElement disabled={true} className="size-5 disabled:bg-white" />
        <Button
          variant={"link"}
          className="text-black underline"
          onClick={addOption}
        >
          Add option
        </Button>
        {!isOtherOptionEnabled && (
          <>
            <span className="text-neutral">or</span>
            <Button
              variant={"link"}
              className="underline"
              onClick={handleEnableIsOtherOption}
            >
              Add 'other' option
            </Button>
          </>
        )}
      </div>
    </>
  );
};

interface HostRadioOptionFieldProps {
  index: number;
  option: Option;
  isDeleteDisabled: boolean;
  handleOptionChange: (index: number, newOption: Option) => void;
  handleDeleteOption: (index: number) => void;
}

const HostRadioOptionField: React.FC<HostRadioOptionFieldProps> = ({
  index,
  option,
  isDeleteDisabled,
  handleOptionChange,
  handleDeleteOption,
}) => {
  return (
    <div className="flex items-center justify-center gap-5">
      <RadioElement disabled={true} className="size-5 disabled:bg-white" />
      <TextInput
        placeholder={"Option"}
        value={option.value}
        handleInputChange={function (val: string): void {
          handleOptionChange(index, { label: val, value: val });
        }}
      />
      <Button
        variant="ghost"
        onClick={() => handleDeleteOption(index)}
        disabled={isDeleteDisabled}
      >
        <HiOutlineTrash className="text-primary" size={20} />
      </Button>
    </div>
  );
};

interface HostRadioOtherOptionFieldProps {
  handleDeleteOption: () => void;
}

const HostRadioOtherOptionField: React.FC<HostRadioOtherOptionFieldProps> = ({
  handleDeleteOption,
}) => {
  return (
    <div className="flex items-center justify-center gap-5">
      <RadioElement disabled={true} className="size-5 disabled:bg-white" />
      <div className="flex items-center gap-3">
        <span>Other:</span>
        <span className="h-5 w-14 border-b-[1px] border-neutral-30" />
      </div>
      <div className="flex-grow" />
      <Button variant="ghost" onClick={handleDeleteOption}>
        <HiOutlineTrash className="text-primary" size={20} />
      </Button>
    </div>
  );
};
