import { Button } from "@/components/common/button";
import { Card, CardDescription, CardTitle } from "@components/common/card";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
} from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { DynamicQuestionCard, QuestionType } from "@/types/Question";
import HostScreeningQuestionCard from "../../host-question-cards/host-screening-question-card";

const HostCreateTeamFormStep4: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [dynamicQuestionCards, setDynamicQuestionCards] = useState<
    DynamicQuestionCard[]
  >([
    {
      id: 1,
      questionType: QuestionType.FILE_UPLOAD,
      options: [
        { label: "PDF", value: "pdf" },
        { label: "DOC", value: "doc" },
        { label: "PNG", value: "png" },
        { label: "JPEG", value: "jpeg" },
      ],
      isRequired: false,
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
        questionType: QuestionType.FILE_UPLOAD,
        options: [
          { label: "PDF", value: "pdf" },
          { label: "DOC", value: "doc" },
          { label: "PNG", value: "png" },
          { label: "JPEG", value: "jpeg" },
        ],
        isRequired: false,
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

  useEffect(() => {
    console.log(dynamicQuestionCards);
  }, [dynamicQuestionCards]);

  const handleDragStart = useCallback((event: DragStartEvent) => {
    const { active } = event;
    setActiveId(active.id as number);
  }, []);

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

      setActiveId(null);
    },
    [dynamicQuestionCards, getIndex]
  );

  return (
    <div className="flex flex-col gap-5">
      <Card isDraggable={false} className="px-5 py-8 text-start">
        <CardTitle className="py-4 text-h3">Document Upload</CardTitle>
        <CardDescription className="text-body-small text-secondary-text">
          Ask applicants to upload documents if needed, e.g. resume
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
            <SortableHostUploadDocumentQuestionCard
              key={dynamicQuestionCard.id}
              isDragging={activeId === dynamicQuestionCard.id}
              question={dynamicQuestionCard}
              onChangeQuestionHandler={handleChangeQuestionCard}
              onDeleteHandler={() =>
                handleDeleteQuestionCard(dynamicQuestionCard.id)
              }
              onShiftToTopHandler={() =>
                handleShiftToTop(dynamicQuestionCard.id)
              }
            />
          ))}
        </SortableContext>

        <DragOverlay>
          {activeId ? (
            <HostScreeningQuestionCard
              question={{
                id: activeId,
                questionType: QuestionType.FILE_UPLOAD,
                options: [
                  { label: "PDF", value: "pdf" },
                  { label: "DOC", value: "doc" },
                  { label: "PNG", value: "png" },
                  { label: "JPEG", value: "jpeg" },
                ],
                isRequired: true,
                question_order: 1,
              }}
              onShiftToTopHandler={() => {
                handleAddQuestionCard();
              }}
              onDeleteHandler={() => handleDeleteQuestionCard(activeId)}
              onChangeQuestionHandler={() => {}}
            />
          ) : null}
        </DragOverlay>
      </DndContext>

      <Button
        variant="outline"
        className="self-center bg-white px-9 border-neutral text-neutral max-w-min"
        onClick={handleAddQuestionCard}
      >
        Add Document Upload
      </Button>
      {dynamicQuestionCards.length === 0 && (
        <Button variant="link" className="text-body-regular text-neutral">
          I don't need documents
        </Button>
      )}
    </div>
  );
};

interface SortableItemProps {
  isDragging: boolean;
  question: DynamicQuestionCard;
  onChangeQuestionHandler: (question: DynamicQuestionCard) => void;
  onDeleteHandler: () => void;
  onShiftToTopHandler: () => void;
}

const SortableHostUploadDocumentQuestionCard: React.FC<SortableItemProps> = ({
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
        listeners={listeners}
        onChangeQuestionHandler={onChangeQuestionHandler}
        onShiftToTopHandler={onShiftToTopHandler}
        onDeleteHandler={onDeleteHandler}
      />
    </div>
  );
};

export default HostCreateTeamFormStep4;
