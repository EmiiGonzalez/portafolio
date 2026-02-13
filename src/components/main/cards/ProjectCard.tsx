import { FaGithub, FaGooglePlay } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { ProjectInterface } from "../../../config/about_me/projects";

interface ProjectCardProps extends ProjectInterface {
  index: number;
}

export const ProjectCard = ({
  title,
  description,
  technologies,
  github,
  image,
  demo,
  playStore,
  index,
}: ProjectCardProps) => {
  return (
    <div
      className={`glass-card rounded-2xl md:rounded-3xl overflow-hidden w-full max-w-5xl mx-auto flex flex-col md:flex-row ${
        index % 2 === 1 ? "md:flex-row-reverse" : ""
      } hover:border-accent-400/20 transition-all duration-500 group`}
    >
      {/* Image — fills entire container */}
      <div className="relative md:w-[45%] min-h-[220px] sm:min-h-[260px] md:min-h-[320px] overflow-hidden flex-shrink-0">
        <img
          src={image}
          alt={`Proyecto ${title}`}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t ${
            index % 2 === 1 ? "md:bg-gradient-to-l" : "md:bg-gradient-to-r"
          } from-dark-700/80 via-dark-700/20 to-transparent`}
        />

        {/* Project number */}
        <span className="absolute top-4 left-4 font-[var(--font-syne)] text-6xl md:text-7xl font-extrabold text-white/5 select-none">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Info */}
      <div className="md:w-[55%] p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-between">
        <div>
          <h3 className="font-[var(--font-syne)] text-xl sm:text-2xl md:text-3xl font-bold text-text-primary mb-2 md:mb-3 group-hover:text-accent-400 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed mb-5 md:mb-6">
            {description}
          </p>
        </div>

        <div>
          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 md:mb-6">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs text-accent-400 py-1 px-2.5 sm:py-1.5 sm:px-3 rounded-full bg-accent-500/10 border border-accent-500/15 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 flex-wrap">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-text-secondary hover:text-accent-400 transition-colors text-sm font-medium group/link"
              >
                <FaGithub className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                Código
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-text-secondary hover:text-accent-400 transition-colors text-sm font-medium group/link"
              >
                <TbWorld className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                Demo
              </a>
            )}
            {playStore && (
              <a
                href={playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-text-secondary hover:text-accent-400 transition-colors text-sm font-medium group/link"
              >
                <FaGooglePlay className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                Play Store
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
