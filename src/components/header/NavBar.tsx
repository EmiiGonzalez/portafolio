import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import gsap from "gsap";
import Lenis from "lenis";

const navLinks = [
  { label: "Sobre Mí", id: "#sobre_mi" },
  { label: "Skills", id: "#skills" },
  { label: "Proyectos", id: "#proyectos" },
  { label: "Contenido", id: "#contenido" },
  { label: "Contacto", id: "#contacto" },
];

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setProgress(height > 0 ? (winScroll / height) * 100 : 0);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 },
      );
    }
  }, []);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    const lenis = (window as unknown as Record<string, Lenis>).__lenis;
    const target = document.querySelector(id);
    if (lenis && target) {
      lenis.scrollTo(target as HTMLElement, { offset: -80 });
    }
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-transparent! ${
        scrolled ? "glass shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav("#hero")}
          className="font-(--font-syne) text-xl font-bold tracking-tight"
        >
          <span className="text-gradient">emi</span>
          <span className="text-text-secondary">dev</span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNav(link.id)}
                className="text-sm text-text-secondary hover:text-accent-400 transition-colors duration-300 font-medium tracking-wide uppercase"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <a
              href="/Emiliano Gonzalez_CV.pdf"
              download
              className="text-sm px-4 py-2 rounded-full bg-accent-500/10 text-accent-400 border border-accent-500/20 hover:bg-accent-500/20 transition-all duration-300 font-medium"
            >
              CV
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-text-secondary hover:text-white transition-colors z-50"
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 glass transition-all duration-500 flex flex-col items-center justify-center gap-8 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => handleNav(link.id)}
            className="text-2xl font-[var(--font-syne)] font-semibold text-text-secondary hover:text-accent-400 transition-colors"
          >
            {link.label}
          </button>
        ))}
        <a
          href="/Emiliano Gonzalez_CV.pdf"
          download
          className="text-lg px-6 py-3 rounded-full bg-accent-500/10 text-accent-400 border border-accent-500/20 hover:bg-accent-500/20 transition-all duration-300 font-medium"
        >
          Descargar CV
        </a>
      </div>

      {/* Scroll progress bar — no visible background track */}
      <div className="absolute bottom-0 left-0 h-[2px] w-full">
        <div
          className="h-full bg-gradient-to-r from-accent-500 to-accent-400 transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
    </nav>
  );
};
