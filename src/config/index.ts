import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Western Wave Robotics",
  author: "Western Wave Robotics",
  description:
    "Competitive student team competing in the MATE ROV competition",
  siteLogo: "/westernwave_logo.png", // UPDATE
  navLinks: [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Sponsors", href: "/sponsors" },
    { text: "Contact", href: "/contact" },
  ],
  socialLinks: [
    { text: "Instagram", href: "https://www.instagram.com/westernwaverobotics/", logo: "/insta_logo.svg" },
    { text: "Youtube", href: "https://www.youtube.com/@westernwaverobotics", logo: "/yt_logo.svg" },
  ],
  socialImage: "/westernwave_logo.png", // UPDATE
  canonicalURL: "/", // UPDATE
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    team: "Western Wave Robotics",
  },

  about: {
    description: `` // UPDATE
  },
};

// #5755ff
