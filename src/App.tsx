import { NavBar } from "./components/header/NavBar";
import { WindowsAboutMe } from "./components/main/WindowsAboutMe";
import perfil_foto from "./assets/img/perfil_foto.png";
import { motion } from "motion/react";

function App() {
  return (
    <>
      <header className="w-full sticky top-0 z-50 mb-4">
        <NavBar />
      </header>
      <main className="w-full mt-4">
        <motion.section
          id="sobre_mi"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="h-full w-full flex flex-col items-end justify-center md:flex-row-reverse gap-4"
        >
          <picture className="w-full md:w-3/12">
          <motion.img
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
            src={perfil_foto}
            alt="Foto de perfil"
            className="mx-auto block aspect-square rounded-3xl mb-4 w-1/2 md:mb-0 md:w-full"
          />
          </picture>

          <WindowsAboutMe />
        </motion.section>
      </main>
    </>
  );
}

export default App;
