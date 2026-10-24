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
    <header className="fixed top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 md:px-12" id="navbar">
        <button
          type="button"
          onClick={() => handleNavClick("hero")}
          className="flex items-center gap-3 text-left"
        >
          
          <span className="text-lg font-semibold tracking-tight text-white">
            John Mal Nyuoun
          </span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm font-medium uppercase tracking-[0.18em] ${
                activeTab === item.id ? "text-cyan-300" : "text-slate-300 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}

          <button
            type="button"
            onClick={() => handleNavClick("contact")}
            className={`rounded-full border px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.18em] ${
              activeTab === "contact"
                ? "border-cyan-400 bg-cyan-400 text-slate-950"
                : "border-slate-700 bg-transparent text-white hover:border-cyan-400 hover:text-cyan-300"
            }`}
          >
            Contact
          </button>
        </div>

        <button
          className="rounded-full border border-slate-700 p-2 text-slate-100 md:hidden"
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="material-symbols-outlined text-xl">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="border-t border-slate-800 bg-slate-950 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                type="button"
                className={`text-left text-sm font-medium uppercase tracking-[0.18em] ${
                  activeTab === item.id ? "text-cyan-300" : "text-slate-300"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleNavClick("contact")}
              className="mt-2 rounded-full bg-cyan-400 px-4 py-2.5 text-sm font-semibold uppercase tracking-[0.18em] text-slate-950"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
}