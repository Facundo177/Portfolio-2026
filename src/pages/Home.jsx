import { ThemeToggle } from "@/components/ThemeToggle";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { StarBackground } from "@/components/backgrounds/StarBackground";
import { GradientBackground } from "../components/backgrounds/GradientBackground";
import { SunriseBackground } from "../components/backgrounds/SunriseBackground";


export const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    {/* Tema claro/oscuro */}
    <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>


    {/* Fondo animado */}
    {isDarkMode
        ? <StarBackground/>
        // : <GradientBackground/>
        : <SunriseBackground/>
    }


    {/* Navbar */}
    <Navbar />


    {/* Contenido */}
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>


    {/* Footer */}
    <Footer />

  </div>;
};