import { Outfit, MuseoModerno } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit'
})

const museoModerno = MuseoModerno({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-museo-moderno'
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout ({ children }) {
  return (
    <html lang="en" className={`${museoModerno.variable} ${outfit.variable} `}>
      <body className="font-outfit text-on-surface">
        <header className="fixed p-2">
          <Navigation />
        </header>
        {children}
      </body>
    </html>
  )
}