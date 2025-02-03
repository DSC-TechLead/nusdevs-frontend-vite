import TextAreaInput from "@/components/common/form/textarea";

export const HostScreeningLongQuestion = () => {
  return (
    <>
      <TextAreaInput
        placeholder={"Long answer"}
        disabled={true}
        value={""}
        rows={5}
      />
    </>
  );
};

export default HostScreeningLongQuestion;
