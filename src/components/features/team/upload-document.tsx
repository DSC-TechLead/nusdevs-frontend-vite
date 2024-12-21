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
import CheckSelect from "@/components/common/form/checkSelect";
import FileUpload from "@/components/common/form/fileupload";
import TextInput from "@/components/common/form/textinput";
import Toggle from "@/components/common/form/toggle";
import { ReactFCC } from "@/types/react";
import { useMemo, useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { HiEllipsisVertical } from "react-icons/hi2";

interface UploadDocumentProps {
  isHostMode?: boolean;
}

const UploadDocument: ReactFCC<UploadDocumentProps> = () => {
  const options = useMemo(
    () => [
      { id: "pdf", title: "PDF" },
      { id: "doc", title: "DOC" },
      { id: "png", title: "PNG" },
      { id: "jpeg", title: "JPEG" },
    ],
    []
  );

  const [isDescriptionInputEnabled, setIsDescriptionInputEnabled] =
    useState<boolean>(false);

  return (
    <Card isDraggable={true}>
      <CardHeader className="pt-0 pb-0">
        <TextInput placeholder={"Upload your resume"} />
        {isDescriptionInputEnabled && <TextInput placeholder="Description" />}
      </CardHeader>
      <div className="px-11 pb-6">
        <Divider />
      </div>
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
              handleClick={function (): void {
                setIsDescriptionInputEnabled((prev) => !prev);
              }}
            >
              {`${isDescriptionInputEnabled ? "Remove" : "Add"} Description`}
            </DropdownMenuItem>
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

export default UploadDocument;
