"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-orbitron text-center text-neon-purple mb-12"
        >
          👾 About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-1.5 bg-gradient-to-r from-neon-purple to-electric-pink rounded-full blur-xl opacity-75 animate-pulse"></div>
            <Image
              src="https://i.postimg.cc/VdQsx69Q/9b768131.png"
              alt="Avatar"
              width={200}
              height={200}
              className="relative rounded-full border-4 border-deep-black"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-xl text-center md:text-left text-lg space-y-4"
          >
            <p>I’m a night coder — where logic meets chaos and the best ideas hit after 2 AM. 🌌</p>
            <p>I don’t follow rules, I bend them into code.</p>
            <p>Sometimes it works. Sometimes it sparks. Sometimes it just vibes. ⚡</p>
            <p>Experienced? Yeah. Structured? Not really.</p>
            <p>I build things that glitch, glow, and maybe even grow. 🚀💻</p>
            <p>If it feels insane but kinda genius — I’m probably already working on it.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
