import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Camera, Eye, X, Sparkles, Film, ArrowRight, ShieldCheck, MapPin
} from 'lucide-react';
import { GALLERY_ITEMS, VIDEO_CASES, CLINIC_INFO } from '../data/clinicData.js';
import YouTubePlaceholder from '../components/YouTubePlaceholder.jsx';
import AdPlaceholder from '../components/AdPlaceholder.jsx';

export default function GalleryPage() {
  const [filter, setFilter] = useState('All');
  const [activePhotoModal, setActivePhotoModal] = useState(null);

  const categories = ['All', 'Equipment', 'Clinic', 'Rehabilitation', 'Therapy'];

  const filteredItems = filter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <div className="min-h-screen bg-slate-50 py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Clinic Infrastructure & Technology
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Clinic Tour & Facility Gallery
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Take a virtual tour of our modern Dadar West clinic facility, computerized traction units, electrotherapy stations, and rehabilitation gymnasium.
          </p>
        </div>

        {/* Video Tour Section (with Blank YouTube Placeholders) */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-[10px] font-bold text-teal-400 uppercase tracking-widest">
                Video Walkthroughs
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Inside The PhysioCare Dadar Clinic
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-teal-400" />
              <span>Directly Opposite Shiv Sena Bhavan, Dadar West</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <YouTubePlaceholder 
              title="Comprehensive Facility Tour & Advanced Modalities"
              subtitle="PhysioCare Clinic Tour • Dadar West, Mumbai"
              duration="3:45"
            />
            <YouTubePlaceholder 
              title="Computerized Spinal Traction In Action"
              subtitle="Slip Disc Decompression Demonstration"
              duration="4:15"
            />
          </div>
        </div>

        {/* Photographic Tour */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Clinic Chambers & Equipment
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Click any photograph to view high-resolution clinical details.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFilter(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    filter === cat
                      ? 'bg-teal-600 text-white shadow-xs'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Photos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActivePhotoModal(item)}
                className="group relative bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="h-60 overflow-hidden bg-slate-100 relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/90 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md">
                      <Eye className="w-3.5 h-3.5 text-teal-600" />
                      <span>Enlarge Photo</span>
                    </span>
                  </div>
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-slate-800 text-[10px] font-bold px-2 py-0.5 rounded-md">
                    {item.category}
                  </div>
                </div>

                <div className="p-4 space-y-1">
                  <h3 className="text-sm font-bold text-slate-900 line-clamp-1 group-hover:text-teal-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {activePhotoModal && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200">
              <button
                type="button"
                onClick={() => setActivePhotoModal(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[60vh] overflow-hidden bg-slate-950">
                <img 
                  src={activePhotoModal.image} 
                  alt={activePhotoModal.title} 
                  className="w-full h-full object-contain mx-auto"
                />
              </div>

              <div className="p-6 space-y-2">
                <span className="text-[10px] uppercase font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                  {activePhotoModal.category}
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  {activePhotoModal.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {activePhotoModal.desc}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Ad Placeholder Section */}
        <AdPlaceholder slotId="gallery-page" />

      </div>
    </div>
  );
}
