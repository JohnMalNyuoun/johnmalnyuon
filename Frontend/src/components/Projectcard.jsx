import React, { useState } from "react";

export function Projectcard({ title, summary, tags, cta, href, image }) {
  const [splashes, setSplashes] = useState([]);

  const handleCtaClick = (e) => {
    // Calculate splash click coordinates relative to the CTA button
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    // Add new splash particle
    setSplashes((prev) => [...prev, { id, x, y }]);

    // Clean up splash particles after animation completes
    setTimeout(() => {
      setSplashes((prev) => prev.filter((s) => s.id !== id));
    }, 800);
  };

  return (
    <div
      className="relative group w-full max-w-6xl mx-auto py-16 px-6 md:px-12 bg-slate-900 text-white overflow-hidden"
      id={`project-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {/* 1. Deep Water Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-slate-900 to-blue-900/60 pointer-events-none z-0"></div>

      {/* 2. Full-Section Animated Water Wave Layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-40">
        <div className="absolute -top-32 -left-[50%] w-[220%] h-[220%] animate-[waterFlow_18s_ease-in-out_infinite_alternate] rounded-[40%] bg-gradient-to-tr from-blue-600/30 to-cyan-500/20 blur-xl"></div>
        <div className="absolute -top-40 -left-[40%] w-[200%] h-[240%] animate-[waterFlow_12s_linear_infinite_reverse] rounded-[43%] bg-gradient-to-br from-cyan-400/20 to-blue-500/30 blur-2xl"></div>
      </div>

      {/* 3. Floating Water Particle/Bubble Effects */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <span className="absolute bottom-10 left-[8%] w-3 h-3 rounded-full bg-cyan-300/30 animate-[bubble_9s_ease-in_infinite]"></span>
        <span className="absolute bottom-14 left-[45%] w-4 h-4 rounded-full bg-blue-300/20 animate-[bubble_12s_ease-in_infinite_2s]"></span>
        <span className="absolute bottom-8 left-[88%] w-2.5 h-2.5 rounded-full bg-cyan-200/40 animate-[bubble_7s_ease-in_infinite_3.5s]"></span>
      </div>

      {/* 4. Card Content Container (Grid Layout) */}
      <div className="relative z-10 grid md:grid-cols-[1fr,auto] gap-12 items-center">
        
        {/* Project Details */}
        <div className="flex flex-col text-left">
          <div className="flex flex-wrap gap-2.5 mb-8">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-bold tracking-widest uppercase text-cyan-200 bg-slate-800/60 border border-cyan-500/20 px-3 py-1.5 rounded-full backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-[1.15] group-hover:text-cyan-300 transition-colors">
            {title}
          </h3>
          
          <p className="max-w-xl leading-relaxed text-lg text-cyan-100/90 mb-10">
            {summary}
          </p>

          <a
            className="relative overflow-hidden inline-flex items-center gap-3 self-start px-8 py-4 bg-cyan-500 text-slate-950 font-bold rounded-full hover:bg-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/20 active:scale-95 group/link"
            href={href}
            target="_blank"
            rel="noreferrer"
            onClick={handleCtaClick}
          >
            <span>{cta}</span>
            <span className="material-symbols-outlined text-slate-950 text-xl transition-transform group-hover/link:translate-x-1.5">
              arrow_forward
            </span>

            {/* Water Splash Ripples & Droplets */}
            {splashes.map((splash) => (
              <React.Fragment key={splash.id}>
                {/* Water Ripple Ring */}
                <span
                  className="absolute rounded-full bg-cyan-300/60 pointer-events-none animate-[splashRipple_0.6s_ease-out_forwards]"
                  style={{
                    left: splash.x,
                    top: splash.y,
                    transform: "translate(-50%, -50%)",
                  }}
                ></span>

                {/* Splashing Droplet 1 */}
                <span
                  className="absolute w-2 h-2 rounded-full bg-cyan-200 pointer-events-none animate-[splashDrop1_0.6s_ease-out_forwards]"
                  style={{ left: splash.x, top: splash.y }}
                ></span>

                {/* Splashing Droplet 2 */}
                <span
                  className="absolute w-2 h-2 rounded-full bg-blue-300 pointer-events-none animate-[splashDrop2_0.6s_ease-out_forwards]"
                  style={{ left: splash.x, top: splash.y }}
                ></span>
              </React.Fragment>
            ))}
          </a>
        </div>

        {/* Floating Project Image with Fluid Border */}
        <div className="relative w-full max-w-[420px] justify-self-center md:justify-self-end p-2 rounded-[38px] bg-gradient-to-tr from-cyan-400/50 via-blue-500/20 to-cyan-300/50 shadow-2xl shadow-cyan-950/40 backdrop-blur-md animate-[pulse_4s_ease-in-out_infinite]">
          <div className="w-full bg-slate-900/80 rounded-[34px] p-2.5 overflow-hidden backdrop-blur-md">
            <img
              alt={title}
              className="w-full aspect-[4/5] object-cover rounded-[26px] transition-transform duration-700 group-hover:scale-105"
              src={image}
            />
          </div>
        </div>
      </div>

      {/* Fluid Keyframes & Water Splash Animations */}
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

        @keyframes splashRipple {
          0% { width: 0px; height: 0px; opacity: 0.9; }
          100% { width: 160px; height: 160px; opacity: 0; }
        }

        @keyframes splashDrop1 {
          0% { transform: translate(0, 0) scale(1); opacity: 1; }
          100% { transform: translate(-22px, -26px) scale(0); opacity: 0; }
        }

        @keyframes splashDrop2 {
          0% { transform: translate(0, 0) scale(1); opacity: 1; }
          100% { transform: translate(22px, -24px) scale(0); opacity: 0; }
        }
      `}</style>
    </div>
  );
}