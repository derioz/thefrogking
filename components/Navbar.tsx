import React, { useState, useEffect } from 'react';
import { Home, Gamepad2, Film, ScrollText, Crown, Cpu, Users, Twitch } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '#hero', icon: Home },
  { label: 'Games', href: '#games', icon: Gamepad2 },
  { label: 'Setup', href: '#setup', icon: Cpu },
  { label: 'Clips', href: '#clips', icon: Film },
  { label: 'About', href: '#about', icon: Crown },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = NAV_ITEMS.map(item => item.href.replace('#', ''));
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => activeSection === href.replace('#', '');

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className={`hidden md:flex fixed top-0 left-0 h-screen w-20 flex-col items-center justify-between py-6 z-50 transition-all duration-500 ${isScrolled ? 'bg-cave/95 backdrop-blur-xl border-r border-white/5' : 'bg-transparent'
        }`}>

        {/* Animated accent line */}
        <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-neon-green/50 to-transparent" />

        {/* Logo */}
        <a
          href="#hero"
          className="group relative p-2"
          onMouseEnter={() => setHoveredItem('logo')}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain group-hover:scale-110 transition-transform" />

          {/* Logo tooltip */}
          <div className={`absolute left-full ml-4 top-1/2 -translate-y-1/2 px-3 py-2 bg-cave border border-neon-green/30 rounded-lg whitespace-nowrap transition-all duration-300 ${hoveredItem === 'logo' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 pointer-events-none'
            }`}>
            <span className="font-cyber text-xs text-neon-green uppercase tracking-wider">The Frog King</span>
            <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-cave" />
          </div>
        </a>

        {/* Nav Links */}
        <div className="flex flex-col gap-2">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                className="group relative"
                onMouseEnter={() => setHoveredItem(item.label)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Button */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${active
                    ? 'bg-neon-green/20 text-neon-green shadow-[0_0_20px_rgba(57,255,20,0.2)]'
                    : 'text-white/40 hover:text-white hover:bg-white/5'
                  }`}>
                  <Icon size={20} />
                </div>

                {/* Active indicator */}
                <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-[3px] rounded-r-full bg-neon-green transition-all duration-300 ${active ? 'h-6 opacity-100' : 'h-0 opacity-0'
                  }`} style={{ boxShadow: active ? '0 0 10px #39FF14' : 'none' }} />

                {/* Enhanced Tooltip */}
                <div className={`absolute left-full ml-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${hoveredItem === item.label ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 pointer-events-none'
                  }`}>
                  <div className={`px-4 py-2.5 rounded-xl border backdrop-blur-sm ${active ? 'bg-neon-green/10 border-neon-green/40' : 'bg-cave/90 border-white/10'
                    }`}>
                    <span className={`font-cyber text-sm uppercase tracking-wider ${active ? 'text-neon-green' : 'text-white'}`}>
                      {item.label}
                    </span>
                    {active && (
                      <span className="block font-body text-[10px] text-neon-green/60 mt-0.5">Currently viewing</span>
                    )}
                  </div>
                  {/* Arrow */}
                  <div className={`absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent ${active ? 'border-r-neon-green/10' : 'border-r-cave/90'
                    }`} />
                </div>
              </a>
            );
          })}
        </div>

        {/* Twitch CTA */}
        <a
          href="https://twitch.tv/thefrogkingtv"
          target="_blank"
          rel="noreferrer"
          className="group relative"
          onMouseEnter={() => setHoveredItem('twitch')}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#9146FF]/20 text-[#9146FF] hover:bg-[#9146FF] hover:text-white transition-all duration-300">
            <Twitch size={20} />
          </div>

          {/* Twitch tooltip */}
          <div className={`absolute left-full ml-4 top-1/2 -translate-y-1/2 px-4 py-2.5 bg-[#9146FF] rounded-xl whitespace-nowrap transition-all duration-300 ${hoveredItem === 'twitch' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 pointer-events-none'
            }`}>
            <span className="font-cyber text-sm text-white uppercase tracking-wider">Watch on Twitch</span>
            <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-[#9146FF]" />
          </div>
        </a>
      </nav>

      {/* Mobile Bottom Nav */}
      <nav className={`md:hidden fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-cave/95 backdrop-blur-xl' : 'bg-cave/90 backdrop-blur-md'
        } border-t border-white/5 safe-area-inset-bottom`}>
        <div className="flex items-center justify-around py-2 px-2">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all ${active ? 'bg-neon-green/10' : ''
                  }`}
              >
                <Icon size={18} className={active ? 'text-neon-green' : 'text-white/50'} />
                <span className={`text-[9px] font-cyber uppercase tracking-wide ${active ? 'text-neon-green' : 'text-white/40'
                  }`}>
                  {item.label}
                </span>
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
};