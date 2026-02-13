import { SkillsCard } from "./cards/SkillsCard";
import { FiServer, FiDatabase, FiSmartphone, FiSettings } from "react-icons/fi";
import { IoCodeSlash } from "react-icons/io5";

const skills = [
  {
    rol: "Backend",
    technologies: [
      "Java",
      "JavaScript/TypeScript",
      "Spring Boot",
      "NestJS",
      "Node.js",
      "Express",
    ],
    icon: <FiServer className="w-7 h-7 text-accent-400" />,
  },
  {
    rol: "Frontend",
    technologies: [
      "React",
      "JavaScript/TypeScript",
      "HTML/CSS",
      "Tailwind",
      "Material UI",
      "Next.js",
    ],
    icon: <IoCodeSlash className="w-7 h-7 text-accent-400" />,
  },
  {
    rol: "Mobile",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Native Modules",
      "Push Notifications",
    ],
    icon: <FiSmartphone className="w-7 h-7 text-accent-400" />,
  },
  {
    rol: "Databases",
    technologies: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Neptune (Gremlin)",
      "TypeORM",
      "Prisma",
    ],
    icon: <FiDatabase className="w-7 h-7 text-accent-400" />,
  },
  {
    rol: "DevOps / CI-CD",
    technologies: [
      "Docker",
      "Ubuntu Server",
      "Nginx",
      "Certbot",
      "GitHub Actions",
    ],
    icon: <FiSettings className="w-7 h-7 text-accent-400" />,
  },
];

export const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center py-24 px-6 overflow-hidden"
    >
      {/* Bg */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-500/5 rounded-full blur-[150px]" />
      <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-accent-500/3 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto w-full">
        <div data-animate="fade-up" className="mb-16 text-center">
          <p className="text-accent-400 text-sm uppercase tracking-[0.3em] font-medium mb-4">
            Tecnologías
          </p>
          <h2 className="font-[var(--font-syne)] text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Skills & Stack
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto text-sm md:text-base">
            Las herramientas y tecnologías que uso para construir productos
            digitales completos — del servidor a la pantalla.
          </p>
        </div>

        {/* Top row: 3 cards */}
        <div
          data-animate="stagger"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6"
        >
          {skills.slice(0, 3).map((skill) => (
            <SkillsCard key={skill.rol} {...skill} />
          ))}
        </div>

        {/* Bottom row: 2 cards centered */}
        <div
          data-animate="stagger"
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto"
        >
          {skills.slice(3).map((skill) => (
            <SkillsCard key={skill.rol} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};
