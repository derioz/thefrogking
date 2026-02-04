import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LiveStream } from './components/LiveStream';
import { Games } from './components/Games';
import { Setup } from './components/Setup';
import { Clips } from './components/Clips';
import { About } from './components/About';
import { Footer } from './components/Footer';

const TWITCH_CHANNEL = 'thefrogkingtv';

const App: React.FC = () => {
  const [isLive, setIsLive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkLiveStatus = async () => {
      try {
        const response = await fetch(`https://decapi.me/twitch/uptime/${TWITCH_CHANNEL}`);
        const text = await response.text();
        const streamIsLive = !text.toLowerCase().includes('offline');
        setIsLive(streamIsLive);
      } catch (error) {
        console.error('Error checking live status:', error);
        setIsLive(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkLiveStatus();
    const interval = setInterval(checkLiveStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-cave text-white">
      <Navbar />
      <main className="md:pl-20">
        <Hero isLive={isLive} isLoading={isLoading} channel={TWITCH_CHANNEL} />
        <LiveStream channel={TWITCH_CHANNEL} isLive={isLive} isLoading={isLoading} />
        <Games />
        <Setup />
        <Clips />
        <About />
        <Footer />
      </main>
    </div>
  );
};

export default App;