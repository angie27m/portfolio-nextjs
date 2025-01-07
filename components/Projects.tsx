import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const projects = [
  {
    title: "AquaFeeder: Sistema de Detección de Peces",
    description: "Desarrollé un sistema inteligente utilizando webcam en tiempo real, MATLAB y Arduino para detectar especies de peces y predecir su longitud y porciones de alimento.",
    image: "/placeholder.svg?height=200&width=300",
    link: "#"
  },
  {
    title: "Brechas de Género en Carreras STEM",
    description: "Publiqué artículo de investigación analizando las disparidades de género en la educación superior colombiana en las Pruebas Saber 2016.",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://revistas.ucundinamarca.edu.co/index.php/Pensamiento_udecino/article/view/79"
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

