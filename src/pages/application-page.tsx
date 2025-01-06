import { useState } from "react";
import ContactInfo from "@/components/features/application/application-pages/contact-info";
import UploadDocument from "@/components/features/application/application-pages/upload-document";
import ScreeningQuestions from "@/components/features/application/application-pages/screening-questions";
import PrivacyPolicy from "@/components/features/application/application-pages/privacy-policy";
import TextButton from "@components/common/textbutton";
import UnderlineButton from "@components/common/underlinebutton";

interface ApplicationPageProps {
  requestName: string;
  privacyPolicyText: string;
}
const ApplicationPage: React.FC<ApplicationPageProps> = ({
  requestName,
  privacyPolicyText,
}) => {
  const [currentPageNum, setCurrentPageNum] = useState<number>(1);
  const [readPolicy, setReadPolicy] = useState<boolean>(false);
  const numOfPages: number = 4;

  //temp text
  privacyPolicyText =
    "Our registered users (“Members”) share their professional identities, engage with their network, exchange knowledge and professional insights, post and view relevant content, learn and develop skills, and find business and career opportunities. Content and data on some of our Services is viewable to non-Members (“Visitors”). We use the term “Designated Countries” to refer to countries in the European Union (EU), European Economic Area (EEA), and Switzerland. Members and Visitors located in the Designated Countries or the UK can review additional information in our European Regional Privacy Notice. If you are in the “Designated Countries”, LinkedIn Ireland Unlimited Company (“LinkedIn Ireland”) will be the controller of your personal data provided to, or collected by or for, or processed in connection with our Services. If you are outside of the Designated Countries, LinkedIn Corporation will be the controller of (or business responsible for) your personal data provided to, or collected by or for, or processed in connection with our Services. As a Visitor or Member of our Services, the collection, use and sharing of your personal data is subject to this Privacy Policy and other documents referenced in this document.";

  const handleSelectionChange = (isSelect: boolean) => {
    setReadPolicy(isSelect);
  };

  return (
    <div className="h-full w-full bg-background flex flex-col items-center absolute">
      <div className="w-full p-6 px-[10px] flex flex-row justify-center relative">
        <div className="text-black text-h5 font-bold">
          Apply to {requestName}
        </div>
      </div>
      <div className="max-h-[75%] px-5 w-full overflow-auto flex flex-col justify-start">
        {currentPageNum === 1 ? (
          <ContactInfo />
        ) : currentPageNum === 2 ? (
          <UploadDocument />
        ) : currentPageNum === 3 ? (
          <ScreeningQuestions />
        ) : (
          <PrivacyPolicy
            text={privacyPolicyText}
            onSelectedChange={handleSelectionChange}
            isRead={readPolicy}
          />
        )}
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
              onClick={() => {
                alert(readPolicy);
              }}
              className="text-white bg-primary active:bg-primary-70"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicationPage;
