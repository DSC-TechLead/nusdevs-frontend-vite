import { Button } from "@/components/common/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/common/card";
import Divider from "@/components/common/divider";
import {
  DropdownMenu,
  DropdownMenuItem,
} from "@/components/common/dropdown-menu";
import Dropdown, { DropdownOption } from "@/components/common/form/dropdown";
import TextInput from "@/components/common/form/textinput";
import Toggle from "@/components/common/form/toggle";
import { useCallback, useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { HiEllipsisVertical } from "react-icons/hi2";

const CreateDropdownQuestion: React.FC = () => {
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
    <Card className="w-full" isDraggable={true}>
      <CardHeader className="pt-0 pb-0">
        <TextInput
          value={""}
          placeholder={"Enter question here"}
          // TODO: input change
          handleInputChange={() => {}}
        />
      </CardHeader>
      <div className="pb-6 px-11">
        <Divider />
      </div>
      <CardContent className="flex flex-col gap-5">
        <div className="flex items-center gap-4">
          <label className="font-bold text-body-regular text-nowrap">
            Question Type
          </label>
          <Dropdown
            label={""}
            description={""}
            options={[{ label: "Dropdown", value: "dropdown" }]}
          />
        </div>
        {options.map((option, index) => {
          return (
            <_CreateDropdownOptionField
              index={index}
              option={option}
              handleOptionChange={handleOptionChange}
              handleDeleteOption={handleDeleteOption}
            />
          );
        })}
        <Button
          className="self-start text-primary-text underline hover:text-primary"
          variant="link"
          onClick={addOption}
        >
          Add Option
        </Button>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost" size="icon">
          <HiOutlineTrash className="text-danger" size={20} />
        </Button>

        <div className="flex items-center gap-3">
          <Toggle
            status={false}
            onToggleChange={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
          <span className="text-body-regular">Required</span>
          <DropdownMenu
            defaultOpen={true}
            trigger={
              <Button variant="ghost" size="icon">
                <HiEllipsisVertical className="text-secondary-text" size={20} />
              </Button>
            }
          >
            <DropdownMenuItem
              // TODO: delete question function
              handleClick={function (): void {
                alert("Delete Question");
              }}
            >
              Delete Question
            </DropdownMenuItem>
          </DropdownMenu>
        </div>
      </CardFooter>
    </Card>
  );
};

interface CreateDropdownOptionFieldProps {
  index: number;
  option: DropdownOption;
  handleOptionChange: (index: number, newOption: DropdownOption) => void;
  handleDeleteOption: (index: number) => void;
}

const _CreateDropdownOptionField: React.FC<CreateDropdownOptionFieldProps> = ({
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

export default CreateDropdownQuestion;
