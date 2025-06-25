import projectImg from "/img/projects/project.jpg";
import techLibrary from "/img/projects/tech_library.jpg";
import escuelas_back from "/img/projects/escuelas_back.jpg";
import cortateBien from "/img/projects/cortate_bien.jpg";

export const Projects : ProjectInterface[] = [
  {
    title: "Cortate Bien - SaaS",
    description:
      "SaaS completo para gestión de peluquerías y barberías desarrollado con arquitectura moderna. Incluye sistema de reservas, gestión de clientes, dashboard administrativo, notificaciones push y aplicación móvil nativa. Implementé tanto el backend robusto como la experiencia de usuario completa en web y mobile.",
    technologies: ["NestJS", "React Native", "TypeScript", "PostgreSQL", "JWT", "Push Notifications", "Stripe"],
    github: "https://github.com/EmiiGonzalez/cortate_bien",
    demo: "https://www.cortatebien.com/",
    image: cortateBien,
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
    title: "API Gestion de clientes",
    description:
      "El proyecto Gestión de Clientes EGServis es un sistema desarrollado para administrar información de clientes y servicios. Incluye funciones como registro, consulta, y seguimiento de datos relevantes. Está diseño para optimizar procesos comerciales y mejorar la organización en empresas de servicios. Para más detalles, visita el repositorio.",
    technologies: ["Java", "MySQL", "JWT", "Spring Boot", "Docker"],
    github: "https://github.com/EmiiGonzalez/gestion_de_clientes_egservis",
    demo: undefined,
    image: projectImg,
  },
  {
    title: "Escuelas Project - Full Stack",
    description:
      "Sistema completo de gestión educativa desarrollado con stack moderno. Incluye backend robusto para gestionar clases, cursos, escuelas y asistencias, junto con un frontend intuitivo y responsive. Implementé toda la arquitectura desde la base de datos hasta la interfaz de usuario.",
    technologies: ["Java", "Spring Boot", "React", "TypeScript", "Material UI", "MySQL", "Docker", "TanStack Query"],
    github: "https://github.com/EmiiGonzalez/escuelas_project_back",
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