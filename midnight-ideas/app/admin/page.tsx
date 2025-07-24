"use client";
import { useState, useEffect } from 'react';

const Admin = () => {
  const [projects, setProjects] = useState([]);
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetch('/api/projects')
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const handleSubmit = async (e: React.FormEvent)_ => {
    e.preventDefault();
    setStatus('Saving...');

    try {
      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(projects),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('Projects saved!');
      } else {
        setStatus(data.message || 'Error saving projects');
      }
    } catch (error) {
      console.error(error);
      setStatus('Error saving projects');
    }
  };

  const handleProjectChange = (index: number, field: string, value: string) => {
    const newProjects = [...projects];
    newProjects[index][field] = value;
    setProjects(newProjects);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-orbitron text-center text-neon-purple mb-12">Admin</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/10 p-6 rounded-lg">
              <h2 className="text-2xl font-orbitron font-bold mb-4">Project {index + 1}</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor={`title-${index}`} className="block text-lg font-medium text-neon-blue">
                    Title
                  </label>
                  <input
                    type="text"
                    id={`title-${index}`}
                    value={project.title}
                    onChange={(e) => handleProjectChange(index, 'title', e.target.value)}
                    className="w-full mt-2 px-4 py-2 bg-white/10 border border-neon-purple rounded-lg focus:ring-2 focus:ring-electric-pink focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor={`description-${index}`} className="block text-lg font-medium text-neon-blue">
                    Description
                  </label>
                  <textarea
                    id={`description-${index}`}
                    value={project.description}
                    onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
                    rows={3}
                    className="w-full mt-2 px-4 py-2 bg-white/10 border border-neon-purple rounded-lg focus:ring-2 focus:ring-electric-pink focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor={`image-${index}`} className="block text-lg font-medium text-neon-blue">
                    Image URL
                  </label>
                  <input
                    type="text"
                    id={`image-${index}`}
                    value={project.image}
                    onChange={(e) => handleProjectChange(index, 'image', e.target.value)}
                    className="w-full mt-2 px-4 py-2 bg-white/10 border border-neon-purple rounded-lg focus:ring-2 focus:ring-electric-pink focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor={`tags-${index}`} className="block text-lg font-medium text-neon-blue">
                    Tags (comma-separated)
                  </label>
                  <input
                    type="text"
                    id={`tags-${index}`}
                    value={project.tags.join(', ')}
                    onChange={(e) => handleProjectChange(index, 'tags', e.target.value.split(', '))}
                    className="w-full mt-2 px-4 py-2 bg-white/10 border border-neon-purple rounded-lg focus:ring-2 focus:ring-electric-pink focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor={`link-${index}`} className="block text-lg font-medium text-neon-blue">
                    Link
                  </label>
                  <input
                    type="text"
                    id={`link-${index}`}
                    value={project.link}
                    onChange={(e) => handleProjectChange(index, 'link', e.target.value)}
                    className="w-full mt-2 px-4 py-2 bg-white/10 border border-neon-purple rounded-lg focus:ring-2 focus:ring-electric-pink focus:outline-none"
                  />
                </div>
              </div>
            </div>
          ))}
          <div className="text-center">
            <button
              type="submit"
              className="bg-neon-purple text-deep-black px-8 py-3 rounded-lg font-orbitron font-bold hover:bg-electric-pink hover:shadow-lg hover:shadow-electric-pink/50 transition-all duration-300"
            >
              Save Projects
            </button>
          </div>
          {status && <p className="text-center mt-4">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Admin;
