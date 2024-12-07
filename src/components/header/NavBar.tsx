import { motion } from "motion/react";
import { FaTerminal, FaBars } from "react-icons/fa6";
import { useEffect, useState } from "react";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(
    window.innerWidth > 768 ? true : false
  );
  useEffect(() => {
      window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
          setMenuOpen(true);
        }
        else {
          setMenuOpen(false);
        }
      })
  }, [])

  return (
    <motion.nav
      className="relative rounded-md bg-[#1E1E1E] p-4 flex items-center justify-between"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Botones e ícono */}
      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 rounded-full bg-red-500"></div>
        <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
        <div className="w-6 h-6 rounded-full bg-green-500"></div>
        <FaTerminal className="w-6 h-6 text-green-400" />
      </div>

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
        } absolute top-16 left-0 w-full bg-[#1E1E1E] flex-col items-center space-y-4 py-1 md:flex md:relative md:top-auto md:left-auto md:w-auto md:flex-row md:space-y-0 md:space-x-4 text-gray-400 font-mono font-bold text-xl`}
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
    </motion.nav>
  );
};
