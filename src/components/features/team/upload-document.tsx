import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/common/card";
import CheckSelect from "@/components/common/checkSelect";
import FileUpload from "@/components/common/fileupload";
import TextInput from "@/components/common/textinput";
import Toggle from "@/components/common/toggle";
import { ReactFCC } from "@/types/react";
import { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";

const UploadDocument: ReactFCC = () => {
  const options = [
    { id: "pdf", title: "PDF" },
    { id: "pdf", title: "DOC" },
    { id: "pdf", title: "PNG" },
    { id: "pdf", title: "JPEG" },
  ];

  const [isDescriptionInputEnabled, setIsDescriptionInputEnabled] =
    useState<boolean>(false);

  return (
    <Card isDraggable={true}>
      <CardHeader className="pt-0">
        <TextInput placeholder={""} />
      </CardHeader>

      <CardContent className="flex flex-col gap-5">
        <CheckSelect
          selectTitle={"Accepted File Types*"}
          selections={options}
          onSelectionChange={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <FileUpload disabled />
      </CardContent>
      <CardFooter className="flex justify-between">
        <HiOutlineTrash className="text-danger" size={20} />
        <div className="flex items-center gap-3">
          <Toggle
            status={false}
            onToggleChange={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
          <span className="text-body-regular">Required</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default UploadDocument;
