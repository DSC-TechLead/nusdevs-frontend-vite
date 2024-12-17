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
    className={`flex items-center gap-2 px-4 py-2 text-white rounded-full bg-[#EB5E27] hover:bg-[#EB5E27] active:bg-[#BA4A1F] focus:outline-none focus:ring-2 focus:ring-[#EB5E27] ${className}`}
  >
    {icon && <span>{icon}</span>}
    <span>{text}</span>
  </button>
);

export default TextButton;
