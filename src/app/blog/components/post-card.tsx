import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User } from 'lucide-react';
import { Post } from '../data';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="border rounded-lg overflow-hidden shadow-sm flex flex-col h-full">
      <Link href={`/blog/${post.slug}`}>
        <div className="relative w-full aspect-video">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      </Link>
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-xl font-semibold font-headline tracking-tight mb-2">
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h2>
        <p className="text-muted-foreground text-sm mb-4 flex-grow">
          {post.excerpt}
        </p>
        <div className="flex items-center text-xs text-muted-foreground mt-auto">
          <div className="flex items-center gap-1.5 mr-4">
            <Calendar className="h-3 w-3" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <User className="h-3 w-3" />
            <span>{post.author}</span>
          </div>
        </div>
      </div>
    </article>
  );
}