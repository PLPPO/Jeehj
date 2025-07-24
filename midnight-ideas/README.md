# Midnight Ideas Portfolio

This is a personal portfolio website built for a creative night coder who thrives on chaos and creativity. The website features a dark, cosmic theme with neon accents, smooth animations, and a responsive design that works on all devices.

## Features

- **Next.js + React:** Built with the latest web technologies for optimal performance and SEO.
- **TailwindCSS:** A utility-first CSS framework for rapid UI development.
- **Framer Motion:** For smooth and beautiful animations.
- **Mad Mode:** A toggle to enable glitch effects, background shifts, and an animated cursor for a more chaotic experience.
- **Dynamic Projects Section:** Projects are loaded from a JSON file, making it easy to add new projects.
- **Nodemailer Integration:** The contact form is fully functional and sends emails using Nodemailer.
- **reCAPTCHA v3:** The contact form is protected from spam using reCAPTCHA v3.
- **PWA Support:** The website is installable on mobile devices.
- **Improved SEO:** The website is optimized for search engines with specific meta tags, structured data, and a sitemap.
- **Circular Avatar:** A circular avatar with a neon ring and a light glow.
- **Interactive Stars:** The stars in the intro section animate based on mouse movement.
- **Dark Theme:** A visually appealing dark theme with a starry background.
- **Neon Accents:** Neon purple, blue, and pink colors for a futuristic feel.
- **Custom Fonts:** Uses the Orbitron font for headings and Tajawal for body text.
- **Responsive Design:** The website is fully responsive and looks great on desktops, tablets, and mobile phones.
- **Social Media Integration:** Links to Telegram and GitHub, with placeholders for TikTok and Instagram.

## Technologies Used

- **Next.js**
- **React**
- **TailwindCSS**
- **Framer Motion**
- **Node.js**
- **Express**
- **MongoDB**
- **Nodemailer**
- **react-google-recaptcha-v3**
- **next-pwa**
- **Font Awesome**
- **Google Fonts**

## How to Use

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```
2. Install the dependencies:
   ```bash
   cd your-repo-name
   npm install
   ```
3. Create a `.env.local` file in the root of the project and add the following environment variables:
   ```
   MONGO_URI=your-mongodb-connection-string
   EMAIL_USER=your-gmail-address
   EMAIL_PASS=your-gmail-password
   EMAIL_TO=the-email-address-to-receive-messages
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your-recaptcha-site-key
   RECAPTCHA_SECRET_KEY=your-recaptcha-secret-key
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

The website is ready to be deployed to [Vercel](https://vercel.com/). You will need to connect your GitHub repository to Vercel and set the environment variables in the Vercel dashboard.
