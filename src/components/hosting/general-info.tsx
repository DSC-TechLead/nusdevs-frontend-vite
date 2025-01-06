import DateField from "../common/form/datefield";
import Dropdown from "../common/form/dropdown";
import { FormHeader } from "../common/form/form-section";
import TextInput from "../common/form/textinput";

interface PrivacyPolicyProps {
  text?: string;
  isRead?: boolean;
}

const dropdownSelections = [
  {
    label: "C1",
    value: "Selection 1",
  },
  {
    label: "C2",
    value: "Selection 2",
  },
  {
    label: "C3",
    value: "Selection 3",
  },
];

const GeneralInfo: React.FC<PrivacyPolicyProps> = ({}) => {
  const handleChange = () => {
    // onSelectedChange(!isRead);
  };

  return (
    <div className="w-full max-h-full px-5 py-8 bg-white rounded-2xl flex-col gap-7 inline-flex overflow-auto">
      <FormHeader header="General Info" subtitle="*Required Questions" />
      <TextInput
        label="Team Name*"
        placeholder="E.G. Orbital Team"
        description=""
        maxLength={50}
        value=""
        handleInputChange={() => {}}
      />
      <Dropdown
        label="Team Category*"
        description="test"
        options={dropdownSelections}
        handleChange={() => {}}
      />
      <TextInput
        label="Team Description*"
        placeholder="Add in team description and requirements"
        description=""
        maxLength={250}
        value=""
        handleInputChange={() => {}}
        height={5}
      />
      <Dropdown
        label="Commitment Level"
        description=""
        options={dropdownSelections}
        handleChange={() => {}}
      />
      <DateField
        label="Duration of Project"
        description=""
        type="multi"
        onChange={() => {}}
      />
      {/* tags */}
    </div>
  );
};

export default GeneralInfo;
