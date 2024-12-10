export const projects : ProjectInterface[] = [
  {
    title: "API Gestion de clientes",
    description:
      "Sistema backend completo para una plataforma de comercio electrónico con autenticación JWT, pagos y gestión de pedidos.",
    technologies: ["Node.js", "MongoDB", "JWT"],
    github: "#",
    demo: "https://demo.proyecto.com",
    image: "../../../assets/img/project.png",
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
