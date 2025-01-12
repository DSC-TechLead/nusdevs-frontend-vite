import { FormHeader } from "@components/formSections";
import FileUpload from "../common/form/fileupload";

const requiredDocuments = {
  resume: true,
  portfolio: true,
  cv: true,
};

const UploadDocument: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-start w-full max-h-full gap-3 overflow-auto no-scrollbar">
      <div className="w-full px-5 py-8 bg-white rounded-2xl">
        <FormHeader header="Upload Documents" />
      </div>
      {requiredDocuments.resume && <Resume />}
      {requiredDocuments.portfolio && <Portfolio />}
      {requiredDocuments.cv && <CV />}
    </div>
  );
};

const Resume: React.FC = () => {
  return (
    <div className="inline-flex flex-col w-full px-5 py-8 bg-white rounded-2xl gap-7">
      <FormHeader header="Resume" />
      <FileUpload />
    </div>
  );
};

const Portfolio: React.FC = () => {
  return (
    <>
      <div className="inline-flex flex-col w-full px-5 py-8 bg-white rounded-2xl gap-7">
        <FormHeader header="Portfolio" />
        <FileUpload />
      </div>
    </>
  );
};

const CV: React.FC = () => {
  return (
    <>
      <div className="inline-flex flex-col w-full px-5 py-8 bg-white rounded-2xl gap-7">
        <FormHeader header="CV" />
        <FileUpload />
        <FileUpload />
      </div>
    </>
  );
};

export default UploadDocument;
