import Image from 'next/image'
import { MessageCircle, Github, Linkedin, Instagram, Twitter } from 'lucide-react'

export default function Hero() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">   

            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="block text-purple-500">Angie Paola Manrique</span>
            </h1>

            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              <span className="block text-gray-200">Desarrolladora de software</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-8 max-w-2xl">
              Especializada en el desarrollo backend con Java y en la creación y mantenimiento de aplicaciones web eficientes y escalables
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <div className="flex items-center space-x-6">
                <a 
                  href="https://www.linkedin.com/in/angie27manrique/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-500 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="https://github.com/angie27m" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-500 transition-colors"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://x.com/i_Angie_" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-500 transition-colors"
                >
                  <Twitter size={24} />
                </a>
                <a 
                  href="https://instagram.com/angie27m" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-500 transition-colors"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
              <Image
                src="/profile-picture.png"
                alt="Perfil"
                width={400}
                height={400}
                className="rounded-full object-cover"
              />
              
              {/* Chat bubble decoration */}
              <div className="absolute -right-8 top-1/4 bg-gray-900 rounded-2xl p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <p className="text-sm">👾🤖</p>
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

