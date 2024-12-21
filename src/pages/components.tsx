import FileUpload from "@/components/common/form/fileupload";
import IconButton from "@components/common/iconbutton";
import LinkButton from "@components/common/linkbutton";
import TextButton from "@components/common/textbutton";
import TextInput from "@/components/common/form/textinput";
import HostUploadDocument from "@/components/features/team/upload-document";
import React from "react";

import { FaPlus, FaShoppingCart } from "react-icons/fa";
import CheckSelect from "@/components/common/form/checkSelect";
import RadioSelect from "@/components/common/form/radioSelect";
import Dropdown from "@/components/common/form/dropdown";
import DateField from "@/components/common/form/datefield";
import Toggle from "@/components/common/form/toggle";
import { Button } from "@/components/common/button";

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

  return (
    <div className="flex flex-col items-center p-4 space-y-4 bg-background">
      <Button variant="outline">
        <FaShoppingCart />
        Test
      </Button>
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
      <HostUploadDocument />
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
    </div>
  );
};

export default Components;
