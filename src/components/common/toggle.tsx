"use client";

import { useState } from "react";
import { Switch } from "@headlessui/react";

interface ToggleProps {
  status: boolean;
  onToggleChange: (toggle: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({ status, onToggleChange }) => {
  const [enabled, setEnabled] = useState(status);

  const handleToggleChange = (toggle: boolean) => {
    setEnabled(toggle);
    onToggleChange(toggle);
  };

  return (
    <Switch
      checked={enabled}
      onChange={handleToggleChange}
      className="group relative inline-flex h-6 w-10 shrink-0 cursor-pointer 
      rounded-full border-2 border-transparent bg-neutral-30 transition-colors 
      duration-200 ease-in-out data-[checked]:bg-primary items-center"
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className="pointer-events-none inline-block size-5 transform rounded-full 
        bg-white shadow ring-0 transition duration-200 ease-in-out 
        group-data-[checked]:translate-x-6"
      />
    </Switch>
  );
};

export default Toggle;
