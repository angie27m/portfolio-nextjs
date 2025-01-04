import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const projects = [
  {
    title: "E-commerce Platform",
    description: "Una solución completa de comercio electrónico construida con React y Node.js",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://github.com"
  },
  {
    title: "Task Management App",
    description: "Una aplicación móvil React Native para gestionar tareas diarias",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://github.com"
  },
  {
    title: "Data Visualization Dashboard",
    description: "Un dashboard interactivo construido con D3.js y React para análisis de datos",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://github.com"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-500">Mis Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
              <CardHeader className="p-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2 text-purple-400">{project.title}</CardTitle>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <Button
                  variant="outline"
                  className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white"
                  asChild
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    Ver Proyecto
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

