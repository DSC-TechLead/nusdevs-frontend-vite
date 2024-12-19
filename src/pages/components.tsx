import React, { useState } from "react";
import IconButton from "../components/iconbutton";
import LinkButton from "../components/linkbutton";
import TextInput from "../components/textinput";
import TextButton from "../components/textbutton";
import FileUpload from "../components/fileupload";
import { FaPlus, FaShoppingCart } from "react-icons/fa";
import CheckSelect from "../components/checkSelect";

import SingleCheckSelect from "../components/singleCheck";
import RadioSelect from "../components/radioSelect";
import Dropdown from "../components/dropdown";
import Toggle from "../components/toggle";
import DateField from "../components/datefield";

const checkSelections = [
  {
    id: "C1",
    title: "Selection 1",
  },
  {
    id: "C2",
    title: "Selection 2",
  },
  {
    id: "C3",
    title: "Selection 3",
  },
];

const radioSelections = [
  {
    id: "R1",
    title: "Selection 1",
  },
  {
    id: "R2",
    title: "Selection 2",
  },
  {
    id: "R3",
    title: "Selection 3",
  },
];

const Components: React.FC = () => {
  const handleClick = () => {};

  const exampleSelections = [
    { id: "option1", title: "Option 1" },
    { id: "option2", title: "Option 2" },
    { id: "option3", title: "Option 3" },
  ];

  const handleSelectionChange = (selected: string[]) => {
    console.log("Selected options:", selected);
  };

  const [isChecked, setIsChecked] = useState(true);

  const handleSingleCheckChange = (status: boolean) => {
    setIsChecked(status);
  };

  return (
    <div className="p-4 space-y-4 ">
      <LinkButton text="Go to Google" href="https://www.google.com" />
      <TextButton text="Add Members" icon={<FaPlus />} onClick={handleClick} />
      <IconButton icon={<FaShoppingCart />} onClick={handleClick} />
      <TextInput
        placeholder="Enter text here"
        label="Short Input Example"
        description="Add Description Here"
        maxLength={50}
      />
      <TextInput
        placeholder="Enter text here"
        label="Long Input Example"
        description="Add Description Here"
        maxLength={200}
        height={5}
      />
      <FileUpload maxFileSizeMB={5} />
      <FileUpload maxFileSizeMB={5} disabled />
      <CheckSelect
        selectTitle="Checkbox Selection"
        onSelectionChange={() => {}}
        selections={checkSelections}
      />
      <RadioSelect
        selectTitle="Checkbox Selection"
        onSelectionChange={() => {}}
        selections={radioSelections}
      />
      <Dropdown label="Dropdown" description="This is a dropdown example" />
      <DateField
        label="Datefield"
        description="This is a datefield example"
        type="multi"
        onChange={() => {}}
      />
      <Toggle status={true} onToggleChange={() => {}} />
      <SingleCheckSelect
        selectTitle="test"
        selectDesc="test"
        isChecked={isChecked}
        onSelectionChange={handleSingleCheckChange}
        isDisabled={true}
      />
    </div>
  );
};

export default Components;
