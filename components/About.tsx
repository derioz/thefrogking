import React from 'react';
import { Crown, Users, Clock, Calendar, TrendingUp, Monitor, Twitch, ExternalLink, Swords, Zap, Heart } from 'lucide-react';

// Stats from TwitchTracker - Update these periodically
const TWITCH_STATS = {
    status: 'Affiliate',
    createdDate: 'Nov 2013',
    language: 'English',
    country: 'Canada',
};

const STAT_CARDS = [
    { icon: Users, label: 'Followers', value: '1.2K+', change: '+12%', color: '#9146FF' },
    { icon: Clock, label: 'Hours Streamed', value: '500+', change: 'All Time', color: '#00D4FF' },
    { icon: TrendingUp, label: 'Peak Viewers', value: '150', change: 'Record', color: '#FFD700' },
    { icon: Monitor, label: 'Avg Viewers', value: '25', change: 'Last 30d', color: '#FF6B35' },
];

const HIGHLIGHTS = [
    { icon: Swords, text: 'MMA Trained Fighter' },
    { icon: Zap, text: 'High Energy Streams' },
    { icon: Heart, text: 'Community Focused' },
];

export const About: React.FC = () => {
    return (
        <section id="about" className="relative py-24 px-4 md:px-8 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-cave-light">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>

            <div className="relative max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                            <Crown className="w-6 h-6 text-gold" />
                        </div>
                    </div>
                    <h2 className="font-royal text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                        The <span className="gold-shimmer">Legend</span>
                    </h2>
                    <p className="text-white/50 max-w-lg mx-auto">
                        Canadian content creator bringing high-energy gaming and MMA-trained intensity to every stream.
                    </p>
                </div>

                {/* Twitch Stats Banner */}
                <div className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-[#9146FF]/20 via-[#9146FF]/10 to-[#9146FF]/20 border border-[#9146FF]/30">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-xl bg-[#9146FF] flex items-center justify-center">
                                <Twitch className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <h3 className="font-royal text-xl text-white font-bold">TheFrogKingTV</h3>
                                <div className="flex items-center gap-3 text-sm">
                                    <span className="text-[#9146FF] font-cyber text-xs uppercase">{TWITCH_STATS.status}</span>
                                    <span className="text-white/30">•</span>
                                    <span className="text-white/50">Since {TWITCH_STATS.createdDate}</span>
                                    <span className="text-white/30">•</span>
                                    <span className="text-white/50">🇨🇦 {TWITCH_STATS.country}</span>
                                </div>
                            </div>
                        </div>
                        <a
                            href="https://twitchtracker.com/thefrogkingtv"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-sm text-white/70 hover:text-white"
                        >
                            <span className="font-cyber text-xs uppercase">View Stats</span>
                            <ExternalLink size={14} />
                        </a>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    {STAT_CARDS.map((stat) => (
                        <div
                            key={stat.label}
                            className="group relative text-center p-6 rounded-2xl bg-cave border border-white/5 hover:border-white/10 transition-all overflow-hidden"
                        >
                            {/* Animated background glow */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{ background: `radial-gradient(circle at center, ${stat.color}10 0%, transparent 70%)` }}
                            />

                            <stat.icon
                                size={28}
                                className="mx-auto mb-3 opacity-60 group-hover:opacity-100 transition-all group-hover:scale-110"
                                style={{ color: stat.color }}
                            />
                            <div
                                className="font-royal text-3xl md:text-4xl font-bold mb-1 relative"
                                style={{ color: stat.color }}
                            >
                                {stat.value}
                            </div>
                            <div className="font-cyber text-[10px] text-white/40 uppercase tracking-widest mb-1">
                                {stat.label}
                            </div>
                            <div className="text-[10px] text-white/30">
                                {stat.change}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {HIGHLIGHTS.map((item) => (
                        <div
                            key={item.text}
                            className="flex items-center gap-3 px-5 py-3 rounded-full bg-cave border border-white/5"
                        >
                            <item.icon size={16} className="text-neon-green" />
                            <span className="font-body text-sm text-white/70">{item.text}</span>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <a
                        href="https://twitch.tv/thefrogkingtv"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-cyber font-bold uppercase tracking-wider transition-all hover:scale-105"
                        style={{ backgroundColor: '#9146FF', boxShadow: '0 0 30px rgba(145, 70, 255, 0.3)' }}
                    >
                        <Twitch size={20} />
                        Follow on Twitch
                    </a>
                </div>
            </div>
        </section>
    );
};