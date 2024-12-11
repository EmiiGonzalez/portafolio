import projectImg from "../../assets/img/project.png";

export const Projects : ProjectInterface[] = [
  {
    title: "API Gestion de clientes",
    description:
      "Sistema backend completo para una plataforma de comercio electrónico con autenticación JWT, pagos y gestión de pedidos.",
    technologies: ["Node.js", "MongoDB", "JWT"],
    github: "#",
    demo: "https://demo.proyecto.com",
    image: projectImg,
  },
  {
    title: "API Gestion de clientes 1",
    description:
      "Sistema backend completo para una plataforma de comercio electrónico con autenticación JWT, pagos y gestión de pedidos.",
    technologies: ["Node.js", "MongoDB", "JWT"],
    github: "#",
    demo: "https://demo.proyecto.com",
    image: projectImg,
  },
  {
    title: "API Gestion de clientes 2",
    description:
      "Sistema backend completo para una plataforma de comercio electrónico con autenticación JWT, pagos y gestión de pedidos.",
    technologies: ["Node.js", "MongoDB", "JWT"],
    github: "#",
    demo: "https://demo.proyecto.com",
    image: projectImg,
  },
];

interface ProjectInterface {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
}
