import React, { useState } from "react";

interface TextInputProps {
  placeholder: string;
  label?: string;
  description?: string;
  maxLength?: number;
  height?: number;
}

const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  label = "Short Input Example",
  description = "This input is self-handled",
  maxLength = 50,
  height = 1,
}) => {
  const [value, setValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    if (inputValue.length <= maxLength) {
      setValue(inputValue);
    }
  };

  return (
    <div className="w-full max-w-md mb-4">
      <label className="block mb-1 font-bold text-gray-800 text-body-small">
        {label}
      </label>
      <p className="mb-2 text-gray-500 text-body-small">{description}</p>
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
      <div className="mt-1 text-xs text-right text-secondary-text">
        {value.length}/{maxLength}
      </div>
    </div>
  );
};

export default TextInput;
