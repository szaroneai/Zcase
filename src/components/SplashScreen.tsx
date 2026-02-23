import React, { useEffect, useState } from 'react';

const SplashScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [stage, setStage] = useState<'closed' | 'shaking' | 'opening' | 'popping' | 'done'>('closed');

  useEffect(() => {
    // 1. Start shaking after a short delay
    const shakeTimer = setTimeout(() => setStage('shaking'), 500);

    // 2. Open the case
    const openTimer = setTimeout(() => setStage('opening'), 1200);

    // 3. Pop the logo
    const popTimer = setTimeout(() => setStage('popping'), 1600);

    // 4. Complete
    const doneTimer = setTimeout(() => {
      setStage('done');
      onComplete();
    }, 4000);

    return () => {
      clearTimeout(shakeTimer);
      clearTimeout(openTimer);
      clearTimeout(popTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-zinc-950 flex items-center justify-center overflow-hidden">
      
      {/* 3D Scene Container */}
      <div className="relative w-80 h-64 perspective-[1000px]">
        
        {/* The Case */}
        <div className={`relative w-full h-full transition-transform duration-300 ${stage === 'shaking' ? 'animate-shake' : ''}`}>
          
          {/* Case Lid (Top Half) */}
          <div 
            className={`absolute top-0 left-0 w-full h-1/2 bg-zinc-900 border-4 border-zinc-400 rounded-t-xl origin-bottom transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-20 shadow-2xl ${
              stage === 'opening' || stage === 'popping' || stage === 'done' 
                ? '-rotate-x-[110deg] translate-y-[-40px] opacity-0' 
                : 'rotate-x-0'
            }`}
            style={{ transformStyle: 'preserve-3d', transformOrigin: 'bottom center' }}
          >
            {/* Lid Texture/Details */}
            <div className="absolute inset-2 border border-zinc-700/50 rounded-t-lg bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
            
            {/* Metal Corners */}
            <div className="absolute -top-1 -left-1 w-8 h-8 border-t-4 border-l-4 border-zinc-300 rounded-tl-lg"></div>
            <div className="absolute -top-1 -right-1 w-8 h-8 border-t-4 border-r-4 border-zinc-300 rounded-tr-lg"></div>

            {/* Handle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-4 bg-zinc-800 border border-zinc-500 rounded-full shadow-inner"></div>
            
            {/* Latches */}
            <div className="absolute bottom-0 left-8 w-6 h-8 bg-zinc-300 rounded-t-md border-b border-zinc-400"></div>
            <div className="absolute bottom-0 right-8 w-6 h-8 bg-zinc-300 rounded-t-md border-b border-zinc-400"></div>
          </div>

          {/* Case Body (Bottom Half) */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-zinc-900 border-4 border-zinc-400 rounded-b-xl z-10 shadow-2xl flex items-center justify-center overflow-visible">
             {/* Body Texture */}
             <div className="absolute inset-2 border border-zinc-700/50 rounded-b-lg bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>

             {/* Metal Corners */}
             <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-4 border-l-4 border-zinc-300 rounded-bl-lg"></div>
             <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-4 border-r-4 border-zinc-300 rounded-br-lg"></div>

             {/* Latches (Bottom Part) */}
             <div className="absolute top-0 left-8 w-6 h-4 bg-zinc-400 rounded-b-md border-t border-zinc-500"></div>
             <div className="absolute top-0 right-8 w-6 h-4 bg-zinc-400 rounded-b-md border-t border-zinc-500"></div>

             {/* Inner Glow */}
             <div className={`absolute inset-0 bg-zcase-accent/40 blur-2xl transition-opacity duration-1000 ${stage === 'opening' || stage === 'popping' ? 'opacity-100' : 'opacity-0'}`}></div>
          </div>

          {/* Logo Popping Out - Moved outside to fix z-index clipping */}
          <div 
            className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-full text-center transition-all duration-1000 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] z-30 pointer-events-none ${
              stage === 'popping' || stage === 'done'
                ? 'opacity-100 scale-125 -translate-y-[150px]' 
                : 'opacity-0 scale-50 translate-y-0'
            }`}
          >
            <div className="text-5xl md:text-6xl font-black tracking-tighter text-white whitespace-nowrap drop-shadow-[0_0_25px_rgba(255,87,34,0.8)] animate-pulse-slow">
              ZCASE<span className="text-zcase-accent">USA</span>
            </div>
            <div className="mt-2 text-sm font-bold text-zcase-accent tracking-[0.5em] uppercase opacity-80">
                Flight Case Technology
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-2deg); }
          75% { transform: rotate(2deg); }
        }
        .animate-shake {
          animation: shake 0.3s cubic-bezier(.36,.07,.19,.97) both infinite;
        }
        .perspective-[1000px] {
            perspective: 1000px;
        }
        .rotate-x-0 {
            transform: rotateX(0deg);
        }
        .-rotate-x-[110deg] {
            transform: rotateX(-110deg);
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
