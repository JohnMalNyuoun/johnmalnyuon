import React from "react";
import { profileLinks } from "../assets/portfolioAssets";

export function Footer() {
  return (
    <footer className="relative w-full py-16 md:py-20 bg-slate-900 text-white overflow-hidden">
      {/* 1. Deep Water Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-slate-900 to-blue-950/80 pointer-events-none z-0"></div>

      {/* 2. Full-Footer Water Wave Animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-40">
        {/* Layer 1 - Deep Slow Ocean Wave */}
        <div className="absolute -top-12 -left-[50%] w-[200%] h-[150%] animate-[waterFlow_15s_ease-in-out_infinite_alternate] rounded-[40%] bg-gradient-to-tr from-blue-600/30 to-cyan-500/20 blur-md"></div>

        {/* Layer 2 - Fast Shallow Surface Wave */}
        <div className="absolute -top-20 -left-[40%] w-[180%] h-[160%] animate-[waterFlow_10s_linear_infinite_reverse] rounded-[43%] bg-gradient-to-br from-cyan-400/20 to-blue-500/30 blur-lg"></div>

        {/* Layer 3 - Subtle Water Shimmer */}
        <div className="absolute -top-10 -left-[30%] w-[160%] h-[140%] animate-[waterFlow_20s_ease-in-out_infinite] rounded-[38%] bg-blue-400/10 blur-xl"></div>
      </div>

      {/* 3. Water Bubble/Particle Effects */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <span className="absolute bottom-2 left-[15%] w-2 h-2 rounded-full bg-cyan-300/40 animate-[bubble_6s_ease-in_infinite]"></span>
        <span className="absolute bottom-4 left-[45%] w-3 h-3 rounded-full bg-blue-300/30 animate-[bubble_9s_ease-in_infinite_1.5s]"></span>
        <span className="absolute bottom-1 left-[75%] w-1.5 h-1.5 rounded-full bg-cyan-200/50 animate-[bubble_7s_ease-in_infinite_3s]"></span>
      </div>

      {/* 4. Footer Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="flex items-center gap-1.5">
            <span className="font-headline-sm text-xl font-extrabold tracking-tighter text-white flex items-center">
              Dev
              <span className="text-cyan-400 ml-1 block w-2 h-2 rounded-full mt-1.5 animate-ping"></span>
            </span>
          </div>
          <p className="font-label-caps text-[10px] text-cyan-200/70 tracking-wider">
            (c) {new Date().getFullYear()} DEV. ALL RIGHTS RESERVED.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
          <a
            className="font-label-caps text-[11px] tracking-widest text-cyan-100 hover:text-cyan-400 transition-colors font-bold uppercase drop-shadow"
            href="https://www.linkedin.com/in/john-mal-nyuon-8456aa300"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="font-label-caps text-[11px] tracking-widest text-cyan-100 hover:text-cyan-400 transition-colors font-bold uppercase drop-shadow"
            href="https://github.com/JohnMalNyuoun"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="font-label-caps text-[11px] tracking-widest text-cyan-100 hover:text-cyan-400 transition-colors font-bold uppercase drop-shadow"
            href="https://www.facebook.com/johnmalnyuon/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            className="flex items-center gap-2 font-label-caps text-[11px] tracking-widest text-cyan-200/50 hover:text-cyan-300 transition-colors uppercase group"
            href="#"
          >
            <span className="material-symbols-outlined text-xs group-hover:scale-110 transition-transform">
              lock
            </span>
            Admin
          </a>
        </div>
      </div>

      {/* Custom Keyframe Animations */}
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
            transform: translateY(-80px) scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
    </footer>
  );
}