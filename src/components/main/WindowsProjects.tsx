import { motion } from "motion/react";
import { WindowsBar } from "../shared/WindowsBar";
import { FaArrowRight } from "react-icons/fa6";
import { ProjectCard } from "./cards/ProjectCard";
import { ProjectInterface, Projects } from "../../config/about_me/Projects.ts";

export const WindowsProjects = () => {
  return (
    <motion.section
      id="proyectos"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="w-full h-full bg-[#1E1E1E] p-3 my-5 rounded-md font-mono md:w-4/5 md:min-h-full md:p-6 md:mb-0 md:mx-auto"
    >
      <div className="relative rounded-md bg-[#2D2D2D]flex items-center justify-between w-full">
        <WindowsBar>
          <p className="text-[#9CA3AF] text-sm  mx-2 md:text-lg">kills.sh</p>
        </WindowsBar>
      </div>

      <div className="my-4">
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-green-400 flex items-center"
        >
          <FaArrowRight className="mr-2" />$ ls kills/
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: +50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white my-2 grid grid-cols-1 gap-5 p-2 rounded-md md:grid-cols-2 md:gap-3"
        >
          {Projects.map((project: ProjectInterface) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
