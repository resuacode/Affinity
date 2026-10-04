import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Curso de Affinity',
  tagline: 'Aprende Affinity paso a paso y diseña tu propia sobrecubierta de libro',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://resuacode.es',
  baseUrl: '/affinity/',

  organizationName: 'resuacode',
  projectName: 'Affinity',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          editUrl: 'https://github.com/resuacode/Affinity/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Curso de Affinity',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Material del curso',
        },
        {
          href: 'https://github.com/resuacode/Affinity',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Curso',
          items: [
            {label: 'Introducción', to: '/docs/intro'},
            {label: 'Conoce Affinity', to: '/docs/conoce-affinity/que-es-affinity'},
            {label: 'Sobrecubierta', to: '/docs/sobrecubierta/preparacion'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} resuacode. Construido con Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
