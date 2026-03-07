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
      "Full mobile CRM serving 500+ active daily users",
      "Kanban pipeline, call logging & lead management",
      "Location tracking with Google Maps API integration",
      "Push notifications via Firebase Cloud Messaging",
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