import { motion } from "framer-motion";
import { FaDownload, FaEye } from "react-icons/fa";

export const HeroSection = () => {
  const handleDownloadCV = () => {
    // Aquí puedes agregar la lógica para descargar el CV
    console.log("Descargando CV...");
  };

  const handleViewCV = () => {
    // Aquí puedes agregar la lógica para ver el CV
    console.log("Viendo CV...");
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="w-full md:w-4/5 mx-auto text-center py-16 px-4"
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-4xl md:text-6xl font-bold text-white mb-6"
      >
        Hola, soy{" "}
        <span className="text-green-400 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
          Emiliano
        </span>
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
      >
        Desarrollador Backend especializado en crear{" "}
        <span className="text-green-400 font-semibold">soluciones escalables</span> y{" "}
        <span className="text-green-400 font-semibold">APIs robustas</span>
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleDownloadCV}
          className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          <FaDownload className="w-4 h-4" />
          <span>Descargar CV</span>
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleViewCV}
          className="flex items-center space-x-2 border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 px-6 py-3 rounded-lg font-medium transition-all duration-300"
        >
          <FaEye className="w-4 h-4" />
          <span>Ver CV Online</span>
        </motion.button>
      </motion.div>
    </motion.section>
  );
};