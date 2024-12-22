import React, {useState} from "react";
import IconButton from "../components/iconbutton";
import LinkButton from "../components/linkbutton";
import TextInput from "../components/textinput";
import TextButton from "../components/textbutton";
import FileUpload from "../components/fileupload";
import { FaPlus, FaShoppingCart } from "react-icons/fa";
import CheckSelect from "../components/checkSelect";
import RadioSelect from "../components/radioSelect";
import Dropdown from "../components/dropdown";
import Toggle from "../components/toggle";
import DateField from "../components/datefield";
import RoleBox from "../components/role-box"

const checkSelections = [
  {
    id: "C1",
    title: "Selection 1",
  },
  {
    id: "C2",
    title: "Selection 2",
  },
  {
    id: "C3",
    title: "Selection 3",
  },
];

const radioSelections = [
  {
    id: "R1",
    title: "Selection 1",
  },
  {
    id: "R2",
    title: "Selection 2",
  },
  {
    id: "R3",
    title: "Selection 3",
  },
];

const Components: React.FC = () => {
  const handleClick = () => {};

  // hooks
  const [activeRoleIndex, setActiveRoleIndex] = useState<number | null>(null);
  const [roles, setRoles] = useState<number[]>([0]);

  // handler functions
  const handleFocus = (index: number) => {
    setActiveRoleIndex(index);
  };

  const handleNewRole = () => {
    setRoles((prev) => {
      const newRoles = [...prev, prev.length];
      setActiveRoleIndex(newRoles.length);
      return newRoles;
    });
  };

  const handleDeleteRole = (index: number) => {
    setRoles((prev) => prev.filter((_, i) => i !== index));
    setActiveRoleIndex(null); // can be modified to be the first / latest role-box, up to discretion.
  };

  return (
    <div className="p-4 space-y-4 ">
      <LinkButton text="Go to Google" href="https://www.google.com" />
      <TextButton text="Add Members" icon={<FaPlus />} onClick={handleClick} />
      <IconButton icon={<FaShoppingCart />} onClick={handleClick} />
      <TextInput
        placeholder="Enter text here"
        label="Short Input Example"
        description="Add Description Here"
        maxLength={50}
      />
      <TextInput
        placeholder="Enter text here"
        label="Long Input Example"
        description="Add Description Here"
        maxLength={200}
        height={5}
      />
      <FileUpload maxFileSizeMB={5} />
      <FileUpload maxFileSizeMB={5} disabled />
      <CheckSelect
        selectTitle="Checkbox Selection"
        onSelectionChange={() => {}}
        selections={checkSelections}
      />
      <RadioSelect
        selectTitle="Checkbox Selection"
        onSelectionChange={() => {}}
        selections={radioSelections}
      />
      <Dropdown label="Dropdown" description="This is a dropdown example" />
      <DateField
        label="Datefield"
        description="This is a datefield example"
        type="multi"
        onChange={() => {}}
      />
      <Toggle status={true} onToggleChange={() => {}} />

      <h2 className="text-xl font-bold">Roles</h2>
      {roles.map((_, index) => (
        <RoleBox
          key={index}
          isExpanded={index === activeRoleIndex}
          onFocus={() => handleFocus(index)}
          onDelete={() => handleDeleteRole(index)}
          canDelete={roles.length > 1} // Button appears only if more than one role exists
        />
      ))}

      <TextButton text="Add Role" icon={<FaPlus />} onClick={handleNewRole} />
    </div>
  );
};

export default Components;
