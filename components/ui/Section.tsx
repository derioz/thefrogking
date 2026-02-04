import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

export const Section: React.FC<SectionProps> = ({ id, children, className = "", title, subtitle }) => {
  return (
    <section id={id} className={`py-20 md:py-28 px-4 md:px-8 bg-cave ${className}`}>
      <div className="max-w-6xl mx-auto">
        {(title || subtitle) && (
          <div className="mb-12 border-l-2 border-neon-green pl-4">
            {subtitle && (
              <span className="font-cyber text-neon-cyan text-xs tracking-[0.2em] uppercase">{subtitle}</span>
            )}
            {title && (
              <h2 className="font-royal font-bold text-4xl md:text-5xl text-white mt-1">{title}</h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};