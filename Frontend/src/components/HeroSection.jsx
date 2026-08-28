import React from "react";
import { personalAssets } from "../assets/portfolioAssets";
import { scrollToSection } from "../utils/scroll";

export function HeroSection({ setActiveTab }) {
  return (
    <section className="relative min-h-[78vh] md:min-h-[85vh] bg-slate-900 text-white overflow-hidden" id="hero">
      {/* 1. Deep Water Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-slate-900 to-blue-900/70 pointer-events-none z-0"></div>

      {/* 2. Full-Hero Animated Water Wave Layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-40">
        <div className="absolute -top-32 -left-[50%] w-[220%] h-[220%] animate-[waterFlow_18s_ease-in-out_infinite_alternate] rounded-[40%] bg-gradient-to-tr from-blue-600/30 to-cyan-500/20 blur-xl"></div>
        <div className="absolute -top-40 -left-[40%] w-[200%] h-[240%] animate-[waterFlow_12s_linear_infinite_reverse] rounded-[43%] bg-gradient-to-br from-cyan-400/20 to-blue-500/30 blur-2xl"></div>
      </div>

      {/* 3. Floating Water Particle/Bubble Effects */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <span className="absolute bottom-10 left-[10%] w-3 h-3 rounded-full bg-cyan-300/30 animate-[bubble_8s_ease-in_infinite]"></span>
        <span className="absolute bottom-16 left-[50%] w-4 h-4 rounded-full bg-blue-300/20 animate-[bubble_11s_ease-in_infinite_2s]"></span>
        <span className="absolute bottom-6 left-[80%] w-2 h-2 rounded-full bg-cyan-200/40 animate-[bubble_9s_ease-in_infinite_4s]"></span>
      </div>

      {/* 4. Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        <div className="w-full flex flex-col text-left">
          <p className="mb-4 text-cyan-400 font-label-caps text-[11px] tracking-[0.25em] uppercase font-bold">
            MERN STACK WEB SPECIALIST
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white max-w-xl leading-[1.15]">
            Hi, I&apos;m a Full-Stack Developer &amp; Project Coordinator.
          </h1>
          <p className="mt-6 max-w-lg leading-relaxed text-lg text-cyan-100/90">
            Engineering digital ecosystems that drive{" "}
            <span className="text-cyan-400 font-semibold">
              social impact.
            </span>
          </p>

          <div className="flex flex-row gap-6 mt-8 items-center flex-wrap">
            <button
              type="button"
              onClick={() => scrollToSection("projects", setActiveTab)}
              className="py-2 text-sm font-bold text-cyan-400 border-b-2 border-cyan-400 hover:text-cyan-300 hover:border-cyan-300 transition-all duration-300 cursor-pointer active:scale-95 animate-[waterDrop_1s_ease-in-out_infinite]"
            >
              View Projects
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("contact", setActiveTab)}
              className="py-2 text-sm font-semibold text-cyan-100/80 border-b-2 border-transparent hover:text-cyan-300 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer active:scale-95"
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* 5. Portrait Container with Fluid Motion Effect */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-[400px] p-1.5 rounded-[38px] bg-gradient-to-tr from-cyan-400/60 via-blue-500/30 to-cyan-300/60 shadow-2xl shadow-cyan-900/30 backdrop-blur-md animate-[pulse_4s_ease-in-out_infinite]">
            <div className="w-full bg-slate-900/80 rounded-[34px] p-2.5 backdrop-blur-md">
              <img
                src={personalAssets.heroPortrait}
                alt="Developer portrait"
                className="w-full aspect-[4/5] object-cover rounded-[26px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Fluid Keyframe Animations */}
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

        @keyframes bubble {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-120px) scale(1.5);
            opacity: 0;
          }
        }

        @keyframes waterDrop {
          0%, 100% { transform: translateY(-6px); }
          50% { transform: translateY(-2px); }
        }
      `}</style>
    </section>
  );
}