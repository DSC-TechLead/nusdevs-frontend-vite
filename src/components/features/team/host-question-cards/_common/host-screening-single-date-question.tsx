import DateField from "@/components/common/form/datefield";

const HostScreeningSingleDateQuestion = () => {
  return (
    <DateField
      label={""}
      description={""}
      type={"single"}
      onChange={function (): void {
        throw new Error("Function not implemented.");
      }}
      disabled
    />
  );
};

export default HostScreeningSingleDateQuestion;
