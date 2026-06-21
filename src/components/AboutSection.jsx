import { Briefcase, Code, University, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export const AboutSection = () => {

  return (
    <section
      id="about"
      className="py-24 px-4 relative"
    >
      <div className="container mx-auto max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Sobre <span className="text-primary">Mí</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Desarrollador Web Argentino y Entusiasta de la Tecnología
            </h3>
            <p className="text-muted-foreground">
              Con experiencia en desarrollo web, diseño páginas responsivas y accesibles
              usando las tecnologías que se adecúen a cada proyecto.
            </p>
            <p className="text-muted-foreground">
              Soy un apasionado de la tecnología,
              aprendiendo constantemente cosas nuevas
              tanto en la Universidad como por mi propia cuenta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a
                href="#contact"
                className="cosmic-button" // w-fit mx-auto (?)
              >
                Contactame
              </a>
              <Link
                to="/cv"
                target="_blank" rel="noopener noreferrer"
                className={cn("px-6 py-2 rounded-full border border-primary text-primary font-semibold",
                  "hover:bg-primary/10 transition-all duration-300",
                  "hover:shadow-[0_0_10px_rgba(139,92,246,0.5)] hover:scale-105 active:scale-95"
                )}>
                Mira mi CV
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">


            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="text-primary h-6 w-6" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    ¿Quién Soy?
                  </h4>
                  <p className="text-muted-foreground">
                    Me considero una persona curiosa, a la que le gusta entender
                    cómo funcionan las tecnologías y no solo aplicarlas,
                    lo que me permite adaptarme a diferentes escenarios de desarrollo.
                    Actualmente estoy enfocado en mi carrera y
                    predispuesto a afrontar nuevos desafíos.
                  </p>
                </div>
              </div>
            </div>


            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="text-primary h-6 w-6" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Web Dev
                  </h4>
                  <p className="text-muted-foreground">
                    He desarrollado aplicaciones tanto en el FrontEnd como en el BackEnd,
                    con un enfoque en el código limpio y eficiente.
                    Gran parte de mi conocimiento en el desarrollo Web fue autodidacta,
                    con gran influencia de cursos con alcance internacional como
                    Oracle Next Education y Argentina Programa.
                  </p>
                </div>
              </div>
            </div>


            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <University className="text-primary h-6 w-6" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Educación Formal
                  </h4>
                  <p className="text-muted-foreground">
                    Vengo de una formación técnica en Electromecánica y
                    actualmente me encuentro estudiando la carrera de Ciencias de la Computación
                    en la Universidad de Buenos Aires, buscando obtener una base sólida
                    de conocimientos teóricos transversales a diferentes áreas
                    de la programación.
                  </p>
                </div>
              </div>
            </div>


            {/* <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="text-primary h-6 w-6" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Experiencia
                  </h4>
                  <p className="text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laborum voluptate autem voluptatum recusandae at doloribus aspernatur nostrum quidem mollitia debitis amet tenetur cum voluptas corrupti, impedit, rerum earum beatae!
                  </p>
                </div>
              </div>
            </div> */}

          </div>

        </div>

      </div>
    </section>
  );
};