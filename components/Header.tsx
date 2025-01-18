import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Header() {
  return (
    <header className="py-6">
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <span className="text-purple-500 font-bold text-2xl">Angie Paola</span>
          <span className="text-white font-bold text-2xl">Manrique</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
            Sobre Mí
          </Link>
          <Link href="#projects" className="text-gray-300 hover:text-white transition-colors">
            Proyectos
          </Link>
          <Link href="#skills" className="text-gray-300 hover:text-white transition-colors">
            Habilidades
          </Link>
          <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
            Contáctame
          </Link>
          {/* <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6">
            Contáctame
          </Button> */}
        </div>
      </nav>
    </header>
  )
}

