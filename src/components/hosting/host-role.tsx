import { FormHeader } from "../common/form/form-section";
import TextInput from "../common/form/textinput";

interface HostRoleProps {}

const HostRole: React.FC<HostRoleProps> = ({}) => {
  return (
    <div className="w-full max-h-full px-5 py-8 bg-white rounded-2xl flex-col gap-7 inline-flex overflow-auto">
      <FormHeader
        header="Host Role"
        subtitle="This is the role you will be taking"
      />
      <TextInput
        label="Role Name*"
        placeholder="E.G. Frontend Developer"
        description=""
        maxLength={50}
        value=""
        handleInputChange={() => {}}
      />
      <TextInput
        label="Role Description"
        placeholder="Add in team description and expectations of the role etc."
        description=""
        maxLength={250}
        value=""
        handleInputChange={() => {}}
        height={5}
      />
    </div>
  );
};

export default HostRole;
