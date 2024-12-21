import React from "react";

interface LinkButtonProps {
  text: string;
  href: string;
  className?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ text, href, className }) => (
  <a
    href={href}
    className={`text-orange-600 underline decoration-orange-600 decoration-2 transition-colors duration-300 ease-in-out hover:text-orange-700 hover:decoration-orange-700 ${className}`}
  >
    {text}
  </a>
);

export default LinkButton;
