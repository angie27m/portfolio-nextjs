"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Project = {
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  technologies: string[];
  link: string;
};

const projects: Project[] = [
  {
    title: 'Acuaponic: Sistema de Detección de Peces',
    description:
      'Desarrollé un sistema inteligente utilizando webcam en tiempo real, MATLAB y Arduino para detectar especies de peces y predecir su longitud y porciones de alimento.',
    fullDescription: `Este proyecto innovador combina hardware y software para:
    • Detección en tiempo real de especies de peces mediante procesamiento de imágenes
    • Cálculo automático de porciones de alimento basado en el tamaño del pez
    • Interface de usuario amigable para monitoreo y control
    • Integración con Arduino para dispensación automática de alimento`,
    image: '/acuaponic04.png?height=200&width=300',
    gallery: [
      '/acuaponic01.png',
      '/acuaponic02.png',
      '/acuaponic03.png',
      '/acuaponic04.png',
    ],
    technologies: ['MATLAB', 'Arduino', 'Computer Vision', 'C++'],
    link: '#',
  },
  {
    title: 'Brechas de Género en Carreras STEM',
    description:
      'Publiqué artículo de investigación analizando las disparidades de género en la educación superior colombiana en las Pruebas Saber 2016.',
    fullDescription: `Investigación exhaustiva sobre las disparidades de género en educación STEM:
    • Análisis descriptivo y predictivo de datos de las Pruebas Saber 2016
    • Identificación de factores socioeconómicos influyentes
    • Propuesta de estrategias para reducir la brecha de género
    • Publicación en revista académica indexada`,
    image: '/Figura 7.png?height=200&width=300',
    gallery: [
      '/stem02.png',
      '/Figura 4.png',
      '/Figura 5.png',
      '/stem01.png',
      '/Figura 8.jpg',
      '/Figura 10.jpg',
      '/Figura 12.jpg',
      '/Figura 13.jpg',
      '/Figura 14.jpg',
      '/Figura 17.jpg',
      '/Figura 18.jpg',
      '/Figura 19.jpg',
    ],
    technologies: ['Java', 'JSF', 'Machine Learning', 'Data Visualization', 'K-means', 'J48'],
    link: 'https://revistas.ucundinamarca.edu.co/index.php/Pensamiento_udecino/article/view/79',
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-500">Proyectos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
              <CardHeader className="p-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={200}
                  height={150}
                  className="w-full rounded-t-lg object-cover"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2 text-purple-400">{project.title}</CardTitle>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <Button
                  variant="outline"
                  className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white"
                  onClick={() => setSelectedProject(project)}
                >
                  Ver más
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
          {selectedProject && (
            <DialogContent className="bg-gray-900/95 border border-gray-800 backdrop-blur-sm max-w-2xl h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-purple-500">{selectedProject.title}</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4">
                <div className="relative w-full">
                  <Carousel className="w-full max-w-md mx-auto">
                    <CarouselContent>
                      {selectedProject.gallery.map((img, index) => (
                        <CarouselItem key={index}>
                          <div className="flex items-center justify-center p-1 h-[200px]">
                            <Image
                              src={img}
                              alt={`${selectedProject.title} ${index + 1}`}
                              width={300}
                              height={200}
                              className="rounded-lg border border-gray-800 object-contain"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="text-purple-500 border-purple-500 hover:bg-purple-500 hover:text-white" />
                    <CarouselNext className="text-purple-500 border-purple-500 hover:bg-purple-500 hover:text-white" />
                  </Carousel>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-300 whitespace-pre-line text-base">{selectedProject.fullDescription}</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {selectedProject.link !== "#" && (
                    <Button
                      variant="outline"
                      className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-colors"
                      asChild
                    >
                      <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                        Ver Publicación
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
}