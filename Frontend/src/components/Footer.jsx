import { profileLinks } from "../assets/portfolioAssets";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-10 text-slate-200">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row md:px-12">
        <div>
          <p className="text-lg font-semibold tracking-tight text-white">John Mal Nyuoun</p>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">
            {new Date().getFullYear()} © All rights reserved
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
          <a href={profileLinks.linkedin} target="_blank" rel="noopener noreferrer" className="muted-link">
            LinkedIn
          </a>
          <a href={profileLinks.github} target="_blank" rel="noopener noreferrer" className="muted-link">
            GitHub
          </a>
          <a href={profileLinks.facebook} target="_blank" rel="noopener noreferrer" className="muted-link">
            Facebook
          </a>
          <a href="mailto:wmal44884@gmail.com" className="muted-link">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}