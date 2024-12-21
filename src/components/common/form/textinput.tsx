import React from "react";

interface TextInputProps {
  placeholder: string;
  value: string;
  handleInputChange: (val: string) => void;
  label?: string;
  description?: string;
  maxLength?: number;
  height?: number;
}

const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  label,
  value,
  handleInputChange,
  description,
  maxLength,
  height = 1,
}) => {
  return (
    <div className="w-full mb-4">
      <label className="block mb-1 font-bold text-gray-800 text-body-small">
        {label}
      </label>
      <p className="mb-2 text-gray-500 text-body-small">{description}</p>
      <div>
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={(e) => handleInputChange(e.target.value)}
          className="w-full p-2.5 border border-neutral-30 rounded-md shadow-sm resize-none focus:outline-none focus:border-primary"
          rows={height}
          style={{ overflow: "hidden" }}
        />
      </div>
      {maxLength && (
        <div className="mt-1 text-xs text-right text-secondary-text">
          {value.length}/{maxLength}
        </div>
      )}
    </div>
  );
};

export default TextInput;
