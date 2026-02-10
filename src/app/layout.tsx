import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: 'Buck2Hub - %s',
    default: 'Buck2Hub',
  },
  description: 'Seamless migration from Cargo to Buck2.',
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
      <GoogleAnalytics gaId="G-MB1938FDHS" />
    </html>
  );
}
