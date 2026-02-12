import React from 'react';
import { blogSource } from '@/lib/source';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Latest updates and stories from Buck2Hub.',
};

interface BlogPostData {
  title: string;
  description?: string;
  date?: string | Date;
  author?: string;
}

export default function BlogPage() {
  const posts = [...blogSource.getPages()].sort((a, b) => {
    const dataA = a.data as unknown as BlogPostData;
    const dataB = b.data as unknown as BlogPostData;
    if (!dataA.date || !dataB.date) return 0;
    return new Date(dataB.date).getTime() - new Date(dataA.date).getTime();
  });

  return (
    <main className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">Blog</h1>
        <p className="text-neutral-500 dark:text-neutral-400">Latest updates and stories.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => {
          const data = post.data as unknown as BlogPostData;
          return (
            <Link
              key={post.url}
              href={post.url}
              className="group flex flex-col gap-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 transition-all hover:shadow-md"
            >
              <div className="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
                {data.date ? (
                  <time dateTime={new Date(data.date).toISOString()}>
                    {new Date(data.date).toLocaleDateString('en-US')}
                  </time>
                ) : null}
                {data.author ? (
                  <>
                    <span>•</span>
                    <span>{data.author}</span>
                  </>
                ) : null}
              </div>
              <h2 className="text-2xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {data.title}
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300 line-clamp-2">
                {data.description}
              </p>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
