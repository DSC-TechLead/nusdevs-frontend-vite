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
        {value.length}/{maxLength}
      </div>
    </div>
  );
};

export default TextInput;
