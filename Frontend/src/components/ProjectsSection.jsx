export function ProjectsSection({ projects, loading, error }) {
  return (
    <section className="section-shell relative py-20 text-white md:py-28" id="projects">
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label mb-5">Selected work</p>
          <h2 className="section-heading">Portfolio highlights.</h2>
          <p className="section-subheading mt-6">
            A focused snapshot of projects built around collaboration, product thinking, and outcome-driven execution.
          </p>
        </div>

        {error && (
          <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-red-500/30 bg-red-500/5 px-4 py-3 text-sm text-red-200">
            {error}
          </div>
        )}

        {loading && (
          <div className="mt-10 text-center text-sm uppercase tracking-[0.2em] text-cyan-300">
            Loading projects...
          </div>
        )}

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.id} className="glass-panel overflow-hidden rounded-[28px]">
              <img
                src={project.image}
                alt={project.title}
                className="h-56 w-full object-cover object-center"
              />
              <div className="p-6 md:p-7">
                <div className="flex flex-wrap gap-2">
                  {(project.tags || []).map((tag) => (
                    <span
                      key={`${project.id}-${tag}`}
                      className="rounded-full border border-slate-700 bg-slate-900/70 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{project.summary}</p>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300 hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
                >
                  {project.cta || "View project"}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}