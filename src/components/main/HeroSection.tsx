import { useEffect, useRef } from "react";
import { FaDownload } from "react-icons/fa";
import { FiArrowDown } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.8 });

      tl.fromTo(
        titleRef.current,
        { y: 100, opacity: 0, clipPath: "inset(100% 0 0 0)" },
        {
          y: 0,
          opacity: 1,
          clipPath: "inset(0% 0 0 0)",
          duration: 1.2,
          ease: "power4.out",
        },
      )
        .fromTo(
          subtitleRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.4",
        )
        .fromTo(
          ctaRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
          "-=0.3",
        )
        .fromTo(
          scrollRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
          "-=0.2",
        );

      // GTA 6 style: pin the section and scale/fade the entire content block as user scrolls past
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          if (!contentRef.current) return;
          const p = self.progress;
          const scale = 1 - p * 0.15;
          const opacity = 1 - p * 1.5;
          contentRef.current.style.transform = `scale(${scale}) translateY(${-p * 80}px)`;
          contentRef.current.style.opacity = `${Math.max(0, opacity)}`;
        },
      });

      // Floating scroll indicator
      gsap.to(scrollRef.current, {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToAbout = () => {
    const lenis = (window as unknown as Record<string, Lenis>).__lenis;
    const target = document.querySelector("#sobre_mi");
    if (lenis && target) {
      lenis.scrollTo(target as HTMLElement, { offset: -80 });
    }
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden grain"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-[120px]" />

      <div
        ref={contentRef}
        className="relative z-10 max-w-5xl mx-auto text-center will-change-transform"
      >
        <h1
          ref={titleRef}
          className="font-[var(--font-syne)] text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold leading-[0.9] tracking-tight mb-8"
        >
          <span className="block text-text-primary">Hola, soy</span>
          <span className="block text-gradient glow-text mt-2">Emiliano</span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Desarrollador{" "}
          <span className="text-accent-400 font-semibold">Full Stack</span> &{" "}
          <span className="text-accent-400 font-semibold">Mobile</span> —
          creando experiencias digitales escalables y modernas.
        </p>

        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="/Emiliano Gonzalez_CV.pdf"
            download
            className="group flex items-center gap-3 px-8 py-4 rounded-full bg-accent-500 text-dark-900 font-bold text-sm uppercase tracking-widest hover:bg-accent-400 transition-all duration-300 hover:shadow-[0_0_40px_rgba(125,255,32,0.3)]"
          >
            <FaDownload className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            Descargar CV
          </a>
          <a
            href="/Emiliano Gonzalez_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full border border-accent-500/30 text-accent-400 font-bold text-sm uppercase tracking-widest hover:bg-accent-500/10 transition-all duration-300"
          >
            Ver CV Online
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        ref={scrollRef}
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-text-muted hover:text-accent-400 transition-colors cursor-pointer"
      >
        <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
        <FiArrowDown className="w-5 h-5" />
      </button>
    </section>
  );
};
