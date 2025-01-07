import { FaPlus } from "react-icons/fa";
import TextButton from "./textbutton";
import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

const AddTags = ({}) => {
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
            className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl
            transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300
            data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6
            data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div>
              <div className="mt-3 text-center sm:mt-5">
                <DialogTitle as="h3" className="h4 text-primary-text">
                  Edit it on profile page?
                </DialogTitle>
                <div className="mt-2">
                  <p className="text-body-small text-secondary-text">
                    You can only edit your personal information there.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-6 flex justify-center gap-16">
              <button
                className="flex border items-center gap-2 px-4 py-2 text-secondary-text rounded-full bg-white border-neutral"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
              <TextButton text="Confirm" onClick={() => setOpen(false)} />
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
