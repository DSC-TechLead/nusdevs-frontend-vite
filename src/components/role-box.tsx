import React from "react";
import { FaTrash } from "react-icons/fa";

interface RoleBoxProps {
    onFocus: () => void;
    isExpanded: boolean;
}

const RoleBox: React.FC<RoleBoxProps> = ({
    onFocus,
    isExpanded,
  }) => {
    return (
        <div onClick={onFocus} className="border rounded-lg p-4 mb-4 shadow-md cursor-pointer bg-neutral-10 text-primary-text">
            RoleBox Component
        </div>
    )
};

export default RoleBox;
