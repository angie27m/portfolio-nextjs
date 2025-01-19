export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-500">Sobre Mí</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-900/50 p-8 rounded-2xl backdrop-blur-sm">
            <p className="text-lg mb-6 text-gray-300">
              ¡Hola! Soy Angie, Ingeniera de Software con 5 años de experiencia en el desarrollo de aplicaciones web.
              Soy bilingüe (español e inglés avanzado), lo que me permite colaborar eficazmente con equipos y clientes internacionales. 
              Mi especialidad radica en tecnologías como Java, Spring Boot, Angular y TypeScript, con un enfoque en el
              desarrollo backend y la creación de soluciones innovadoras y centradas en el usuario. También cuento con experiencia en plataformas de nube como AWS y Azure, 
              y estoy aprendiendo un poco más del campo de la Inteligencia Artificial Generativa.
            </p>
            <p className="text-lg mb-6 text-gray-300">
              Actualmente, trabajo como Senior Software Engineer en Allied Global, donde me desempeño como desarrolladora full-stack 
              para un cliente en Estados Unidos. Mi labor incluye desarrollo backend con Java y frontend con Angular, enfocado en crear 
              módulos de software confiables y escalables para procesos electorales.
            </p>
            
            <p className="text-lg mb-6 text-gray-300">
              En mi etapa en Crehana, desarrollé herramientas innovadoras para el área de Recursos Humanos, diseñando módulos con 
              Java y Spring Framework, además de interfaces interactivas en Angular. Estas soluciones ayudaron a automatizar procesos 
              clave y mejorar la experiencia del usuario, aumentando significativamente el engagement en la plataforma.
            </p>            

            <p className="text-lg mb-6 text-gray-300">
              Soy una persona apasionada por los viajes y la naturaleza. Cuando no estoy desarrollando software, me encontrarás explorando 
              montañas, conectando con la naturaleza, recorriendo algún pueblito o admirando la arquitectura de diferentes ciudades. También disfruto mantenerme 
              activa practicando deportes y relajándome con una buena serie.
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

