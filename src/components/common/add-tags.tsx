import { FaPlus } from "react-icons/fa";
import TextButton from "./textbutton";
import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

import { IoCheckmarkSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import CheckSelect from "./form/checkSelect";

const AddTags = ({}) => {
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
    {
      id: "C6",
      title: "Selection 6",
    },
    {
      id: "C7",
      title: "Selection 7",
    },
    {
      id: "C8",
      title: "Selection 8",
    },
    {
      id: "C9",
      title: "Selection 9",
    },
    {
      id: "C10",
      title: "Selection 10",
    },
    {
      id: "C11",
      title: "Selection 11",
    },
    {
      id: "C12",
      title: "Selection 12",
    },
    {
      id: "C13",
      title: "Selection 13",
    },
    {
      id: "C14",
      title: "Selection 14",
    },
    {
      id: "C15",
      title: "Selection 15",
    },
    {
      id: "C16",
      title: "Selection 16",
    },
    {
      id: "C17",
      title: "Selection 17",
    },
    {
      id: "C18",
      title: "Selection 18",
    },
    {
      id: "C19",
      title: "Selection 19",
    },
    {
      id: "C20",
      title: "Selection 20",
    },
    {
      id: "C21",
      title: "Selection 21",
    },
    {
      id: "C22",
      title: "Selection 22",
    },
    {
      id: "C23",
      title: "Selection 23",
    },
    {
      id: "C24",
      title: "Selection 24",
    },
    {
      id: "C25",
      title: "Selection 25",
    },
    {
      id: "C26",
      title: "Selection 26",
    },
    {
      id: "C27",
      title: "Selection 27",
    },
    {
      id: "C28",
      title: "Selection 28",
    },
    {
      id: "C29",
      title: "Selection 29",
    },
    {
      id: "C30",
      title: "Selection 30",
    },
    {
      id: "C31",
      title: "Selection 31",
    },
    {
      id: "C32",
      title: "Selection 32",
    },
    {
      id: "C33",
      title: "Selection 33",
    },
    {
      id: "C34",
      title: "Selection 34",
    },
    {
      id: "C35",
      title: "Selection 35",
    },
    {
      id: "C36",
      title: "Selection 36",
    },
    {
      id: "C37",
      title: "Selection 37",
    },
    {
      id: "C38",
      title: "Selection 38",
    },
    {
      id: "C39",
      title: "Selection 39",
    },
    {
      id: "C40",
      title: "Selection 40",
    },
  ];

  const [open, setOpen] = useState(false);

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
            <div className="h-full flex flex-col justify-between">
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
              <div className="mt-5 sm:mt-6 flex gap-16 overflow-auto">
                <CheckSelect
                  onSelectionChange={() => {}}
                  selections={checkSelections}
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
