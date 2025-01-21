'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  const [language, setLanguage] = useState<'es' | 'en'>('en')

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative">
        {/* Purple gradient blobs */}
        <div className="fixed top-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-3xl" />
        <div className="fixed bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-3xl" />
        
        {/* Content */}
        <div className="relative">
          <Header language={language} setLanguage={setLanguage} />
          <Hero language={language} />
          <About language={language} />
          <Projects language={language} />
          <Skills language={language} />
          <Contact language={language} />
          <Footer language={language} />
        </div>
      </div>
    </div>
  )
}

