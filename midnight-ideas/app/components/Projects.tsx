"use client";
import projects from '../../data/projects.json';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-orbitron text-center text-neon-purple mb-12"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="group relative bg-white/10 border border-neon-purple rounded-lg overflow-hidden"
            >
              <Image src={project.image} alt={project.title} width={500} height={300} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-orbitron font-bold mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-electric-pink/20 text-electric-pink px-2 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 bg-deep-black/80 backdrop-blur-sm p-6 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-neon-blue font-bold hover:underline">
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
