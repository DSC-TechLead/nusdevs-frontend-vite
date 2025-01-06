import { FormHeader } from "@components/features/application/application-sections";

interface PrivacyPolicyProps {
  text: string;
  onSelectedChange: (isSelect: boolean) => void;
  isRead: boolean;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({
  text,
  onSelectedChange,
  isRead,
}) => {
  const handleChange = () => {
    onSelectedChange(!isRead);
  };

  return (
    <div className="w-full h-full px-5 py-8 bg-white rounded-2xl flex-col gap-7 inline-flex overflow-auto">
      <FormHeader header="Privacy Policy" />
      <div className="p-2 border border-black overflow-auto flex-auto">
        <p className="text- text-justify">{text}</p>
      </div>
      <div className="flex gap-3">
        <div className="flex h-6 shrink-0 items-center">
          <div className="group grid size-4 grid-cols-1">
            <input
              name="check-select"
              type="checkbox"
              checked={isRead}
              onChange={() => handleChange()}
              className="col-start-1 row-start-1 appearance-none rounded border 
                  border-neutral-20 bg-white checked:border-primary 
                  checked:bg-primary indeterminate:border-primary focus-visible:outline 
                  focus-visible:outline-2 focus-visible:outline-offset-2 
                  focus-visible:outline-iprimary disabled:border-neutral-20 
                  disabled:bg-neutral-10 disabled:checked:bg-neutral-10 
                  forced-colors:appearance-auto"
            />
            <svg
              fill="none"
              viewBox="0 0 14 14"
              className="pointer-events-none col-start-1 row-start-1 size-3.5 
                  self-center justify-self-center stroke-white 
                  group-has-[:disabled]:stroke-gray-950/25"
            >
              <path
                d="M3 8L6 11L11 3.5"
                strokeWidth={1}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-0 group-has-[:checked]:opacity-100"
              />
            </svg>
          </div>
        </div>
        <div className="text-sm/6">
          <p className="font-medium text-primary-text text-left">
            I accept the <u>Privacy Policy</u> as well as the{" "}
            <u>Terms & Conditions</u>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
