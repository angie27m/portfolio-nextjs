import Image from 'next/image'
import Link from "next/link"

interface HeaderProps {
  language: 'es' | 'en';
  setLanguage: (language: 'es' | 'en') => void;
}

const navLinks = {
  es: {
    about: 'Sobre Mí',
    projects: 'Proyectos',
    skills: 'Habilidades',
    contact: 'Contáctame'
  },
  en: {
    about: 'About Me',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact'
  }
}

export default function Header({ language, setLanguage }: HeaderProps) {
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
            {navLinks[language].about}
          </Link>
          <Link href="#projects" className="text-gray-300 hover:text-white transition-colors">
            {navLinks[language].projects}
          </Link>
          <Link href="#skills" className="text-gray-300 hover:text-white transition-colors">
            {navLinks[language].skills}
          </Link>
          <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
            {navLinks[language].contact}
          </Link>
          <button
            onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
            className="px-3 py-1 rounded-full border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-colors"
          >
            {language === 'es' ? 'EN' : 'ES'}
          </button>
        </div>
      </nav>
    </header>
  )
}

