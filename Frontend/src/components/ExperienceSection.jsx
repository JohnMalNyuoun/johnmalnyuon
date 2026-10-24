export function ExperienceSection() {
  const expertise = [
    {
      title: "Product engineering",
      summary:
        "Designing responsive, intuitive interfaces and scalable product experiences for users across web and mobile-friendly platforms.",
      skills: ["React", "JavaScript", "Tailwind", "UI Systems"],
    },
    {
      title: "Backend & data systems",
      summary:
        "Building APIs, workflow logic, and structured data layers that support growth, reliability, and maintainable delivery.",
      skills: ["Node.js", "Express", "MongoDB", "REST APIs"],
    },
    {
      title: "Delivery & strategy",
      summary:
        "Bridging technical execution with stakeholder alignment, planning, and product thinking to ship meaningful solutions on time.",
      skills: ["Project Coordination", "System Design", "Stakeholder Communication", "Problem Solving"],
    },
  ];

  return (
    <section className="section-shell relative py-20 text-white md:py-28" id="experience">
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label mb-5">Core strengths</p>
          <h2 className="section-heading">Engineering thoughtful solutions with measurable value.</h2>
          <p className="section-subheading mt-6">
            I bring together software craftsmanship and project coordination to create systems that
            are not only functional, but also clear, collaborative, and built for long-term impact.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {expertise.map((area) => (
            <div key={area.title} className="glass-panel rounded-3xl p-7">
              <div className="mb-5 h-11 w-11 rounded-2xl bg-cyan-400/10 ring-1 ring-cyan-400/20" />
              <h3 className="text-xl font-semibold text-white">{area.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{area.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {area.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}