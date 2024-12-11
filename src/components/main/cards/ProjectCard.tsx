import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { ProjectInterface } from "../../../config/about_me/Projects.ts";

export const ProjectCard = ({
  title,
  description,
  technologies,
  github,
  image,
  demo,
}: ProjectInterface) => {
  return (
    <div className="flex flex-col items-start bg-[#2D2D2D] space-x-2 rounded-lg w-full border border-transparent hover:border-green-400 transition-all md:min-h-40 h-full overflow-hidden">
      <img
        src={image}
        alt="imagen del proyecto"
        className="w-full h-1/2 md:max-h-fit rounded-t-lg hover:scale-105 hover:transition-all hover:duration-500 hover:ease-in-out"
      />
      <div className="flex flex-col items-start w-full h-full justify-between">
        <div className="flex flex-col mt-3 mx-2">
          <p className="text-2xl text-green-400 font-bold">{title}</p>
          <p className="text-white text-lg">{description}</p>
        </div>
        <div className="flex flex-col gap-3 w-full">
          <div className="flex items-center justify-start space-x-2 mt-5 flex-wrap gap-2">
            {technologies.map((t) => (
              <p
                key={Math.random() + t}
                className="text-green-400 py-1 px-2 rounded-md bg-[#1E1E1E]"
              >
                {t}
              </p>
            ))}
          </div>
          <div className="flex flex-col justify-start align-start md:flex-row flex-wrap gap-6 mb-5 md:mt-0 space-x-2">
            <div className="flex items-center justify-start space-x-2 text-green-400">
              <FaGithub className="size-6 ml-2" />
              <a className="text-lg" href={github}>
                Ver código
              </a>
            </div>
            {demo && (
              <div className="flex items-center justify-start space-x-2 text-green-400">
                <TbWorld className="size-6 ml-2" />
                <a className="text-lg" href={demo}>
                  Ver demo
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
