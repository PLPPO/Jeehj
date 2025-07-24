import Link from 'next/link';
import { getSortedPostsData } from '../../lib/posts';
import { motion } from 'framer-motion';

export default function Blog() {
  const allPostsData = getSortedPostsData();
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-orbitron text-center text-neon-purple mb-12"
        >
          Blog
        </motion.h1>
        <ul>
          {allPostsData.map(({ id, date, title }, index) => (
            <motion.li
              key={id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="mb-4"
            >
              <Link href={`/blog/${id}`} className="text-2xl text-neon-blue hover:underline">
                {title}
              </Link>
              <br />
              <small className="text-gray-400">
                {date}
              </small>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
