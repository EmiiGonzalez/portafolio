import { NavBar } from "./components/header/NavBar";
import { HeroSection } from "./components/main/HeroSection";
import { WindowsAboutMe } from "./components/main/WindowsAboutMe";
import { WindowsSkills } from "./components/main/WindowsSkills";
import { WindowsProjects } from "./components/main/WindowsProjects";
import { WindowsForm } from "./components/main/WindowsForm";
import { Footer } from "./components/footer/Footer";
import { ScrollToTop } from "./components/shared/ScrollToTop";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <header className="w-full sticky md:w-[95%] md:mx-auto top-0 z-50 mb-4 shadow-2xl backdrop-blur-sm bg-gray-900/80">
        <NavBar />
      </header>
      
      <main className="w-[95%] md:w-full mt-4 flex flex-col items-center mx-auto space-y-16">
        <HeroSection />
        
        <WindowsAboutMe />

        <WindowsSkills />

        <WindowsProjects />

        <WindowsForm />
        
        <Toaster 
          position="bottom-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1E1E1E',
              color: '#fff',
              border: '1px solid #374151',
            },
          }}
        />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;