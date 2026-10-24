import { personalAssets } from "../assets/portfolioAssets";
import seoScreenshot from "../assets/SEO.jpg";
import { scrollToSection } from "../utils/scroll";

export function HeroSection({ setActiveTab }) {
  const services = [
    {
      title: "SEO & Google visibility",
      description:
        "Improve how search engines discover and understand a website through keyword research, page titles, metadata, content, technical SEO, indexing, and Search Console insights.",
      skills: ["Keyword research", "On-page SEO", "Technical SEO", "Google Search Console"],
    },
    {
      title: "Analytics & conversion tracking",
      description:
        "Measure where visitors come from, how they use a site, and which eligible actions they take with clear, privacy-conscious analytics and conversion events.",
      skills: ["Google Analytics 4", "Google Tag Manager", "Meta Pixel", "Google Ads conversions"],
    },
    {
      title: "Digital marketing measurement",
      description:
        "Use channel and campaign data to understand what brings visitors, identify where people disengage, and find practical opportunities to improve enquiries and sales.",
      skills: ["Campaign measurement", "Audience insights", "Performance reviews", "Data-informed decisions"],
    },
  ];

  return (
    <>
      <section
        className="relative flex min-h-[calc(100svh-5rem)] items-end overflow-hidden bg-slate-950 text-white"
        id="hero"
      >
        <img
          src={personalAssets.heroPortrait}
          alt="John Mal Nyuoun"
          className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-slate-950/45" aria-hidden="true" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-12 pt-20 md:px-12 md:pb-16">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              FULL STACK DEVELOPER | SEO &amp; Digital Growth Specialist
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
              I build websites that get found.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200 md:text-lg">
              I&apos;m John Mal Nyuoun. I create modern, responsive websites and help businesses
              improve search visibility, understand visitor behaviour, and make more informed
              marketing decisions. I&apos;m also pursuing a Bachelor of Science in Computer Science
              at the University of the People.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => scrollToSection("projects", setActiveTab)}
                className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-950 hover:bg-cyan-300"
              >
                View projects
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("contact", setActiveTab)}
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white hover:border-cyan-300 hover:text-cyan-300"
              >
                Contact me
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white md:py-28" aria-labelledby="services-heading">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-label mb-5">Web development &amp; digital growth</p>
            <h2 className="section-heading" id="services-heading">
              More than a website: a measurable digital presence.
            </h2>
            <p className="section-subheading mt-6">
              I combine web development, strategic SEO, analytics, and conversion measurement to
              help businesses reach relevant audiences and learn what happens next.
            </p>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="border-t border-slate-700 pt-6"
              >
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{service.description}</p>
                <ul className="mt-6 space-y-2">
                  {service.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-start gap-3 text-sm text-slate-200"
                    >
                      <span aria-hidden="true" className="mt-0.5 text-cyan-300">•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <section className="mt-16" aria-labelledby="education-heading">
            <p className="section-label mb-4">Education</p>
            <h3 className="text-2xl font-semibold text-white" id="education-heading">
              Bachelor of Science in Computer Science
            </h3>
            <p className="mt-2 text-base text-slate-200">University of the People (UoPeople)</p>
            <p className="mt-1 text-sm text-slate-400">Currently pursuing · 2026–Present</p>
          </section>

          <div className="mt-16 grid items-center gap-8 md:grid-cols-[1fr_auto] md:gap-12">
            <div className="max-w-xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Search visibility example
              </p>
              <h3 className="text-2xl font-semibold text-white">
                Helping people discover a website through Google Search.
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                This example shows the MILES project appearing in Google results for a relevant
                search. It illustrates how a clear site structure and useful content can help
                people find an organization online.
              </p>
            </div>
            <figure className="mx-auto w-full max-w-[280px]">
              <img
                src={seoScreenshot}
                alt="Google search results showing the MILES project website for the search MILESproject Kakuma"
                className="max-h-[520px] w-full object-contain"
                loading="lazy"
              />
              <figcaption className="mt-3 text-center text-xs leading-5 text-slate-400">
                Google Search result example for the MILES project
              </figcaption>
            </figure>
          </div>

          <div className="mx-auto mt-10 max-w-4xl text-center text-sm leading-7 text-slate-300">
            Tracking tools measure activity and eligible conversion events; they do not identify
            every visitor. Pixel-based advertising and analytics should be configured with
            appropriate consent, privacy safeguards, and platform policies in mind.
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-lg font-medium leading-8 text-slate-100">
            My goal is to turn a business website from a static online presence into a digital
            asset that supports visibility, customer engagement, and ongoing improvement.
          </p>
        </div>
      </section>
    </>
  );
}