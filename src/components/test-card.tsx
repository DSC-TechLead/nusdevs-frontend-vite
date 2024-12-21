import type { Identifier, XYCoord } from "dnd-core";
import { GripHorizontal } from "lucide-react";
import type { FC } from "react";
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import HostUploadDocument from "@/components/features/team/upload-document";

export interface CardProps {
  id: any;
  text: string;
  index: number;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
}

interface DragItem {
  index: number;
  id: string;
  type: string;
}

export const Card: FC<CardProps> = ({ id, text, index, moveCard }) => {
  const cardRef = useRef<HTMLDivElement>(null); // Card ref for drop
  const handleRef = useRef<HTMLDivElement>(null); // Handle ref for drag

  const [{ handlerId }, drop] = useDrop<
    DragItem,
    void,
    { handlerId: Identifier | null }
  >({
    accept: "card",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem, monitor) {
      if (!cardRef.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = cardRef.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag, preview] = useDrag({
    type: "card",
    item: () => ({ id, index }),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(handleRef); // Attach drag to handle
  preview(drop(cardRef)); // Attach drop and preview to card

  return (
    // <div
    //   ref={cardRef}
    //   className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow mb-4"
    // >
    //   <div className="flex justify-center px-4 py-5 sm:px-6">
    //     <div ref={handleRef}>
    //       <GripHorizontal />
    //     </div>
    //   </div>
    //   {text}
    // </div>
    <HostUploadDocument cardRef={cardRef} handleRef={handleRef} />
  );
};
