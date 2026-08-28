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
    <header className="fixed top-0 w-full z-50 bg-slate-900/90 text-white overflow-hidden shadow-lg backdrop-blur-md transition-all duration-500 ease-in-out">
      {/* 1. Deep Water Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-slate-900 to-blue-900/60 pointer-events-none z-0"></div>

      {/* 2. Full-Header Animated Water Waves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-40">
        <div className="absolute -top-24 -left-[50%] w-[200%] h-[200%] animate-[waterFlow_15s_ease-in-out_infinite_alternate] rounded-[40%] bg-gradient-to-tr from-blue-600/30 to-cyan-500/20 blur-md"></div>
        <div className="absolute -top-28 -left-[40%] w-[180%] h-[220%] animate-[waterFlow_10s_linear_infinite_reverse] rounded-[43%] bg-gradient-to-br from-cyan-400/20 to-blue-500/30 blur-lg"></div>
      </div>

      {/* 3. Navigation Container (Constrained Width & Adjusted Margins) */}
      <nav
        className="relative z-10 flex justify-between items-center max-w-6xl mx-auto px-6 md:px-12 h-20"
        id="navbar"
      >
        <div
          onClick={() => handleNavClick("hero")}
          className="flex items-center gap-1.5 group cursor-pointer"
        >
          <span className="material-symbols-outlined text-cyan-400 text-2xl group-hover:scale-110 transition-transform">
            code
          </span>
          <span className="font-headline-sm text-headline-sm font-extrabold tracking-tighter text-white flex items-center">
            Dev
            <span className="text-cyan-400 ml-0.5 block w-1.5 h-1.5 rounded-full mt-2 animate-ping"></span>
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
                  ? "text-cyan-400 font-bold border-b-2 border-cyan-400 pb-1"
                  : "text-cyan-100/80 hover:text-cyan-300"
              }`}
            >
              {item.label}
            </button>
          ))}

          <button
            onClick={() => handleNavClick("contact")}
            className={`px-6 py-2.5 font-button text-button rounded-full transition-all duration-300 shadow-md ${
              activeTab === "contact"
                ? "bg-cyan-500 text-slate-950 font-bold"
                : "bg-cyan-600/90 text-white hover:bg-cyan-500 hover:text-slate-950"
            }`}
          >
            Contact
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="md:hidden text-cyan-100 p-2 focus:outline-none"
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="material-symbols-outlined">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="relative z-10 md:hidden bg-slate-900/95 border-t border-cyan-500/20 px-6 py-4 flex flex-col gap-4 shadow-xl backdrop-blur-md">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-left py-2 font-label-caps text-label-caps tracking-widest uppercase transition-all ${
                activeTab === item.id
                  ? "text-cyan-400 font-bold"
                  : "text-cyan-100/80 hover:text-cyan-300"
              }`}
            >
              {item.label}
            </button>
          ))}

          <button
            onClick={() => handleNavClick("contact")}
            className="w-full py-2.5 font-button text-button rounded-full bg-cyan-500 text-slate-950 font-bold"
          >
            Contact
          </button>
        </div>
      )}

      {/* Matching Fluid Keyframes */}
      <style>{`
        @keyframes waterFlow {
          0% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(180deg) scale(1.1);
          }
          100% {
            transform: rotate(360deg) scale(1);
          }
        }
      `}</style>
    </header>
  );
}