import FileUpload from "@components/common/form/fileupload";
import IconButton from "@components/common/iconbutton";
import LinkButton from "@components/common/linkbutton";
import TextButton from "@components/common/textbutton";
import TextInput from "@components/common/form/textinput";
import HostUploadDocument from "@components/features/team/host-question-cards/host-upload-document-question-card";
import React from "react";

import { FaPlus, FaShoppingCart } from "react-icons/fa";
import CheckSelect from "@components/common/form/checkSelect";
import RadioSelect from "@components/common/form/radioSelect";
import DateField from "@components/common/form/datefield";
import Toggle from "@components/common/form/toggle";
import { Button } from "@components/common/button";
import CreateDropdownQuestion from "@components/features/team/host-question-cards/host-screening-question-card";

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
        value={""}
        handleInputChange={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <TextInput
        placeholder="Enter text here"
        label="Long Input Example"
        description="Add Description Here"
        maxLength={200}
        height={5}
        value={""}
        handleInputChange={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <FileUpload maxFileSizeMB={5} />
      <FileUpload maxFileSizeMB={5} disabled />
      <HostUploadDocument />
      <CreateDropdownQuestion />
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
      <DateField
        label="Single Datefield"
        description="This is a disabled single datefield example"
        type="single"
        onChange={() => {}}
        disabled={true}
      />
      <DateField
        label="Datefield"
        description="This is a multi datefield example"
        type="multi"
        onChange={() => {}}
      />
      <Toggle status={true} onToggleChange={() => {}} />
    </div>
  );
};

export default Components;
