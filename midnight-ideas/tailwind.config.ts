import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['var(--font-orbitron)'],
        tajawal: ['var(--font-tajawal)'],
      },
      colors: {
        'neon-purple': '#B388EB',
        'neon-blue': '#8BE9FD',
        'electric-pink': '#FF6EC7',
        'deep-black': '#0E0E10',
      },
      backgroundImage: {
        'stardust': "url('/stardust.png')",
      }
    },
  },
  plugins: [],
}
export default config
