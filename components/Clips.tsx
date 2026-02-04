import React, { useState } from 'react';
import { Film, Play, ExternalLink, ChevronLeft, ChevronRight, Eye, Clock, Sparkles } from 'lucide-react';

// ============================================
// 🎮 UPDATE THESE WITH REAL CLIP SLUGS!
// ============================================
// To get a clip slug:
// 1. Go to https://twitch.tv/thefrogkingtv/clips
// 2. Click any clip
// 3. Copy the slug from the URL: twitch.tv/thefrogkingtv/clip/[SLUG]
// 4. Replace the placeholder slugs below
// ============================================

const CLIPS = [
  {
    slug: 'CautiousSparklyQueleaHotPokket-abc123', // Replace with real slug
    title: 'Insane Squad Wipe',
    game: 'Call of Duty: Warzone',
    views: '2.4K',
    duration: '0:28',
    thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=400',
  },
  {
    slug: 'SpineyGloriousWrenBibleThump-def456', // Replace with real slug
    title: 'Clutch 1v5 Ace',
    game: 'League of Legends',
    views: '1.8K',
    duration: '0:45',
    thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=400',
  },
  {
    slug: 'VictoriousPluckyDugongWow-ghi789', // Replace with real slug
    title: 'Epic Battlefield Moment',
    game: 'Battlefield 2042',
    views: '956',
    duration: '0:32',
    thumbnail: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=400',
  },
  {
    slug: 'FreezingFunnyPorcupinePogChamp-jkl012', // Replace with real slug
    title: 'Hilarious Stream Moment',
    game: 'Just Chatting',
    views: '3.1K',
    duration: '0:18',
    thumbnail: 'https://images.unsplash.com/photo-1493711662062-fa541f7f3d24?auto=format&fit=crop&q=80&w=400',
  },
];

export const Clips: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const hostname = typeof window !== 'undefined' ? window.location.hostname : 'localhost';

  const nextClip = () => {
    setActiveIndex((prev) => (prev + 1) % CLIPS.length);
    setIsPlaying(false);
  };

  const prevClip = () => {
    setActiveIndex((prev) => (prev - 1 + CLIPS.length) % CLIPS.length);
    setIsPlaying(false);
  };

  const activeClip = CLIPS[activeIndex];

  return (
    <section id="clips" className="relative py-24 px-4 md:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cave via-cave-light to-cave">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-neon-pink/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-neon-cyan/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-pink/10 border border-neon-pink/20 mb-4">
              <Sparkles size={14} className="text-neon-pink" />
              <span className="font-cyber text-xs text-neon-pink uppercase tracking-widest">Highlights</span>
            </div>
            <h2 className="font-royal text-4xl md:text-5xl font-bold text-white mb-2">
              Epic <span className="text-neon-pink">Moments</span>
            </h2>
            <p className="text-white/40 max-w-md">
              The most legendary plays and hilarious moments from the stream
            </p>
          </div>
          <a
            href="https://twitch.tv/thefrogkingtv/clips"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-neon-pink/10 border border-white/10 hover:border-neon-pink/30 transition-all text-white/70 hover:text-white group"
          >
            <Film size={18} className="group-hover:text-neon-pink transition-colors" />
            <span className="font-cyber text-sm uppercase tracking-wider">View All Clips</span>
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Featured Clip Player */}
          <div className="lg:col-span-2">
            <div className="relative rounded-2xl overflow-hidden bg-cave border border-white/5 group">
              {isPlaying ? (
                /* Twitch Clip Embed */
                <div className="aspect-video w-full bg-black">
                  <iframe
                    src={`https://clips.twitch.tv/embed?clip=${activeClip.slug}&parent=${hostname}&autoplay=true`}
                    height="100%"
                    width="100%"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              ) : (
                /* Thumbnail with Play Button */
                <div className="aspect-video w-full relative cursor-pointer" onClick={() => setIsPlaying(true)}>
                  <img
                    src={activeClip.thumbnail}
                    alt={activeClip.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cave via-cave/30 to-transparent" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-neon-pink/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_40px_rgba(255,0,255,0.5)]">
                      <Play className="text-white fill-white ml-1" size={32} />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 bg-cave/90 rounded-lg flex items-center gap-2">
                    <Clock size={12} className="text-white/60" />
                    <span className="font-cyber text-xs text-white">{activeClip.duration}</span>
                  </div>
                </div>
              )}

              {/* Navigation Arrows */}
              <button
                onClick={prevClip}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-cave/80 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-neon-pink/20 hover:border-neon-pink/50 transition-all z-10"
              >
                <ChevronLeft size={24} className="text-white" />
              </button>
              <button
                onClick={nextClip}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-cave/80 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-neon-pink/20 hover:border-neon-pink/50 transition-all z-10"
              >
                <ChevronRight size={24} className="text-white" />
              </button>

              {/* Clip Info */}
              <div className="p-6 bg-cave-light border-t border-white/5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="font-cyber text-xs text-neon-pink uppercase tracking-wider">{activeClip.game}</span>
                    <h3 className="font-royal text-xl md:text-2xl text-white font-bold mt-1">{activeClip.title}</h3>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg">
                    <Eye size={14} className="text-gold" />
                    <span className="font-cyber text-sm text-gold">{activeClip.views}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Clip Sidebar */}
          <div className="space-y-3">
            <h3 className="font-cyber text-xs text-white/40 uppercase tracking-widest mb-4">Up Next</h3>
            {CLIPS.map((clip, index) => (
              <button
                key={clip.slug}
                onClick={() => {
                  setActiveIndex(index);
                  setIsPlaying(false);
                }}
                className={`w-full flex gap-4 p-3 rounded-xl transition-all text-left ${index === activeIndex
                    ? 'bg-neon-pink/10 border border-neon-pink/30'
                    : 'bg-white/5 border border-transparent hover:bg-white/10 hover:border-white/10'
                  }`}
              >
                {/* Thumbnail */}
                <div className="relative w-24 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <img src={clip.thumbnail} alt={clip.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-cave/30 flex items-center justify-center">
                    <Play size={16} className={index === activeIndex ? 'text-neon-pink' : 'text-white/60'} />
                  </div>
                  <div className="absolute bottom-1 right-1 px-1.5 py-0.5 bg-cave/90 rounded text-[10px] font-cyber text-white">
                    {clip.duration}
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h4 className={`font-body text-sm font-medium truncate ${index === activeIndex ? 'text-white' : 'text-white/70'
                    }`}>
                    {clip.title}
                  </h4>
                  <p className="font-cyber text-[10px] text-white/40 uppercase mt-1">{clip.game}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Eye size={10} className="text-white/30" />
                    <span className="text-[10px] text-white/30">{clip.views} views</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {CLIPS.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                setIsPlaying(false);
              }}
              className={`w-2 h-2 rounded-full transition-all ${index === activeIndex
                  ? 'w-8 bg-neon-pink'
                  : 'bg-white/20 hover:bg-white/40'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};