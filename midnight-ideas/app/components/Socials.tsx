"use client";
import { motion } from 'framer-motion';
import { FaTelegram, FaGithub, FaTiktok, FaInstagram } from 'react-icons/fa';

const socials = [
  {
    name: 'Telegram',
    href: 'https://t.me/CVBlq',
    icon: FaTelegram,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/TUHHUN/IDK-Midnight-ideas-',
    icon: FaGithub,
  },
  {
    name: 'TikTok',
    href: '#',
    icon: FaTiktok,
    status: 'Coming Soon',
  },
  {
    name: 'Instagram',
    href: '#',
    icon: FaInstagram,
    status: 'Coming Soon',
  },
];

const Socials = () => {
  return (
    <section id="socials" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-orbitron text-center text-neon-purple mb-12"
        >
          Social Media
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="bg-white/10 border border-neon-purple rounded-lg p-8 text-center hover:scale-105 hover:shadow-lg hover:shadow-neon-purple/50 transition-all duration-300"
            >
              <social.icon className="text-5xl text-neon-blue mx-auto mb-4" />
              <h3 className="text-xl font-orbitron font-bold">{social.name}</h3>
              {social.status && <p className="text-sm text-gray-400">{social.status}</p>}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Socials;
