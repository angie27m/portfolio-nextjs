interface FooterProps {
  language: 'es' | 'en';
}

const content = {
  es: {
    rights: "Todos los derechos reservados"
  },
  en: {
    rights: "All rights reserved"
  }
}

export default function Footer({ language }: FooterProps) {
  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Angie Manrique. {content[language].rights}.</p>
      </div>
    </footer>
  )
}

