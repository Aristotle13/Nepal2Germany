import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { posts } from '../data';
import { Calendar, User } from 'lucide-react';

interface PostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Study Bridge Blog`,
    description: post.excerpt,
  };
}

export default function PostPage({ params }: PostPageProps) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto max-w-4xl py-12 px-4">
      <header className="mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight mb-4">
          {post.title}
        </h1>
        <div className="flex justify-center items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <User className="h-4 w-4" />
            <span>{post.author}</span>
          </div>
        </div>
      </header>

      <Image
        src={post.image}
        alt={post.title}
        data-ai-hint={post.dataAiHint}
        width={1200}
        height={600}
        className="w-full object-cover aspect-video rounded-lg shadow-lg mb-8"
        priority
      />

      {/* Blog Post Content */}
      <div
        className="space-y-6 text-muted-foreground [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:font-headline [&_h3]:text-foreground [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_a]:text-primary [&_a]:underline hover:[&_a]:no-underline [&_strong]:font-semibold [&_strong]:text-foreground"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}