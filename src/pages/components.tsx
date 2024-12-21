import FileUpload from "@components/common/fileupload";
import IconButton from "@components/common/iconbutton";
import LinkButton from "@components/common/linkbutton";
import TextButton from "@components/common/textbutton";
import TextInput from "@components/common/textinput";
import UploadDocument from "@/components/features/team/upload-document";
import React from "react";

import { FaPlus, FaShoppingCart } from "react-icons/fa";

const Components: React.FC = () => {
  const handleClick = () => alert("Button clicked!");

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
      <UploadDocument />
    </div>
  );
};

export default Components;
