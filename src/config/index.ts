import type { HomePage, SiteConfig,  } from "../types";

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

export const HOME_PAGE: HomePage = {
  hero: {
    team: "Western Wave Robotics",
    img: "/ROV_testing.jpg"
  },
  about: {
    title: "Who Are We?",
    content: "Western Wave is a team of undergraduate students from College of the North Atlantic (CNA) and Memorial University’s Grenfell Campus. We are a student design team that designs and builds remotely operated vehicles (ROVs) and competes in the MATE ROV Competition. We are the first and only undergraduate ROV team in Corner Brook, Newfoundland and Labrador."
  },
  sponsors: {
    title: "Sponsors",
    content: "home.sponsors -> content here"
  }
};

// #5755ff
