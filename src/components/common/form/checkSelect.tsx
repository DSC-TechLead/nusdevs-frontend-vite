import React from "react";
import { IoIosSearch } from "react-icons/io";

interface CheckSelectProps {
  selectTitle?: string;
  selectDescription?: string;
  selections: { id: string; title: string }[];
  onSelectionChange: (selected: string[]) => void;
  currentSelections: string[];
  enableDivider?: boolean;
}

const CheckSelect: React.FC<CheckSelectProps> = ({
  selectTitle = "",
  selectDescription = "",
  selections,
  onSelectionChange,
  currentSelections,
  enableDivider = false,
}) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checkedId = event.target.id;
    if (event.target.checked) {
      onSelectionChange([...currentSelections, checkedId]);
    } else {
      onSelectionChange(currentSelections.filter((id) => id !== checkedId));
    }
  };

  return (
    <div className="mt-5 sm:mt-6 overflow-x-hidden overflow-y-auto">
      {selectTitle && (
        <p className="font-bold text-left text-body-regular text-primary-text">
          {selectTitle}
        </p>
      )}
      {selectDescription && (
        <p className="text-left text-body-small text-secondary-text">
          {selectDescription}
        </p>
      )}
      <div className={`${enableDivider ? "divide-y divide-solid" : ""}`}>
        <div className="flex flex-row justify-between items-center overflow-x-hidden">
          <p className="text-neutral">Select or Search a Category</p>
          <IoIosSearch className="text-neutral" />
        </div>
        <div
          className={`${enableDivider ? "divide-y divide-solid" : ""} w-screen`}
        >
          {selections.map((checkSelection) => (
            <div
              className="flex items-center gap-5 py-2"
              key={checkSelection.id}
            >
              <div className="flex items-center h-6 shrink-0">
                <div className="grid grid-cols-1 group size-4">
                  <input
                    id={checkSelection.id}
                    name="check-select"
                    type="checkbox"
                    checked={currentSelections.includes(checkSelection.id)}
                    onChange={(event) => handleCheckboxChange(event)}
                    className="col-start-1 row-start-1 bg-white border rounded appearance-none border-neutral-30 checked:border-primary checked:bg-primary indeterminate:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-6 focus-visible:outline-primary disabled:border-neutral disabled:bg-neutral-10 disabled:checked:bg-neutral-10 forced-colors:appearance-auto"
                  />
                  <svg
                    fill="none"
                    viewBox="0 0 14 14"
                    className="pointer-events-none col-start-1 row-start-1 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-neutral-80"
                  >
                    <path
                      d="M3 8L6 11L11 3.5"
                      strokeWidth={1}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-0 group-has-[:checked]:opacity-100"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex-grow text-body-regular">
                <label htmlFor={checkSelection.id}>
                  {checkSelection.title}
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CheckSelect;
