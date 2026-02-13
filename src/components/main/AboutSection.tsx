import { useEffect, useRef } from "react";
import { info } from "../../config/about_me/info";
import { FaTerminal, FaArrowRight } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Calculates months between a start date and now */
const getMonthsSince = (year: number, month: number): number => {
  const now = new Date();
  return (now.getFullYear() - year) * 12 + (now.getMonth() + 1 - month);
};

export const AboutSection = () => {
  const { mame, description } = info;
  const useTeamMonths = getMonthsSince(2025, 10);
  const sectionRef = useRef<HTMLElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Terminal "boot" sequence
      if (terminalRef.current) {
        // Typing cursor blink on terminal header
        gsap.fromTo(
          terminalRef.current.querySelector(".cursor-blink"),
          { opacity: 1 },
          { opacity: 0, duration: 0.5, repeat: -1, yoyo: true },
        );
      }

      // Each terminal "line" fades in sequentially when scrolled into view
      if (linesRef.current) {
        const lines = linesRef.current.querySelectorAll(".terminal-line");
        lines.forEach((line, i) => {
          gsap.fromTo(
            line,
            { opacity: 0, x: -20 },
            {
              opacity: 1,
              x: 0,
              duration: 0.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: line,
                start: "top 90%",
                toggleActions: "play none none none",
              },
              delay: i * 0.08,
            },
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="sobre_mi"
      ref={sectionRef}
      className="relative min-h-screen flex items-center py-24 px-6 overflow-hidden"
    >
      {/* Bg accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-500/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Photo — shadow constrained to image bounds */}
        <div data-animate="fade-left" className="relative flex justify-center">
          <div className="relative group overflow-hidden rounded-3xl">
            <img
              src={info.image}
              alt="Foto de perfil de Emiliano"
              className="w-full max-w-md aspect-square object-cover rounded-3xl border border-white/5 shadow-2xl group-hover:shadow-accent-500/15 transition-shadow duration-700"
            />
          </div>
        </div>

        {/* Terminal content */}
        <div
          ref={terminalRef}
          data-animate="fade-right"
          className="glass-card rounded-2xl p-6 md:p-8 font-mono"
        >
          {/* Terminal header */}
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <FaTerminal className="w-3.5 h-3.5 text-accent-400/60" />
            <span className="text-text-muted text-sm">sobre_mí.sh</span>
            <span className="cursor-blink ml-auto text-accent-400 text-sm">
              ▊
            </span>
          </div>

          <div ref={linesRef} className="space-y-0">
            {/* whoami */}
            <div className="terminal-line mb-5">
              <p className="text-accent-400 flex items-center gap-2 mb-2">
                <FaArrowRight className="w-3 h-3" />
                <span>$ whoami</span>
              </p>
              <p className="text-text-primary text-lg font-semibold pl-5">
                {mame}
              </p>
            </div>

            {/* about */}
            <div className="terminal-line mb-5">
              <p className="text-accent-400 flex items-center gap-2 mb-2">
                <FaArrowRight className="w-3 h-3" />
                <span>$ cat about.txt</span>
              </p>
              <p className="text-text-secondary leading-relaxed pl-5 text-sm">
                {description}
              </p>
            </div>

            {/* experience */}
            <div className="terminal-line mb-5">
              <p className="text-accent-400 flex items-center gap-2 mb-3">
                <FaArrowRight className="w-3 h-3" />
                <span>$ cat experience.json</span>
              </p>
              <div className="pl-5 space-y-3 text-sm">
                {/* useTeam */}
                <div className="terminal-line glass-card rounded-xl p-4 border border-white/5">
                  <div className="flex items-center justify-between mb-1 flex-wrap gap-2">
                    <a
                      href="https://www.linkedin.com/company/useteam/posts/?feedView=all"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-primary font-semibold hover:text-accent-400 transition-colors"
                    >
                      useTeam
                    </a>
                    <span className="text-accent-400 text-xs font-medium px-2 py-0.5 rounded-full bg-accent-500/10 border border-accent-500/15">
                      Actual
                    </span>
                  </div>
                  <p className="text-text-muted text-xs mb-1">
                    Desarrollador Full Stack · oct 2025 – presente (
                    {useTeamMonths} meses)
                  </p>
                  <p className="text-text-secondary text-xs leading-relaxed">
                    Desarrollo de plataformas web y APIs con React, NestJS y AWS
                    Neptune.
                  </p>
                </div>

                {/* FixRiver */}
                <div className="terminal-line glass-card rounded-xl p-4 border border-white/5">
                  <div className="flex items-center justify-between mb-1 flex-wrap gap-2">
                    <a
                      href="https://fixriver.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-primary font-semibold hover:text-accent-400 transition-colors"
                    >
                      FixRiver
                    </a>
                    <span className="text-text-muted text-xs">7 meses</span>
                  </div>
                  <p className="text-text-muted text-xs mb-1">
                    Desarrollador Full Stack · abr 2025 – oct 2025
                  </p>
                  <p className="text-text-secondary text-xs leading-relaxed">
                    Desarrollo de aplicaciones empresariales con Spring Boot,
                    React y microservicios.
                  </p>
                </div>
              </div>
            </div>

            {/* stack */}
            <div className="terminal-line">
              <p className="text-accent-400 flex items-center gap-2 mb-2">
                <FaArrowRight className="w-3 h-3" />
                <span>$ ls stack/</span>
              </p>
              <div className="pl-5 space-y-1.5 text-sm text-text-secondary">
                <p className="terminal-line">
                  • <span className="text-accent-400">Backend:</span> Java,
                  NestJS, Spring Boot, Node.js
                </p>
                <p className="terminal-line">
                  • <span className="text-accent-400">Frontend:</span> React,
                  TypeScript, Next.js
                </p>
                <p className="terminal-line">
                  • <span className="text-accent-400">Mobile:</span> React
                  Native, Expo
                </p>
                <p className="terminal-line">
                  • <span className="text-accent-400">Database:</span>{" "}
                  PostgreSQL, MySQL, MongoDB, Neptune
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
