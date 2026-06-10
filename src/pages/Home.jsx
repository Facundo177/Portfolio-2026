import { StarBackground } from "@/components/StarBackground";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Home = () => {

  return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    {/* Tema claro/oscuro */}
    <ThemeToggle />


    {/* Fondo animado */}
    <StarBackground />


    {/* Navbar */}
    {/* Contenido */}
    {/* Footer */}

    </div>;
};