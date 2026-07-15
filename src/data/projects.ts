export interface Project {
  title: string;
  org: string;
  description: string[];
  tech: string[];
  status?: string;
  liveOnStore?: boolean;
  icon: string;
}

export const projects: Project[] = [
  {
    title: "CRM Mobile App",
    org: "Techgenzi Private Limited",
    icon: "📱",
    status: "Live on Play Store 🟢",
    liveOnStore: true,
    tech: ["React Native", "Redux Toolkit", "TypeScript", "Firebase Auth", "Firestore", "FCM", "Google Maps API", "AI/OCR Integration"],
    description: [
      "Engineered an AI-powered visiting card scanner — captures business card image, extracts details via AI/OCR, and auto-populates CRM records, eliminating manual data entry",
      "Real-time lead tracking, secure Firebase Auth, and FCM push notifications for sales teams",
      "Built reusable components for form management, role-based access, and dynamic workflows using Redux Toolkit & React Navigation",
      "Optimized for performance on low-end Android devices with location-based features via Google Maps API",
    ],
  },
  {
    title: "FEMS — Factory Efficiency Management System",
    org: "Techgenzi Private Limited (solo build)",
    icon: "🏭",
    status: "Live on Play Store 🟢",
    liveOnStore: true,
    tech: ["React Native", "Redux Toolkit", "Firebase", "FCM", "REST APIs", "Play Store Deployment"],
    description: [
      "Independently designed and built end-to-end — from architecture through Play Store release — as a team of 1",
      "Covers Inventory Management, Stock Updates, Sales, and Delivery Management for factory/industrial operations",
      "Firebase-backed real-time data sync with role-based access control",
      "FCM push notifications for live stock & delivery status updates",
    ],
  },
  {
    title: "Analytics & Usage-Tracking System",
    org: "Techgenzi Private Limited",
    icon: "📊",
    tech: ["SDK Development", "Event Tracking", "React.js", "Flask", "Python", "REST APIs", "Token-based Auth"],
    description: [
      "Built an in-house SDK that generates a unique token per app and automatically captures user actions in real time",
      "Events are queued client-side before posting to the API — guaranteeing reliable delivery with zero data loss under network interruptions",
      "Built the Flask/Python backend to ingest event data and a React.js dashboard showing which features customers use most",
      "Deployed across Techgenzi's mobile and web applications for product analytics",
    ],
  },
  {
    title: "GPS-Based School Bus Tracking",
    org: "Techgenzi Private Limited",
    icon: "🚌",
    tech: ["React Native", "Google Maps API", "Firebase", "Real-time Location Tracking"],
    description: [
      "Built and assigned bus routes to drivers, then tracked live GPS location via driver's mobile",
      "Parents can monitor their child's bus position in real time on a live map",
      "Firebase-powered real-time location sync with Google Maps API integration",
    ],
  },
];