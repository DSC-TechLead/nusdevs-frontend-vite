import { FormHeader } from "@components/formSections";
import CheckSelect from "../common/form/checkSelect";
import DateField from "../common/form/datefield";
import TextInput from "../common/form/textinput";
import { useState } from "react";
import Dropdown from "../common/form/dropdown";

// TODO: add dummy questions similar to in contactInfo.tsx based on Ivy's examples

const ScreeningQuestions: React.FC = () => {
  const [A3, setA3] = useState("");
  const [A5, setA5] = useState("");

  const Q1 = [
    { id: "role-1", title: "Role 1" },
    { id: "role-2", title: "Role 2" },
    { id: "role-3", title: "Role 3" },
  ];
  const Q4 = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];
  return (
    <div className="inline-flex flex-col w-full px-5 py-8 overflow-auto bg-white rounded-2xl gap-7 no-scrollbar">
      <FormHeader header="Screening Questions" subtitle="*Required" />
      <div className="inline-flex flex-col w-full h-full gap-5">
        <CheckSelect
          selectTitle="Which role are you applying for?"
          description="You can pick more than one"
          selections={Q1}
          onSelectionChange={() => {}}
        />
        <DateField
          label="Please indicate your availability"
          type="multi"
          onChange={() => {}}
        />
        <TextInput
          label="Do you have experience with Java?*"
          placeholder="Please describe your experience"
          value={A3}
          handleInputChange={setA3}
          height={5}
          maxLength={200}
          enableCount={true}
        />
        <Dropdown
          label="What is your commitment level?"
          options={Q4}
          handleChange={() => {}}
        />
        <TextInput
          label="What other commitments do you have?"
          placeholder="E.g. NUS CCA (semester-long)"
          value={A5}
          handleInputChange={setA5}
          maxLength={50}
          enableCount={true}
        />
      </div>
    </div>
  );
};

export default ScreeningQuestions;
