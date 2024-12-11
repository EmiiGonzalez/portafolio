import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa6";
import { useRef, useState, useEffect } from "react";
import { WindowsBar } from "../shared/WindowsBar";


export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(
    window.innerWidth < 768 ? false : true
  );

  const menuRef = useRef<HTMLUListElement>(null);
  const navbarHeight = 65; // Altura aproximada de la barra de navegación

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        window.innerWidth < 768 &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest("button")
      ) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleNavigation = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      const offset = section.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: offset});
    }
    if (window.innerWidth < 768) {
      setMenuOpen(false);
    }
  };

  const onClick = () => {
    if (window.innerWidth < 768) {
      setMenuOpen(!menuOpen);
    }
  };

  return (
    <WindowsBar>
      {/* Botón desplegable */}
      <button
        className="md:hidden absolute right-4 top-4 text-gray-400 hover:text-white"
        onClick={onClick}
      >
        <FaBars className="w-6 h-6" />
      </button>

      {/* Menú en pantallas pequeñas */}
      <motion.ul
        ref={menuRef}
        initial={{ opacity: 0, y: -20 }} // Animación inicial (cerrado)
        animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }} // Animación al abrir/cerrar
        transition={{ duration: 0.5 }}
        className={`${
          menuOpen ? "flex" : "hidden"
        } absolute bg-[#2D2D2D] rounded-b-xl top-16 left-0 w-full flex-col items-center space-y-4 py-1 md:flex md:relative md:top-auto md:left-auto md:w-full md:flex-row md:items-center md:justify-around md:space-y-0 md:space-x-4 text-gray-400 font-mono font-bold text-xl`}
      >
        <li>
          <button
            className="hover:text-white"
            onClick={() => handleNavigation("#sobre_mi")}
          >
            Sobre Mí
          </button>
        </li>
        <li>
          <button
            className="hover:text-white"
            onClick={() => handleNavigation("#skills")}
          >
            Skills
          </button>
        </li>
        <li>
          <button
            className="hover:text-white"
            onClick={() => handleNavigation("#proyectos")}
          >
            Proyectos
          </button>
        </li>
        <li>
          <button
            className="hover:text-white"
            onClick={() => handleNavigation("#contacto")}
          >
            Contacto
          </button>
        </li>
      </motion.ul>
    </WindowsBar>
  );
};
