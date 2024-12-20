import React from "react";

interface IconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  className,
}) => (
  <button
    onClick={onClick}
    className={`flex items-center justify-center w-11 h-11 bg-primary text-white rounded-full transition-colors ease-in-out outline-none hover:bg-primary active:bg-primary-70 ${className} cursor-pointer`}
  >
    {icon && <span className="text-lg">{icon}</span>}
  </button>
);

export default IconButton;
