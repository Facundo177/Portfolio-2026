import { Mail, Map } from "lucide-react";

export const ContactSection = () => {

  return (
    <section
      id="contact"
      className="py-24 px-4 relative"
    >
      <div className="container mx-auto max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Ponete en contacto
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Si tenés algún proyecto en mente y querés colaborar, no dudes en escribirme.
          Estoy dispuesto a discutir cualquier oportunidad que se presente.
        </p>

        <h3 className="text-xl font-semibold mb-6">
          Información de Contacto:
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">


          <div className="space-y-8">

            <div className="space-y-6">
              <a href="mailto:facundogaitansegura@gmail.com" target="_blank">
                <div className="item-contact-section">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-start">
                        Email
                      </h4>
                      <span className="text-muted-foreground transition-colors">
                        facundogaitansegura@gmail.com
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="space-y-6">
                <div className="item-contact-section">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Map className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-start">
                        Ubicación
                      </h4>
                      <span className="text-muted-foreground transition-colors">
                        Belgrano, CABA, Argentina
                      </span>
                    </div>
                  </div>
                </div>
            </div>

          </div>


          <div className="space-y-8">

            <div className="space-y-6">
              <a href="https://www.linkedin.com/in/facundo-gabriel-gaitan-segura" target="_blank">
                <div className="item-contact-section">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-start">
                        LinkedIn
                      </h4>
                      <span className="text-muted-foreground transition-colors">
                        Facundo Gabriel Gaitán Segura
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="space-y-6">
              <a href="https://github.com/Facundo177" target="_blank">
                <div className="item-contact-section">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
                        <path d="M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-start">
                        GitHub
                      </h4>
                      <span className="text-muted-foreground transition-colors">
                        Facundo177
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>

          </div>


        </div>

      </div>
    </section>
  );
};