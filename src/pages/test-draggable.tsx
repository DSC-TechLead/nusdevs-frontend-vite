import HostScreeningQuestionCard from "@/components/features/team/host-question-cards/host-screening-question-card";
import { Reorder } from "motion/react";
import { useState } from "react";

const DragTest: React.FC = () => {
  const [questions, setQuestions] = useState([1, 2, 3, 4, 5]);
  return (
    <div className="flex flex-col items-center p-4 space-y-4 bg-background">
      <Reorder.Group
        values={questions}
        onReorder={(e) => {
          setQuestions(e);
          console.log(e);
        }}
      >
        {questions.map((question) => {
          return (
            <Reorder.Item value={question} key={question}>
              <div>Q{question}</div>
              <HostScreeningQuestionCard />
            </Reorder.Item>
          );
        })}
      </Reorder.Group>
    </div>
  );
};

export default DragTest;
