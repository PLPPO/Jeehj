import './globals.css'
import type { Metadata } from 'next'
import { Orbitron, Tajawal } from 'next/font/google'

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
})

const tajawal = Tajawal({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-tajawal',
})

export const metadata: Metadata = {
  title: 'Midnight Ideas',
  description: 'Personal portfolio of a night coder.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${tajawal.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
