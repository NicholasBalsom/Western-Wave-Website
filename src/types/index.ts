export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  author: string;
  socialLinks: { text: string; href: string; logo: string; }[];
  socialImage: string;
  canonicalURL?: string;
}

export interface HomePage {
  hero: HeroProps,
  about: SectionProps,
  sponsors: SectionProps
}

export interface AboutPage {
  hero: HeroProps
}

export interface HeroProps {
  team: string;
  img: string;
}

export interface SectionProps {
  title: string;
  content: string;
  img?: string
}

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}
