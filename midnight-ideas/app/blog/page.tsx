import Link from 'next/link';
import { getSortedPostsData } from '../../lib/posts';

export default function Blog() {
  const allPostsData = getSortedPostsData();
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-orbitron text-center text-neon-purple mb-12">Blog</h1>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} className="mb-4">
              <Link href={`/blog/${id}`} className="text-2xl text-neon-blue hover:underline">
                {title}
              </Link>
              <br />
              <small className="text-gray-400">
                {date}
              </small>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
