import React, { useState } from 'react';
import { Play, Volume2, Maximize2, ShieldCheck, Film } from 'lucide-react';

/**
 * YouTube placeholder matching the exact 16:9 layout and visual styling
 * of a high-definition video player, displaying a blank placeholder
 * without embedding third-party tracking or navigating away.
 */
export default function YouTubePlaceholder({
  title = "Clinical Demonstration & Patient Case Study",
  subtitle = "PhysioCare Clinic • Dr. Amit Jangir",
  duration = "4:30",
  aspectRatio = "aspect-video",
  className = ""
}) {
  const [isSimulatedPlaying, setIsSimulatedPlaying] = useState(false);

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-slate-900 text-white shadow-xl border border-slate-800 ${className}`}>
      {/* 16:9 Aspect Ratio Container */}
      <div className={`relative w-full ${aspectRatio} flex flex-col justify-between p-4 sm:p-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950`}>
        {/* Subtle grid pattern background to indicate blank video canvas */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#38bdf8 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />

        {/* Top Header Bar */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-red-600/90 flex items-center justify-center shadow-md">
              <Film className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-semibold text-slate-100 line-clamp-1">
                {title}
              </p>
              <p className="text-[11px] text-slate-400">
                {subtitle}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 bg-slate-800/80 backdrop-blur-xs px-2.5 py-1 rounded-full text-[10px] text-slate-300 border border-slate-700/60">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
            <span>Verified Patient Case</span>
          </div>
        </div>

        {/* Center Blank State & Play Button */}
        <div className="relative z-10 flex flex-col items-center justify-center my-auto py-4">
          <button
            type="button"
            onClick={() => setIsSimulatedPlaying(!isSimulatedPlaying)}
            aria-label="Play video placeholder"
            className="group relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600/95 hover:bg-red-500 text-white flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-hidden focus:ring-4 focus:ring-red-500/40"
          >
            <span className="absolute -inset-1 rounded-full bg-red-600/30 animate-ping opacity-75 pointer-events-none" />
            <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
          </button>
          
          <p className="mt-3 text-xs text-slate-300/90 font-medium tracking-wide">
            {isSimulatedPlaying ? "Simulated Case Study Preview (Audio/Video Placeholder)" : "Click to Preview Clinical Case"}
          </p>
          <span className="text-[10px] text-slate-500 uppercase tracking-widest mt-0.5">
            Blank video placeholder • Preserves aspect ratio & layout
          </span>
        </div>

        {/* Bottom Control Bar */}
        <div className="relative z-10 flex flex-col gap-2">
          {/* Progress Bar Placeholder */}
          <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
            <div 
              className={`h-full bg-red-600 transition-all duration-700 ${isSimulatedPlaying ? 'w-2/3' : 'w-1/4'}`}
            />
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] text-slate-300">
                {isSimulatedPlaying ? "01:24" : "00:00"} / {duration}
              </span>
              <Volume2 className="w-3.5 h-3.5 hover:text-white cursor-pointer" />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-400 font-mono">
                1080p HD
              </span>
              <Maximize2 className="w-3.5 h-3.5 hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
