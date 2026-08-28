import React, { useState } from "react";

export function ExperienceSection() {
  const [activeSkill, setActiveSkill] = useState(null);
  const [splashes, setSplashes] = useState([]);

  const skillCategories = [
    {
      title: "Frontend Architecture",
      skills: ["React", "TypeScript", "Tailwind", "Next.js"],
    },
    {
      title: "Backend & Data",
      skills: ["Node.js", "Express", "GraphQL", "MongoDB"],
    },
    {
      title: "Strategic & AI Engineering",
      skills: [
        "Prompt Engineering",
        "Project Coordination",
        "System Design",
        "REST APIs",
      ],
    },
  ];

  const handleSkillClick = (skill, e) => {
    setActiveSkill((prev) => (prev === skill ? null : skill));

    // Calculate splash click coordinates relative to the button
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setSplashes((prev) => [...prev, { id, skill, x, y }]);

    // Clean up splash particles after animation completes
    setTimeout(() => {
      setSplashes((prev) => prev.filter((s) => s.id !== id));
    }, 800);
  };

  return (
    <section
      className="relative w-full py-20 md:py-28 bg-slate-900 text-white overflow-hidden"
      id="experience"
    >
      {/* 1. Deep Water Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-slate-900 to-blue-950/80 pointer-events-none z-0"></div>

      {/* 2. Full-Section Animated Water Waves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-40">
        <div className="absolute -top-32 -left-[50%] w-[220%] h-[220%] animate-[waterFlow_18s_ease-in-out_infinite_alternate] rounded-[40%] bg-gradient-to-tr from-blue-600/30 to-cyan-500/20 blur-xl"></div>
        <div className="absolute -top-40 -left-[40%] w-[200%] h-[240%] animate-[waterFlow_12s_linear_infinite_reverse] rounded-[43%] bg-gradient-to-br from-cyan-400/20 to-blue-500/30 blur-2xl"></div>
      </div>

      {/* 3. Floating Bubble Effects */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <span className="absolute bottom-8 left-[12%] w-2.5 h-2.5 rounded-full bg-cyan-300/30 animate-[bubble_7s_ease-in_infinite]"></span>
        <span className="absolute bottom-12 left-[60%] w-3.5 h-3.5 rounded-full bg-blue-300/20 animate-[bubble_10s_ease-in_infinite_1.5s]"></span>
        <span className="absolute bottom-4 left-[85%] w-2 h-2 rounded-full bg-cyan-200/40 animate-[bubble_8s_ease-in_infinite_3s]"></span>
      </div>

      {/* 4. Section Content (Constrained Margins) */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 space-y-20">
        {/* Skills Section */}
        <div className="w-full max-w-4xl mx-auto">
          <h3 className="text-cyan-400 text-[11px] tracking-[0.25em] uppercase font-bold mb-10 text-center">
            Technical & Strategic Expertise
          </h3>

          <div className="space-y-8">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 border-b border-cyan-500/15 pb-8 last:border-b-0"
              >
                <span className="font-label-caps text-[12px] font-bold tracking-widest text-cyan-200/70 uppercase w-full md:w-56 text-center md:text-left pt-1.5">
                  {category.title}
                </span>

                <div className="flex flex-wrap justify-center md:justify-start gap-3 flex-1">
                  {category.skills.map((skill) => {
                    const isActive = activeSkill === skill;
                    const skillSplashes = splashes.filter(
                      (s) => s.skill === skill
                    );

                    return (
                      <button
                        key={skill}
                        type="button"
                        onClick={(e) => handleSkillClick(skill, e)}
                        className={`relative overflow-hidden py-2 text-sm font-medium transition-all duration-300 cursor-pointer select-none border-b-2 ${
                          isActive
                            ? "text-cyan-300 font-bold border-cyan-400 animate-[waterDrop_1s_ease-in-out_infinite]"
                            : "text-cyan-100/80 border-transparent hover:text-cyan-300 hover:border-cyan-400/50"
                        }`}
                      >
                        {skill}

                        {/* Water Splash Ripples & Droplets on Click */}
                        {skillSplashes.map((splash) => (
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
                              className="absolute w-1.5 h-1.5 rounded-full bg-cyan-200 pointer-events-none animate-[splashDrop1_0.6s_ease-out_forwards]"
                              style={{ left: splash.x, top: splash.y }}
                            ></span>

                            {/* Splashing Droplet 2 */}
                            <span
                              className="absolute w-1.5 h-1.5 rounded-full bg-blue-300 pointer-events-none animate-[splashDrop2_0.6s_ease-out_forwards]"
                              style={{ left: splash.x, top: splash.y }}
                            ></span>
                          </React.Fragment>
                        ))}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy & Belief Section */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-cyan-400 text-[11px] tracking-[0.25em] uppercase font-bold mb-4">
            My Philosophy
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-6 leading-[1.2]">
            Architecting software with a{" "}
            <span className="text-cyan-400">human-centric</span> lens.
          </h2>
          <p className="text-[17px] md:text-[18px] text-cyan-100/85 leading-relaxed">
            I specialize in building community-driven platforms where technology
            meets organizational excellence. My dual background in{" "}
            <strong className="font-extrabold text-white">
              full-stack engineering
            </strong>{" "}
            and{" "}
            <strong className="font-extrabold text-white">
              project coordination
            </strong>{" "}
            allows me to bridge the gap between technical complexity and{" "}
            <strong className="font-extrabold text-white">
              social objectives
            </strong>
            .
          </p>
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

        @keyframes waterDrop {
          0%, 100% { transform: translateY(-6px); }
          50% { transform: translateY(-2px); }
        }

        @keyframes splashRipple {
          0% { width: 0px; height: 0px; opacity: 0.9; }
          100% { width: 120px; height: 120px; opacity: 0; }
        }

        @keyframes splashDrop1 {
          0% { transform: translate(0, 0) scale(1); opacity: 1; }
          100% { transform: translate(-18px, -22px) scale(0); opacity: 0; }
        }

        @keyframes splashDrop2 {
          0% { transform: translate(0, 0) scale(1); opacity: 1; }
          100% { transform: translate(18px, -20px) scale(0); opacity: 0; }
        }
      `}</style>
    </section>
  );
}