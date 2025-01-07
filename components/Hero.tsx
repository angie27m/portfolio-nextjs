import Image from 'next/image'
import { MessageCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="block">Desarrolladora </span>
              <span className="block text-purple-500">de</span>
              <span className="block">Software</span>
            </h1>
            
            <p className="text-gray-400 text-lg mb-8 max-w-2xl">
              Especializado en diseño centrado en el usuario, creando experiencias digitales intuitivas que fusionan estética con funcionalidad.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              {/* Stats section */}
              {/* <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-500">5</div>
                  <div className="text-gray-400">Años de Experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-500">277</div>
                  <div className="text-gray-400">Proyectos Completados</div>
                </div>
              </div> */}
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Perfil"
                width={400}
                height={400}
                className="rounded-full object-cover"
              />
              
              {/* Chat bubble decoration */}
              <div className="absolute -right-8 top-1/4 bg-gray-900 rounded-2xl p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <MessageCircle className="text-purple-500" />
                  <p className="text-sm">¡Creemos algo increíble juntos!</p>
                </div>
              </div>
              
              {/* Purple circle decorations */}
              <div className="absolute -z-10 top-1/2 -right-12 w-24 h-24 rounded-full bg-purple-600/30 blur-xl" />
              <div className="absolute -z-10 bottom-1/2 -left-12 w-32 h-32 rounded-full bg-purple-600/30 blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

