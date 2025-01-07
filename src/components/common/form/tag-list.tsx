import React from "react";
import { RxCross1 } from "react-icons/rx";

interface TagListProps {
  text?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const TagList: React.FC<TagListProps> = ({
  text,
  icon,
  onClick,
  className,
}) => (
  <button
    onClick={onClick}
    className={`flex gap-4 px-4 py-2 ease-in-out text-primary rounded-full bg-primary-20 hover:bg-white active:bg-white outline ${className}`}
  >
    <span>test</span>
    <span className="relative top-2">
      <RxCross1 className="text-lg " />
    </span>
  </button>
);

export default TagList;
