import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Art Hack - Poetic Computing | Critical & Creative AI Explorations',
  description: 'A 3-day hackathon exploring critical and creative uses of AI. Build experimental projects that push the boundaries of what AI can create, question, and imagine. August 15-17 at Frontier Tower.',
  keywords: 'hackathon, AI, artificial intelligence, creative AI, poetic computing, machine learning, generative art, critical AI, AI ethics',
  openGraph: {
    title: 'Art Hack - Poetic Computing',
    description: 'Join us for a 3-day hackathon exploring critical and creative uses of AI.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}