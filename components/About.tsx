export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-500">Sobre Mí</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-900/50 p-8 rounded-2xl backdrop-blur-sm">
            <p className="text-lg mb-6 text-gray-300">
              ¡Hola! Soy Angie, Ingeniera de Software con 5 años de experiencia en el desarrollo de aplicaciones web. 
              Como profesional bilingüe (español e inglés avanzado), colaboro eficazmente con equipos y clientes internacionales. 
              Mi especialidad incluye tecnologías como Java, Spring Boot, Angular y TypeScript, con un enfoque en desarrollo 
              backend y la creación de soluciones innovadoras centradas en el usuario. Además, tengo experiencia en plataformas 
              de nube como AWS y Azure, y actualmente exploro el fascinante campo de la Inteligencia Artificial Generativa.
            </p>

            <p className="text-lg mb-6 text-gray-300">
              Trabajo como Senior Software Engineer en Allied Global, desempeñándome como desarrolladora full-stack para un 
              cliente en Estados Unidos. Mi rol abarca desarrollo backend con Java y frontend con Angular, creando módulos 
              de software confiables y escalables que respaldan procesos electorales críticos.
            </p>

            <p className="text-lg mb-6 text-gray-300">
              En mi paso por Crehana, diseñé herramientas innovadoras para Recursos Humanos, desarrollando módulos con Java 
              y Spring Framework, junto con interfaces interactivas en Angular. Estas soluciones automatizaron procesos clave 
              y mejoraron significativamente la experiencia del usuario, aumentando el engagement en la plataforma.
            </p>

            <p className="text-lg mb-6 text-gray-300">
              Soy apasionada de los viajes y la naturaleza. Cuando no estoy desarrollando software, disfruto explorando montañas, 
              conectando con la naturaleza, recorriendo pueblitos o admirando la arquitectura de diferentes ciudades. También me 
              mantengo activa practicando deportes y relajándome con una buena serie.
            </p>

            <p className="text-lg text-gray-300">
              Si quieres conocer más sobre mi experiencia laboral y académica, no dudes en visitar mi perfil de{' '}
              <a 
                href="https://www.linkedin.com/in/angie27manrique/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-500 hover:text-purple-400 transition-colors"
              >
                LinkedIn
              </a>
              . ¡Estoy abierta a conectar y explorar nuevas oportunidades!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

