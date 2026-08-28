import { useState } from "react";
import { scrollToSection } from "../utils/scroll"; 

export function Header({ activeTab, setActiveTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
  ];

  const handleNavClick = (id) => {
    scrollToSection(id, setActiveTab);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-outline-variant/20 transition-all duration-500 ease-in-out">
      <nav
        className="flex justify-between items-center px-margin-mobile md:px-gutter max-w-container-max mx-auto h-20"
        id="navbar"
      >
        <div 
          onClick={() => handleNavClick("hero")}
          className="flex items-center gap-1.5 group cursor-pointer"
        >
          <span className="material-symbols-outlined text-primary text-2xl">
            code
          </span>
          <span className="font-headline-sm text-headline-sm font-extrabold tracking-tighter text-on-surface flex items-center">
            Dev
            <span className="text-primary-container ml-0.5 block w-1.5 h-1.5 rounded-full mt-2"></span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`font-label-caps text-label-caps tracking-widest uppercase transition-all duration-300 ${
                activeTab === item.id
                  ? "text-primary font-bold border-b-2 border-primary pb-1"
                  : "text-secondary hover:text-primary"
              }`}
            >
              {item.label}
            </button>
          ))}

          <button
            onClick={() => handleNavClick("contact")}
            className={`px-6 py-2.5 font-button text-button rounded-full transition-all duration-300 shadow-sm ${
              activeTab === "contact"
                ? "bg-blue-700 text-white"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Contact
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="md:hidden text-on-surface p-2 focus:outline-none" 
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="material-symbols-outlined">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-outline-variant/20 px-6 py-4 flex flex-col gap-4 shadow-lg">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-left py-2 font-label-caps text-label-caps tracking-widest uppercase transition-all ${
                activeTab === item.id
                  ? "text-primary font-bold"
                  : "text-secondary"
              }`}
            >
              {item.label}
            </button>
          ))}

          <button
            onClick={() => handleNavClick("contact")}
            className="w-full py-2.5 font-button text-button rounded-full bg-blue-600 text-white"
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
}