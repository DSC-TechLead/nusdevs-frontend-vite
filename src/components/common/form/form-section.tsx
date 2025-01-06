interface FormHeaderProps {
  header: string;
  subtitle?: string;
}
export const FormHeader: React.FC<FormHeaderProps> = ({ header, subtitle }) => {
  return (
    <div className="flex-col justify-start items-start gap-0 inline-flex">
      <div className="text-h2 font-bold">{header}</div>
      {subtitle && (
        <div className="text-black/50 text-xs font-normal font-['Inter'] leading-[18px]">
          {subtitle}
        </div>
      )}
    </div>
  );
};

interface FormQuestionProps {
  question: string;
  type: string;
}
export const FormQuestion: React.FC<FormQuestionProps> = ({ question }) => {
  {
    /* Edit this based on the type of the question, e.g. text input, select, date, dropdown, etc */
  }
  return (
    <div className="w-full flex-col justify-start items-start">
      <div className="flex-col justify-start items-start gap-2 flex">
        <div className="h-[18px] flex-col justify-start items-start gap-0.5 flex">
          <div className="text-neutral-500 text-sm font-bold font-['Inter'] leading-[18px]">
            {question}
          </div>
        </div>
        <div className="w-full h-[42px] px-4 py-3 bg-gray-100 rounded-md border border-gray-300 justify-start items-center gap-2.5 inline-flex"></div>
      </div>
    </div>
  );
};
