import React from "react";
import IconButton from "../components/iconbutton";
import LinkButton from "../components/linkbutton";
import TextInput from "../components/textinput";
import TextButton from "../components/textbutton";
import FileUpload from "../components/fileupload";
import { FaPlus, FaShoppingCart } from "react-icons/fa";
import CheckSelect from "../components/checkSelect";

const Components: React.FC = () => {
  const handleClick = () => alert("Button clicked!");

  const exampleSelections = [
    { id: "option1", title: "Option 1" },
    { id: "option2", title: "Option 2" },
    { id: "option3", title: "Option 3" },
  ];

  const handleSelectionChange = (selected: string[]) => {
    console.log("Selected options:", selected);
  };

  return (
    <div className="p-4 space-y-4">
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
        selectTitle="Select Options"
        selections={exampleSelections}
        onSelectionChange={handleSelectionChange}
      />
    </div>
  );
};

export default Components;
