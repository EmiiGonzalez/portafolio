import projectImg from "/img/projects/project.jpg";
import techLibrary from "/img/projects/tech_library.jpg";
import escuelas_back from "/img/projects/escuelas_back.jpg";

export const Projects : ProjectInterface[] = [
  {
    title: "API Gestion de clientes",
    description:
      "El proyecto Gestión de Clientes EGServis es un sistema desarrollado para administrar información de clientes y servicios. Incluye funciones como registro, consulta, y seguimiento de datos relevantes. Está diseño para optimizar procesos comerciales y mejorar la organización en empresas de servicios. Para más detalles, visita el repositorio.",
    technologies: ["Java", "MySQL", "JWT", "Spring Boot", "Docker"],
    github: "https://github.com/EmiiGonzalez/gestion_de_clientes_egservis",
    demo: undefined,
    image: projectImg,
  },
  {
    title: "Tech Library",
    description:
      "Desarrollé el backend de Tech Library, una aplicación web para gestionar bibliotecas técnicas. Implementé la lógica del servidor, integraciones con bases de datos, y aseguré una arquitectura escalable y eficiente. El proyecto está desarrollado principalmente en TypeScript y despliegue en Docker con un servidor local armado por mi mismo.",
    technologies: ["TypeScript", "MySQL", "JWT", "Express", "Docker", "Passport", "Ubuntu Server"],
    github: "https://github.com/Nievas2/tech-library",
    demo: "https://tech-library-iota.vercel.app/",
    image: techLibrary,
  },
  {
    title: "Escuelas Project Backend",
    description:
      "El proyecto Escuelas Project Back es el backend de un sistema para gestionar temas relacionados con clases, cursos, escuelas y asistencias. Está desarrollado principalmente en Java (99.4%) y utiliza un Dockerfile para su configuración. Incluye documentación y archivos como un archivo Excel de códigos de error y un Docker Compose YAML para la ejecución de servicios",
    technologies: ["Java", "MySQL", "JWT", "Spring Boot", "Docker"],
    github: "https://github.com/EmiiGonzalez/escuelas_project_back",
    demo: undefined,
    image: escuelas_back,
  },
  {
    title: "Escuelas Project Frontend",
    description:
      "El proyecto Escuelas Project Front TS es el frontend de un sistema de gestión educativa, desarrollado con React, TypeScript, Material UI y Vite. Utiliza ESLint para mantener buenas prácticas de codificación. El código sigue una estructura modular y está configurado para facilitar la integración con el backend",
    technologies: ["React", "TypeScript", "Material UI", "Vite", "TanStack Query", "Zustand"],
    github: "https://github.com/EmiiGonzalez/escuelas_project_front_ts",
    demo: undefined,
    image: escuelas_back,
  },
];

export interface ProjectInterface {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string | undefined;
  image: string;
}
