import React, { useState } from "react";
import TextInput from "./textinput";
import { FaTrash, FaPlus } from "react-icons/fa";
import TextButton from "./textbutton";

interface RoleBoxProps {
    onFocus: () => void;
    onDelete?: () => void;
    isExpanded: boolean;
    canDelete: boolean;
}

const RoleBox: React.FC<RoleBoxProps> = ({
    onFocus,
    onDelete,
    isExpanded,
    canDelete = false
  }) => {

    return (
        <div
          onClick={onFocus}
          className={`border rounded-lg p-4 mb-4 shadow-md cursor-pointer transition-all bg-white text-primary-text`}
        >
          {/* Expanded State */}
          {isExpanded ? (
            <div className="space-y-4">
              <div className="w-full">
                <TextInput
                  placeholder="Eg: Frontend Developer"
                  label="Role Name*"
                  description=""
                  maxLength={50}
                  height={1}
                />
              </div>
    
              <div className="w-full">
                <TextInput
                  placeholder="Add in description and expectations of the role etc."
                  label="Role Description"
                  description=""
                  maxLength={250}
                  height={4}
                />
              </div>

              {/* TODO: Style to be like button shown on Figma */}
              <div className="w-full">
              <TextButton
                text="Add Tag"
                icon={<FaPlus />}
              />
              {
                canDelete &&
                (
                  <TextButton
                    text="Delete Role"
                    icon={<FaTrash />}
                    onClick={onDelete}
                  />
                )
              }
              </div>
            </div>
          ) : (
            <div>
              <h3 className="font-bold text-primary-text">Untitled Role</h3>
            </div>
          )}
        </div>
      );
};

export default RoleBox;