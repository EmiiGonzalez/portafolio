import {
  FaInstagram,
  FaTiktok,
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { social } from "../../config/about_me/info";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/soyemidev/",
    username: "@soyemidev",
    icon: <FaInstagram />,
    color: "from-pink-500 to-purple-600",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@soyemidev?lang=es",
    username: "@soyemidev",
    icon: <FaTiktok />,
    color: "from-cyan-400 to-pink-500",
  },
  {
    label: "Email",
    href: "mailto:emidev06@gmail.com",
    username: "emidev06@gmail.com",
    icon: <MdOutlineEmail />,
    color: "from-accent-400 to-accent-600",
  },
  {
    label: "GitHub",
    href: social.github,
    username: "EmiiGonzalez",
    icon: <FaGithub />,
    color: "from-gray-400 to-gray-600",
  },
  {
    label: "LinkedIn",
    href: social.linkedin,
    username: "emiigonzalez33",
    icon: <FaLinkedin />,
    color: "from-blue-400 to-blue-600",
  },
];

export const ContactSection = () => {
  return (
    <section
      id="contacto"
      className="relative min-h-screen flex items-center justify-center py-24 px-6 overflow-hidden grain"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent-500/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-3xl mx-auto text-center w-full">
        <div data-animate="fade-up">
          <p className="text-accent-400 text-sm uppercase tracking-[0.3em] font-medium mb-4">
            Contacto
          </p>
          <h2 className="font-[var(--font-syne)] text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Hablemos
          </h2>
          <p className="text-text-secondary text-lg md:text-xl max-w-xl mx-auto mb-16 leading-relaxed">
            ¿Tenés un proyecto en mente? Encontrame en mis redes o mandame un
            mail directamente.
          </p>
        </div>

        {/* Social links grid */}
        <div
          data-animate="stagger"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group glass-card rounded-2xl p-5 flex items-center gap-4 hover:border-accent-400/30 transition-all duration-500 hover:scale-[1.02] overflow-hidden min-w-0"
            >
              <div
                className={`w-11 h-11 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center text-white text-lg shrink-0 group-hover:scale-110 transition-transform duration-300`}
              >
                {link.icon}
              </div>
              <div className="min-w-0 text-left">
                <p className="text-text-primary font-semibold text-sm">
                  {link.label}
                </p>
                <p className="text-text-muted text-xs truncate">
                  {link.username}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div data-animate="fade-up" data-delay="0.3">
          <a
            href="/Emiliano Gonzalez_CV.pdf"
            download
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-accent-500 text-dark-900 font-bold text-sm uppercase tracking-widest hover:bg-accent-400 transition-all duration-300 hover:shadow-[0_0_40px_rgba(125,255,32,0.3)]"
          >
            <FaDownload className="w-4 h-4" />
            Descargar mi CV
          </a>
        </div>
      </div>
    </section>
  );
};
