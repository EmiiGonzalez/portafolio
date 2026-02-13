import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  DeployedProjects,
  OtherProjects,
} from "../../config/about_me/projects";
import { ProjectCard } from "./cards/ProjectCard";

gsap.registerPlugin(ScrollTrigger);

export const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section header
      const header = sectionRef.current?.querySelector(".projects-header");
      if (header) {
        gsap.fromTo(
          header,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: header,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // Animate category labels
      const labels = sectionRef.current?.querySelectorAll(".category-label");
      labels?.forEach((label) => {
        gsap.fromTo(
          label,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: label,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          },
        );
      });

      // Animate each project card with staggered reveal
      const cards = sectionRef.current?.querySelectorAll(
        ".project-card-wrapper",
      );
      cards?.forEach((card, i) => {
        const isEven = i % 2 === 0;
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 80,
            x: isEven ? -40 : 40,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="proyectos"
      ref={sectionRef}
      className="relative py-24 px-6 overflow-hidden"
    >
      {/* Bg accent */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-accent-500/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-accent-500/3 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="projects-header mb-16 text-center">
          <p className="text-accent-400 text-sm uppercase tracking-[0.3em] font-medium mb-4">
            Portfolio
          </p>
          <h2 className="font-[var(--font-syne)] text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Proyectos
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto text-sm md:text-base">
            Desde SaaS completos hasta sistemas internos — cada proyecto es una
            oportunidad para resolver problemas reales.
          </p>
        </div>

        {/* Deployed */}
        <div className="mb-20">
          <div className="category-label flex items-center gap-4 mb-10">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent-400 uppercase tracking-[0.2em]">
              <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
              En producción
            </span>
            <div className="flex-1 h-px bg-white/5" />
          </div>

          <div className="grid gap-8 md:gap-10">
            {DeployedProjects.map((project, i) => (
              <div key={project.title} className="project-card-wrapper">
                <ProjectCard {...project} index={i} />
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <div className="category-label flex items-center gap-4 mb-10">
            <span className="text-sm font-semibold text-text-secondary uppercase tracking-[0.2em]">
              Otros proyectos
            </span>
            <div className="flex-1 h-px bg-white/5" />
          </div>

          <div className="grid gap-8 md:gap-10">
            {OtherProjects.map((project, i) => (
              <div key={project.title} className="project-card-wrapper">
                <ProjectCard {...project} index={DeployedProjects.length + i} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
