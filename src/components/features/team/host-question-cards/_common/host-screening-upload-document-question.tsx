import { NewQuestion } from "@/types/Question";
import CheckSelect from "@/components/common/form/checkSelect";
import FileUpload from "@/components/common/form/fileupload";

interface HostScreeningUploadDocumentQuestionProps {
  question: NewQuestion;
}

export const HostScreeningUploadDocumentQuestion: React.FC<
  HostScreeningUploadDocumentQuestionProps
> = ({ question }) => {
  return (
    <>
      <CheckSelect
        selectTitle={"Accepted File Types*"}
        selections={question.options ?? []}
        onSelectionChange={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <FileUpload disabled />
    </>
  );
};
