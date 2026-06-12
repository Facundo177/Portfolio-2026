import { StarBackground } from "@/components/StarBackground";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Navbar } from "@/components/Navbar";

export const Home = () => {

  return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    {/* Tema claro/oscuro */}
    <ThemeToggle />


    {/* Fondo animado */}
    <StarBackground />


    {/* Navbar */}
    <Navbar />


    {/* Contenido */}
    {/* Footer */}

    </div>;
};