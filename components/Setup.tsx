import React from 'react';
import { Zap } from 'lucide-react';
import { BASE_URL } from '../constants';

const SPECS = [
    { label: 'GPU', value: 'RTX 4070 Super', brand: 'NVIDIA', image: `${BASE_URL}/specs/gpu.png`, color: '#76B900' },
    { label: 'CPU', value: 'Ryzen 7 9800X3D', brand: 'AMD', image: `${BASE_URL}/specs/cpu.png`, color: '#ED1C24' },
    { label: 'Mouse', value: 'Viper V2 Pro', brand: 'RAZER', image: `${BASE_URL}/specs/mouse.png`, color: '#44D62C' },
    { label: 'Keyboard', value: 'BlackWidow V4 75%', brand: 'RAZER', image: `${BASE_URL}/specs/keyboard.png`, color: '#44D62C' },
    { label: 'Headset', value: 'BlackShark V2 Pro', brand: 'RAZER', image: `${BASE_URL}/specs/headset.png`, color: '#44D62C' },
    { label: 'Mic', value: 'Wave:3', brand: 'ELGATO', image: `${BASE_URL}/specs/mic.png`, color: '#1A9FFF' },
];

export const Setup: React.FC = () => {
    return (
        <section id="setup" className="py-16 px-4 md:px-8 bg-cave-light">
            <div className="max-w-5xl mx-auto">
                {/* Compact Header */}
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-8 h-8 rounded-lg bg-neon-green/10 flex items-center justify-center">
                        <Zap size={16} className="text-neon-green" />
                    </div>
                    <div>
                        <h2 className="font-royal text-2xl font-bold text-white">The Arsenal</h2>
                        <p className="text-white/40 text-sm">Battle station specs</p>
                    </div>
                </div>

                {/* Horizontal Scroll on Mobile, Grid on Desktop */}
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                    {SPECS.map((spec) => (
                        <div
                            key={spec.label}
                            className="group relative rounded-xl overflow-hidden bg-cave border border-white/5 hover:border-white/10 transition-all"
                        >
                            {/* Image */}
                            <div className="aspect-square p-3 flex items-center justify-center">
                                <img
                                    src={spec.image}
                                    alt={spec.value}
                                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>

                            {/* Info */}
                            <div className="p-3 pt-0 text-center">
                                <span
                                    className="font-cyber text-[8px] font-bold tracking-wider"
                                    style={{ color: spec.color }}
                                >
                                    {spec.brand}
                                </span>
                                <h3 className="font-body text-xs text-white/80 leading-tight mt-0.5 truncate">
                                    {spec.value}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
