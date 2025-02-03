import TextInput from "@/components/common/form/textinput";

export const HostScreeningShortQuestion = () => {
  return (
    <>
      <TextInput
        placeholder={"Short answer"}
        disabled={true}
        value={""}
        handleInputChange={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </>
  );
};

export default HostScreeningShortQuestion;
