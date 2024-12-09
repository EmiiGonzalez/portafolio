import { motion } from "motion/react";
import { FaTerminal } from "react-icons/fa6";

export const WindowsBar = ({ children }: WindowsBarProps) => {
  return (
    <motion.nav
      className="relative w-full rounded-md bg-[#2D2D2D] p-4 flex items-center justify-between"
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

      {/* Contenido de la barra de windows */}
      <div className="flex items-center w-full justify-start space-x-2">
        {children}
      </div>
    </motion.nav>
  );
};

interface WindowsBarProps {
  children: React.ReactNode;
}
