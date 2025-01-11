import TextButton from "@/components/common/textbutton";
import UnderlineButton from "@/components/common/underline-button";
import GeneralInfo from "@/components/hosting/general-info";
import { useState } from "react";

interface HostingPageProps {}

const HostingPage: React.FC<HostingPageProps> = ({}) => {
  const [currentPageNum, setCurrentPageNum] = useState<number>(1);
  const numOfPages: number = 4;

  return (
    <div className="h-full w-full bg-background flex flex-col items-center absolute">
      <div className="w-full p-6 px-[10px] flex flex-row justify-center relative">
        <div className="text-black text-h5 font-bold">Create a New Team</div>
      </div>
      {/* Will try to solve later. max-h-full will overlap the button */}
      <div className="h-3/4 px-5 w-full overflow-auto flex flex-col justify-center">
        <GeneralInfo />
      </div>

      <div className="w-full pb-9 pt-7 px-8 bottom-0 justify-between items-center inline-flex absolute">
        <div className="justify-start items-center"></div>
        <div className="justify-start items-start flex gap-9">
          {currentPageNum > 1 && (
            // TODO: use Link Buttons components
            <UnderlineButton
              text="Previous"
              onClick={() => setCurrentPageNum(currentPageNum - 1)}
              className="text-neutral decoration-neutral active:text-neutral-70 active:decoration-neutral-70 "
            />
          )}
          {currentPageNum < numOfPages && (
            // TODO: use Buttons components
            <TextButton
              text="Next"
              onClick={() => setCurrentPageNum(currentPageNum + 1)}
              className="text-white bg-neutral active:bg-neutral-70"
            />
          )}
          {currentPageNum === numOfPages && (
            // TODO: use Buttons components
            // The text here is temporary for button implementation later
            <TextButton
              text="Submit"
              onClick={() => {}}
              className="text-white bg-primary active:bg-primary-70"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HostingPage;
