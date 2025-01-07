import React from "react";
import { RxCross1 } from "react-icons/rx";

interface TagListProps {
  tags: { id: string; title: string }[];
  onTagsChange: (id: string) => void;
}

const TagList: React.FC<TagListProps> = ({ tags, onTagsChange }) => {
  const handleClick = (id: string) => {
    onTagsChange(id);
  };

  return (
    <div className="flex flex-wrap gap-4">
      {tags.map((tag) => (
        <button
          key={tag.id}
          onClick={() => handleClick(tag.id)}
          className="flex items-center gap-4 px-3 py-1 ease-in-out text-primary rounded-full bg-primary-20 hover:bg-white active:bg-white outline text-body-small"
        >
          <span>{tag.title}</span>
          <span className="relative ">
            <RxCross1 className="" />
          </span>
        </button>
      ))}
    </div>
  );
};

export default TagList;
