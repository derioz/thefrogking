import React from 'react';
import { Section } from './ui/Section';
import { GAMES } from '../constants';
import { Sword, Crosshair, Zap, Flag, ArrowUpRight } from 'lucide-react';

const IconMap: Record<string, any> = {
  'Sword': Sword, 'Crosshair': Crosshair, 'Zap': Zap, 'Flag': Flag
};

export const Games: React.FC = () => {
  return (
    <Section id="games" title="Hunting Grounds" subtitle="Active Warzones">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {GAMES.map((game, i) => {
          const Icon = IconMap[game.icon] || Sword;
          return (
            <div
              key={game.id}
              className="group relative h-[350px] md:h-[400px] overflow-hidden bg-cave-light neon-border rounded-lg cursor-pointer"
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img src={game.image} alt={game.title} className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-cave via-cave/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <div className="w-10 h-10 rounded-lg glass flex items-center justify-center mb-3 group-hover:box-glow-green transition-all">
                  <Icon className="w-5 h-5 text-neon-green" />
                </div>
                <h3 className="font-royal font-bold text-xl text-white mb-1 group-hover:text-neon-green transition-colors">{game.title}</h3>
                <p className="text-white/50 text-sm opacity-0 group-hover:opacity-100 transition-opacity">{game.description}</p>
              </div>

              {/* Hover Arrow */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="text-neon-green" />
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};