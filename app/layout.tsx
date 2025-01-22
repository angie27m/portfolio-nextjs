import type { Metadata } from 'next'
import { SpeedInsights } from "@vercel/speed-insights/next"
import './globals.css'

export const metadata: Metadata = {
  title: 'Angie Manrique | Software Engineer',
  description: 'Portfolio personal de Angie Manrique, Ingeniera de Software con experiencia en desarrollo web fullstack',
  icons: {
    icon: [
      { url: '/logo1.jpg', sizes: '16x16' },
      { url: '/logo1.jpg', sizes: '32x32' },
      { url: '/logo1.jpg', sizes: '48x48' },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
