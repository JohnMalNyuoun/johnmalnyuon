export function Projectcard({ title, summary, tags, cta, href, image }) {
  return (
    <div className="group bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all duration-500 hover:-translate-y-1 flex flex-col h-full">
      <div className="h-64 sm:h-72 bg-slate-100 relative overflow-hidden">
        <img
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          src={image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-8 sm:p-10 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-bold tracking-widest uppercase text-emerald-700 bg-emerald-50 border border-emerald-200/50 px-2.5 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
            {title}
          </h3>
          <p className="text-slate-600 leading-relaxed text-base mb-8">
            {summary}
          </p>
        </div>

        <a
          className="inline-flex items-center gap-2 text-slate-900 font-semibold text-sm group/link hover:text-emerald-600 transition-colors mt-auto"
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          <span className="border-b-2 border-emerald-500/30 group-hover/link:border-emerald-600 transition-all pb-0.5">
            {cta}
          </span>
          <span className="material-symbols-outlined text-emerald-600 text-lg transition-transform group-hover/link:translate-x-1">
            arrow_forward
          </span>
        </a>
      </div>
    </div>
  );
}