import Image from 'next/image'
import Link from "next/link"

export default function Header() {
  return (
    <header className="py-6">
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo1.jpg"
            alt="Angie Manrique Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
        </Link>
        
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

