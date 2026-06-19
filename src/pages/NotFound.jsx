import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CirclesBackground } from "../components/backgrounds/CirclesBackground";
import { Link } from "react-router-dom";


export const NotFound = () => {

  return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

    {/* Fondo animado */}
    <CirclesBackground />

    <main
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">404</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Parece que la dirección a la que estás accediendo no existe.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <Link to={"/"} className="cosmic-button">
              Volver al inicio
            </Link>
          </div>

        </div>
      </div>

    </main>

  </div>;
};