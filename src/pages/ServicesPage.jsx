import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, Star, Clock, ArrowRight, Bookmark, BookmarkCheck, 
  CheckCircle2, Sparkles, Filter, ShieldCheck
} from 'lucide-react';
import { SERVICES } from '../data/clinicData.js';
import { useClinic } from '../context/ClinicContext.jsx';
import AdPlaceholder from '../components/AdPlaceholder.jsx';

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { toggleSaveItem, isItemSaved } = useClinic();

  const categories = useMemo(() => {
    const list = ['All', ...new Set(SERVICES.map(s => s.category))];
    return list;
  }, []);

  const filteredServices = useMemo(() => {
    return SERVICES.filter((s) => {
      const matchesCategory = selectedCategory === 'All' || s.category === selectedCategory;
      const query = searchQuery.toLowerCase();
      const matchesSearch = 
        s.title.toLowerCase().includes(query) ||
        s.shortDesc.toLowerCase().includes(query) ||
        s.category.toLowerCase().includes(query) ||
        s.benefits.some(b => b.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-slate-50 py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Clinical Catalog
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Specialized Treatments & Therapies
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Discover our comprehensive suite of advanced chiropractic, spinal decompression, trigger point dry needling, and sports rehabilitation treatments.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full sm:w-96">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text"
                placeholder="Search treatments, symptoms, keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-teal-500"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="text-xs text-slate-500 font-medium self-end sm:self-center">
              Showing <span className="font-bold text-slate-900">{filteredServices.length}</span> of {SERVICES.length} treatments
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-teal-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-md mx-auto space-y-3">
            <Filter className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="text-lg font-bold text-slate-900">No Treatments Found</h3>
            <p className="text-xs text-slate-500">
              No matching therapy found for "{searchQuery}". Try searching for 'spine', 'neck', or 'cupping'.
            </p>
            <button
              type="button"
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="text-xs font-bold text-teal-600 hover:text-teal-700 underline pt-2"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => {
              const saved = isItemSaved(service.id);

              return (
                <div 
                  key={service.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-teal-500/50 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative h-52 overflow-hidden bg-slate-100">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-slate-800 text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs">
                        {service.category}
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleSaveItem(service);
                        }}
                        aria-label={saved ? "Remove from bookmarks" : "Bookmark this therapy"}
                        className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-slate-700 hover:text-teal-600 shadow-sm transition-colors"
                      >
                        {saved ? (
                          <BookmarkCheck className="w-4 h-4 text-teal-600 fill-teal-600" />
                        ) : (
                          <Bookmark className="w-4 h-4" />
                        )}
                      </button>

                      <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-xs text-teal-300 text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                        <span>{service.rating} ({service.reviewsCount})</span>
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                        {service.shortDesc}
                      </p>

                      <div className="space-y-1.5 pt-2 border-t border-slate-100">
                        {service.benefits.slice(0, 2).map((benefit, i) => (
                          <div key={i} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                        <span className="text-slate-500 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          <span>{service.duration}</span>
                        </span>
                        <span className="font-bold text-slate-900">
                          {service.priceEstimate}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 grid grid-cols-2 gap-2">
                    <Link
                      to={`/services/${service.slug}`}
                      className="text-center bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-2 rounded-xl text-xs transition-colors"
                    >
                      Full Details
                    </Link>
                    <Link
                      to={`/book?service=${encodeURIComponent(service.id)}`}
                      className="text-center bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 rounded-xl text-xs transition-colors shadow-sm"
                    >
                      Book Slot
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Ad Placeholder Section */}
        <AdPlaceholder slotId="services-catalog" />

      </div>
    </div>
  );
}
