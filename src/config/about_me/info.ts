import perfil_foto from "/img/perfil_foto.png";

export const info: InfoInterface = {
  mame: "Emiliano Gonzalez",
  description:
    "Desarrollador Full Stack y Mobile apasionado por crear soluciones completas y escalables. Especializado en arquitecturas de microservicios, APIs RESTful, aplicaciones web modernas y desarrollo mobile con React Native. Me enfoco en escribir código limpio, mantenible y siguiendo las mejores prácticas de desarrollo tanto en backend como frontend.",
  image: perfil_foto,
  experience: "2+ años",
  location: "Argentina",
  availability: "Disponible para proyectos",
};

interface InfoInterface {
  mame: string;
  description: string;
  image?: string;
  experience?: string;
  location?: string;
  availability?: string;
}

export const social: SocialInterface = {
  github: "https://github.com/EmiiGonzalez",
  linkedin: "https://www.linkedin.com/in/emiigonzalez33/",
  email: "emigonzalez3333@gmail.com",
};

interface SocialInterface {
  github: string;
  linkedin: string;
  email: string;
}

export const achievements = [
  {
    title: "Proyectos Completados",
    value: "20+",
    description: "Aplicaciones web y mobile desarrolladas"
  },
  {
    title: "Tecnologías",
    value: "15+",
    description: "Lenguajes y frameworks dominados"
  },
  {
    title: "Experiencia",
    value: "2+",
    description: "Años desarrollando software Full Stack"
  }
];