import { FaPlus } from "react-icons/fa";
import TextButton from "../textbutton";
import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

import { IoCheckmarkSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import CheckSelect from "./checkSelect";
import TagList from "./tag-list";

const checkSelections = [
  {
    id: "C1",
    title: "Selection 1",
  },
  {
    id: "C2",
    title: "Selection 2",
  },
  {
    id: "C3",
    title: "Selection 3",
  },
  {
    id: "C4",
    title: "Selection 4",
  },
  {
    id: "C5",
    title: "Selection 5",
  },
];

const AddTags = ({}) => {
  const [open, setOpen] = useState(false);
  const [tags, setTags] = useState<string[]>(["C1"]);

  const onTagsChange = (selectedTags: string[]) => {
    setTags(selectedTags);
  };

  const onTagsDelete = (tagId: string) => {
    setTags(tags.filter((id) => id !== tagId));
  };

  return (
    <div>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-neutral transition-opacity data-[closed]:opacity-0
      data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 flex items-center justify-center">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white px-4 py-4 text-left shadow-xl
        transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300
        data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in w-full h-full sm:w-full sm:h-full sm:max-w-none sm:p-6
        data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="h-full flex flex-col">
              <div className="flex flex-row mt-3 text-center sm:mt-5 justify-between items-center">
                <button className="flex items-center justify-center w-11 h-11 ease-in-out outline-none cursor-pointer">
                  <span className="text-lg">
                    <RxCross1
                      onClick={() => {
                        setOpen(false);
                      }}
                    />
                  </span>
                </button>
                <DialogTitle as="h3" className="h4 text-primary-text">
                  Tags
                </DialogTitle>
                <button className="flex items-center justify-center w-11 h-11 ease-in-out outline-none cursor-pointer">
                  <span className="text-lg">
                    <IoCheckmarkSharp
                      onClick={() => {
                        setOpen(false);
                      }}
                    />
                  </span>
                </button>
              </div>
              <div className="flex flex-wrap">
                <TagList
                  tags={checkSelections.filter((item) => {
                    return tags.includes(item.id);
                  })}
                  onTagsChange={onTagsDelete}
                />
              </div>
              <div className="mt-5 sm:mt-6 flex gap-16 overflow-auto">
                <CheckSelect
                  onSelectionChange={onTagsChange}
                  selections={checkSelections}
                  currentSelections={tags}
                />
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <div className="flex justify-start">
        <TextButton
          text="Add Tags"
          icon={<FaPlus />}
          onClick={() => {
            setOpen(!open);
          }}
          className=""
        />
      </div>
    </div>
  );
};

export default AddTags;
