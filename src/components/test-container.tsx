import type { FC } from "react";
import { useCallback, useState } from "react";
import { Card } from "./test-card";
import { closestCenter, DndContext, DragEndEvent } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

export interface Item {
  id: number;
  text: string;
}

export interface ContainerState {
  cards: Item[];
}

export const Container: FC = () => {
  {
    const [cards, setCards] = useState([
      {
        id: 1,
        text: "Write a cool JS library",
      },
      {
        id: 2,
        text: "Make it generic enough",
      },
      {
        id: 3,
        text: "Write README",
      },
      {
        id: 4,
        text: "Create some examples",
      },
      {
        id: 5,
        text: "Spam in Twitter and IRC to promote it (note that this element is taller than the others)",
      },
      {
        id: 6,
        text: "???",
      },
      {
        id: 7,
        text: "PROFIT",
      },
    ]);

    const getIndex = (cards: Item[], id: string) => {
      let itemIndex: number | undefined;
      cards.forEach((card, index) => {
        if (card.id.toString() === id.toString()) {
          itemIndex = index;
        }
      });

      return itemIndex;
    };

    // 'active' is the element being dragged, and 'over' is the
    // element that is being dragged over.
    const handleDragEnd = ({ active, over }: DragEndEvent) => {
      if (over === null) {
        return;
      }

      const draggedItemId = active.id as string;
      const overItemId = over.id as string;
      const draggedItemIndex = getIndex(cards, draggedItemId);
      const overItemIndex = getIndex(cards, overItemId);

      if (draggedItemIndex === undefined || overItemIndex === undefined) {
        return;
      }

      const clonedCards = [...cards];
      const draggedItem = clonedCards.splice(draggedItemIndex, 1)[0];
      clonedCards.splice(overItemIndex, 0, draggedItem);
      setCards(clonedCards);
      console.log(clonedCards.map((card) => card.id));
    };

    // const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
    //   setCards((prevCards: Item[]) =>
    //     update(prevCards, {
    //       $splice: [
    //         [dragIndex, 1],
    //         [hoverIndex, 0, prevCards[dragIndex] as Item],
    //       ],
    //     })
    //   );
    // }, []);

    const renderCard = useCallback((card: { id: number; text: string }) => {
      return <Card key={card.id} id={card.id} text={card.text} />;
    }, []);

    return (
      <div className="flex flex-col items-center p-4 space-y-4 bg-background ">
        <DndContext
          onDragStart={() => {
            console.log();
          }}
          onDragEnd={handleDragEnd}
          collisionDetection={(args) => closestCenter(args)}
          autoScroll={{ layoutShiftCompensation: false }}
        >
          <SortableContext
            items={cards.map((card) => card.id)}
            strategy={verticalListSortingStrategy}
          >
            {cards.map((card, i) => renderCard(card, i))}
          </SortableContext>
        </DndContext>
      </div>
    );
  }
};
