import { FaTerminal } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { info } from "../../config/about_me/info";

export const WindowsAboutMe = () => {
  const { mame, description } = info;
  return (
    <motion.section
      id="sobre_mi"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-full md:w-4/5 flex flex-col items-center justify-center md:flex-row-reverse gap-4"
    >
      <picture className="w-full md:w-fit">
        <motion.img
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
          src={info.image}
          alt="Foto de perfil"
          className="mx-auto block aspect-square rounded-3xl mb-4 w-1/2 md:mb-0 md:w-full"
        />
      </picture>

      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full h-full bg-[#1E1E1E] p-3 rounded-md font-mono md:w-3/4 md:min-h-full md:p-6 md:mt-0 md:mb-0 md:mx-auto"
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
                className="text-white my-2"
              >
                {mame}
              </motion.p>
            </div>
          </div>
          <div className="my-4">
            <div>
              <p className="text-green-400 flex items-center">
                <FaArrowRight className="mr-2" />$ cat about.txt
              </p>
              <motion.p
                initial={{ opacity: 0, y: +50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-white my-2"
              >
                {description}
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};
