import React from "react";

export function ExperienceSection() {
  const skillCategories = [
    {
      title: "Frontend Architecture",
      skills: ["React", "TypeScript", "Tailwind", "Next.js"],
    },
    {
      title: "Backend & Data",
      skills: ["Node.js", "Express", "GraphQL", "MongoDB"],
    },
    {
      title: "Strategic & AI Engineering",
      skills: [
        "Prompt Engineering",
        "Project Coordination",
        "System Design",
        "REST APIs",
      ],
    },
  ];

  return (
    <section
      className="py-16 md:py-24 px-margin-mobile md:px-gutter max-w-container-max mx-auto space-y-16"
      id="experience"
    >
      {/* 1. Skills Section (Without Card Wrapper) */}
      <div className="w-full max-w-4xl mx-auto">
        <h3 className="text-emerald-600 text-[11px] tracking-[0.22em] uppercase font-bold mb-8 text-center">
          Technical & Strategic Expertise
        </h3>

        <div className="space-y-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-6 border-b border-outline-variant/20 pb-6 last:border-b-0"
            >
              <span className="font-label-caps text-[12px] font-bold tracking-widest text-secondary uppercase w-full md:w-56 text-center md:text-left">
                {category.title}
              </span>

              <div className="flex flex-wrap justify-center md:justify-start gap-2.5 flex-1">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-1.5 bg-surface-variant/40 text-on-surface-variant text-sm font-medium rounded-full border border-outline-variant/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Philosophy & Belief Section (Downward) */}
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-emerald-600 text-[11px] tracking-[0.22em] uppercase font-bold mb-4">
          My Philosophy
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-on-secondary-fixed mb-6 leading-[1.2]">
          Architecting software with a{" "}
          <span className="text-primary">human-centric</span> lens.
        </h2>
        <p className="text-[17px] md:text-[18px] text-on-secondary-fixed/90 leading-relaxed">
          I specialize in building community-driven platforms where technology
          meets organizational excellence. My dual background in{" "}
          <strong className="font-extrabold text-on-secondary-fixed">
            full-stack engineering
          </strong>{" "}
          and{" "}
          <strong className="font-extrabold text-on-secondary-fixed">
            project coordination
          </strong>{" "}
          allows me to bridge the gap between technical complexity and{" "}
          <strong className="font-extrabold text-on-secondary-fixed">
            social objectives
          </strong>
          .
        </p>
      </div>
    </section>
  );
}