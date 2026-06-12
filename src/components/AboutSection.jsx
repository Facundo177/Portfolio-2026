import { Briefcase, Code, User } from "lucide-react";

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
              Con años de experiencia en desarrollo web. Diseño páginas responsivas y accesibles usando las tecnologías modernas...
            </p>
            <p className="text-muted-foreground">
              Soy un apasionado de la tecnología, aprendiendo constantemente cosas nuevas tanto en la Universidad como por mi propia cuenta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Contactame
              </a>
              <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                Descarga mi CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">

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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laborum voluptate autem voluptatum recusandae at doloribus aspernatur nostrum quidem mollitia debitis amet tenetur cum voluptas corrupti, impedit, rerum earum beatae!
                  </p>
                </div>
              </div>
            </div>

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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laborum voluptate autem voluptatum recusandae at doloribus aspernatur nostrum quidem mollitia debitis amet tenetur cum voluptas corrupti, impedit, rerum earum beatae!
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
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
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};