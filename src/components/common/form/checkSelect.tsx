import { cn } from "@/lib/utils";
import { Option } from "@/types/Option";
import { forwardRef, InputHTMLAttributes, useEffect, useState } from "react";

interface CheckSelectProps {
  selectTitle: string;
  selections: Option[];
  onSelectionChange: (selected: string[]) => void;
}

const CheckSelect: React.FC<CheckSelectProps> = ({
  selectTitle,
  selections,
  onSelectionChange,
}) => {
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => console.log(selected), [selected]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCheckedOptionVal = event.target.id;
    if (event.target.checked) {
      setSelected([...selected, newCheckedOptionVal]);
      onSelectionChange([...selected, newCheckedOptionVal]);
    } else {
      setSelected(selected.filter((id) => id !== newCheckedOptionVal));
      onSelectionChange(selected.filter((id) => id !== newCheckedOptionVal));
    }
  };

  return (
    <fieldset>
      <legend className="font-semibold text-left text-body-regular text-primary-text">
        {selectTitle}
      </legend>
      <p className="text-left text-body-small text-secondary-text">
        Description
      </p>
      <div className="mt-2 space-y-1">
        {selections.map((checkSelection) => (
          <div className="flex gap-5">
            <div className="flex items-center h-6 shrink-0">
              <div className="grid grid-cols-1 group size-4">
                <CheckboxElement
                  id={checkSelection.value}
                  name="check-select"
                  checked={selected.includes(String(checkSelection.value))}
                  onChange={(event) => handleCheckboxChange(event)}
                  className="col-start-1 row-start-1"
                />
                <svg
                  fill="none"
                  viewBox="0 0 14 14"
                  className="pointer-events-none col-start-1 row-start-1
                  self-center justify-self-center stroke-white 
                  group-has-[:disabled]:stroke-neutral-80"
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
            <div className="text-body-small">
              <label htmlFor="comments" className="text-primary-text">
                {checkSelection.label}
              </label>
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  );
};

export const CheckboxElement = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ id, name, className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      id={id}
      name={name}
      type="checkbox"
      className={cn(
        "bg-white border rounded appearance-none border-neutral-30 checked:border-primary checked:bg-primary indeterminate:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-6 focus-visible:outline-primary disabled:border-neutral-30 disabled:bg-neutral-10 disabled:checked:bg-neutral-10 forced-colors:appearance-auto",
        className
      )}
      {...props}
    />
  );
});

export default CheckSelect;
