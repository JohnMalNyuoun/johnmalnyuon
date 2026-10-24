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
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-grow pt-20">
        {renderActiveSection()}
      </main>
      <Footer />
    </div>
  );
}