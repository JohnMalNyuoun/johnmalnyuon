export function Skillcard({ title, skills }) {
  return (
    <div className="p-6 bg-white/90 backdrop-blur-sm border border-slate-200/80 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      <h3 className="text-xs tracking-[0.2em] text-emerald-700 font-bold uppercase mb-4">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill.label}
            className={`text-xs font-semibold px-3 py-1.5 rounded-lg border flex items-center gap-1.5 transition-colors ${
              skill.tone === "sky"
                ? "bg-sky-50/80 text-sky-800 border-sky-200/60"
                : "bg-emerald-50/80 text-emerald-800 border-emerald-200/60"
            }`}
          >
            <span className="material-symbols-outlined text-sm leading-none opacity-80">
              {skill.icon}
            </span>
            {skill.label}
          </span>
        ))}
      </div>
    </div>
  );
}