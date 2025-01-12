import TextButton from "@/components/common/textbutton";
import { HiOutlineChevronDown } from "react-icons/hi2";
import { AiOutlinePlus } from "react-icons/ai";

const dummyData = [
  {
    id: "Project001",
    project: "Orbital 2025",
    teams: [
      {
        id: "Team001",
        name: "Team Name",
        description:
          "This is a short description of the team that the individual is in and this is what it looks like when the description is very long.",
      },
    ],
  },
  {
    id: "Project002",
    project: "Hackathon",
    teams: [
      {
        id: "Team002",
        name: "Team Name",
        description:
          "This is a short description of the team that the individual is in and this is what it looks like when the description is very long.",
      },
      {
        id: "Team003",
        name: "Team Name",
        description:
          "This is a short description of the team that the individual is in and this is what it looks like when the description is very long.",
      },
    ],
  },
];

const Main: React.FC = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col gap-5 p-5 bg-background">
        <div className="text-h1 font-bold">My Team</div>
        <div className="flex justify-start items-center gap-4">
          <div className="border border-neutral-30 rounded-md px-5 py-3 bg-primary text-white text-body-regular">
            Published
          </div>
          <div className="border border-neutral-30 rounded-md px-5 py-3 bg-none text-primary-text text-body-regular">
            Unpublished
          </div>
        </div>
        {dummyData.map((project) => {
          return (
            <div key={project.id} className="flex flex-col gap-5">
              <div className="flex justify-between items-center text-neutral text-h3 font-bold">
                <div>{project.project}</div>
                <HiOutlineChevronDown size={30} />
              </div>
              {project.teams.map((team) => {
                return (
                  <div
                    key={team.id}
                    className=" bg-white px-5 py-6 flex flex-col gap-3 rounded-2xl"
                  >
                    <div className="text-h4 font-bold">{team.name}</div>
                    <div className="text-body-small">{team.description}</div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="fixed px-5 w-full bottom-[95px] flex flex-row justify-end">
        <TextButton
          text="Create a Team"
          icon={<AiOutlinePlus />}
          onClick={() => {}}
          className="w-fit"
        />
      </div>
    </>
  );
};

export default Main;
