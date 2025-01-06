import TextButton from "@/components/common/textbutton";
import UnderlineButton from "@/components/common/underline-button";
import GeneralInfo from "@/components/hosting/general-info";
import { useState } from "react";

interface ApplicationPageProps {
  requestName?: string;
  privacyPolicyText?: string;
}

const HostingPage: React.FC<ApplicationPageProps> = ({
  requestName = "Create a New Team",
  privacyPolicyText = "test",
}) => {
  const [currentPageNum, setCurrentPageNum] = useState<number>(1);
  const numOfPages: number = 1;

  return (
    <div className="h-screen w-full bg-background flex flex-col justify-between">
      {/* Page Title */}
      <div className="w-full p-6 flex justify-center items-center">
        <div className="text-black text-h5 font-bold">{requestName}</div>
      </div>

      {/* Content Section */}
      <div className="flex justify-center px-6">
        <div className="w-full bg-white rounded-lg shadow-md p-6">
          <GeneralInfo />
        </div>
      </div>

      {/* Buttons Section */}
      <div className="w-full p-6 flex justify-end">
        {currentPageNum > 1 && (
          <UnderlineButton
            text="Previous"
            onClick={() => setCurrentPageNum(currentPageNum - 1)}
            className="text-neutral decoration-neutral active:text-neutral-70 active:decoration-neutral-70 mr-4"
          />
        )}
        {currentPageNum < numOfPages && (
          <TextButton
            text="Next"
            onClick={() => setCurrentPageNum(currentPageNum + 1)}
            className="text-white bg-neutral active:bg-neutral-70 px-6 py-2 rounded-lg"
          />
        )}
        {currentPageNum === numOfPages && (
          <TextButton
            text="Submit"
            className="text-white bg-primary active:bg-primary-70 px-6 py-2 rounded-lg"
          />
        )}
      </div>
    </div>
  );
};

export default HostingPage;
