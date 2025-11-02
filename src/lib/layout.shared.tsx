import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'Buck2hub',
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
        text: 'Forge',
        url: 'https://forge.rk8s.dev',
        active: 'nested-url',
      },
    ],
  };
}
