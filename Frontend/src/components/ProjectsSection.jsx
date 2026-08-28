import { Projectcard } from "./Projectcard";

export function ProjectsSection({ projects, loading, error }) {
  return (
    <section className="py-16 md:py-24 px-margin-mobile" id="projects">
      <div className="max-w-container-max mx-auto">
        {/* Centered Header Section */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="font-label-caps text-[11px] tracking-[0.3em] text-primary-container uppercase font-bold mb-3 block">
            PORTFOLIO
          </span>
          <h2 className="font-headline-md text-headline-md text-on-secondary-fixed mb-4">
            Selected Works
          </h2>
          <span className="inline-block font-label-caps text-label-caps text-secondary font-medium tracking-widest border-b border-outline-variant pb-1">
            2023 - 2026
          </span>
        </div>

        {error && (
          <div className="mb-8 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900 text-center">
            {error}
          </div>
        )}

        {loading && <p className="mb-8 text-secondary text-center">Loading projects...</p>}

        <div className="grid md:grid-cols-2 gap-16">
          {projects.map((project) => (
            <Projectcard
              key={project.id}
              title={project.title}
              summary={project.summary}
              tags={project.tags}
              cta={project.cta}
              href={project.href}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}