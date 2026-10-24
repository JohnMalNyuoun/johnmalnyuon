import { profileLinks } from "../assets/portfolioAssets";

export function ContactSection() {
  const socialChannels = [
    {
      name: "LinkedIn",
      url: profileLinks.linkedin,
      icon: "link",
    },
    {
      name: "GitHub",
      url: profileLinks.github,
      icon: "terminal",
    },
    {
      name: "Email",
      url: "mailto:wmal44884@gmail.com",
      icon: "mail",
    },
    {
      name: "X / Twitter",
      url: profileLinks.twitter,
      icon: "share",
    },
  ];

  return (
    <section className="section-shell relative py-20 text-white md:py-28" id="contact">
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label mb-5">Let&apos;s connect</p>
          <h2 className="section-heading">Available for meaningful projects and collaborations.</h2>
          <p className="section-subheading mt-6">
            I&apos;m open to freelance work, product collaborations, and full-time opportunities where
            thoughtful engineering and clear communication matter.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
          {socialChannels.map((channel) => (
            <a
              key={channel.name}
              href={channel.url}
              target={channel.url.startsWith("mailto") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="glass-panel flex items-center justify-center gap-3 rounded-2xl px-6 py-5 text-center hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <span className="material-symbols-outlined text-xl text-cyan-300">{channel.icon}</span>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-white">{channel.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}