import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export function ContactSection() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/yourusername",
      icon: <FaGithub className="text-2xl" />,
      bgColor: "bg-gray-800 hover:bg-gray-900",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      icon: <FaLinkedin className="text-2xl" />,
      bgColor: "bg-blue-600 hover:bg-blue-700",
    },
    {
      name: "Twitter / X",
      url: "https://twitter.com/yourusername",
      icon: <FaTwitter className="text-2xl" />,
      bgColor: "bg-sky-500 hover:bg-sky-600",
    },
    {
      name: "Email Me",
      url: "mailto:your.email@example.com",
      icon: <FaEnvelope className="text-2xl" />,
      bgColor: "bg-emerald-600 hover:bg-emerald-700",
    },
  ];

  return (
    <section className="py-16 px-6 max-w-xl mx-auto text-center" id="contact">
      <h2 className="text-3xl font-extrabold mb-4">Get In Touch</h2>
      <p className="text-gray-600 mb-8">
        I'd love to connect! Feel free to reach out to me directly through any of my social media channels below.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-3 py-3 px-6 rounded-lg text-white font-semibold transition-all shadow-md transform hover:-translate-y-0.5 ${link.bgColor}`}
          >
            {link.icon}
            <span>{link.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}