export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-500">Sobre Mí</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-900/50 p-8 rounded-2xl backdrop-blur-sm">
            <p className="text-lg mb-6 text-gray-300">
              Soy un ingeniero de software con 5 años de experiencia en el desarrollo de aplicaciones web.
              Me especializo en JavaScript, React y Node.js, y me apasiona crear soluciones eficientes,
              escalables y amigables para el usuario.
            </p>
            <p className="text-lg text-gray-300">
              Cuando no estoy programando, me encontrarás haciendo senderismo en las montañas,
              leyendo novelas de ciencia ficción o experimentando con nuevas recetas en la cocina.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

