import { useState } from "react";

interface CheckSelectProps {
  selectTitle: string;
  selections: { id: string; title: string }[];
  onSelectionChange: (selected: string[]) => void;
}

const CheckSelect: React.FC<CheckSelectProps> = ({
  selectTitle,
  selections,
  onSelectionChange,
}) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checkedId = event.target.id;
    if (event.target.checked) {
      setSelectedIds([...selectedIds, checkedId]);
      onSelectionChange([...selectedIds, checkedId]);
    } else {
      setSelectedIds(selectedIds.filter((id) => id !== checkedId));
      onSelectionChange(selectedIds.filter((id) => id !== checkedId));
    }
  };

  return (
    <fieldset>
      <legend className="text-left text-sm/6 font-semibold text-gray-900">
        {selectTitle}
      </legend>
      <p className="text-left text-sm/6 text-gray-600">Description</p>
      <div className="mt-2 space-y-1">
        {selections.map((checkSelection) => (
          <div className="flex gap-3" key={checkSelection.id}>
            <div className="flex h-6 shrink-0 items-center">
              <div className="group grid size-4 grid-cols-1">
                <input
                  id={checkSelection.id}
                  name="check-select"
                  type="checkbox"
                  checked={selectedIds.includes(checkSelection.id)}
                  onChange={(event) => handleCheckboxChange(event)}
                  className="col-start-1 row-start-1 appearance-none rounded border 
                  border-gray-300 bg-white checked:border-[#EB5E27] 
                  checked:bg-[#EB5E27] indeterminate:border-[#EB5E27] focus-visible:outline 
                  focus-visible:outline-2 focus-visible:outline-offset-2 
                  focus-visible:outline-i[#EB5E27] disabled:border-gray-300 
                  disabled:bg-gray-100 disabled:checked:bg-gray-100 
                  forced-colors:appearance-auto"
                />
                <svg
                  fill="none"
                  viewBox="0 0 14 14"
                  className="pointer-events-none col-start-1 row-start-1 size-3.5 
                  self-center justify-self-center stroke-white 
                  group-has-[:disabled]:stroke-gray-950/25"
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
            <div className="text-sm/6">
              <label
                htmlFor={checkSelection.id}
                className="font-medium text-gray-900"
              >
                {checkSelection.title}
              </label>
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  );
};

export default CheckSelect;
