import React from "react";

interface TextButtonProps {
  text: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const TextButton: React.FC<TextButtonProps> = ({
  text,
  icon,
  onClick,
  className,
}) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-8 py-4 ease-in-out text-white rounded-full outline-none ${className}`}
  >
    {icon && <span>{icon}</span>}
    <span>{text}</span>
  </button>
);

export default TextButton;
