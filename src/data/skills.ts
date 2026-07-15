export interface SkillGroup {
  label: string;
  icon: string;
  percent: number;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Mobile Development",
    icon: "📱",
    percent: 70,
    skills: [
      "React Native",
      "React Navigation",
      "Redux Toolkit",
      "TypeScript",
      "Firebase Auth",
      "Firestore",
      "FCM",
      "Google Maps API",
      "REST APIs & Axios",
      "Native Modules (Android)",
      "AsyncStorage",
      "Play Store Deployment",
      "Jest",
    ],
  },
  {
    label: "Frontend Web",
    icon: "🌐",
    percent: 20,
    skills: [
      "React.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Responsive UI",
      "REST API Integration",
    ],
  },
  {
    label: "Backend (AI-Assisted)",
    icon: "⚙️",
    percent: 5,
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Flask",
      "Python",
      "REST API Design",
      "GitHub Copilot",
      "Cursor AI",
      "Cline AI",
      "ChatGPT",
      "Gemini",
    ],
  },
  {
    label: "QA & Testing",
    icon: "🧪",
    percent: 5,
    skills: [
      "Selenium",
      "Pytest",
      "JMeter",
      "Unittest",
    ],
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

export interface ExperienceRole {
  title: string;
  period: string;
  highlights: string[];
  tech: string[];
}

export interface Experience {
  company: string;
  location: string;
  roles: ExperienceRole[];
}

export const experiences: Experience[] = [
  {
    company: "Techgenzi Private Limited",
    location: "Coimbatore",
    roles: [
      {
        title: "React Native Developer",
        period: "May 2023 – Present",
        highlights: [
          "Developed and shipped production-level cross-platform mobile apps across CRM, TMS, CMS, and FEMS projects",
          "Built the CRM app with an AI-powered visiting card scanner, FCM notifications, and Google Maps integration",
          "Independently built and published FEMS (Factory Efficiency Management System) on the Play Store",
          "Built a GPS-based school bus tracking system for real-time parent visibility",
          "Built an in-house analytics SDK tracking customer usage across mobile and web apps, with a React.js/Flask dashboard layer",
        ],
        tech: ["React Native", "TypeScript", "Firebase", "Redux Toolkit", "Google Maps API"],
      },
      {
        title: "Software Tester (QA Automation)",
        period: "Jul 2022 – May 2023",
        highlights: [
          "Automated regression and performance testing using Selenium (Python) with Pytest and JMeter for load testing",
          "Reduced manual testing time by 50% through automated test suites",
          "Promoted internally to the development team based on consistent performance and initiative",
        ],
        tech: ["Selenium", "Python", "JMeter", "Pytest"],
      },
    ],
  },
];