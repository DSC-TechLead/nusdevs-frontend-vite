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
    className={`flex items-center justify-center w-12 h-12 bg-orange-600 text-white rounded-full transition-colors duration-200 ease-in-out outline-none hover:bg-orange-500 active:bg-orange-700 focus:ring-2 focus:ring-orange-600 ${className}`}
  >
    {icon && <span className="text-lg">{icon}</span>}
  </button>
);

export default IconButton;
