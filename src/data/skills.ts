export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'HTML', 'CSS'],
  },
  {
    category: 'Frameworks',
    items: ['React', 'React Native', 'Vue', 'Node', 'Express', 'Flask', 'Django'],
  },
  {
    category: 'Tools & Infra',
    items: [
      'Git',
      'GitHub Actions',
      'Playwright',
      'Webpack',
      'REST APIs',
      'Chrome Extensions',
      'Linear',
    ],
  },
  {
    category: 'Design & AI',
    items: ['Figma', 'Claude Code', 'Cursor', 'ChatGPT'],
  },
];
