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
      <label className="block mb-1 text-sm font-bold text-gray-800">
        {label}
      </label>
      <p className="mb-2 text-sm text-gray-500">{description}</p>
      <div>
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          className="w-full p-2.5 border border-gray-300 rounded-md shadow-sm resize-none focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-300"
          rows={height}
          style={{ overflow: "hidden" }}
        />
      </div>
      <div className="mt-1 text-xs text-right text-gray-500">
        {value.length}/{maxLength}
      </div>
    </div>
  );
};

export default TextInput;
