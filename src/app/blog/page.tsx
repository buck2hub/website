import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
};

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">Hello Blog</h1>
    </main>
  );
}
