// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NekoNya-Docs',
  tagline: 'Documentation for NekoNya and its packages',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.classydev.fr',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/nekonya',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'NekoNyaDevs', // Usually your GitHub org/user name.
  projectName: 'nekonya-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/NekoNyaDevs/nekonya-docs',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/NekoNyaDevs/nekonya-docs',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.svg',
      navbar: {
        title: 'NekoNya-Docs',
        logo: {
          alt: 'NekoNya Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/NekoNyaDevs/nekonya-docs',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://nekonya.classydev.fr',
            label: 'Main Site',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: 'API',
                to: '/docs/api/intro',
              },
              {
                label: 'NekoNya.js',
                to: '/docs/packages/js',
              },
            ],
          },
          {
            title: 'Other',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/NekoNyaDevs',
              },
              {
                label: 'Main Site',
                href: 'https://nekonya.classydev.fr',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NekoNyaDevs`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['java', 'gradle'],
      },
    }),
  headTags: [
    {
      tagName: 'script',
        attributes: {
          src: 'https://plausible.classydev.fr/js/script.js',
          defer: "true",
          'data-domain': 'docs.classydev.fr'
        },
    }
  ]
};

export default config;
