interface SkillsCardProps {
  rol: string;
  technologies: string[];
  icon: React.ReactElement;
}

export const SkillsCard = ({ rol, technologies, icon }: SkillsCardProps) => {
  return (
    <div className="glass-card rounded-2xl p-6 md:p-8 hover:border-accent-400/20 transition-all duration-500 group hover:scale-[1.02]">
      <div className="flex items-center gap-4 mb-5">
        <div className="w-12 h-12 rounded-xl bg-accent-500/10 border border-accent-500/15 flex items-center justify-center group-hover:scale-110 group-hover:bg-accent-500/15 transition-all duration-300">
          {icon}
        </div>
        <h3 className="font-[var(--font-syne)] text-xl font-bold text-text-primary group-hover:text-accent-400 transition-colors">
          {rol}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs text-text-secondary py-2 px-3 rounded-lg bg-dark-700/60 border border-white/5 hover:border-accent-400/20 hover:text-accent-400 transition-all duration-200 font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};
