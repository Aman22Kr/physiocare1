import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, Clock, Calendar, User, Search, ArrowRight, X, 
  Sparkles, CheckCircle2, Share2
} from 'lucide-react';
import { BLOG_POSTS, CLINIC_INFO } from '../data/clinicData.js';
import AdPlaceholder from '../components/AdPlaceholder.jsx';

export default function BlogPage() {
  const [search, setSearch] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);

  const filteredPosts = BLOG_POSTS.filter(post => 
    post.title.toLowerCase().includes(search.toLowerCase()) ||
    post.summary.toLowerCase().includes(search.toLowerCase()) ||
    post.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Doctor Insights & Patient Education
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            PhysioCare Health & Spine Blog
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Evidence-based medical guides on non-surgical slip disc treatment, desk ergonomics, sports injury recovery, and chiropractic science.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text"
            placeholder="Search articles, conditions, posture tips..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-2xl pl-10 pr-4 py-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 shadow-xs focus:outline-hidden focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="h-48 overflow-hidden bg-slate-100 relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-slate-800 text-[10px] font-bold px-2.5 py-1 rounded-md">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h2 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-teal-600 transition-colors leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between mt-4">
                <span className="text-xs font-semibold text-slate-700">
                  By {post.author}
                </span>

                <button
                  type="button"
                  onClick={() => setSelectedPost(post)}
                  className="text-xs font-bold text-teal-600 hover:text-teal-700 flex items-center gap-1"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Article Reader Modal */}
        {selectedPost && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-10 shadow-2xl border border-slate-200 space-y-6">
              
              <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <span className="text-[10px] uppercase font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                    {selectedPost.category}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-2 leading-tight">
                    {selectedPost.title}
                  </h2>
                  <div className="flex items-center gap-3 text-xs text-slate-400 mt-2">
                    <span>By {selectedPost.author}</span>
                    <span>•</span>
                    <span>{selectedPost.date}</span>
                    <span>•</span>
                    <span>{selectedPost.readTime}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedPost(null)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center shrink-0"
                  aria-label="Close article modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="h-64 rounded-2xl overflow-hidden bg-slate-100">
                <img 
                  src={selectedPost.image} 
                  alt={selectedPost.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="prose prose-sm text-slate-700 leading-relaxed text-xs sm:text-sm whitespace-pre-line space-y-4">
                {selectedPost.content}
              </div>

              {/* In-Article Booking Box */}
              <div className="bg-teal-50/80 p-5 rounded-2xl border border-teal-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold text-teal-950">Experiencing symptoms discussed in this guide?</p>
                  <p className="text-[11px] text-teal-800">Consult Dr. Amit Jangir at Dadar West clinic for non-surgical evaluation.</p>
                </div>

                <Link
                  to="/book"
                  onClick={() => setSelectedPost(null)}
                  className="bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-md transition-colors shrink-0"
                >
                  Book Evaluation
                </Link>
              </div>

            </div>
          </div>
        )}

        {/* Ad Placeholder Section */}
        <AdPlaceholder slotId="blog-page" />

      </div>
    </div>
  );
}
