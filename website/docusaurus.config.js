const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'JS Utils',
  tagline: 'A Collection of JavaScript Utility Functions.',
  url: 'https://open-tech-world.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'open-tech-world', // Usually your GitHub org/user name.
  projectName: 'js-utils', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '@open-tech-world/js-utils',
      items: [
        {
          href: 'https://github.com/open-tech-world/js-utils',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Contributors of <a href="https://github.com/open-tech-world/js-utils">open-tech-world/js-utils</a>. Built with <a href="https://docusaurus.io/">Docusaurus</a>.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
