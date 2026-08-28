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