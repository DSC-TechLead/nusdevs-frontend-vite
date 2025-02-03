import DateField from "@/components/common/form/datefield";

const HostScreeningDateRangeQuestion = () => {
  return (
    <div className="flex items-center gap-5">
      <DateField
        label={""}
        description={""}
        type={"multi"}
        placeholder="Select Date"
        onChange={function (): void {
          throw new Error("Function not implemented.");
        }}
        disabled
      />
    </div>
  );
};

export default HostScreeningDateRangeQuestion;
