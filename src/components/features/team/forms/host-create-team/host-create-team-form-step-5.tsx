import { Card, CardDescription, CardTitle } from "@components/common/card";
import HostScreeningQuestionCard from "../../host-question-cards/host-screening-question-card";
import { Button } from "@/components/common/button";
import { HiPlus } from "react-icons/hi2";
import { useCallback, useState } from "react";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { cn } from "@/lib/utils";
import { CSS } from "@dnd-kit/utilities";
import { NewQuestion, QuestionType } from "@/types/Question";

interface DynamicQuestionCardType {
  id: number;
  question: NewQuestion;
}

const HostCreateTeamFormStep5: React.FC = () => {
  const [activeQsn, setActiveQsn] = useState<DynamicQuestionCardType | null>(
    null
  );
  const [dynamicQuestionCards, setDynamicQuestionCards] = useState<
    DynamicQuestionCardType[]
  >([
    {
      id: 1,
      question: {
        questionType: QuestionType.FILE_UPLOAD,
        options: [
          { label: "PDF", value: "pdf" },
          { label: "DOC", value: "doc" },
          { label: "PNG", value: "png" },
          { label: "JPEG", value: "jpeg" },
        ],
        isRequired: true,
        question_order: 1,
      },
    },
  ]);

  const handleAddQuestionCard = useCallback(() => {
    let nextId = 0;
    dynamicQuestionCards.forEach((dynamicQuestionCard) => {
      if (dynamicQuestionCard.id > nextId) {
        nextId = dynamicQuestionCard.id;
      }
    });

    setDynamicQuestionCards((prev) => [
      ...prev,
      {
        id: nextId + 1,
        question: {
          questionType: QuestionType.DROPDOWN,
          options: [],
          isRequired: true,
          question_order: 1,
        },
      },
    ]);
  }, [dynamicQuestionCards]);

  const handleDeleteQuestionCard = useCallback((id: number) => {
    setDynamicQuestionCards((prev) => [
      ...prev.filter((dynamicQuestionCard) => dynamicQuestionCard.id !== id),
    ]);
  }, []);

  const getIndex = useCallback(
    (cards: DynamicQuestionCardType[], id: string) => {
      let itemIndex: number | undefined;
      cards.forEach((card, index) => {
        if (card.id.toString() === id.toString()) {
          itemIndex = index;
        }
      });

      return itemIndex;
    },
    []
  );

  const handleShiftToTop = useCallback(
    (id: number) => {
      const updatedDynamicQuestionCards = [...dynamicQuestionCards];

      const itemToShiftIndex = updatedDynamicQuestionCards.findIndex(
        (dynamicQuestionCard) => dynamicQuestionCard.id === id
      );

      if (itemToShiftIndex === -1) {
        return;
      }

      const [item] = updatedDynamicQuestionCards.splice(itemToShiftIndex, 1);

      updatedDynamicQuestionCards.unshift(item);

      setDynamicQuestionCards(updatedDynamicQuestionCards);
    },
    [dynamicQuestionCards]
  );

  const handleDragStart = useCallback(
    (event: DragStartEvent) => {
      const { active } = event;
      const qsnDragged =
        dynamicQuestionCards.find((qsn) => qsn.id === active.id) ?? null;
      setActiveQsn(qsnDragged);
    },
    [dynamicQuestionCards]
  );

  const handleDragEnd = useCallback(
    ({ active, over }: DragEndEvent) => {
      if (over === null) {
        return;
      }

      const draggedItemId = active.id as string;
      const overItemId = over.id as string;
      const draggedItemIndex = getIndex(dynamicQuestionCards, draggedItemId);
      const overItemIndex = getIndex(dynamicQuestionCards, overItemId);

      if (draggedItemIndex === undefined || overItemIndex === undefined) {
        return;
      }

      const clonedCards = [...dynamicQuestionCards];
      const draggedItem = clonedCards.splice(draggedItemIndex, 1)[0];
      clonedCards.splice(overItemIndex, 0, draggedItem);
      setDynamicQuestionCards(clonedCards);

      setActiveQsn(null);
      console.log(dynamicQuestionCards);
    },
    [dynamicQuestionCards, getIndex]
  );

  return (
    <div className="flex flex-col gap-5">
      <Card isDraggable={false} className="px-5 py-8 text-start">
        <CardTitle className="py-4 text-h3">Screening Questions</CardTitle>
        <CardDescription className="text-body-small text-secondary-text">
          If you do not require screening questions, you can directly publish
          your team
        </CardDescription>
      </Card>
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <SortableContext
          items={dynamicQuestionCards.map(
            (dynamicQuestionCard) => dynamicQuestionCard.id
          )}
          strategy={verticalListSortingStrategy}
        >
          {dynamicQuestionCards.map((dynamicQuestionCard) => (
            <SortableHostQuestionCard
              key={dynamicQuestionCard.id}
              id={dynamicQuestionCard.id}
              isDragging={activeQsn?.id === dynamicQuestionCard.id}
              onDeleteHandler={function (): void {
                handleDeleteQuestionCard(dynamicQuestionCard.id);
              }}
              onShiftToTopHandler={function (): void {
                handleShiftToTop(dynamicQuestionCard.id);
              }}
              question={dynamicQuestionCard.question}
            />
          ))}
        </SortableContext>
        <DragOverlay>
          {activeQsn ? (
            <HostScreeningQuestionCard
              question={activeQsn.question}
              onShiftToTopHandler={() => {
                handleShiftToTop(activeQsn.id);
              }}
              onDeleteHandler={() => handleDeleteQuestionCard(activeQsn.id)}
            />
          ) : null}
        </DragOverlay>
      </DndContext>
      <Button
        className="bg-neutral"
        onClick={() => {
          alert("In development");
        }}
      >
        <HiPlus /> Add Suggested Question
      </Button>
      <Button
        variant="outline"
        className="bg-white border-neutral text-neutral"
        onClick={handleAddQuestionCard}
      >
        Add Question
      </Button>
    </div>
  );
};

export default HostCreateTeamFormStep5;

interface SortableHostQuestionCard {
  id: number;
  isDragging: boolean;
  question: NewQuestion;
  onDeleteHandler: () => void;
  onShiftToTopHandler: () => void;
}

const SortableHostQuestionCard: React.FC<SortableHostQuestionCard> = ({
  id,
  isDragging = false,
  question,
  onDeleteHandler,
  onShiftToTopHandler,
}) => {
  const { setNodeRef, listeners, transform, transition } = useSortable({ id });

  return (
    <div
      style={{
        transition,
        transform: CSS.Translate.toString(transform),
      }}
      className={cn("touch-auto", isDragging && "opacity-40")}
    >
      <HostScreeningQuestionCard
        ref={setNodeRef}
        question={question}
        isQuestionDropdownEnabled={true}
        listeners={listeners}
        onShiftToTopHandler={onShiftToTopHandler}
        onDeleteHandler={onDeleteHandler}
      />
    </div>
  );
};
