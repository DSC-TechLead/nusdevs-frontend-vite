import React from "react";

interface LinkButtonProps {
  text: string;
  href: string;
  className?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ text, href, className }) => (
  <a
    href={href}
    className={`text-primary underline ease-in-out decoration-primary decoration-2 transition-colors hover:text-primary-70 hover:decoration-primary-70 ${className}`}
  >
    {text}
  </a>
);

export default LinkButton;
