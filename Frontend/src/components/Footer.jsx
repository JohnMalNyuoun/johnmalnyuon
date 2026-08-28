import { profileLinks } from "../assets/portfolioAssets";

export function Footer() {
  return (
    <footer className="w-full py-16 md:py-24 border-t hairline-border bg-white/35 backdrop-blur-sm">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-gutter max-w-container-max mx-auto gap-12">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-1.5">
            <span className="font-headline-sm text-lg font-extrabold tracking-tighter text-on-surface flex items-center">
              Dev
              <span className="text-primary-container ml-0.5 block w-1.5 h-1.5 rounded-full mt-1.5"></span>
            </span>
          </div>
          <p className="font-label-caps text-[10px] text-secondary/60 tracking-wider">
            (c) {new Date().getFullYear()} DEV. ALL RIGHTS RESERVED.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          <a
            className="font-label-caps text-[11px] tracking-widest text-secondary hover:text-primary-container transition-colors font-bold uppercase"
            href={profileLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="font-label-caps text-[11px] tracking-widest text-secondary hover:text-primary-container transition-colors font-bold uppercase"
            href="https://github.com/JohnMalNyuoun"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="font-label-caps text-[11px] tracking-widest text-secondary hover:text-primary-container transition-colors font-bold uppercase"
            href="https://www.facebook.com/johnmalnyuon/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            className="flex items-center gap-2 font-label-caps text-[11px] tracking-widest text-secondary/50 hover:text-primary transition-colors uppercase group"
            href="#"
          >
            <span className="material-symbols-outlined text-xs group-hover:scale-110 transition-transform">
              lock
            </span>
            Admin
          </a>
        </div>
      </div>
    </footer>
  );
}