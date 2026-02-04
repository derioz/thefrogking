import { Game, Clip, SocialLink, NavItem } from './types';

// The Hero Image - Full quality from public folder (Vite serves from root)
export const HERO_IMAGE_URL = "/hero-bg.jpg";

export const GAMES: Game[] = [
  {
    id: 'lol',
    title: 'League of Legends',
    icon: 'Sword',
    description: 'Ruling the Rift with amphibian precision. Every lane is my swamp.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'cod',
    title: 'Call of Duty',
    icon: 'Crosshair',
    description: 'Tactical warfare from the shadows. The swamp claims all who enter.',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'arc',
    title: 'Arc Raiders',
    icon: 'Zap',
    description: 'Scavenging the wastes for legendary loot. The King takes what he wants.',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'bf',
    title: 'Battlefield',
    icon: 'Flag',
    description: 'Total chaos. Total domination. The battlefield is my throne room.',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=600'
  }
];

export const CLIPS: Clip[] = [
  {
    id: '1',
    title: 'PENTAKILL - The King Claims Five',
    views: '125K',
    thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=600',
    duration: '0:45'
  },
  {
    id: '2',
    title: 'Warzone Victory Royale - 20 Kills',
    views: '89K',
    thumbnail: 'https://images.unsplash.com/photo-1593305841991-05c29736ce05?auto=format&fit=crop&q=80&w=600',
    duration: '1:20'
  },
  {
    id: '3',
    title: 'The Impossible Clutch',
    views: '200K',
    thumbnail: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&q=80&w=600',
    duration: '0:30'
  }
];

export const SOCIALS: SocialLink[] = [
  { platform: 'Twitch', url: '#', icon: 'Twitch', color: '#9146FF' },
  { platform: 'YouTube', url: '#', icon: 'Youtube', color: '#FF0000' },
  { platform: 'Twitter', url: '#', icon: 'Twitter', color: '#1DA1F2' },
  { platform: 'Discord', url: '#', icon: 'Disc', color: '#5865F2' },
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'The Throne', href: '#hero' },
  { label: 'Hunting Grounds', href: '#games' },
  { label: 'Royal Decrees', href: '#clips' },
  { label: 'The Legend', href: '#about' },
];