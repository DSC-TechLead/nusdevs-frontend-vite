import { Button } from "@components/common/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@components/common/card";
import { DropdownMenu } from "@components/common/dropdown-menu";
import Toggle from "@components/common/form/toggle";
import Divider from "@components/common/divider";
import TextInput from "@components/common/form/textinput";
import { HiEllipsisVertical, HiOutlineTrash } from "react-icons/hi2";
import { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities";
import { forwardRef } from "react";
import { DynamicQuestionCard } from "@/types/Question";

interface HostQuestionCardRootProps {
  children?: React.ReactNode;
  additionalHeaders?: React.ReactNode;
  additionalActions?: React.ReactNode;
  listeners?: SyntheticListenerMap;
  question: DynamicQuestionCard;
  onChangeQuestionHandler: (question: DynamicQuestionCard) => void;
  onDeleteHandler: () => void;
}

const HostQuestionCardRoot = forwardRef<
  HTMLDivElement,
  HostQuestionCardRootProps
>(
  (
    {
      children,
      additionalHeaders,
      additionalActions,
      listeners,
      question,
      onChangeQuestionHandler,
      onDeleteHandler,
      ...props
    },
    ref
  ) => {
    return (
      <Card
        className="w-full"
        isDraggable={true}
        listeners={listeners}
        ref={ref}
        {...props}
      >
        <CardHeader className="pt-0 pb-0">
          <TextInput
            value={question.title ?? ""}
            placeholder={"Enter question here"}
            handleInputChange={(val) =>
              onChangeQuestionHandler({ ...question, title: val })
            }
          />
          {additionalHeaders}
        </CardHeader>
        <div className="pt-4 pb-6 px-11">
          <Divider />
        </div>
        <CardContent className="flex flex-col gap-5">{children}</CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="ghost" size="icon">
            <HiOutlineTrash
              onClick={onDeleteHandler}
              className="text-primary"
              size={20}
            />
          </Button>

          <div className="flex items-center gap-3">
            <Toggle
              status={question.isRequired}
              onToggleChange={(val) =>
                onChangeQuestionHandler({ ...question, isRequired: val })
              }
            />
            <span className="text-body-regular">Required</span>
            <DropdownMenu
              defaultOpen={true}
              trigger={
                <Button variant="ghost" size="icon">
                  <HiEllipsisVertical
                    className="text-secondary-text"
                    size={20}
                  />
                </Button>
              }
            >
              {additionalActions}
            </DropdownMenu>
          </div>
        </CardFooter>
      </Card>
    );
  }
);

export default HostQuestionCardRoot;
