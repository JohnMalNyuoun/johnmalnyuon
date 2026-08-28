import { useEffect } from "react";

export function useScrollAndObserver() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      const nav = document.getElementById("navbar");
      if (!header || !nav) return;

      if (window.scrollY > 40) {
        header.classList.add("shadow-sm", "bg-white/95");
        nav.classList.replace("h-20", "h-16");
      } else {
        header.classList.remove("shadow-sm", "bg-white/95");
        nav.classList.replace("h-16", "h-20");
      }
    };

    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-8");
        }
      });
    }, observerOptions);

    document.querySelectorAll("section").forEach((section) => {
      section.classList.add(
        "transition-all",
        "duration-1000",
        "opacity-0",
        "translate-y-8"
      );
      observer.observe(section);
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);
}