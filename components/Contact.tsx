'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-500">Contáctame</h2>
        <Card className="max-w-md mx-auto bg-gray-900/50 border-gray-800 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-center text-purple-400">¿Tienes alguna pregunta?</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-300 mb-4">
            La forma más fácil de contactarme es enviarme un correo aquí 👇
            </p>
            <a 
              href="mailto:angie27manrique@gmail.com"
              className="inline-flex items-center gap-2 text-purple-500 hover:text-purple-400 transition-colors"
            >
              <Mail size={20} />
              angie27manrique@gmail.com
            </a>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

