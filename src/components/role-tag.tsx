import React from "react";
import { FaTimes } from "react-icons/fa";

interface RoleTagProps {
    label: string;
    onDelete: () => void;

}

const RoleTag: React.FC<RoleTagProps> = ({ label, onDelete }) => {
    return (
        <div className="bg-primary text-white rounded-full px-3 py-1 flex items-center space-x-2">
            <span>{label}</span>
            <button onClick={onDelete} className="text-white hover:text-gray-300">
                <FaTimes />
            </button>
        </div>
    );
};

export default RoleTag;