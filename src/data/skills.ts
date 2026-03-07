export interface SkillGroup {
  label: string;
  icon: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Mobile",
    icon: "📱",
    skills: [
      "React Native CLI",
      "TypeScript",
      "Redux Toolkit",
      "React Navigation",
      "Firebase",
      "FCM",
      "Google Maps API",
      "Java",
      "Kotlin",
    ],
  },
  {
    label: "Web",
    icon: "🌐",
    skills: ["React JS", "Node.js", "JavaScript", "REST APIs", "React Hooks"],
  },
  {
    label: "Tools",
    icon: "🛠️",
    skills: ["Git", "Postman", "VS Code", "GitHub Copilot", "Cursor AI"],
  },
];

export interface Award {
  icon: string;
  title: string;
  company: string;
  date: string;
}

export const awards: Award[] = [
  {
    icon: "🏆",
    title: "Best Employee of the Month",
    company: "Techgenzi Pvt. Ltd.",
    date: "December 2024",
  },
  {
    icon: "⭐",
    title: "Internal Promotion — QA → Developer",
    company: "Techgenzi Pvt. Ltd.",
    date: "May 2023",
  },
];

export interface Experience {
  company: string;
  roles: {
    title: string;
    period: string;
  }[];
}

export const experiences: Experience[] = [
  {
    company: "Techgenzi Private Limited",
    roles: [
      { title: "React Native Developer", period: "May 2023 – Present" },
      { title: "Software Tester", period: "July 2022 – May 2023" },
    ],
  },
];