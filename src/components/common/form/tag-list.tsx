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
          className="flex items-center gap-4 px-3 py-1 ease-in-out text-primary rounded-full 
          bg-primary-20 hover:bg-primary-20 active:bg-primary-20 outline text-body-small"
        >
          <span>{tag.title}</span>
          <span onClick={() => handleClick(tag.id)}>
            <RxCross1 className="" />
          </span>
        </button>
      ))}
    </div>
  );
};

export default TagList;
