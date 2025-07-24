import { getAllPostIds, getPostData } from '../../../lib/posts';

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths;
}

export default async function Post({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug);
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-orbitron text-center text-neon-purple mb-4">{postData.title}</h1>
        <div className="text-gray-400 text-center mb-12">{postData.date}</div>
        <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
    </section>
  );
}
