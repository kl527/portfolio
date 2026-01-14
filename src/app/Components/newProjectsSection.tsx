import ProjectsSectionClient, { type ProjectItem } from "./ProjectsSectionClient";
import SplineAnimation from "./SplineAnimation";

export default function NewProjectsSection() {
  const projectData: ProjectItem[] = [
    {
      title: "Parasomatic Interaction: peripheral interaction with AI Agents",
      description: "Physical Computing & Cognitive Science",
      date: "2025",
      category: "2025 | Physical Computing & Cognitive Science",
      href: "/parasomatic",
      unavailable: false,
      imageSrc: "/cards_para.png"
    },
    {
      title: "Maon: haptic wearables for passive emotion regulation",
      description: "Physical Computing & Startup",
      date: "2025",
      category: "2025 | Physical Computing & Cognitive Science",
      href: "/maon",
      unavailable: false,
      imageSrc: "/maon.png"
    },
    {
      title: "Sprout: emotion mimicking robot face",
      description: "Physical Computing",
      date: "2025",
      category: "2025 | Physical Computing",
      href: "/sprout",
      unavailable: false,
      imageSrc: "/cards_sprout.jpg"
    }
  ];
  const miniProjectData: ProjectItem[] = [
    {
      title: "Bangle JS 2 Firmware for biosignal research",
      description: "Firmware for raw biosignal data collection on Bangle devices for research use",
      date: "2026",
      category: "2026 | Physical Computing",
      href: "https://github.com/kl527/bangle_firmware_biosignal_research",
      unavailable: false,
      imageSrc: "/cards_bangle.jpg"
    },
    {
      title: "Seamlegs: smart pants for exercise recognition",
      description: "Physical Computing & Machine Learning",
      date: "2025",
      category: "2025 | Physical Computing & Machine Learning",
      href: "/seamlegs",
      unavailable: false,
      imageSrc: "/cards_seam.jpg"
    },
    {
      title: "Melo Tomorrow: clothing brand for people with hypersensitivity",
      description: "Accessibility Design & Startup",
      date: "2023",
      category: "2023 | Accessibility Design & Startup",
      href: "/melotomorrow",
      unavailable: false,
      imageSrc: "/cards_mt.png"
    }
  ];

  // Pass the data to the client component
  return <ProjectsSectionClient projectData={projectData} miniProjectData={miniProjectData} splineAnimation={<SplineAnimation />} />;
}