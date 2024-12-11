import { NavBar } from "./components/header/NavBar";
import { WindowsAboutMe } from "./components/main/WindowsAboutMe";
import perfil_foto from "./assets/img/perfil_foto.png";
import { motion } from "motion/react";
import { WindowsSkills } from "./components/main/WindowsSkills";
import { WindowsProjects } from "./components/main/WindowsProjects";
import { WindowsForm } from "./components/main/WindowsForm";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <>
      <header className="w-full sticky md:w-[95%] md:mx-auto top-0 z-50 mb-4 shadow-2xl">
        <NavBar />
      </header>
      <main className="w-[95%] md:w-full mt-4 flex flex-col items-center mx-auto">
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
            src={perfil_foto}
            alt="Foto de perfil"
            className="mx-auto block aspect-square rounded-3xl mb-4 w-1/2 md:mb-0 md:w-full"
          />
          </picture>

          <WindowsAboutMe />
        </motion.section>

        <WindowsSkills />

        <WindowsProjects />

        <WindowsForm />
      </main>

      <Footer />
    </>
  );
}

export default App;
