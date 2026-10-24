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

        {/* Project Image */}
        <div className="relative w-full max-w-[420px] justify-self-center md:justify-self-end p-2 rounded-[38px] bg-slate-800 shadow-lg shadow-slate-950/25">
          <div className="w-full bg-slate-900 rounded-[34px] p-2.5 overflow-hidden">
            <img
              alt={title}
              className="w-full aspect-[4/5] object-cover rounded-[26px] transition-transform duration-700 group-hover:scale-105"
              src={image}
            />
          </div>
        </div>
      </div>
    </div>
  );
}