import { personalAssets } from "../assets/portfolioAssets";
import { scrollToSection } from "../utils/scroll";

export function HeroSection({ setActiveTab }) {
  return (
    <section className="relative min-h-[72vh] md:min-h-[78vh] overflow-hidden" id="hero">
      {/* Background radial layer */}
      <div
        className="absolute inset-0 opacity-35 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#10b981 0.55px, transparent 0.55px)",
          backgroundSize: "20px 20px",
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-10 md:pb-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
        <div className="w-full flex flex-col text-left">
          <p className="mb-4 text-primary font-label-caps text-[11px] tracking-[0.2em] uppercase font-bold">
            MERN STACK WEB SPECIALIST
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-secondary-fixed max-w-xl">
            Hi, I&apos;m a Full-Stack Developer &amp; Project Coordinator.
          </h1>
          <p className="mt-6 max-w-lg leading-relaxed text-lg text-on-secondary-fixed/90">
            Engineering digital ecosystems that drive{" "}
            <span className="text-primary font-semibold">
              social impact.
            </span>
          </p>

          <div className="flex flex-row gap-4 mt-8 items-center flex-wrap">
            <button
              type="button"
              onClick={() => scrollToSection("projects", setActiveTab)}
              className="px-8 py-4 bg-[#0f3f2f] text-white font-semibold rounded-full hover:bg-[#0b3326] transition-all duration-300 shadow-lg shadow-emerald-900/20 cursor-pointer"
            >
              View Projects
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("contact", setActiveTab)}
              className="px-8 py-4 border-2 border-on-secondary-fixed/60 text-on-secondary-fixed font-semibold rounded-full hover:bg-white/70 transition-all duration-300 cursor-pointer"
            >
              Get in Touch
            </button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-[420px] bg-white/60 rounded-[34px] p-3 hairline-border micro-shadow backdrop-blur-sm">
            <img
              src={personalAssets.heroPortrait}
              alt="Developer portrait"
              className="w-full aspect-[4/5] object-cover rounded-[26px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}