import { motion } from "motion/react";
import { WindowsBar } from "../shared/WindowsBar";
import { FaArrowRight } from "react-icons/fa6";
import { SkillsCard } from "./cards/SkillsCard";
import { FiServer } from "react-icons/fi";
import { IoCodeSlash } from "react-icons/io5";
import { FiDatabase } from "react-icons/fi";


export const WindowsSkills = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="w-full h-full bg-[#1E1E1E] p-3 my-5 rounded-md font-mono md:w-4/5 md:min-h-full md:p-6 md:mb-0 md:mx-auto" 
    >
        <div className="relative rounded-md bg-[#2D2D2D]flex items-center justify-between w-full">
          <WindowsBar>
            <p className="text-[#9CA3AF] text-sm  mx-2 md:text-lg">
            skills.sh
            </p>
          </WindowsBar>

          <div className="my-4">
            <motion.p 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-green-400 flex items-center">
              <FaArrowRight className="mr-2" />$ ls skills/
            </motion.p>
            <motion.div
             initial={{ opacity: 0, y: +50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1 }}
             className="text-white my-2 grid grid-cols-1 gap-5 p-2 rounded-md md:grid-cols-2 md:gap-4"
            >
              <SkillsCard technologies={["Java", "JavaScript/Typescript", "Spring Boot", "TypeORM", "Hibernate"]} rol="Backend" icon={<FiServer className="size-8 text-green-400" />} />
              <SkillsCard technologies={["React", "JavaScript/Typescript", "HTML/CSS", "Tailwind", "MUI"]} rol="Frontend" icon={<IoCodeSlash className="size-8 text-green-400" />} />
              <SkillsCard technologies={["MySQL", "MongoDB"]} rol="Databases" icon={<FiDatabase className="size-8 text-green-400" />} />
            </motion.div>
          </div>
      </div>
    </motion.section>
  );
};
