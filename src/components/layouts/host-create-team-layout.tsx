import { HiChevronLeft } from "react-icons/hi2";
import { Outlet } from "react-router";
import { Button } from "../common/button";

const HostCreateTeamLayout: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 p-9 bg-background">
      <header className="relative flex items-center justify-center">
        <HiChevronLeft className="absolute left-0 w-6 h-6" />
        <h5 className="font-bold text-h5">Create New Team</h5>
      </header>
      <Outlet />
      <footer className="flex items-center justify-between">
        <_ProgressSteps totalSteps={5} />
        <span className="flex flex-row gap-9">
          <Button variant={"link"}>Previous</Button>
          <Button>Next</Button>
        </span>
      </footer>
    </div>
  );
};

export default HostCreateTeamLayout;

interface _ProgressStepsProps {
  totalSteps: number;
}

const _ProgressSteps: React.FC<_ProgressStepsProps> = ({ totalSteps }) => {
  return (
    <div className="flex flex-row gap-3">
      {Array.from(Array(totalSteps), () => {
        return <_ProgressStep />;
      })}
    </div>
  );
};

const _ProgressStep: React.FC = () => {
  return <span className="w-4 h-4 rounded-full bg-neutral-30" />;
};
