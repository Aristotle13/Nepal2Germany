import type { Metadata } from 'next';
import { posts } from './data';
import { PostCard } from './components/post-card';

export const metadata: Metadata = {
  title: 'Blog | Study Bridge',
  description: 'Stay updated with the latest news, tips, and guides for Nepali students planning to study in Germany.',
};

export default function BlogPage() {
  return (
    <div className="container mx-auto max-w-6xl py-12 px-4">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight mb-4">
          Blogs
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Informations, news, tips, and insights to help you on your journey to Germany.
        </p>
      </section>
      {/* <h1 className="text-3xl font-bold mb-6">Blog</h1> */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}