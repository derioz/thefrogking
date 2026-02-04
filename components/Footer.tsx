import React from 'react';
import { SOCIALS } from '../constants';
import { Twitch, Youtube, Twitter, Disc, Crown } from 'lucide-react';

const IconMap: Record<string, any> = { 'Twitch': Twitch, 'Youtube': Youtube, 'Twitter': Twitter, 'Disc': Disc };

export const Footer: React.FC = () => {
  return (
    <footer className="bg-cave border-t border-neon-green/10 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <Crown className="w-6 h-6 text-gold" />
            <span className="font-royal font-bold text-xl">THE <span className="gold-shimmer">FROG KING</span></span>
          </div>

          {/* Socials */}
          <div className="flex gap-3">
            {SOCIALS.map(social => {
              const Icon = IconMap[social.icon];
              return (
                <a key={social.platform} href={social.url} className="w-10 h-10 glass rounded-lg flex items-center justify-center neon-border hover:text-neon-green transition-colors">
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 font-cyber uppercase tracking-wider gap-4">
          <span>&copy; {new Date().getFullYear()} The Frog King</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-neon-green transition-colors">Privacy</a>
            <a href="#" className="hover:text-neon-green transition-colors">Terms</a>
            <a href="#" className="hover:text-neon-green transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};