import { DropdownMenuItem } from "@/components/common/dropdown-menu";
import CheckSelect from "@/components/common/form/checkSelect";
import FileUpload from "@/components/common/form/fileupload";
import TextInput from "@/components/common/form/textinput";
import { useMemo, useState } from "react";
import HostQuestionCardRoot from "./_common/host-question-card-root";
import { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities";

interface HostUploadDocumentQuestionCardProps {
  children?: React.ReactNode;
  isHostMode?: boolean;
  cardRef?: (node: HTMLElement | null) => void;
  listeners?: SyntheticListenerMap;
}

const HostUploadDocumentQuestionCard: React.FC<
  HostUploadDocumentQuestionCardProps
> = ({ cardRef, listeners }) => {
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
    <HostQuestionCardRoot
      cardRef={cardRef}
      listeners={listeners}
      additionalHeaders={
        isDescriptionInputEnabled ? (
          <TextInput
            placeholder="Description"
            value={""}
            // TODO: input change
            handleInputChange={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        ) : (
          <></>
        )
      }
      additionalActions={
        <DropdownMenuItem
          handleClick={function (): void {
            setIsDescriptionInputEnabled((prev) => !prev);
          }}
        >
          {`${isDescriptionInputEnabled ? "Remove" : "Add"} Description`}
        </DropdownMenuItem>
      }
    >
      <CheckSelect
        selectTitle={"Accepted File Types*"}
        selections={options}
        onSelectionChange={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <FileUpload disabled />
    </HostQuestionCardRoot>
  );
};

export default HostUploadDocumentQuestionCard;
