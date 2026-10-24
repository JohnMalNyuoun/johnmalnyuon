import { fallbackProjectImages, profileLinks } from "../assets/portfolioAssets";

export const fallbackProjects = [
  {
    id: "fallback-fursahub",
    title: "FursaHub",
    summary:
      "A comprehensive social networking and opportunity ecosystem designed to empower youth by connecting them with mentorship and professional growth.",
    tags: ["MERN", "SOCIAL IMPACT"],
    cta: "Explore Case Study",
    href: profileLinks.fursahub,
    image: fallbackProjectImages.fursahub,
  },
  {
    id: "fallback-miles",
    title: "MILES",
    summary:
      "Mentorship and educational retention initiative focused on structured guidance and progress tracking for students in underserved communities.",
    tags: ["EDUCATION", "MENTORSHIP"],
    cta: "View Initiative",
    href: profileLinks.miles,
    image: fallbackProjectImages.miles,
  },
  {
    id: "fallback-skillbridge",
    title: "SkillBridge",
    summary:
      "A digital learning and skills-matching platform that connects learners with practical training pathways and job-ready opportunities.",
    tags: ["EDUCATION", "LEARNING PLATFORM"],
    cta: "Visit Site",
    href: "https://skillbridge-tu5k.onrender.com/",
    image: fallbackProjectImages.generic,
  },
  {
    id: "fallback-hurugarden",
    title: "Huru Garden",
    summary:
      "A community-centered digital experience focused on garden engagement, sustainable practices, and an informative online presence.",
    tags: ["COMMUNITY", "WEB EXPERIENCE"],
    cta: "Visit Site",
    href: "https://hurugarden.onrender.com",
    image: fallbackProjectImages.generic,
  },
];

export const mapApiProjectToCard = (project) => ({
  id: project._id,
  title: project.title,
  summary: project.description,
  tags:
    Array.isArray(project.tags) && project.tags.length > 0
      ? project.tags
      : ["PROJECT"],
  cta: project.liveLink ? "View Live Project" : "View Project",
  href: project.liveLink || project.githubLink || "#",
  image: project.imageUrl || fallbackProjectImages.generic,
});