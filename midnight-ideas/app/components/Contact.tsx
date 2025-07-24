"use client";
import { useState, useCallback } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    if (!executeRecaptcha) {
      setStatus('reCAPTCHA not available');
      return;
    }

    const token = await executeRecaptcha('contact');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message, token }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('Message sent!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus(data.message || 'Error sending message');
      }
    } catch (error) {
      console.error(error);
      setStatus('Error sending message');
    }
  }, [executeRecaptcha, name, email, message]);

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-orbitron text-center text-neon-purple mb-12">
          Contact Me
        </h2>
        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-neon-blue">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full mt-2 px-4 py-2 bg-white/10 border border-neon-purple rounded-lg focus:ring-2 focus:ring-electric-pink focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-neon-blue">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full mt-2 px-4 py-2 bg-white/10 border border-neon-purple rounded-lg focus:ring-2 focus:ring-electric-pink focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-neon-blue">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
                className="w-full mt-2 px-4 py-2 bg-white/10 border border-neon-purple rounded-lg focus:ring-2 focus:ring-electric-pink focus:outline-none"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-neon-purple text-deep-black px-8 py-3 rounded-lg font-orbitron font-bold hover:bg-electric-pink hover:shadow-lg hover:shadow-electric-pink/50 transition-all duration-300"
              >
                Send Message
              </button>
            </div>
            {status && <p className="text-center mt-4">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
