const skills = [
  "Java", "Spring Boot", "TypeScript", "Angular", "C#", ".NET", "SQL",
  "GraphQL", "AWS", "Metodologías Ágiles", "Desarrollo TDD"
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-500">Habilidades</h2>
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
    </section>
  )
}

