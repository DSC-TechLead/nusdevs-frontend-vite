import { Button } from "@/components/common/button";
import { Card, CardDescription, CardTitle } from "@components/common/card";
import HostUploadDocumentQuestionCard from "@components/features/team/host-question-cards/host-upload-document-question-card";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useCallback, useState } from "react";

interface DynamicQuestionCardType {
  id: number;
  type: string;
}

const HostCreateTeamFormStep4: React.FC = () => {
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
      console.log("Before: ", clonedCards);
      const draggedItem = clonedCards.splice(draggedItemIndex, 1)[0];
      clonedCards.splice(overItemIndex, 0, draggedItem);
      console.log("After: ", clonedCards);
      setDynamicQuestionCards(clonedCards);
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
      <DndContext onDragEnd={handleDragEnd}>
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
            />
          ))}
        </SortableContext>
      </DndContext>

      <Button
        variant="outline"
        className="self-center bg-white px-9 border-neutral text-neutral max-w-min"
      >
        Add Document Upload
      </Button>
      <Button variant="link" className="text-body-regular text-neutral">
        I don't need documents
      </Button>
    </div>
  );
};

interface SortableItemProps {
  id: number;
}

const SortableHostUploadDocumentQuestionCard: React.FC<SortableItemProps> = ({
  id,
}) => {
  const { setNodeRef, listeners, transform, transition } = useSortable({ id });

  return (
    <div
      style={{
        transition: transition,
        transform: CSS.Translate.toString(transform),
      }}
      className="touch-auto"
    >
      <HostUploadDocumentQuestionCard
        cardRef={setNodeRef}
        listeners={listeners}
      />
    </div>
  );
};

export default HostCreateTeamFormStep4;
