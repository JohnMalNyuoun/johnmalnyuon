import { useState } from "react";
import { useProjects } from "./hooks/useProjects";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  const [activeTab, setActiveTab] = useState("hero");
  const { projects, loading, error } = useProjects();

  const renderActiveSection = () => {
    switch (activeTab) {
      case "hero":
      case "home":
        return <HeroSection setActiveTab={setActiveTab} />;
      case "experience":
        return <ExperienceSection />;
      case "projects":
        return <ProjectsSection projects={projects} loading={loading} error={error} />;
      case "contact":
        return <ContactSection />;
      default:
        return <HeroSection setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="portrait-theme-bg min-h-screen flex flex-col justify-between text-on-surface font-body-md selection:bg-primary-container selection:text-white">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="pt-20 flex-grow">
        {renderActiveSection()}
      </main>
      <Footer />
    </div>
  );
}