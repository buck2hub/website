import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <Image
              src="/images/logo/logo-blue-with-word.svg"
              width={48 * 2}
              height={168 * 2}
              alt="Buck2Hub"
              className="mr-2"
            />
        </>  
      ),
    },
    links: [
      {
        text: 'Install',
        url: '/install',
        active: 'nested-url',
      },
      {
        text: 'Documentation',
        url: '/docs',
        active: 'nested-url',
      },
      {
        text: 'Blog',
        url: '/blog',
        active: 'nested-url',
      },
      {
        text: 'Hub',
        url: 'https://hub.buck2hub.com',
        active: 'nested-url',
      },
    ],
  };
}

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Docs Layout: app/docs/layout.tsx
 */
export function docOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <Image
            src="/images/logo/logo-blue.svg"
            width={48}
            height={168}
            alt="Buck2hub"
            className="mr-2"
          />
          Buck2hub
        </>
      ),
    },
  };
}