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

        <div className="mt-12">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="grid gap-6 border-t border-slate-700/80 py-8 last:border-b md:grid-cols-2 md:items-center md:gap-12 md:py-10"
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className={`aspect-[16/10] w-full object-center ${
                  project.imageFit === "contain" ? "bg-white object-contain p-5" : "object-cover"
                } ${index % 2 === 1 ? "md:order-2" : ""}`}
              />
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                  {(project.tags || []).join(" · ")}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-white md:text-3xl">{project.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">{project.summary}</p>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300 hover:text-white"
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