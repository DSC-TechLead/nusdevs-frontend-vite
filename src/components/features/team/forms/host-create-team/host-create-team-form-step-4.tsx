import { Button } from "@/components/common/button";
import { Card, CardDescription, CardTitle } from "@components/common/card";
import HostUploadDocumentQuestionCard from "@components/features/team/host-question-cards/host-upload-document-question-card";

const HostCreateTeamFormStep4: React.FC = () => {
  return (
    <div className="flex flex-col gap-5">
      <Card isDraggable={false} className="px-5 py-8 text-start">
        <CardTitle className="py-4 text-h3">Document Upload</CardTitle>
        <CardDescription className="text-body-small text-secondary-text">
          Ask applicants to upload documents if needed, e.g. resume
        </CardDescription>
      </Card>
      <HostUploadDocumentQuestionCard />
      <Button
        variant="outline"
        className="self-center bg-white border-neutral-50 text-neutral-50 max-w-min"
      >
        Add Document Upload
      </Button>
    </div>
  );
};

export default HostCreateTeamFormStep4;
