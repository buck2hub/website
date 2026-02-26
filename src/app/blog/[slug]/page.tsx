import { blogSource } from '@/lib/source';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/mdx-components';
import Link from 'next/link';
import type { MDXContent } from 'mdx/types';

export function generateStaticParams() {
  return blogSource.generateParams().map((param) => ({
    slug: param.slug[0],
  }));
}

interface BlogPostData {
  title: string;
  description?: string;
  date?: string | Date;
  author?: string;
  body: MDXContent;
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const page = blogSource.getPage([params.slug]);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}

export default async function BlogPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const page = blogSource.getPage([params.slug]);
  if (!page) notFound();

  // Cast to defined interface
  const data = page.data as unknown as BlogPostData;
  const MDX = data.body;

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
      >
        ← Back to Blog
      </Link>
      
      <article>
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold">{data.title}</h1>
          <p className="text-lg text-neutral-500 dark:text-neutral-400 mb-4">{data.description}</p>
          <div className="flex justify-center items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
            {data.date ? (
              <time dateTime={new Date(data.date).toISOString()}>
                {new Date(data.date).toLocaleDateString()}
              </time>
            ) : null}
            {data.author ? (
              <>
                <span>•</span>
                <span>{data.author}</span>
              </>
            ) : null}
          </div>
        </div>
        <div className="prose dark:prose-invert max-w-none">
          <MDX components={getMDXComponents()} />
        </div>
      </article>
    </div>
  );
}
