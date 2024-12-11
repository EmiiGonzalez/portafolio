export const info : InfoInterface = {
    mame: "Emiliano Gonzalez",
    description: "Desarrollador Backend apasionado por crear soluciones escalables y robustas. Especializado en arquitecturas de microservicios y APIs RESTful."
}

interface InfoInterface {
    mame: string,
    description: string
}

export const social : SocialInterface = {
    github: "https://github.com/EmiiGonzalez",
    linkedin: "https://www.linkedin.com/in/emiigonzalez33/",
    email: "emigonzalez3333@gmail.com"
}

interface SocialInterface {
    github: string,
    linkedin: string,
    email: string
}