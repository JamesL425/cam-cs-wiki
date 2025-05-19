import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  // Define the sidebar structure for the docs
  collegeSidebar: [
    'intro', // Introduction page at the top level
    {
      type: 'category',
      label: 'Central Colleges',
      collapsible: true,
      collapsed: false,
      items: [
        'central/trinity',
        'central/jesus',
        // other central colleges can be added here
      ],
    },
    {
      type: 'category',
      label: 'River Colleges',
      collapsible: true,
      collapsed: false,
      items: [
        'river/st-johns',
        // other river colleges can be added here
      ],
    },
    {
      type: 'category',
      label: 'Hill Colleges',
      collapsible: true,
      collapsed: false,
      items: [
        'hill/churchill',
        // other hill colleges can be added here
      ],
    },
  ],
};

export default sidebars;
