import { FaTerminal } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export const WindowsAboutMe = () => {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="w-full h-full bg-[#1E1E1E] p-3 rounded-md font-mono"
    >
      <div className="w-full h-full">
        <div className="relative rounded-md bg-[#2D2D2D] px-3 py-1 flex items-center justify-between">
          {/* Botones e ícono */}
          <div className="flex items-center space-x-2">
            <div className="size-3 rounded-full bg-red-500"></div>
            <div className="size-3 rounded-full bg-yellow-500"></div>
            <div className="size-3 rounded-full bg-green-500"></div>
            <FaTerminal className="size-3 text-green-400" />
          </div>

          {/* Contenido de la barra de windows */}
          <div className="flex items-center w-full justify-start space-x-2">
            <p className="text-[#9CA3AF] text-sm  mx-2 md:text-lg">
              sobre_mí.sh
            </p>
          </div>
        </div>
        <div className="my-4">
          <div>
            <p className="text-green-400 flex items-center">
              <FaArrowRight className="mr-2" />$ whoami
            </p>
            <motion.p
             initial={{ opacity: 0, y: +50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1 }}
             className="text-white my-2">
              Emiliano Gonzalez
            </motion.p>
          </div>
        </div>
        <div className="my-4">
          <div>
            <p className="text-green-400 flex items-center">
              <FaArrowRight className="mr-2" />$ whoami
            </p>
            <motion.p
             initial={{ opacity: 0, y: +50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1 }}
             className="text-white my-2">
              Desarrollador Backend apasionado por crear soluciones escalables y
              robustas. Especializado en arquitecturas de microservicios y APIs
              RESTful.
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
