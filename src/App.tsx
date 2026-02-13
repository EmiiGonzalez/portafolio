import { useRef } from "react";
import { NavBar } from "./components/header/NavBar";
import { HeroSection } from "./components/main/HeroSection";
import { AnimatedBackground } from "./components/main/AnimatedBackground";
import { ContentSection } from "./components/main/ContentSection";
import { Footer } from "./components/footer/Footer";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { useScrollAnimations } from "./hooks/useScrollAnimations";
import { ContactSection } from "./components/main/ContactSection";
import { AboutSection } from "./components/main/AboutSection";
import { SkillsSection } from "./components/main/SkillsSection";
import { ProjectsSection } from "./components/main/ProjectsSection";

function App() {
  useSmoothScroll();
  const mainRef = useRef<HTMLElement>(null);
  useScrollAnimations(mainRef);

  return (
    <>
      <NavBar />
      <main ref={mainRef}>
        <HeroSection />
        {/* Animated bg lives behind all remaining sections */}
        <AnimatedBackground />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContentSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
