import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Agentic Platform',
  tagline: 'Reference Architecture for Production-Ready AI Agents',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  // Replace with your actual GitHub Pages URL
  url: 'https://raphaelmansuy.github.io',
  
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/the_agentic_platform/',

  // GitHub pages deployment config.
  organizationName: 'raphaelmansuy', // Your GitHub org/user name
  projectName: 'the_agentic_platform', // Your repo name
  deploymentBranch: 'gh-pages',
  
  // Trailing slash configuration for GitHub Pages
  trailingSlash: true,

  onBrokenLinks: 'throw',

  // Markdown configuration
  markdown: {
    format: 'detect',
  },

  // Useful metadata like html lang
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Global metadata
  headTags: [
    // Structured data for search engines
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'WebSite',
        name: 'Agentic Platform',
        url: 'https://raphaelmansuy.github.io/the_agentic_platform/',
      }),
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Update this to your repo
          editUrl: 'https://github.com/raphaelmansuy/the_agentic_platform/tree/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
            title: 'Agentic Platform Blog',
            description: 'Latest updates and articles from Agentic Platform',
          },
          // Update this to your repo
          editUrl: 'https://github.com/raphaelmansuy/the_agentic_platform/tree/main/',
          blogTitle: 'Blog',
          blogDescription: 'Latest updates and articles',
          postsPerPage: 10,
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        // Sitemap configuration
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        // Google Analytics - uncomment and add your tracking ID
        // gtag: {
        //   trackingID: 'G-XXXXXXXXXX',
        //   anonymizeIP: true,
        // },
      } satisfies Preset.Options,
    ],
  ],

  // Additional plugins
  plugins: [
    // Ideal image plugin for WebP/AVIF compression
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        disableInDev: false,
      },
    ],
    // PWA plugin for offline support
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#0f172a',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/logo.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/logo.svg',
            color: '#0f172a',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/img/logo.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000',
          },
        ],
      },
    ],
  ],

  themeConfig: {
    // Social card image for sharing
    image: 'img/social-card.png',
    
    // SEO metadata
    metadata: [
      {name: 'keywords', content: 'documentation, template, docusaurus, github pages'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:site', content: '@yourusername'},
      {property: 'og:type', content: 'website'},
    ],
    
    // Color mode configuration
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    
    // Announcement bar disabled for cleaner UX
    // announcementBar: {
    //   id: 'announcement',
    //   content: '⭐️ If you like this template, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/your-username/your-repo-name">GitHub</a>! ⭐️',
    //   backgroundColor: '#25c2a0',
    //   textColor: '#ffffff',
    //   isCloseable: true,
    // },
    
    navbar: {
      title: 'Agentic Platform',
      hideOnScroll: true,
      logo: {
        alt: 'Agentic Platform Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/about', label: 'About', position: 'left'},
        // Right side items
        {
          href: 'https://github.com/raphaelmansuy/the_agentic_platform',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    
    footer: {
      style: 'light',
      logo: {
        alt: 'Agentic Platform Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
        href: 'https://github.com/raphaelmansuy/the_agentic_platform',
        width: 160,
      },
      links: [
        {
          title: 'Reference Architecture',
          items: [
            {
              label: 'Introduction',
              to: '/docs/',
            },
            {
              label: 'Core Concepts',
              to: '/docs/category/core-concepts',
            },
            {
              label: 'The Eight Needs',
              to: '/docs/category/the-eight-needs',
            },
            {
              label: 'Architecture',
              to: '/docs/category/architecture',
            },
            {
              label: 'Technology Landscape',
              to: '/docs/category/technology-landscape',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Discussions',
              href: 'https://github.com/raphaelmansuy/the_agentic_platform/discussions',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/your-invite-link',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/yourusername',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/raphaelmansuy/the_agentic_platform',
            },
            {
              label: 'About',
              to: '/about',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Agentic Platform. Built with Docusaurus.`,
    },
    
    // Prism code highlighting
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'yaml', 'typescript', 'python'],
    },
    
    // Table of contents configuration
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    
    // Docs configuration
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
