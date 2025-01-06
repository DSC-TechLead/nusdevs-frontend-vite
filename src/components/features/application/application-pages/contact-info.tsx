"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

import { FormHeader } from "@components/features/application/application-sections";

import TextButton from "@components/common/textbutton";
import TextInput from "@components/common/form/textinput";

const questions = [
  {
    question: "First Name",
    type: "Text Input Short",
    key: "firstName",
  },
  {
    question: "Last Name",
    type: "Text Input Short",
    key: "lastName",
  },
  {
    question: "Major",
    type: "Dropdown",
    key: "major",
  },
  {
    question: "Year of Study",
    type: "Dropdown",
    key: "year",
  },
  {
    question: "Phone Number",
    type: "Text Input Short",
    key: "phoneNumber",
  },
  {
    question: "School Email",
    type: "Text Input Short",
    key: "schoolEmail",
  },
  {
    question: "Telegram Handle",
    type: "Text Input Short",
    key: "telegram",
  },
];

interface ContactInfoProps {
  firstName?: string;
  lastName?: string;
  major?: string;
  year?: string;
  phoneNumber?: string;
  schoolEmail?: string;
  telegram?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  firstName = "Bob",
  lastName = "Bob",
  major = "CS",
  year = "1",
  phoneNumber = "12345678",
  schoolEmail = "bob@u.nus.edu",
  telegram = "@bob",
}) => {
  const [open, setOpen] = useState(false);
  const contactValues = {
    firstName,
    lastName,
    major,
    year,
    phoneNumber,
    schoolEmail,
    telegram,
  };

  return (
    <>
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

      <div className="w-full h-full px-5 py-8 bg-white rounded-2xl flex flex-col gap-7 overflow-auto ">
        <div className="flex items-center justify-between h4">
          <FormHeader header="Contact Information" />
          <button
            className="text-neutral hover:text-neutral-70 text-h5"
            onClick={() => setOpen(true)}
          >
            pencil
          </button>
        </div>
        <div className="w-full h-full flex-col gap-5 inline-flex">
          {questions.map((qn) => (
            <TextInput
              key={qn.key}
              label={qn.question}
              placeholder={
                contactValues[qn.key as keyof ContactInfoProps] || ""
              }
              description={""}
              textDisabled={true}
              enableCount={false}
              value={""}
              handleInputChange={() => {}}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ContactInfo;