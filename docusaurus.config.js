module.exports = {
  title: 'MDW Docs',
  tagline: 'Documentation for My Digital Workplace',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'DWS', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'My Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      links: [
        { to: 'docs/doc1', activeBasePath: 'docs', label: 'Docs', position: 'left',},
        { to: 'blog', label: 'Blog', position: 'left'},
        { to: 'Changelogs/', label: 'Change Logs', position: 'left'},
        { href: 'https://Sgithub.com/docusaurus', label: 'SGitHub', position: 'right', },
        { href: 'https://gitlab.com/', label: 'GitLab', position: 'right', },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        { title: 'Docs', 
          items: [
            { label: 'Style Guide', to: 'docs/doc1', },
            { label: 'Second Doc', to: 'docs/doc2', },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/docusaurus', },
            { label: 'Discord', href: 'https://discordapp.com/invite/docusaurus', },
          ],
        },
        { title: 'Social',
          items: [
            { label: 'Blog', to: 'blog', },
            { label: 'GitHub', href: 'https://github.com/facebook/docusaurus', },
            { label: 'Twitter', href: 'https://twitter.com/docusaurus', },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Digital Workplace. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
