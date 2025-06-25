import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { ProjectInterface } from "../../../config/about_me/projects";
import { motion } from "framer-motion";

export const ProjectCard = ({
  title,
  description,
  technologies,
  github,
  image,
  demo,
}: ProjectInterface) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-start bg-[#2D2D2D] rounded-lg w-full border border-gray-700/50 hover:border-green-400/50 transition-all duration-300 md:min-h-40 h-full overflow-hidden shadow-lg hover:shadow-2xl group"
    >
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={image}
          alt={`Imagen del proyecto ${title}`}
          className="w-full h-full object-cover rounded-t-lg group-hover:scale-110 transition-transform duration-500 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="flex flex-col items-start w-full h-full justify-between p-4">
        <div className="flex flex-col w-full">
          <h3 className="text-xl text-green-400 font-bold mb-2 group-hover:text-green-300 transition-colors">
            {title}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
            {description}
          </p>
        </div>
        
        <div className="flex flex-col gap-4 w-full">
          <div className="flex items-center justify-start flex-wrap gap-2">
            {technologies.map((tech: string) => (
              <span
                key={Math.random() + tech}
                className="text-xs text-green-400 py-1 px-3 rounded-full bg-[#1E1E1E] border border-green-400/30 hover:border-green-400/60 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex items-center justify-start gap-4 pt-2 border-t border-gray-700/50">
            <a 
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors group/link"
            >
              <FaGithub className="size-4 group-hover/link:scale-110 transition-transform" />
              <span className="text-sm font-medium">Código</span>
            </a>
            {demo && (
              <a 
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors group/link"
              >
                <TbWorld className="size-4 group-hover/link:scale-110 transition-transform" />
                <span className="text-sm font-medium">Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};