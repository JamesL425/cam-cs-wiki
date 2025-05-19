import { Config } from '@docusaurus/types';
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const config: Config = {
  title: 'Cambridge CS Colleges Wiki',
  tagline: 'Guide to Computer Science at University of Cambridge, organized by College',
  url: 'https://USERNAME.github.io', // Your website URL or GitHub Pages URL
  baseUrl: '/REPO_NAME/', // Base URL for the site; change to '/' for domain root
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico', // placeholder favicon path (optional)
  organizationName: 'USERNAME', // GitHub org/user name.
  projectName: 'REPO_NAME', // GitHub repo name.
  deploymentBranch: 'gh-pages', // deployment branch for GitHub Pages
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: '/', // serve docs at site's root
          sidebarPath: require.resolve('./sidebars.ts'),
          // Please change this to your repo.
          editUrl: 'https://github.com/USERNAME/REPO_NAME/edit/main/',
        },
        blog: false, // no blog section needed for this wiki
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig: 
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Cambridge CS Colleges',
        logo: {
          alt: 'Cambridge University Crest',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Colleges',
          },
          {
            href: 'https://www.cam.ac.uk',
            label: 'University Website',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `© ${new Date().getFullYear()} Cambridge CS Colleges Wiki. Built with Docusaurus.`,
      },
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
    }),
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&display=swap',
  ],
};

export default config;
