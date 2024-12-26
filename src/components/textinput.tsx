import React, { useState } from "react";

interface TextInputProps {
  placeholder: string;
  label?: string;
  description?: string;
  maxLength?: number;
  height?: number;
  value: string;
  defaultValue?: string;
  onChange: (value: string) => void; 
}

const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  label = "Short Input Example",
  description = "This input is self-handled",
  maxLength = 50,
  height = 1,
  value,
  defaultValue="", // this is to ensure a valid initial state in the case that textinput is uncontrolled
  onChange,
}) => {
  const [internalValue, setInternalValue] = useState<string>(defaultValue);

  const isControlled = value !== undefined && onChange !== undefined;
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    if (inputValue.length <= maxLength) {
      if (isControlled) {
        onChange(inputValue); // Controlled: Update parent state
      } else {
        setInternalValue(inputValue); // Uncontrolled: Update local state
      }
    }
  };

  return (
    <div className="w-full max-w-md mb-4">
      <label className="block text-body-small font-bold text-gray-800 mb-1">
        {label}
      </label>
      <p className="text-body-small text-gray-500 mb-2">{description}</p>
      <div>
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          className="w-full p-2.5 border border-neutral-30 rounded-md shadow-sm resize-none focus:outline-none focus:border-primary"
          rows={height}
          style={{ overflow: "hidden" }}
        />
      </div>
      <div className="text-right mt-1 text-xs text-secondary-text">
        {(isControlled ? value : internalValue).length}/{maxLength}
      </div>
    </div>
  );
};

export default TextInput;
