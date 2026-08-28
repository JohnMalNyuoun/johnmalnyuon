import React from "react";

export function ProjectsSection({ projects, loading, error }) {
  return (
    <section
      className="relative w-full py-16 md:py-24 bg-slate-900 text-white overflow-hidden"
      id="projects"
    >
      {/* 1. Deep Water Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-slate-900 to-blue-900/60 pointer-events-none z-0"></div>

      {/* 2. Full-Section Animated Water Waves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-40">
        <div className="absolute -top-32 -left-[50%] w-[220%] h-[220%] animate-[waterFlow_18s_ease-in-out_infinite_alternate] rounded-[40%] bg-gradient-to-tr from-blue-600/30 to-cyan-500/20 blur-xl"></div>
        <div className="absolute -top-40 -left-[40%] w-[200%] h-[240%] animate-[waterFlow_12s_linear_infinite_reverse] rounded-[43%] bg-gradient-to-br from-cyan-400/20 to-blue-500/30 blur-2xl"></div>
      </div>

      {/* 3. Floating Bubble Effects */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <span className="absolute bottom-10 left-[8%] w-3 h-3 rounded-full bg-cyan-300/30 animate-[bubble_9s_ease-in_infinite]"></span>
        <span className="absolute bottom-14 left-[45%] w-4 h-4 rounded-full bg-blue-300/20 animate-[bubble_12s_ease-in_infinite_2s]"></span>
        <span className="absolute bottom-8 left-[88%] w-2.5 h-2.5 rounded-full bg-cyan-200/40 animate-[bubble_7s_ease-in_infinite_3.5s]"></span>
      </div>

      {/* 4. Minimalist Content Section */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="font-label-caps text-[11px] tracking-[0.3em] text-cyan-400 uppercase font-bold mb-2 block">
            PORTFOLIO
          </span>
          <h2 className="font-headline-md text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2">
            Selected Works
          </h2>
          <span className="inline-block font-label-caps text-[11px] text-cyan-200/70 font-medium tracking-widest border-b border-cyan-500/30 pb-0.5">
            2023 - 2026
          </span>
        </div>

        {/* Error Feedback State */}
        {error && (
          <div className="mb-8 max-w-xl mx-auto rounded-xl border border-cyan-500/30 bg-slate-800/80 px-4 py-2.5 text-xs text-cyan-200 text-center shadow-lg backdrop-blur-md">
            {error}
          </div>
        )}

        {/* Loading Feedback State */}
        {loading && (
          <div className="mb-8 text-cyan-300/80 text-center text-sm font-medium animate-pulse flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            Loading projects...
          </div>
        )}

        {/* Floating Minimalist Projects List (No Card Boxes/Placeholders) */}
        <div className="divide-y divide-cyan-500/20 space-y-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="pt-8 first:pt-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
            >
              {/* Left Side: Title & Summary */}
              <div className="space-y-2 max-w-2xl">
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base text-cyan-100/80 leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* Right Side: Flat View Project Link */}
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 self-start sm:self-center py-2 text-xs font-bold tracking-widest uppercase text-cyan-300 transition-all duration-300 shrink-0 group/link"
              >
                {/* Flat text without card styles, only underline on hover */}
                <span className="border-b border-transparent group-hover/link:border-cyan-300 transition-all pb-0.5">
                  {project.cta || "View Project"}
                </span>
                <span className="text-base leading-none transition-transform group-hover/link:translate-x-1">
                  &rarr;
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Fluid Keyframes */}
      <style>{`
        @keyframes waterFlow {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          100% { transform: rotate(360deg) scale(1); }
        }

        @keyframes bubble {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          50% { opacity: 0.6; }
          100% { transform: translateY(-120px) scale(1.5); opacity: 0; }
        }
      `}</style>
    </section>
  );
}