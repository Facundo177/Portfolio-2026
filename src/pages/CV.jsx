export const CV = () => {

  const experiencia = [
    {
      empresa: "Ford Argentina SCA",
      puesto: "Practicante en el área de IT",
      ubicacion: "Buenos Aires, Argentina",
      fechaInicio: "Abril 2023",
      fechaFin: "Diciembre 2023",
      descripcion: [
        "Práctica profesionalizante donde desarrollé habilidades en mantenimiento y optimización de sistemas informáticos, brindando soporte técnico de calidad y mejorando la experiencia del cliente a través de una efectiva documentación de procedimientos."
      ]
    },
  ];

  const educacion = [
    {
      institucion: "Universidad de Buenos Aires",
      titulo: "Licenciatura en Ciencias de la Computación",
      ubicacion: "Buenos Aires, Argentina",
      fechaInicio: "2024",
      fechaFin: "Actualidad",
      descripcion: [
        "Actualmente cursando la Licenciatura en Ciencias de la Computación en la Universidad de Buenos Aires, con un fuerte enfoque en el aprendizaje y el crecimiento profesional.",
        "Desarrollo de habilidades en programación y análisis de datos."
      ]
    },
    {
      institucion: "Escuela Técnica Henry Ford",
      titulo: "Técnico Electromecánico",
      ubicacion: "Buenos Aires, Argentina",
      fechaInicio: "2017",
      fechaFin: "2023",
      descripcion: [
        "Formación técnica en electromecánica, adquirida en escuela reconocida y con notables resultados académicos (promedio 9,23).",
        "Experiencia en diagnóstico y mantenimiento de sistemas electromecánicos.",
        "Habilidades en la optimización de procesos y resolución de problemas técnicos.",
        "Capacidad para trabajar en equipos multidisciplinarios y liderazgo de proyectos.",
        "Bases de lógica de programación y automatización."
      ]
    },
    {
      institucion: "Oracle + Alura Latam",
      titulo: "Desarrollador BackEnd",
      ubicacion: "Buenos Aires, Argentina",
      fechaInicio: "2023",
      fechaFin: "2024",
      descripcion: [
        "Formación en el programa de educación ONE (Oracle Next Education).",
        "Especialización en el BackEnd.",
        "Aprendizaje intensivo de Java con el framework Spring.",
        "Bases de datos MySQL y PostgresDB.",
        "Capacidad para trabajar en entornos colaborativos y ágiles.",
        "Desarrollo de un API REST para proyecto final con alta eficiencia."
      ]
    },
    {
      institucion: "Codo a Codo",
      titulo: "Desarrollador Full Stack Java",
      ubicacion: "Buenos Aires, Argentina",
      fechaInicio: "2023",
      fechaFin: "2024",
      descripcion: [
        "Desarrollo de sitios web responsivos, siguiendo las mejores prácticas.",
        "Despliegue de proyectos web en servidores.",
        "Desarrollo de páginas interactivas utilizando JavaScript.",
        "Soluciones frontend que se comunique con un backend mediante un servicio.",
        "Comprensión de las metodologías ágiles y su aplicación en proyectos.",
        "Creación de bases de datos relacionales y consultas SQL avanzadas.",
        "Conocimientos en programación orientada a objetos en Java, además del trabajo con módulos, paquetes y librerías.",
        "Implementación de formularios y creación de un CRUD con Java puro."
      ]
    },
    {
      institucion: "Argentina Programa 4.0",
      titulo: "Full Stack Junior",
      ubicacion: "Buenos Aires, Argentina",
      fechaInicio: "2022",
      fechaFin: "2023",
      descripcion: [
        "Formación con un perfil de Desarrollador Web.",
        "FrontEnd: Experiencia en HTML, CSS, JavaScript, TypeScript, Bootstrap y el framework Angular.",
        "BackEnd: Conocimientos en Java utilizando el framework Spring Boot.",
        "Bases de datos: Manejo de MySQL para bases de datos relacionales.",
        "Control de versiones: Uso de Git y GitHub para el versionado de proyectos.",
        "Despliegue: Familiaridad con Docker para la implementación en servidores."
      ]
    },
  ]

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden bg-white">
      <div className="container mx-auto max-w-5xl not-print:py-24 print:py-3 px-4 relative">

        <div className="flex flex-col gap-2 mx-5">

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Facundo Gabriel Gaitán Segura
          </h1>


          <div className="flex flex-col">

            <h3 className="text-lg font-medium">
              Belgrano, CABA
            </h3>

            <a
              href="https://www.linkedin.com/in/facundo-gabriel-gaitan-segura"
              className="text-blue-900"
            >
              <h3>
                www.linkedin.com/in/facundo-gabriel-gaitan-segura
              </h3>
            </a>

            <a
              href="mailto:facundogaitansegura@gmail.com"
              className="text-blue-900"
            >
              <h3>
                facundogaitansegura@gmail.com
              </h3>
            </a>

          </div>


          <div style={{ height: "1px" }} className="bg-black"></div>

          <p className="text-left text-base">
            Soy un profesional apasionado por la tecnología y actualmente estudio Ciencias de la Computación,
            acumulando experiencia laboral en el sector de IT en Ford Argentina SCA.
            Mi enfoque está en el desarrollo web, con un sólido dominio de HTML, CSS, JavaScript,
            Java, C++ y Python, adquiridos tanto en mi formación académica como a través de
            un aprendizaje autodidacta.
            Poseo experiencia en frameworks demandados como Angular y Spring Boot,
            así como en bases de datos relacionales como MySQL y PostgresDB.
            Mi capacidad para trabajar en equipo y aprender rápidamente me ha permitido adaptarme
            a entornos dinámicos. Estoy entusiasmado por la oportunidad de contribuir al área de IT
            y aportar mi conocimiento y pasión por la innovación tecnológica.
            Buena parte de mi código se puede consultar en mi <a
              className="text-blue-900 underline"
              href="https://github.com/Facundo177">GitHub (Facundo177)</a>.
          </p>



          <div id="experiencia-laboral" className="my-2">

            <h2 className="text-left font-semibold text-2xl pt-2">
              Experiencia Profesional
            </h2>

            <div style={{ height: "1px" }} className="bg-black"></div>

            {experiencia.map((exp, key) => (
              <div key={key} className="py-2">
                <div className="flex flex-row justify-between">
                  <h3 className="font-semibold text-lg">{exp.empresa}</h3>
                  <h3 className="font-semibold text-lg">{exp.ubicacion}</h3>
                </div>
                <div className="flex flex-row justify-between">
                  <h4 className="font-medium text-md">{exp.puesto}</h4>
                  <h4 className="font-medium text-md">{exp.fechaInicio} - {exp.fechaFin}</h4>
                </div>
                <ul className="py-2 text-left list-disc pl-6">
                  {exp.descripcion.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </div>
            ))}

          </div>


          <div id="educacion">

            <h2 className="text-left font-semibold text-2xl pt-2">
              Educación
            </h2>

            <div style={{ height: "1px" }} className="bg-black"></div>

            {educacion.map((edu, key) => (
              <div key={key} className="py-2">
                <div className="flex flex-row justify-between">
                  <h3 className="font-semibold text-lg">{edu.institucion}</h3>
                  <h3 className="font-semibold text-lg">{edu.ubicacion}</h3>
                </div>
                <div className="flex flex-row justify-between">
                  <h4 className="font-medium text-md">{edu.titulo}</h4>
                  <h4 className="font-medium text-md">{edu.fechaInicio} - {edu.fechaFin}</h4>
                </div>
                <ul className="py-2 text-left list-disc pl-6">
                  {edu.descripcion.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </div>
            ))}

          </div>


          <div id="idiomas">

            <h2 className="text-left font-semibold text-2xl pt-2">
              Idiomas
            </h2>

            <div style={{ height: "1px" }} className="bg-black"></div>

            <ul className="py-2 text-left list-disc pl-6">
              <li>Nativo en Español</li>
              <li>Inglés (Exámen CAE Cambridge)</li>
            </ul>


          </div>


          <button className="print:hidden cosmic-button my-5" onClick={window.print}>
            Guardar como PDF
          </button>


        </div>

      </div>

    </div>
  );
};