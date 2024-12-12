import { NavBar } from "./components/header/NavBar";
import { WindowsAboutMe } from "./components/main/WindowsAboutMe";
import { WindowsSkills } from "./components/main/WindowsSkills";
import { WindowsProjects } from "./components/main/WindowsProjects";
import { WindowsForm } from "./components/main/WindowsForm";
import { Footer } from "./components/footer/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <header className="w-full sticky md:w-[95%] md:mx-auto top-0 z-50 mb-4 shadow-2xl">
        <NavBar />
      </header>
      <main className="w-[95%] md:w-full mt-4 flex flex-col items-center mx-auto">
        <WindowsAboutMe />

        <WindowsSkills />

        <WindowsProjects />

        <WindowsForm />
        <Toaster />
      </main>

      <Footer />
    </>
  );
}

export default App;
