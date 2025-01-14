import { Card, CardDescription, CardTitle } from "@components/common/card";
import { DndContext } from "@dnd-kit/core";
import HostScreeningQuestionCard from "../../host-question-cards/host-screening-question-card";
import { Button } from "@/components/common/button";
import { HiPlus } from "react-icons/hi2";

const HostCreateTeamFormStep5: React.FC = () => {
  return (
    <div className="flex flex-col gap-5">
      <Card isDraggable={false} className="px-5 py-8 text-start">
        <CardTitle className="py-4 text-h3">Screening Questions</CardTitle>
        <CardDescription className="text-body-small text-secondary-text">
          If you do not require screening questions, you can directly publish
          your team
        </CardDescription>
      </Card>
      <HostScreeningQuestionCard />
      <Button className="bg-neutral">
        <HiPlus /> Add Suggested Question
      </Button>
      <Button
        variant="outline"
        className="bg-white border-neutral text-neutral"
      >
        Add Question
      </Button>
    </div>
  );
};

export default HostCreateTeamFormStep5;
