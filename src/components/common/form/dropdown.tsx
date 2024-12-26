import React, { useState } from "react";

export type DropdownOption = { label: string; value: string };

interface DropdownProps {
  label: string;
  description: string;
  placeholder?: string;
  options: DropdownOption[];
  handleChange: (val: DropdownOption) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  description,
  options,
  handleChange,
  placeholder,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<{
    label: string;
    value: string;
  } | null>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectOption = (option: DropdownOption) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col items-start w-full gap-2">
      {/* Dropdown Title */}
      <h2 className="text-primary-text font-inter text-sm/6 font-bold leading-[18px]">
        {label}
      </h2>

      {/* Description */}
      <p className="text-secondary-text font-inter text-xs font-normal leading-[18px]">
        {description}
      </p>

      {/* Dropdown Trigger */}
      <button
        onClick={toggleDropdown}
        className={`w-full text-left border border-neutral-30 p-2 rounded-md flex justify-between items-center ${
          isOpen ? "border-primary" : "hover:border-primary"
        } transition duration-200`}
      >
        <span>{selected?.label || placeholder}</span>
        {isOpen ? (
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M14.77 12.79a.75.75 0 01-1.06-.02L10 9.293l-3.71 3.475a.75.75 0 01-1.04-1.08l4.25-4a.75.75 0 011.04 0l4.25 4a.75.75 0 01-.02 1.06z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 10.707l3.71-3.475a.75.75 0 011.04 1.08l-4.25 4a.75.75 0 01-1.04 0l-4.25-4a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-10 w-full p-2 mt-20 bg-white border rounded-md shadow-md border-neutral-30">
          <div className="py-1">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => {
                  selectOption(option);
                  handleChange(option);
                }}
                className="block w-full px-4 py-2 text-left transition duration-200 rounded-md hover:bg-primary hover:text-primary-text"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
