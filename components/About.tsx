export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-500">Sobre Mí</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-900/50 p-8 rounded-2xl backdrop-blur-sm">
            <p className="text-lg mb-6 text-gray-300">
              ¡Hola! Soy Angie, una ingeniera de software con 5 años de experiencia en desarrollo de aplicaciones web. 
              Me especializo en Java, Spring Boot, Angular, y Typescript, y me apasiona crear soluciones eficientes y 
              amigables para los usuarios. También cuento con experiencia con tecnologías en la nube como AWS y Azure,
              actualmente estoy interesada en todo lo relacionado con Inteligencia Artifical Generativa.
            </p>
            <p className="text-lg mb-6 text-gray-300">
              Actualmente, trabajo como Senior Software Engineer en Allied Global, donde me desempeño como fullstack, 
              desarrollando tanto en el backend con Java como en el frontend con Angular para un cliente en Estados Unidos 
              con software de elecciones.
            </p>
            <p className="text-lg mb-6 text-gray-300">
              En mi etapa en Crehana, estuve enfocada en recursos humanos, creando módulos innovadores en Java y Spring Framework, 
              y funcionalidades interactivas en Angular con el objetivo de aumentar el engagement de usuarios.
            </p>
            <p className="text-lg mb-6 text-gray-300">
              Fuera del trabajo, me encanta viajar por Colombia y el mundo, probablemente me encuentre explorando montañas, 
              conectando con la naturaleza y admirando la arquitectura de diferentes ciudades. También disfruto viendo series 
              y practicando deportes para mantenerme activa.
            </p>
            <p className="text-lg text-gray-300">
              Puedes conocer un poco más sobre mí y mi experiencia laboral y académica en mi perfil de{' '}
              <a 
                href="https://www.linkedin.com/in/angie27manrique/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-500 hover:text-purple-400 transition-colors"
              >
                LinkedIn
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

