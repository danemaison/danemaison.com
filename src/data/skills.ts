export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL", "HTML", "CSS"],
  },
  {
    category: "Frameworks",
    items: [
      "React",
      "React Native",
      "Vue",
      "Node",
      "Express",
      "Flask",
      "Django",
    ],
  },
  {
    category: "Tools & Infra",
    items: [
      "Git",
      "Webpack",
      "Playwright",
      "REST APIs",
      "Linear",
      "GitHub Actions",
      "Chrome Extensions",
    ],
  },
  {
    category: "Design & AI",
    items: ["Claude Code", "Cursor", "ChatGPT", "Figma"],
  },
];
