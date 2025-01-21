'use client'

interface AboutProps {
  language: 'es' | 'en';
}

const content = {
  es: {
    greeting: "¡Hola! Soy Angie, Ingeniera de Software con 5 años de experiencia en el desarrollo de aplicaciones web. Como profesional bilingüe (español e inglés avanzado), colaboro eficazmente con equipos y clientes internacionales. Mi especialidad incluye tecnologías como Java, Spring Boot, Angular y TypeScript, con un enfoque en desarrollo backend y la creación de soluciones innovadoras centradas en el usuario. Además, tengo experiencia en plataformas de nube como AWS y Azure, y actualmente exploro el fascinante campo de la Inteligencia Artificial Generativa.",
    currentRole: "Trabajo como Senior Software Engineer en Allied Global, desempeñándome como desarrolladora full-stack para un cliente en Estados Unidos. Mi rol abarca desarrollo backend con Java y frontend con Angular, creando módulos de software confiables y escalables que respaldan procesos electorales críticos.",
    previousRole: "En mi paso por Crehana, diseñé herramientas innovadoras para Recursos Humanos, desarrollando módulos con Java y Spring Framework, junto con interfaces interactivas en Angular. Estas soluciones automatizaron procesos clave y mejoraron significativamente la experiencia del usuario, aumentando el engagement en la plataforma.",
    personal: "Soy apasionada de los viajes y la naturaleza. Cuando no estoy desarrollando software, disfruto explorando montañas, conectando con la naturaleza, recorriendo pueblitos o admirando la arquitectura de diferentes ciudades. También me mantengo activa practicando deportes y relajándome con una buena serie.",
    linkedin: {
      text: "Si quieres conocer más sobre mi experiencia laboral y académica, no dudes en visitar mi perfil de",
      cta: "¡Estoy abierta a conectar y explorar nuevas oportunidades!"
    }
  },
  en: {
    greeting: "Hi! I'm Angie, a Software Engineer with 5 years of experience in web application development. As a bilingual professional (Spanish and advanced English), I collaborate effectively with international teams and clients. My expertise includes technologies such as Java, Spring Boot, Angular, and TypeScript, with a focus on backend development and creating innovative, user-centered solutions. Additionally, I have experience with cloud platforms like AWS and Azure, and I'm currently exploring the fascinating field of Generative AI.",
    currentRole: "I work as a Senior Software Engineer at Allied Global, serving as a full-stack developer for a U.S. client. My role encompasses backend development with Java and frontend with Angular, creating reliable and scalable software modules that support critical electoral processes.",
    previousRole: "During my time at Crehana, I designed innovative tools for Human Resources, developing modules with Java and Spring Framework, along with interactive Angular interfaces. These solutions automated key processes and significantly improved the user experience, increasing platform engagement.",
    personal: "I'm passionate about travel and nature. When I'm not developing software, I enjoy exploring mountains, connecting with nature, visiting small towns, or admiring the architecture of different cities. I also stay active by practicing sports and unwinding with a good TV series.",
    linkedin: {
      text: "If you want to learn more about my work and academic experience, feel free to visit my",
      cta: "I'm open to connecting and exploring new opportunities!"
    }
  }
}

export default function About({ language }: AboutProps) {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-500">
          {language === 'es' ? 'Sobre Mí' : 'About Me'}
        </h2>

        <div className="bg-gray-900/50 p-8 rounded-2xl backdrop-blur-sm max-w-4xl mx-auto">
          <p className="text-lg mb-6 text-gray-300 px-4 md:px-8">
            {content[language].greeting}
          </p>

          <p className="text-lg mb-6 text-gray-300 px-4 md:px-8">
            {content[language].currentRole}
          </p>

          <p className="text-lg mb-6 text-gray-300 px-4 md:px-8">
            {content[language].previousRole}
          </p>

          <p className="text-lg mb-6 text-gray-300 px-4 md:px-8">
            {content[language].personal}
          </p>

          <p className="text-lg text-gray-300 px-4 md:px-8">
            {content[language].linkedin.text}{' '}
            <a 
              href="https://www.linkedin.com/in/angie27manrique/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-500 hover:text-purple-400 transition-colors"
            >
              LinkedIn
            </a>
            . {content[language].linkedin.cta}
          </p>
        </div>
      </div>
    </section>
  )
}

