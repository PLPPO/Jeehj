"use client";
import { motion } from 'framer-motion';

const Intro = () => {
  return (
    <section
      id="intro"
      className="h-screen flex justify-center items-center text-center relative"
    >
      <div id="stars"></div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="z-10"
      >
        <h1 className="font-orbitron text-5xl md:text-7xl text-neon-purple" style={{ textShadow: '0 0 10px #B388EB, 0 0 20px #B388EB, 0 0 30px #FF6EC7' }}>
          Welcome to the madness.
        </h1>
        <p className="text-2xl md:text-3xl text-neon-blue mt-4">
          Stay weird. 🌙👽
        </p>
      </motion.div>
    </section>
  );
};

export default Intro;
