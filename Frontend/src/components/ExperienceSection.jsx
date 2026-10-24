import apiImage from "../assets/API.webp";
import backendImage from "../assets/Backend.webp";
import frontendImage from "../assets/frontend.jpg";

export function ExperienceSection() {
  const expertise = [
    {
      title: "Product engineering",
      imageLabel: "Frontend development",
      image: frontendImage,
      imageAlt: "Illustration of frontend development across screens and devices",
      summary:
        "Designing responsive, intuitive interfaces and scalable product experiences for users across web and mobile-friendly platforms.",
      skills: ["React", "JavaScript", "Tailwind", "UI Systems"],
    },
    {
      title: "Backend & data systems",
      imageLabel: "Backend development",
      image: backendImage,
      imageAlt: "Diagram of backend development, databases, APIs, and deployment",
      summary:
        "Building APIs, workflow logic, and structured data layers that support growth, reliability, and maintainable delivery.",
      skills: ["Node.js", "Express", "MongoDB", "REST APIs"],
    },
    {
      title: "Delivery & strategy",
      imageLabel: "API integrations",
      image: apiImage,
      imageAlt: "Diagram showing applications connecting through an API to web servers and databases",
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

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((area) => (
            <figure key={area.imageLabel} className="min-w-0">
              <img
                src={area.image}
                alt={area.imageAlt}
                loading="lazy"
                className="aspect-[16/9] w-full rounded-xl bg-slate-100 object-contain"
              />
              <figcaption className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                {area.imageLabel}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 grid gap-9 border-t border-slate-700/80 pt-8 md:grid-cols-3 md:gap-8">
          {expertise.map((area, index) => (
            <div key={area.title} className="min-w-0">
              <p className="section-label mb-3">0{index + 1}</p>
              <h3 className="text-xl font-semibold text-white">{area.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{area.summary}</p>
              <p className="mt-5 text-xs font-semibold uppercase leading-6 tracking-[0.1em] text-cyan-300">
                {area.skills.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}