import type { FC } from "react";
import CreateUploadDocument from "./features/team/host-question-cards/host-upload-document-question-card";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export interface CardProps {
  id: number | string;
  text: string;
  // moveCard: (dragIndex: number, hoverIndex: number) => void;
}

export const Card: FC<CardProps> = ({ id }) => {
  const { setNodeRef, listeners, transform, transition } = useSortable({ id });

  return (
    // <div
    //   ref={setNodeRef}
    //   className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow w-full"
    //   style={{
    //     transition: transition,
    //     transform: CSS.Translate.toString(transform),
    //   }}
    // >
    //   <div className="flex items-center px-4 py-5 sm:px-6">
    //     <div {...listeners} {...attributes}>
    //       <RiDraggable />
    //     </div>
    //     <div>
    //       {text}
    //     </div>
    //   </div>
    // </div>

    // <UploadDocument cardRef={cardRef} handleRef={handleRef} />

    <div
      style={{
        transition: transition,
        transform: CSS.Translate.toString(transform),
      }}
      className="touch-auto"
    >
      <CreateUploadDocument cardRef={setNodeRef} listeners={listeners} />
    </div>
  );
};
