import React, { useState } from 'react';
import { Radio, MessageSquare, Crown, Twitch, ChevronDown, ChevronUp } from 'lucide-react';

interface LiveStreamProps {
    channel: string;
    isLive: boolean;
    isLoading: boolean;
}

const TWITCH_PURPLE = '#9146FF';

export const LiveStream: React.FC<LiveStreamProps> = ({ channel, isLive, isLoading }) => {
    const [isExpanded, setIsExpanded] = useState(true);

    const videoSrc = `https://player.twitch.tv/?channel=${channel}&parent=${window.location.hostname}&muted=false`;
    const chatSrc = `https://www.twitch.tv/embed/${channel}/chat?parent=${window.location.hostname}&darkpopout`;

    // Loading state
    if (isLoading) {
        return (
            <div className="py-12 px-4 md:px-8 max-w-4xl mx-auto text-center">
                <div className="glass neon-border rounded-xl p-10">
                    <div className="animate-spin w-6 h-6 border-2 border-neon-green border-t-transparent rounded-full mx-auto mb-3"></div>
                    <p className="font-cyber text-white/50 text-sm uppercase tracking-wider">Checking stream status...</p>
                </div>
            </div>
        );
    }

    // Offline state
    if (!isLive) {
        return (
            <div className="py-16 px-4 md:px-8 max-w-3xl mx-auto text-center">
                <div className="glass neon-border rounded-xl p-10 md:p-14">
                    <Crown className="w-12 h-12 text-gold mx-auto mb-5 opacity-60" />
                    <h2 className="font-royal text-2xl md:text-3xl text-white mb-3">
                        The Frog King is Offline
                    </h2>
                    <p className="text-white/50 max-w-sm mx-auto mb-6 text-sm">
                        Follow on Twitch to get notified when the next stream begins.
                    </p>
                    <a
                        href={`https://twitch.tv/${channel}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-cyber font-bold uppercase tracking-wider transition-all hover:scale-105"
                        style={{ backgroundColor: TWITCH_PURPLE }}
                    >
                        <Twitch size={18} />
                        Follow on Twitch
                    </a>
                </div>
            </div>
        );
    }

    // Live state - Collapsible
    return (
        <div className="px-4 md:px-8 max-w-[1400px] mx-auto py-8">
            <div className="glass rounded-xl overflow-hidden border border-white/10" style={{ borderColor: `${TWITCH_PURPLE}40` }}>

                {/* Collapsible Header */}
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="w-full px-5 py-3 flex justify-between items-center transition-colors hover:bg-white/5"
                    style={{ backgroundColor: `${TWITCH_PURPLE}20` }}
                >
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <Radio className="w-4 h-4 text-red-500 animate-pulse" />
                        </div>
                        <span className="font-cyber font-bold text-white text-sm tracking-widest uppercase">
                            Broadcasting Live
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                        <a
                            href={`https://twitch.tv/${channel}`}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-xs font-cyber uppercase tracking-wider px-3 py-1 rounded transition-colors"
                            style={{ backgroundColor: TWITCH_PURPLE }}
                        >
                            Open Twitch
                        </a>
                        {isExpanded ? <ChevronUp size={18} className="text-white/60" /> : <ChevronDown size={18} className="text-white/60" />}
                    </div>
                </button>

                {/* Collapsible Content */}
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[80vh]' : 'max-h-0'}`}>
                    <div className="grid grid-cols-1 lg:grid-cols-4 h-[60vh] lg:h-[70vh] bg-black">
                        {/* Video Player */}
                        <div className="lg:col-span-3 h-full relative">
                            <iframe
                                src={videoSrc}
                                height="100%"
                                width="100%"
                                allowFullScreen
                                className="absolute inset-0 w-full h-full"
                            ></iframe>
                        </div>

                        {/* Chat */}
                        <div className="hidden lg:flex flex-col h-full border-l border-white/10 bg-cave-light">
                            <div className="bg-cave px-4 py-2 flex items-center gap-2 border-b border-white/5 shrink-0">
                                <MessageSquare size={14} style={{ color: TWITCH_PURPLE }} />
                                <span className="font-cyber text-xs uppercase text-white/60">Chat</span>
                            </div>
                            <iframe
                                src={chatSrc}
                                width="100%"
                                className="flex-1"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
