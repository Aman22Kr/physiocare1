import React from 'react';

/**
 * A compact, visually unobtrusive advertisement placeholder
 * positioned near the bottom of relevant pages, above the footer.
 * Purely structural, non-sponsored, and clearly identified as an ad slot.
 */
export default function AdPlaceholder({ slotId = "slot-default", className = "" }) {
  return (
    <section 
      aria-label="Advertisement Section"
      className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8 ${className}`}
    >
      <div className="bg-slate-100/80 border border-slate-200/90 rounded-xl p-3 sm:p-4 text-center transition-all hover:bg-slate-100">
        <div className="flex items-center justify-between mb-1.5 px-2">
          <span className="text-[10px] uppercase tracking-widest font-semibold text-slate-400">
            Sponsored Partner Slot
          </span>
          <span className="text-[10px] text-slate-400 font-mono">
            ID: AD-{slotId.slice(-6)}
          </span>
        </div>
        
        <div className="border border-dashed border-slate-300 rounded-lg py-5 px-4 flex flex-col sm:flex-row items-center justify-between gap-3 bg-white/60">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 font-bold text-xs shrink-0">
              AD
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-700">
                Healthcare Partner Space • Medical Equipment & Wellness
              </p>
              <p className="text-[11px] text-slate-500">
                Standard 728×90 banner placement area reserved for ethical healthcare & ergonomic partners.
              </p>
            </div>
          </div>
          <div className="text-[11px] font-medium text-slate-400 bg-slate-100 px-3 py-1.5 rounded-md shrink-0">
            Unobtrusive Ad Placeholder
          </div>
        </div>
      </div>
    </section>
  );
}
