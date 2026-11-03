import React, { useState } from 'react';
import { 
  Star, CheckCircle2, ShieldCheck, MessageSquare, ThumbsUp, 
  Send, User, Calendar, PlusCircle, Sparkles, Filter
} from 'lucide-react';
import { useClinic } from '../context/ClinicContext.jsx';
import { CLINIC_INFO, VIDEO_CASES } from '../data/clinicData.js';
import YouTubePlaceholder from '../components/YouTubePlaceholder.jsx';
import AdPlaceholder from '../components/AdPlaceholder.jsx';

export default function ReviewsPage() {
  const { userReviews, addReview } = useClinic();

  const [filterRating, setFilterRating] = useState('All');
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    location: 'Mumbai',
    conditionTreated: 'Slip Disc & Back Pain',
    doctor: 'Dr. Amit Jangir',
    rating: 5,
    recoveryWeeks: '3 Weeks',
    comment: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.comment) return;

    addReview(formData);
    setFormData({
      name: '',
      location: 'Mumbai',
      conditionTreated: 'Slip Disc & Back Pain',
      doctor: 'Dr. Amit Jangir',
      rating: 5,
      recoveryWeeks: '3 Weeks',
      comment: ''
    });
    setShowSubmitModal(false);
  };

  const filteredReviews = filterRating === 'All'
    ? userReviews
    : userReviews.filter(r => r.rating === parseInt(filterRating));

  return (
    <div className="min-h-screen bg-slate-50 py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Real Patient Voices
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Patient Reviews & Recovery Stories
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Read verified feedback from patients treated at our Dadar West clinic for slip discs, sciatica, cervical neck pain, and sports injuries.
          </p>
        </div>

        {/* Rating Overview Card */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Big Score */}
            <div className="md:col-span-4 text-center md:text-left md:border-r md:border-slate-100 md:pr-8 space-y-2">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <span className="text-5xl font-extrabold text-slate-900">{CLINIC_INFO.googleRating}</span>
                <div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-500 mt-1">Based on {CLINIC_INFO.totalReviews}+ Patient Ratings</p>
                </div>
              </div>
              <p className="text-xs text-emerald-600 font-bold flex items-center justify-center md:justify-start gap-1">
                <ShieldCheck className="w-4 h-4" />
                <span>98.4% Documented Recovery Rate</span>
              </p>
            </div>

            {/* Middle Filter Buttons */}
            <div className="md:col-span-5 space-y-2">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Filter by Star Rating:
              </p>
              <div className="flex flex-wrap gap-2">
                {['All', '5', '4'].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setFilterRating(star)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      filterRating === star
                        ? 'bg-teal-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {star === 'All' ? 'All Reviews' : `${star} Stars Only`}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Action */}
            <div className="md:col-span-3 text-center md:text-right">
              <button
                type="button"
                onClick={() => setShowSubmitModal(true)}
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs px-5 py-3.5 rounded-xl shadow-md transition-colors"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Write Your Feedback</span>
              </button>
            </div>

          </div>
        </div>

        {/* Video Testimonials Showcase (Blank YouTube Placeholders) */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900">
              Video Testimonials & Adjustments
            </h2>
            <span className="text-xs text-slate-500">16:9 Clinical Case Studies</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VIDEO_CASES.map((item) => (
              <div key={item.id} className="space-y-3">
                <YouTubePlaceholder 
                  title={item.title}
                  subtitle={item.diagnosis}
                  duration={item.duration}
                />
                <p className="text-xs font-bold text-slate-800">{item.patientName} — {item.outcome}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Written Reviews Grid */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">
            Verified Written Testimonials ({filteredReviews.length})
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((rev) => (
              <div 
                key={rev.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] bg-teal-50 text-teal-800 font-bold px-2 py-0.5 rounded-full border border-teal-200">
                      {rev.recoveryWeeks || '4 Weeks'}
                    </span>
                  </div>

                  <p className="text-xs text-slate-700 leading-relaxed italic mb-4">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-900 flex items-center gap-1">
                      <span>{rev.name}</span>
                      {rev.verified && <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 inline" />}
                    </p>
                    <p className="text-[11px] text-slate-500">{rev.conditionTreated}</p>
                    <p className="text-[10px] text-teal-700 font-medium">Treated by: {rev.doctor}</p>
                  </div>
                  <div className="text-[10px] text-slate-400 text-right">
                    <span>{rev.date}</span>
                    <span className="block">{rev.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Write Review Modal */}
        {showSubmitModal && (
          <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Share Your Recovery Experience
                  </h3>
                  <p className="text-xs text-slate-500">
                    Your feedback inspires patients seeking non-surgical healing.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowSubmitModal(false)}
                  className="text-slate-400 hover:text-slate-600 text-xl font-bold"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Your Full Name *</label>
                  <input 
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800 focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Condition Treated</label>
                    <select
                      value={formData.conditionTreated}
                      onChange={(e) => setFormData({ ...formData, conditionTreated: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800"
                    >
                      <option>Slip Disc & Back Pain</option>
                      <option>Cervical Spondylosis</option>
                      <option>Sciatica & Leg Pain</option>
                      <option>Frozen Shoulder</option>
                      <option>Knee Osteoarthritis</option>
                      <option>Sports Ligament Rehab</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Doctor / Therapist</label>
                    <select
                      value={formData.doctor}
                      onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800"
                    >
                      <option>Dr. Amit Jangir</option>
                      <option>Dr. Neha Sharma</option>
                      <option>Dr. Rajesh Kulkarni</option>
                      <option>Dr. Priya Deshmukh</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Rating</label>
                    <select
                      value={formData.rating}
                      onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800"
                    >
                      <option value="5">⭐⭐⭐⭐⭐ (5 Stars - Outstanding)</option>
                      <option value="4">⭐⭐⭐⭐ (4 Stars - Great)</option>
                      <option value="3">⭐⭐⭐ (3 Stars - Satisfactory)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Recovery Duration</label>
                    <input 
                      type="text"
                      placeholder="e.g. 3 Weeks"
                      value={formData.recoveryWeeks}
                      onChange={(e) => setFormData({ ...formData, recoveryWeeks: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800"
                    >
                    </input>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">Your Recovery Story / Comment *</label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Describe how the treatment relieved your pain and improved your mobility..."
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800 focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowSubmitModal(false)}
                    className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-6 py-2.5 rounded-xl shadow-md transition-colors"
                  >
                    Publish Review
                  </button>
                </div>
              </form>

            </div>
          </div>
        )}

        {/* Ad Placeholder Section */}
        <AdPlaceholder slotId="reviews-page" />

      </div>
    </div>
  );
}
