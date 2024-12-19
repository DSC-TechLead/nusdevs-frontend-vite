interface RadioSelectProps {
  selectTitle: string;
  selections: { id: string; title: string }[];
  onSelectionChange: (selected: string) => void;
  isDisabled?: boolean;
}

const RadioSelect: React.FC<RadioSelectProps> = ({
  selectTitle,
  selections,
  onSelectionChange,
  isDisabled = false,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSelectionChange(event.target.id);
  };

  return (
    <fieldset>
      <legend className="text-left text-body-regular font-semibold text-primary-text">
        {selectTitle}
      </legend>
      <p className="text-left text-body-small text-secondary-text">
        Description
      </p>
      <div className="mt-2 space-y-1">
        {selections.map((radioSelection) => (
          <div key={radioSelection.id} className="flex items-center">
            <input
              defaultChecked={radioSelection.id === "1"}
              id={radioSelection.id}
              name="single-select"
              type="radio"
              onChange={(event) => handleChange(event)}
              disabled={isDisabled}
              className="relative size-4 appearance-none rounded-full border border-neutral-30
              bg-white before:absolute before:inset-1 before:rounded-full before:bg-white 
              checked:border-primary checked:bg-primary focus-visible:outline 
              focus-visible:outline-2 focus-visible:outline-offset-2 
              focus-visible:outline-primary disabled:border-neutral-30 
              disabled:bg-neutral-10 disabled:before:bg-neutral-40 forced-colors:appearance-auto 
              forced-colors:before:hidden [&:not(:checked)]:before:hidden"
            />
            <label
              htmlFor={radioSelection.id}
              className="ml-3 mb-1 block text-body-small text-primary-text"
            >
              {radioSelection.title}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
};

export default RadioSelect;
