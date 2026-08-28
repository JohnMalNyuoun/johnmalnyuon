import React from "react";
import { profileLinks } from "../assets/portfolioAssets";

export function ContactSection() {
  // Hardcoded direct URLs to guarantee valid navigation
  const socialChannels = [
    {
      name: "LINKEDIN",
   
      url: profileLinks?.linkedin && profileLinks.linkedin.startsWith("http") 
        ? profileLinks.linkedin 
        : "https://www.linkedin.com/in/john-mal-nyuon",
      icon: "link",
      isEmail: false,
    },
    {
      name: "GITHUB",
      url: profileLinks?.github && profileLinks.github.startsWith("http") 
        ? profileLinks.github 
        : "https://github.com/JohnMalNyuoun",
      icon: "terminal",
      isEmail: false,
    },
    {
      name: "EMAIL ME",
      
      url: "mailto:wmal44884@gmail.com",
      icon: "mail",
      isEmail: true,
    },
    {
      name: "TWITTER / X",
      url: profileLinks?.twitter && profileLinks.twitter.startsWith("http") 
        ? profileLinks.twitter 
        : "https://x.com",
      icon: "share",
      isEmail: false,
    },
  ];

  return (
    <section
      className="py-16 md:py-24 px-margin-mobile md:px-gutter max-w-container-max mx-auto"
      id="contact"
    >
      <div className="max-w-3xl mx-auto text-center mb-12">
        <span className="font-label-caps text-[11px] tracking-[0.3em] text-primary-container uppercase font-bold mb-4 block">
          AVAILABLE FOR PROJECTS
        </span>
        <h2 className="font-headline-md text-headline-md text-on-secondary-fixed mb-6">
          Connect With Me
        </h2>
        <p className="font-body-lg text-body-lg text-secondary/80">
          Ready to collaborate or discuss a new project? Reach out directly via any of my social channels below.
        </p>
      </div>

      <div className="max-w-2xl mx-auto bg-white p-10 md:p-16 rounded-[40px] hairline-border micro-shadow">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {socialChannels.map((channel) => (
            <a
              key={channel.name}
              href={channel.url}
              target={channel.isEmail ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 py-5 px-6 bg-surface-variant/30 hover:bg-blue-600 hover:text-white text-secondary font-label-caps text-[12px] font-bold tracking-widest uppercase rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <span className="material-symbols-outlined text-xl">
                {channel.icon}
              </span>
              <span>{channel.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}