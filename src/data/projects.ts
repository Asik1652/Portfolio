export interface Project {
  title: string;
  description: string[];
  tech: string[];
  status?: string;
  liveOnStore?: boolean;
  icon: string;
}

export const projects: Project[] = [
  {
    title: "CRM System",
    icon: "📱",
    status: "Live on Play Store 🟢",
    liveOnStore: true,
    tech: ["React Native", "Firebase", "Google Maps API"],
    description: [
      "Built and shipped to Play Store with Kanban pipeline, call logging, and salesperson location tracking",
      "Integrated Firebase Auth, FCM push notifications, and Google Maps API",
      "Built custom UI library — dropdown, data table, date filter, and Kanban board components",
      "Architected single codebase boilerplate supporting Android & iOS with standardized folder structure, navigation, and theme system",
    ],
  },
  {
    title: "FEMS — Field Employee Management",
    icon: "🗺️",
    status: "Live on Play Store 🟢",
    liveOnStore: true,
    tech: ["React Native", "Firebase", "Google Maps API"],
    description: [
      "Real-time field agent location tracking on live map",
      "Live map updates with Firebase & Google Maps",
      "Performance reports and attendance management",
      "Offline-ready with local state sync",
    ],
  },
  {
    title: "Chat Application",
    icon: "💬",
    tech: ["React Native", "Firebase"],
    description: [
      "Real-time messaging with Firebase Firestore",
      "Firebase Auth for secure cross-platform login",
      "Optimized for both Android & iOS",
      "Clean UI with smooth message animations",
    ],
  },
];