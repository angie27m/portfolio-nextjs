const skills = [
  "Java", "Spring Boot", "TypeScript", "Angular", "C#", ".NET", "SQL",
  "GraphQL", "AWS", "Azure", 
  {
    es: "Metodologías Ágiles",
    en: "Agile Methodologies"
  }, 
  {
    es: "Desarrollo TDD",
    en: "TDD Development"
  }
];

interface SkillsProps {
  language: 'es' | 'en';
}

const softSkills = [
  {
    title: {
      es: "Resolución de problemas",
      en: "Problem Solving"
    },
    description: {
      es: "Enfrento desafíos con un enfoque analítico y creativo, buscando siempre la solución más eficiente.",
      en: "I tackle challenges with an analytical and creative approach, always seeking the most efficient solution."
    }
  },
  {
    title: {
      es: "Trabajo en equipo",
      en: "Team Work"
    },
    description: {
      es: "Disfruto colaborar con equipos multidisciplinarios, intercambiar conocimiento y buscar el éxito colectivo.",
      en: "I enjoy collaborating with multidisciplinary teams, sharing knowledge and pursuing collective success."
    }
  },
  {
    title: {
      es: "Atención al detalle",
      en: "Attention to Detail"
    },
    description: {
      es: "Presto atención a que cada línea de código y entrega cumplan con los requerimientos establecidos y tenga altos estándares de calidad.",
      en: "I ensure that every line of code and delivery meets established requirements and maintains high quality standards."
    }
  },
  {
    title: {
      es: "Adaptabilidad",
      en: "Adaptability"
    },
    description: {
      es: "Me ajusto rápidamente a nuevos entornos, tecnologías y metodologías de trabajo.",
      en: "I quickly adapt to new environments, technologies, and work methodologies."
    }
  },
  {
    title: {
      es: "Comunicación efectiva",
      en: "Effective Communication"
    },
    description: {
      es: "Transmito ideas y perspectivas de forma clara, asegurando un entendimiento mutuo y fomentando un ambiente positivo.",
      en: "I convey ideas and perspectives clearly, ensuring mutual understanding and fostering a positive environment."
    }
  },
];

export default function Skills({ language }: SkillsProps) {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-500">
          {language === 'es' ? 'Habilidades' : 'Skills'}
        </h2>
        
        {/* Habilidades técnicas */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-purple-500/10 text-purple-400 text-sm font-semibold px-4 py-2 rounded-full
                          border border-purple-500/20 backdrop-blur-sm hover:bg-purple-500/20 transition-colors"
              >
                {typeof skill === 'string' ? skill : skill[language]}
              </span>
            ))}
          </div>
        </div>

        {/* Habilidades blandas */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {softSkills.map((softSkill, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-purple-500/50 transition-shadow"
              >
                <h4 className="text-lg font-bold text-purple-400 mb-3">
                  {softSkill.title[language]}
                </h4>
                <p className="text-gray-300 text-sm">{softSkill.description[language]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
