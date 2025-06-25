import { motion } from "framer-motion";

export const SkillsCard = ({rol, technologies, icon}: SkillsCardsProps) => {
  return (
    <motion.div 
      whileHover={{ y: -3 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-start bg-[#2D2D2D] rounded-lg p-6 w-full border border-gray-700/50 hover:border-green-400/50 transition-all duration-300 md:min-h-40 shadow-lg hover:shadow-2xl group"
    >
      <div className="flex items-center justify-start space-x-4 w-full mb-4">
        <div className="group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-2xl text-green-400 font-bold group-hover:text-green-300 transition-colors">
          {rol}
        </h3>
      </div>
      
      <div className="flex flex-wrap gap-2 w-full">
        {technologies.map((tech) => (
          <span 
            key={Math.random() + tech}
            className="text-sm text-gray-300 py-2 px-3 rounded-md bg-[#1E1E1E] border border-gray-600/50 hover:border-green-400/50 hover:text-green-400 transition-all duration-200"
          >
            {tech}
          </span>
        ))} 
      </div>
    </motion.div>
  );
};

interface SkillsCardsProps {
    rol: string
    technologies: string[]
    icon: React.ReactElement
}