export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  author: string;
  socialLinks: { text: string; href: string; logo: string; }[];
  socialImage: string;
  canonicalURL?: string;
}

export interface SiteContent {
  hero: HeroProps;
  about: AboutProps;
}

export interface HeroProps {
  team: string;
}

export interface AboutProps {
  description: string;
}

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}
