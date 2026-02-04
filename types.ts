export interface Game {
  id: string;
  title: string;
  icon: string; // URL to icon or Lucide component name
  description: string;
  image: string;
}

export interface Clip {
  id: string;
  title: string;
  views: string;
  thumbnail: string;
  duration: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  color: string;
}

export interface NavItem {
  label: string;
  href: string;
}