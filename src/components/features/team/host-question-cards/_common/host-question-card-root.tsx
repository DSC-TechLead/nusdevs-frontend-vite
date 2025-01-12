import { Button } from "@components/common/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@components/common/card";
import {
  DropdownMenu,
  DropdownMenuItem,
} from "@components/common/dropdown-menu";
import Toggle from "@components/common/form/toggle";
import Divider from "@components/common/divider";
import TextInput from "@components/common/form/textinput";
import { HiEllipsisVertical, HiOutlineTrash } from "react-icons/hi2";
import { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities";

interface HostQuestionCardRootProps {
  children?: React.ReactNode;
  additionalHeaders?: React.ReactNode;
  additionalActions?: React.ReactNode;
  cardRef?: (node: HTMLElement | null) => void;
  listeners?: SyntheticListenerMap;
}

const HostQuestionCardRoot: React.FC<HostQuestionCardRootProps> = ({
  children,
  additionalHeaders,
  additionalActions,
  cardRef,
  listeners,
}) => {
  return (
    <Card
      className="w-full"
      isDraggable={true}
      cardRef={cardRef}
      listeners={listeners}
    >
      <CardHeader className="pt-0 pb-0">
        <TextInput
          value={""}
          placeholder={"Enter question here"}
          // TODO: input change
          handleInputChange={() => {}}
        />
        {additionalHeaders}
      </CardHeader>
      <div className="pb-6 px-11">
        <Divider />
      </div>
      <CardContent className="flex flex-col gap-5">{children}</CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost" size="icon">
          <HiOutlineTrash className="text-danger" size={20} />
        </Button>

        <div className="flex items-center gap-3">
          <Toggle status={false} onToggleChange={() => {}} />
          <span className="text-body-regular">Required</span>
          <DropdownMenu
            defaultOpen={true}
            trigger={
              <Button variant="ghost" size="icon">
                <HiEllipsisVertical className="text-secondary-text" size={20} />
              </Button>
            }
          >
            {additionalActions}
            <DropdownMenuItem
              // TODO: delete question function
              handleClick={function (): void {
                alert("Delete Question");
              }}
            >
              Delete Question
            </DropdownMenuItem>
          </DropdownMenu>
        </div>
      </CardFooter>
    </Card>
  );
};

export default HostQuestionCardRoot;
