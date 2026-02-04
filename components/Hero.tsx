import React from 'react';
import { Twitch, ChevronDown } from 'lucide-react';
import { HERO_IMAGE_URL, LOGO_URL } from '../constants';

interface HeroProps {
  isLive: boolean;
  isLoading: boolean;
  channel: string;
}

const TWITCH_PURPLE = '#9146FF';

// Fire Spark Component
const FireSpark: React.FC<{ delay: number; left: string; duration: number }> = ({ delay, left, duration }) => (
  <div
    className="absolute bottom-0 w-1 h-1 rounded-full animate-spark pointer-events-none"
    style={{
      left,
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
      background: `radial-gradient(circle, #FFD700 0%, #FF6B35 50%, #FF4500 100%)`,
      boxShadow: '0 0 6px #FF6B35, 0 0 12px #FF4500',
    }}
  />
);

export const Hero: React.FC<HeroProps> = ({ isLive, isLoading, channel }) => {
  // Generate random sparks
  const sparks = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    delay: Math.random() * 5,
    left: `${10 + Math.random() * 80}%`,
    duration: 2 + Math.random() * 3,
  }));

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-end justify-center overflow-hidden pb-32">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE_URL}
          alt="The Frog King Gaming Setup"
          className="w-full h-full object-cover object-top"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-cave from-5% via-cave/50 via-40% to-transparent" />
      </div>

      {/* Fire Sparks Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {sparks.map((spark) => (
          <FireSpark key={spark.id} delay={spark.delay} left={spark.left} duration={spark.duration} />
        ))}
      </div>

      {/* Ember Glow at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 w-full max-w-3xl mx-auto">

        {/* Logo */}
        <img
          src={LOGO_URL}
          alt="The Frog King"
          className="w-48 md:w-64 lg:w-72 h-auto mx-auto mb-6 drop-shadow-2xl"
        />

        {/* Tagline */}
        <p className="text-white/70 text-base md:text-lg mb-8">
          Sovereign of the Stream
        </p>

        {/* CTA Button */}
        <a
          href={`https://twitch.tv/${channel}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-lg font-cyber font-bold uppercase tracking-wider transition-all hover:scale-105"
          style={{
            backgroundColor: TWITCH_PURPLE,
            boxShadow: isLive ? `0 0 40px ${TWITCH_PURPLE}80` : 'none'
          }}
        >
          <Twitch size={22} />
          <span>{isLive ? 'Watch Live' : 'Follow on Twitch'}</span>
          {isLive && (
            <span className="flex items-center gap-1.5 pl-3 ml-2 border-l border-white/30">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-sm font-normal">LIVE</span>
            </span>
          )}
        </a>

        {isLoading && (
          <p className="mt-4 text-white/40 text-sm font-cyber">Checking stream status...</p>
        )}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
        <ChevronDown size={28} />
      </div>
    </section>
  );
};