import { StarBackground } from "@/components/StarBackground";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";

export const Home = () => {

  return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    {/* Tema claro/oscuro */}
    <ThemeToggle />


    {/* Fondo animado */}
    <StarBackground />


    {/* Navbar */}
    <Navbar />


    {/* Contenido */}
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
    </main>




    {/* Footer */}

    </div>;
};