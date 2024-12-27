import React from "react";

interface TextInputProps {
  placeholder: string;
  value: string;
  handleInputChange: (val: string) => void;
  label?: string;
  description?: string;
  maxLength?: number;
  height?: number;
  textDisabled?: boolean;
  enableCount?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  label,
  value,
  handleInputChange,
  description,
  maxLength,
  height = 1,
  textDisabled = false,
  enableCount = true,
}) => {
  return (
    <div className="w-full max-w-md ">
      <div className="text-left">
        <label className="block text-body-small font-bold text-primary-text mb-1">
          {label}
        </label>
        <p className="text-body-small text-secondary-text mb-2">
          {description}
        </p>
      </div>      <div>
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={(e) => handleInputChange(e.target.value)}
          className="w-full p-2.5 border border-neutral-30 rounded-md shadow-sm resize-none focus:outline-none focus:border-primary"
          rows={height}
          style={{ overflow: "hidden" }}
          disabled={textDisabled}
        />
      </div>
      {maxLength && enableCount && (
        <div className="mt-1 text-xs text-right text-secondary-text">
          {value.length}/{maxLength}
        </div>
      )}
    </div>
  );
};

export default TextInput;
