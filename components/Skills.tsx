const skills = [
  "Java", "Spring Boot", "TypeScript", "Angular", "C#", ".NET", "SQL",
  "GraphQL", "AWS", "Azure", "Metodologías Ágiles", "Desarrollo TDD"
];

const softSkills = [
  {
    title: "Resolución de problemas",
    description:
      "Enfrento desafíos con un enfoque analítico y creativo, buscando siempre la solución más eficiente.",
  },
  {
    title: "Trabajo en equipo",
    description:
      "Disfruto colaborar con equipos multidisciplinarios, intercambiar conocimiento y buscar el éxito colectivo.",
  },
  {
    title: "Atención al detalle",
    description:
      "Presto atención a que cada línea de código y entrega cumplan con los requerimientos establecidos y tenga altos estándares de calidad.",
  },
  {
    title: "Adaptabilidad",
    description:
      "Me ajusto rápidamente a nuevos entornos, tecnologías y metodologías de trabajo.",
  },
  {
    title: "Comunicación efectiva",
    description:
      "Transmito ideas y perspectivas de forma clara, asegurando un entendimiento mutuo y fomentando un ambiente positivo.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-500">Habilidades</h2>
        
        {/* Habilidades técnicas */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-purple-500/10 text-purple-400 text-sm font-semibold px-4 py-2 rounded-full
                          border border-purple-500/20 backdrop-blur-sm hover:bg-purple-500/20 transition-colors"
              >
                {skill}
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
                  {softSkill.title}
                </h4>
                <p className="text-gray-300 text-sm">{softSkill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
