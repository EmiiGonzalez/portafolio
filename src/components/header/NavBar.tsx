import { motion } from "motion/react";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import { WindowsBar } from "../shared/WindowsBar";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(
    window.innerWidth > 768 ? true : false
  );

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  };
  const handleWindowResize = () => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  };

  handleWindowResize();

  return (
    <WindowsBar>
      {/* Botón desplegable */}
      <button
        className="md:hidden absolute right-4 top-4 text-gray-400 hover:text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FaBars className="w-6 h-6" />
      </button>

      {/* Menú en pantallas pequeñas */}
      <motion.ul
        initial={{ opacity: 0, y: -20 }} // Animación inicial (cerrado)
        animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }} // Animación al abrir/cerrar
        transition={{ duration: 0.5 }}
        className={`${
          menuOpen ? "flex" : "hidden"
        } absolute top-16 left-0 w-full flex-col items-center space-y-4 py-1 md:flex md:relative md:top-auto md:left-auto md:w-full md:flex-row md:items-center md:justify-around md:space-y-0 md:space-x-4 text-gray-400 font-mono font-bold text-xl`}
      >
        <li>
          <a className="hover:text-white" href="/">
            Sobre Mí
          </a>
        </li>
        <li>
          <a className="hover:text-white" href="/about">
            Skills
          </a>
        </li>
        <li>
          <a className="hover:text-white" href="/blog">
            Proyectos
          </a>
        </li>
        <li>
          <a className="hover:text-white" href="/contact">
            Contacto
          </a>
        </li>
      </motion.ul>
    </WindowsBar>
  );
};
