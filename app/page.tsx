import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Logos from '@/components/Logos'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative">
        {/* Purple gradient blobs */}
        <div className="fixed top-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-3xl" />
        <div className="fixed bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-3xl" />
        
        {/* Content */}
        <div className="relative">
          <Header />
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  )
}

