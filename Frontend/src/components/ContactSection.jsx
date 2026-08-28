import React, { useState } from "react";
import { profileLinks } from "../assets/portfolioAssets";

export function ContactSection() {
  const [splashes, setSplashes] = useState([]);

  const socialChannels = [
    {
      name: "LINKEDIN",
      url:
        profileLinks?.linkedin && profileLinks.linkedin.startsWith("http")
          ? profileLinks.linkedin
          : "https://www.linkedin.com/in/john-mal-nyuon-8456aa300",
      icon: "link",
      isEmail: false,
    },
    {
      name: "GITHUB",
      url:
        profileLinks?.github && profileLinks.github.startsWith("http")
          ? profileLinks.github
          : "https://github.com/JohnMalNyuoun",
      icon: "terminal",
      isEmail: false,
    },
    {
      name: "EMAIL ME",
      url: "mailto:wmal44884@gmail.com",
      icon: "mail",
      isEmail: true,
    },
    {
      name: "TWITTER / X",
      url:
        profileLinks?.twitter && profileLinks.twitter.startsWith("http")
          ? profileLinks.twitter
          : "https://x.com/MalNyuon",
      icon: "share",
      isEmail: false,
    },
  ];

  const handleCardClick = (name, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setSplashes((prev) => [...prev, { id, name, x, y }]);

    setTimeout(() => {
      setSplashes((prev) => prev.filter((s) => s.id !== id));
    }, 800);
  };

  return (
    <section
      className="relative w-full py-20 md:py-28 bg-slate-900 text-white overflow-hidden"
      id="contact"
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
        <span className="absolute bottom-6 left-[15%] w-3 h-3 rounded-full bg-cyan-300/30 animate-[bubble_8s_ease-in_infinite]"></span>
        <span className="absolute bottom-10 left-[55%] w-4 h-4 rounded-full bg-blue-300/20 animate-[bubble_11s_ease-in_infinite_2s]"></span>
        <span className="absolute bottom-4 left-[80%] w-2.5 h-2.5 rounded-full bg-cyan-200/40 animate-[bubble_9s_ease-in_infinite_4s]"></span>
      </div>

      {/* 4. Contact Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="font-label-caps text-[11px] tracking-[0.3em] text-cyan-400 uppercase font-bold mb-4 block">
            AVAILABLE FOR PROJECTS
          </span>
          <h2 className="font-headline-md text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-6">
            Connect With Me
          </h2>
          <p className="font-body-lg text-lg text-cyan-100/85 max-w-xl mx-auto leading-relaxed">
            Ready to collaborate or discuss a new project? Reach out directly via any of my social channels below.
          </p>
        </div>

        {/* 5. Direct Link Buttons Grid (Glass Card Wrapper Removed) */}
        <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {socialChannels.map((channel) => {
            const channelSplashes = splashes.filter(
              (s) => s.name === channel.name
            );

            return (
              <a
                key={channel.name}
                href={channel.url}
                target={channel.isEmail ? "_self" : "_blank"}
                rel="noopener noreferrer"
                onClick={(e) => handleCardClick(channel.name, e)}
                className="relative overflow-hidden flex items-center justify-center gap-3 py-5 px-6 bg-slate-900/70 hover:bg-cyan-500 text-cyan-100 hover:text-slate-950 font-label-caps text-[12px] font-bold tracking-widest uppercase rounded-2xl border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 shadow-md hover:shadow-cyan-500/20 hover:-translate-y-1 active:translate-y-0"
              >
                <span className="material-symbols-outlined text-xl text-cyan-400 transition-colors duration-300 group-hover:text-slate-950">
                  {channel.icon}
                </span>
                <span>{channel.name}</span>

                {/* Water Splash Ripples & Droplets */}
                {channelSplashes.map((splash) => (
                  <React.Fragment key={splash.id}>
                    <span
                      className="absolute rounded-full bg-cyan-300/60 pointer-events-none animate-[splashRipple_0.6s_ease-out_forwards]"
                      style={{
                        left: splash.x,
                        top: splash.y,
                        transform: "translate(-50%, -50%)",
                      }}
                    ></span>

                    <span
                      className="absolute w-1.5 h-1.5 rounded-full bg-cyan-200 pointer-events-none animate-[splashDrop1_0.6s_ease-out_forwards]"
                      style={{ left: splash.x, top: splash.y }}
                    ></span>

                    <span
                      className="absolute w-1.5 h-1.5 rounded-full bg-blue-300 pointer-events-none animate-[splashDrop2_0.6s_ease-out_forwards]"
                      style={{ left: splash.x, top: splash.y }}
                    ></span>
                  </React.Fragment>
                ))}
              </a>
            );
          })}
        </div>
      </div>

      {/* Water Keyframe Animations */}
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
          100% { width: 140px; height: 140px; opacity: 0; }
        }

        @keyframes splashDrop1 {
          0% { transform: translate(0, 0) scale(1); opacity: 1; }
          100% { transform: translate(-22px, -24px) scale(0); opacity: 0; }
        }

        @keyframes splashDrop2 {
          0% { transform: translate(0, 0) scale(1); opacity: 1; }
          100% { transform: translate(22px, -22px) scale(0); opacity: 0; }
        }
      `}</style>
    </section>
  );
}