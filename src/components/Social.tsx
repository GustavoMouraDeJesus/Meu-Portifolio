import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

type Props = {
  github?: string;
  linkedin?: string;
  instagram?: string;
  size?: number;
};

export default function Social({
  github = "#",
  linkedin = "#",
  instagram = "#",
  size = 28,
}: Props) {
  const items = [
    { id: "github", href: github, Icon: FaGithub, label: "GitHub" },
    { id: "linkedin", href: linkedin, Icon: FaLinkedin, label: "LinkedIn" },
    { id: "instagram", href: instagram, Icon: FaInstagram, label: "Instagram" },
  ];

  return (
    <div className="mt-8 relative z-20 flex items-center justify-center gap-6">
      {items.map(({ id, href, Icon, label }) => (
        <a
          key={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="social-glow inline-flex items-center justify-center 
          w-12 h-12 md:w-14 md:h-14 rounded-full 
          bg-white/5 hover:bg-white/10 
          transition shadow-sm 
          focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <Icon className="text-white" size={size} />
        </a>
      ))}
    </div>
  );
}
