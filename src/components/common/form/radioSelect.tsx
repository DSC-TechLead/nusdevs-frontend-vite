import { cn } from "@/lib/utils";
import { forwardRef, InputHTMLAttributes } from "react";

interface RadioSelectProps {
  selectTitle: string;
  selections: { id: string; title: string }[];
  onSelectionChange: (selected: string) => void;
}

const RadioSelect: React.FC<RadioSelectProps> = ({
  selectTitle,
  selections,
  onSelectionChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSelectionChange(event.target.id);
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
        {selections.map((radioSelection) => (
          <div key={radioSelection.id} className="flex items-center">
            <RadioElement
              defaultChecked={radioSelection.id === "1"}
              id={radioSelection.id}
              name="single-select"
              onChange={(event) => handleChange(event)}
            />
            <label
              htmlFor={radioSelection.id}
              className="block mb-1 ml-3 text-body-small text-primary-text"
            >
              {radioSelection.title}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
};

export const RadioElement = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ id, name, className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      id={id}
      name={name}
      type="radio"
      className={cn(
        "relative size-4 appearance-none rounded-full border border-neutral-30 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-primary checked:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:border-neutral-30 disabled:bg-neutral-10 disabled:before:bg-neutral forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden",
        className
      )}
      {...props}
    />
  );
});

export default RadioSelect;
