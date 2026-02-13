import projectImg from "/img/projects/project.jpg";
import techLibrary from "/img/projects/tech_library.jpg";
import escuelas_back from "/img/projects/escuelas_back.jpg";
import cortateBien from "/img/projects/cortate_bien.jpg";
import cortateBienMobile from "/img/projects/cortate_bien_mobile.png";
import pandoraBox from "/img/projects/pandora_box_ecommerce.png";
import controlStock from "/img/projects/control_stock.png";

export interface ProjectInterface {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  playStore?: string;
  image: string;
}

export const DeployedProjects: ProjectInterface[] = [
  {
    title: "Cortate Bien — Web",
    description:
      "SaaS completo para gestión de barberías. Sistema de reservas online, dashboard administrativo, gestión de clientes, chat en tiempo real y notificaciones push. Arquitectura full stack con backend robusto y frontend moderno.",
    technologies: [
      "NestJS",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Socket.IO",
      "JWT",
    ],
    demo: "https://www.cortatebien.com/",
    image: cortateBien,
  },
  {
    title: "Cortate Bien — Mobile",
    description:
      "Aplicación móvil nativa para Android. Permite a clientes buscar barberías, reservar turnos, chatear con barberos y recibir notificaciones push. Monetización con Google Ads y planes premium.",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Socket.IO",
      "FCM",
      "Google Ads",
    ],
    playStore:
      "https://play.google.com/store/apps/details?id=com.cortate_bien_app",
    image: cortateBienMobile,
  },
  {
    title: "Pandora Box — E-commerce",
    description:
      "Tienda online moderna con catálogo de productos, carrito de compras y experiencia de usuario optimizada. Diseño responsive y performante.",
    technologies: ["React", "TypeScript", "Tailwind", "Next.js"],
    demo: "https://www.pandorabox.store/",
    image: pandoraBox,
  },
  {
    title: "Control Stock Seller",
    description:
      "Sistema de gestión de inventario y ventas. CRUD completo de productos con variantes (talle, color, stock), proceso de ventas con pagos mixtos, dashboard con KPIs, caja registradora y exportación/importación CSV.",
    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "React",
      "TypeScript",
      "Docker",
      "Flyway",
    ],
    image: controlStock,
  },
  {
    title: "Tech Library",
    description:
      "Aplicación web para gestionar bibliotecas técnicas. Backend completo con autenticación, base de datos relacional y despliegue en servidor Ubuntu con Docker y Nginx.",
    technologies: [
      "TypeScript",
      "MySQL",
      "JWT",
      "Express",
      "Docker",
      "Nginx",
      "Ubuntu Server",
    ],
    github: "https://github.com/Nievas2/tech-library",
    demo: "https://tech-library-iota.vercel.app/",
    image: techLibrary,
  },
];

export const OtherProjects: ProjectInterface[] = [
  {
    title: "API Gestión de Clientes",
    description:
      "Sistema para administrar información de clientes y servicios. Incluye registro, consulta y seguimiento de datos, optimizando procesos comerciales.",
    technologies: ["Java", "MySQL", "JWT", "Spring Boot", "Docker"],
    github: "https://github.com/EmiiGonzalez/gestion_de_clientes_egservis",
    image: projectImg,
  },
  {
    title: "Escuelas Project",
    description:
      "Sistema completo de gestión educativa. Backend robusto para gestionar clases, cursos, escuelas y asistencias, con frontend intuitivo y responsive.",
    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "TypeScript",
      "Material UI",
      "MySQL",
      "Docker",
    ],
    github: "https://github.com/EmiiGonzalez/escuelas_project_back",
    image: escuelas_back,
  },
];
