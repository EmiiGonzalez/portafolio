export const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-text-muted text-sm">
          © {new Date().getFullYear()} Emiliano Gonzalez. Todos los derechos
          reservados.
        </p>
        <p className="text-text-muted text-sm">
          Hecho con <span className="text-accent-400">♥</span> usando React +
          GSAP
        </p>
      </div>
    </footer>
  );
};
