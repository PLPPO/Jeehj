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
  description: 'Personal portfolio of a creative night coder, specializing in chaotic yet brilliant web experiences.',
  manifest: '/manifest.json',
  keywords: ['portfolio', 'developer', 'coder', 'web developer', 'night coder', 'creative coder'],
  authors: [{ name: 'TUHHUN' }],
  openGraph: {
    title: 'Midnight Ideas',
    description: 'Welcome to the madness. Stay weird.',
    url: 'https://midnight-ideas.vercel.app', // Replace with actual URL
    siteName: 'Midnight Ideas',
    images: [
      {
        url: 'https://i.postimg.cc/VdQsx69Q/9b768131.png', // Replace with actual image
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Midnight Ideas',
    description: 'Welcome to the madness. Stay weird.',
    creator: '@tuhhun', // Replace with actual handle
    images: ['https://i.postimg.cc/VdQsx69Q/9b768131.png'], // Replace with actual image
  },
}

import MadModeToggle from './components/MadModeToggle';
import ReCaptchaProvider from './components/ReCaptchaProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${tajawal.variable} font-sans`}>
        <ReCaptchaProvider>
          <MadModeToggle />
          {children}
        </ReCaptchaProvider>
      </body>
    </html>
  )
}
