import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Sidebar layout for the LearnQuest AI documentation site.
 */
const sidebars: SidebarsConfig = {
  mainSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: ['getting-started/create-account', 'getting-started/quick-start'],
    },
    {
      type: 'category',
      label: 'Features',
      collapsed: false,
      items: [
        'features/activities',
        'features/learning-tools',
        'features/gamification',
        'features/learning-paths',
        'features/social',
        'features/parents',
        'features/teachers',
        'features/offline-and-themes',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      collapsed: true,
      items: ['guides/track-progress'],
    },
    'privacy-and-safety',
    'faq',
    'about-the-author',
  ],
};

export default sidebars;
