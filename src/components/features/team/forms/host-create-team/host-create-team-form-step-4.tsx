import { Button } from "@/components/common/button";
import { Card, CardDescription, CardTitle } from "@components/common/card";
import HostUploadDocumentQuestionCard from "@components/features/team/host-question-cards/host-upload-document-question-card";
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

interface DynamicQuestionCardType {
  id: number;
  type: string;
}

const HostCreateTeamFormStep4: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [dynamicQuestionCards, setDynamicQuestionCards] = useState<
    DynamicQuestionCardType[]
  >([
    {
      id: 1,
      type: "document_upload",
    },
    {
      id: 2,
      type: "document_upload",
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
      { id: nextId + 1, type: "document_upload" },
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
              id={dynamicQuestionCard.id}
              isDragging={activeId === dynamicQuestionCard.id}
              onDeleteHandler={() =>
                handleDeleteQuestionCard(dynamicQuestionCard.id)
              }
            />
          ))}
        </SortableContext>

        <DragOverlay>
          {activeId ? (
            <HostUploadDocumentQuestionCard
              onDeleteHandler={() => handleDeleteQuestionCard(activeId)}
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
  id: number;
  isDragging: boolean;
  onDeleteHandler: () => void;
}

const SortableHostUploadDocumentQuestionCard: React.FC<SortableItemProps> = ({
  id,
  isDragging = false,
  onDeleteHandler,
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
      <HostUploadDocumentQuestionCard
        ref={setNodeRef}
        listeners={listeners}
        onDeleteHandler={onDeleteHandler}
      />
    </div>
  );
};

export default HostCreateTeamFormStep4;
