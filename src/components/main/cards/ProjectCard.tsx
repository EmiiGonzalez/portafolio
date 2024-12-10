import { FaGithub } from "react-icons/fa";

export const ProjectCard = ({
  title,
  description,
  technologies,
  github,
  image,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col items-start bg-[#2D2D2D] space-x-2 rounded-lg w-full border border-transparent hover:border-green-400 transition-all md:min-h-40 h-full overflow-hidden md:pb-5">
      <img
        src={image}
        alt="imagen del proyecto"
        className="w-full h-1/2 rounded-t-lg hover:scale-105 hover:transition-all hover:duration-500 hover:ease-in-out"
      />
      <div className="flex flex-col mt-3 mx-2">
        <p className="text-2xl text-green-400 font-bold">{title}</p>
        <p className="text-white text-lg">{description}</p>
        <div className="flex items-center justify-start space-x-2 mt-5">
          {technologies.map((t) => (
            <p className="text-green-400 py-1 px-2 rounded-md bg-[#1E1E1E]">
              {t}
            </p>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-start space-x-2 mt-5 text-green-400">
        <FaGithub className="size-6 ml-2" />
        <a className="text-lg" href={github}>
          Ver código
        </a>
      </div>
    </div>
  );
};

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
}
