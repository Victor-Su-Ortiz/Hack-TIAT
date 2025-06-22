import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hack: TIAT - The Intersection of Art and Technology',
  description: 'A 3-day creative technology hackathon exploring the intersection of art and the internet. August 15-17 at Frontier Tower.',
  keywords: 'hackathon, art, technology, creative coding, web art, poetic web',
  openGraph: {
    title: 'Hack: TIAT - The Intersection of Art and Technology',
    description: 'Join us for a 3-day creative technology hackathon where code meets canvas.',
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