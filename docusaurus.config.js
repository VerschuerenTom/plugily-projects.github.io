module.exports = {
  title: 'Plugily Projects Wiki',
  tagline: 'The fastest way to find solutions',
  url: 'https://Plugily-Projects.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Plugily-Projects', // Usually your GitHub org/user name.
  projectName: 'plugily-projects.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Plugily Projects',
      logo: {
        alt: 'Plugily Projects Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          label: 'Docs',
          position: 'left',
          items: [
            {
              label: 'VillageDefense',
              to: '/villagedefense/',
            },
            {
              label: 'BuildBattle',
              to: '/buildbattle/',
            },
            {
              label: 'MurderMystery',
              to: '/murdermystery/',
            },
            {
              label: 'TheBridge',
              to: '/TheBridge/',
            },
          ],
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://translate.plugily.xyz',
          label: 'Translate',
          position: 'left',
        },
        {
          href: 'https://beta.plugily.xyz',
          label: 'Beta',
          position: 'left',
        },
        {
          href: 'https://github.com/Plugily-Projects',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Feedbacky',
              href: 'https://feedbacky.net',
            },
            {
              label: 'Discord',
              href: 'https://discord.plugily.xyz',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Plugily-Projects',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Plugily Projects. Built with Docusaurus. Hosted with GitHub-Pages`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/Plugily-Projects/plugily-projects.github.io/blob/documentation/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          routeBasePath: "/",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/Plugily-Projects/plugily-projects.github.io/blob/documentation/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
