import React from "react";

interface UnderlineButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const UnderlineButton: React.FC<UnderlineButtonProps> = ({
  text,
  onClick,
  className,
}) => (
  <button
    onClick={onClick}
    className={`underline underline-offset-2 py-4 m-0 bg-transparent ease-in-out decoration-1 transition-colors ${className}`}
  >
    <span>{text}</span>
  </button>
);

export default UnderlineButton;