import { FormHeader } from "@components/features/application/application-sections";

// TODO: add dummy questions similar to in contactInfo.tsx based on Ivy's examples

const ScreeningQuestions: React.FC = () => {
  return (
    <div className="w-full h-full px-5 py-8 bg-white rounded-2xl flex-col gap-7 inline-flex overflow-auto">
      <FormHeader header="Screening Questions" subtitle="*Required" />
      {/* TODO: Same as contactInfo.tsx */}
    </div>
  );
};

export default ScreeningQuestions;
