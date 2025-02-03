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
import { DynamicQuestionCard, QuestionType } from "@/types/Question";

const HostCreateTeamFormStep5: React.FC = () => {
  const [activeQsn, setActiveQsn] = useState<DynamicQuestionCard | null>(null);
  const [dynamicQuestionCards, setDynamicQuestionCards] = useState<
    DynamicQuestionCard[]
  >([
    {
      id: 1,
      questionType: QuestionType.SHORT_ANSWER,
      isRequired: true,
      question_order: 1,
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
        questionType: QuestionType.SHORT_ANSWER,
        isRequired: true,
        question_order: 1,
      },
    ]);
  }, [dynamicQuestionCards]);

  const handleDeleteQuestionCard = useCallback((id: number) => {
    setDynamicQuestionCards((prev) => [
      ...prev.filter((dynamicQuestionCard) => dynamicQuestionCard.id !== id),
    ]);
  }, []);

  const handleChangeQuestionCard = useCallback(
    (changedQuestion: DynamicQuestionCard) => {
      // find the object then update it with respect to the index
      setDynamicQuestionCards((prev) =>
        prev.map((dynamicQuestionCard) =>
          dynamicQuestionCard.id !== changedQuestion.id
            ? { ...dynamicQuestionCard }
            : { ...changedQuestion }
        )
      );
    },
    []
  );

  const getIndex = useCallback((cards: DynamicQuestionCard[], id: string) => {
    let itemIndex: number | undefined;
    cards.forEach((card, index) => {
      if (card.id.toString() === id.toString()) {
        itemIndex = index;
      }
    });

    return itemIndex;
  }, []);

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
              isDragging={activeQsn?.id === dynamicQuestionCard.id}
              onDeleteHandler={function (): void {
                handleDeleteQuestionCard(dynamicQuestionCard.id);
              }}
              onShiftToTopHandler={function (): void {
                handleShiftToTop(dynamicQuestionCard.id);
              }}
              question={dynamicQuestionCard}
              onChangeQuestionHandler={handleChangeQuestionCard}
            />
          ))}
        </SortableContext>
        <DragOverlay>
          {activeQsn ? (
            <HostScreeningQuestionCard
              question={activeQsn}
              isQuestionDropdownEnabled={true}
              onShiftToTopHandler={() => {
                handleShiftToTop(activeQsn.id);
              }}
              onDeleteHandler={() => handleDeleteQuestionCard(activeQsn.id)}
              onChangeQuestionHandler={handleChangeQuestionCard}
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
  isDragging: boolean;
  question: DynamicQuestionCard;
  onChangeQuestionHandler: (question: DynamicQuestionCard) => void;
  onDeleteHandler: () => void;
  onShiftToTopHandler: () => void;
}

const SortableHostQuestionCard: React.FC<SortableHostQuestionCard> = ({
  isDragging = false,
  question,
  onChangeQuestionHandler,
  onDeleteHandler,
  onShiftToTopHandler,
}) => {
  const { setNodeRef, listeners, transform, transition } = useSortable({
    id: question.id,
  });

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
        onChangeQuestionHandler={onChangeQuestionHandler}
        onShiftToTopHandler={onShiftToTopHandler}
        onDeleteHandler={onDeleteHandler}
      />
    </div>
  );
};
