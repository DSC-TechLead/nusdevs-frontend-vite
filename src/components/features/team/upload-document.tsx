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
import { HiOutlineTrash } from "react-icons/hi";

const UploadDocument: ReactFCC = () => {
  const options = [
    { id: "pdf", title: "PDF" },
    { id: "pdf", title: "DOC" },
    { id: "pdf", title: "PNG" },
    { id: "pdf", title: "JPEG" },
  ];

  return (
    <Card isDraggable={true}>
      <CardHeader>
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
        <CardFooter className="flex justify-between">
          <HiOutlineTrash className="text-danger" size={20} />
          <Toggle
            status={false}
            onToggleChange={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default UploadDocument;
