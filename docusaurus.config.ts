import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// ---------------------------------------------------------------------------
// LearnQuest AI — Documentation site config
// Author: Ahsan Mahmood (https://aoneahsan.com)
// App: https://learnqai.aoneahsan.com
// ---------------------------------------------------------------------------

const SITE_URL = 'https://learnqai-docs.aoneahsan.com';
const APP_URL = 'https://learnqai.aoneahsan.com';
const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.aoneahsan.learnquest';

const config: Config = {
  title: 'LearnQuest AI Docs',
  tagline: 'Free educational activities, games, and learning tools for kids ages 1–15.',
  favicon: 'img/favicon.svg',

  url: SITE_URL,
  baseUrl: '/',

  organizationName: 'aoneahsan',
  projectName: 'learnquest-ai-docs',

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',

  // SEO + AI-citability head tags (WebSite, EducationalApplication, Organization
  // JSON-LD) help Google Rich Results, Perplexity, ChatGPT, and Claude extract
  // structured entity data when citing this documentation.
  headTags: [
    {
      tagName: 'link',
      attributes: { rel: 'canonical', href: `${SITE_URL}/` },
    },
    {
      tagName: 'meta',
      attributes: { name: 'application-name', content: 'LearnQuest AI Docs' },
    },
    {
      tagName: 'meta',
      attributes: { name: 'apple-mobile-web-app-title', content: 'LearnQuest AI' },
    },
    {
      tagName: 'meta',
      attributes: { name: 'theme-color', content: '#6366f1' },
    },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'LearnQuest AI Documentation',
        url: SITE_URL,
        description:
          'Documentation for LearnQuest AI — a free gamified learning platform with hundreds of activities, 50 educational tools, learning paths, and parent/teacher portals for kids ages 1–15.',
        inLanguage: 'en',
        publisher: {
          '@type': 'Person',
          name: 'Ahsan Mahmood',
          url: 'https://aoneahsan.com',
          email: 'aoneahsan@gmail.com',
          sameAs: [
            'https://linkedin.com/in/aoneahsan',
            'https://github.com/aoneahsan',
            'https://www.npmjs.com/~aoneahsan',
          ],
        },
      }),
    },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'LearnQuest AI',
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'Web, Android',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        url: APP_URL,
        sameAs: [PLAY_URL],
        audience: { '@type': 'EducationalAudience', educationalRole: 'student' },
        author: { '@type': 'Person', name: 'Ahsan Mahmood', url: 'https://aoneahsan.com' },
        description:
          'A free, gamified learning app for kids ages 1–15 with interactive activities, 50 educational tools, learning paths, gamification, parental controls, and teacher dashboards. Works on the web and Android.',
      }),
    },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Ahsan Mahmood',
        alternateName: 'aoneahsan',
        url: 'https://aoneahsan.com',
        email: 'aoneahsan@gmail.com',
        sameAs: [
          'https://linkedin.com/in/aoneahsan',
          'https://github.com/aoneahsan',
          'https://www.npmjs.com/~aoneahsan',
          'https://aoneahsan.com',
        ],
      }),
    },
  ],

  i18n: { defaultLocale: 'en', locales: ['en'] },

  trailingSlash: false,

  markdown: {
    mermaid: true,
    hooks: { onBrokenMarkdownLinks: 'warn' },
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: 'https://github.com/aoneahsan/learnquest-ai-docs/edit/main/',
          showLastUpdateTime: true,
          breadcrumbs: true,
        },
        blog: false,
        theme: { customCss: './src/css/custom.css' },
        sitemap: { changefreq: 'weekly', priority: 0.7, lastmod: 'date' },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.svg',
    metadata: [
      { name: 'description', content: 'Documentation for LearnQuest AI — a free gamified learning app with hundreds of activities, 50 educational tools, and parent/teacher portals for kids ages 1–15.' },
      { name: 'keywords', content: 'learnquest ai, kids learning app, educational games for kids, free learning activities, learning tools, kids education, gamified learning, parent dashboard, teacher dashboard, math games, reading games, learning paths, ages 1-15' },
      { name: 'author', content: 'Ahsan Mahmood' },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:creator', content: '@aoneahsan' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'LearnQuest AI Docs' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'article:author', content: 'Ahsan Mahmood' },
    ],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: { hideable: true, autoCollapseCategories: true },
    },
    navbar: {
      title: 'LearnQuest AI',
      logo: {
        alt: 'LearnQuest AI logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo.svg',
        width: 32,
        height: 32,
      },
      items: [
        { type: 'docSidebar', sidebarId: 'mainSidebar', position: 'left', label: 'Docs' },
        { to: '/getting-started/quick-start', label: 'Quick Start', position: 'left' },
        { to: '/about-the-author', label: 'Author', position: 'right' },
        { href: APP_URL, label: 'Open the App', position: 'right' },
        { href: PLAY_URL, label: 'Google Play', position: 'right' },
        { href: 'https://github.com/aoneahsan/learnquest-ai-docs', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            { label: 'Introduction', to: '/intro' },
            { label: 'Getting Started', to: '/getting-started/create-account' },
            { label: 'Quick Start', to: '/getting-started/quick-start' },
            { label: 'FAQ', to: '/faq' },
          ],
        },
        {
          title: 'Product',
          items: [
            { label: 'Open the App', href: APP_URL },
            { label: 'Google Play', href: PLAY_URL },
            { label: 'Learning Tools', to: '/features/learning-tools' },
            { label: 'For Parents', to: '/features/parents' },
          ],
        },
        {
          title: 'Built by Ahsan Mahmood',
          items: [
            { label: 'aoneahsan.com', href: 'https://aoneahsan.com' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/aoneahsan' },
            { label: 'GitHub', href: 'https://github.com/aoneahsan' },
            { label: 'npm packages', href: 'https://www.npmjs.com/~aoneahsan' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ahsan Mahmood. Built with Docusaurus. LearnQuest AI is free to use.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'typescript'],
    },
    announcementBar: {
      id: 'free-app',
      content:
        'LearnQuest AI is free to use — <a href="https://learnqai.aoneahsan.com">open the web app</a> or get it on <a href="https://play.google.com/store/apps/details?id=com.aoneahsan.learnquest">Google Play</a>.',
      backgroundColor: '#6366f1',
      textColor: '#ffffff',
      isCloseable: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
