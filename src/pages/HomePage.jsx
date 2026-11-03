import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HeartPulse, ShieldCheck, Award, Users, Star, ArrowRight, 
  Calendar, Phone, MapPin, Activity, CheckCircle2, ChevronRight, 
  Sparkles, Stethoscope, Clock, HelpCircle, ChevronDown, ChevronUp
} from 'lucide-react';
import { CLINIC_INFO, SERVICES, CONDITIONS, PATIENT_REVIEWS, VIDEO_CASES, FAQS } from '../data/clinicData.js';
import YouTubePlaceholder from '../components/YouTubePlaceholder.jsx';
import AdPlaceholder from '../components/AdPlaceholder.jsx';

export default function HomePage() {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Quick book bar state
  const [quickService, setQuickService] = useState(SERVICES[0].id);
  const [quickType, setQuickType] = useState('Clinic Visit');
  const [quickDate, setQuickDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });

  const filteredConditions = selectedRegion === 'all'
    ? CONDITIONS.slice(0, 6)
    : CONDITIONS.filter(c => c.bodyRegion === selectedRegion);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-teal-900 via-slate-900 to-slate-950 text-white pt-12 pb-20 sm:pt-20 sm:pb-28">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-xs">
                <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                <span>Premier Spine & Rehabilitation Practice • Dadar West</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Relieve Chronic Pain. Restore Natural Mobility <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-300 to-sky-400">
                  Without Spine Surgery.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Led by <strong className="text-white font-semibold">{CLINIC_INFO.doctorName}</strong> ({CLINIC_INFO.doctorQualifications}), PhysioCare delivers clinically proven chiropractic adjustments, non-surgical spinal decompression, and precision rehabilitation for slip discs, neck stiffness, and joint pain.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/book"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-sky-500 hover:from-teal-600 hover:to-sky-600 text-slate-950 font-extrabold px-7 py-3.5 rounded-xl shadow-lg shadow-teal-500/25 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-sm"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book In-Clinic / Home Visit</span>
                </Link>

                <Link
                  to="/symptom-checker"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-700 text-white font-semibold px-6 py-3.5 rounded-xl border border-slate-700 transition-colors text-sm"
                >
                  <Activity className="w-4 h-4 text-teal-400" />
                  <span>Assess Your Symptoms</span>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-center lg:text-left">
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-teal-400">{CLINIC_INFO.patientsTreated}</p>
                  <p className="text-xs text-slate-400 mt-0.5">Patients Treated</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-sky-400">{CLINIC_INFO.experienceYears}+ Yrs</p>
                  <p className="text-xs text-slate-400 mt-0.5">Clinical Practice</p>
                </div>
                <div>
                  <div className="flex items-center justify-center lg:justify-start gap-1">
                    <span className="text-2xl sm:text-3xl font-extrabold text-amber-400">{CLINIC_INFO.googleRating}</span>
                    <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">850+ Google Reviews</p>
                </div>
              </div>
            </div>

            {/* Right Card / Doctor Showcase */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl p-1 bg-gradient-to-br from-teal-500/40 via-sky-500/20 to-slate-800 shadow-2xl">
                <div className="bg-slate-900 rounded-[22px] overflow-hidden border border-slate-800 p-6 sm:p-8 space-y-6">
                  
                  <div className="flex items-center gap-4">
                    <img 
                      src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80" 
                      alt="Dr. Amit Jangir - Senior Physiotherapist" 
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-teal-500 shadow-md shrink-0"
                    />
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {CLINIC_INFO.doctorName}
                      </h3>
                      <p className="text-xs text-teal-400 font-medium">
                        Head Consultant & Spine Specialist
                      </p>
                      <p className="text-[11px] text-slate-400 mt-1">
                        Dadar West Clinic (Opp. Shiv Sena Bhavan)
                      </p>
                    </div>
                  </div>

                  {/* Highlights checklist */}
                  <div className="space-y-2.5 pt-2 border-t border-slate-800">
                    {CLINIC_INFO.features.slice(0, 4).map((feat, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Quick Booking Form Card inside Hero */}
                  <div className="bg-slate-950/80 rounded-2xl p-4 border border-slate-800 space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-teal-300 flex items-center justify-between">
                      <span>Quick Consultation Scheduler</span>
                      <span className="text-[10px] text-slate-400 font-normal">Next-day slots available</span>
                    </p>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <label className="block text-[11px] text-slate-400 mb-1">Visit Type</label>
                        <select 
                          value={quickType}
                          onChange={(e) => setQuickType(e.target.value)}
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white text-xs focus:ring-1 focus:ring-teal-500"
                        >
                          <option value="Clinic Visit">Clinic Visit (Dadar)</option>
                          <option value="Home Visit">Home Physio Visit</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] text-slate-400 mb-1">Date</label>
                        <input 
                          type="date"
                          value={quickDate}
                          onChange={(e) => setQuickDate(e.target.value)}
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white text-xs focus:ring-1 focus:ring-teal-500"
                        />
                      </div>
                    </div>

                    <Link
                      to={`/book?type=${encodeURIComponent(quickType)}&date=${quickDate}`}
                      className="w-full inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold py-2.5 px-4 rounded-xl text-xs transition-colors shadow-md"
                    >
                      <span>Proceed to Confirm Slot</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="text-center">
                    <a
                      href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
                      className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-teal-400 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-teal-400" />
                      <span>Immediate Helpdesk: {CLINIC_INFO.phone}</span>
                    </a>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Key Clinical Strengths / Metric Banner */}
      <section className="bg-white border-y border-slate-200 py-8 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-2">
                <Stethoscope className="w-6 h-6" />
              </div>
              <p className="text-xl font-bold text-slate-900">Non-Surgical</p>
              <p className="text-xs text-slate-500">Natural Spine Healing</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-2">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <p className="text-xl font-bold text-slate-900">Certified Experts</p>
              <p className="text-xs text-slate-500">Degree & MIAP Qualified</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-2">
                <Clock className="w-6 h-6" />
              </div>
              <p className="text-xl font-bold text-slate-900">Immediate Relief</p>
              <p className="text-xs text-slate-500">First Session Improvement</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-2">
                <MapPin className="w-6 h-6" />
              </div>
              <p className="text-xl font-bold text-slate-900">Prime Location</p>
              <p className="text-xs text-slate-500">Opp. Shiv Sena Bhavan</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Specialized Services */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Evidence-Based Therapies
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Specialized Treatments Designed For Lasting Recovery
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Combining chiropractic spinal manipulation, computerized decompression traction, and dry needling for rapid relief from acute and chronic pain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.slice(0, 6).map((service) => (
            <div 
              key={service.id}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-teal-500/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-slate-800 text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs">
                    {service.category}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-xs text-teal-300 text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    <span>{service.rating} ({service.reviewsCount})</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>⏱ {service.duration}</span>
                    <span className="font-semibold text-slate-900">{service.priceEstimate}</span>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <Link
                  to={`/services/${service.slug}`}
                  className="w-full flex items-center justify-center gap-1.5 bg-slate-50 hover:bg-teal-600 text-slate-700 hover:text-white font-semibold py-2.5 rounded-xl border border-slate-200 hover:border-teal-600 transition-all duration-200 text-xs"
                >
                  <span>Learn Treatment Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-teal-600 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm shadow-md"
          >
            <span>View All 9+ Specialized Treatments</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 4. Interactive Conditions Treated Explorer */}
      <section className="bg-slate-100/70 py-16 sm:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-bold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                Clinical Pathology
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                What Condition Are You Experiencing?
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Filter by affected body region to discover causes, symptoms, and targeted rehabilitation therapies.
              </p>
            </div>

            {/* Region Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'All Conditions' },
                { id: 'spine', label: 'Spine & Back' },
                { id: 'neck', label: 'Neck & Cervical' },
                { id: 'shoulder', label: 'Shoulder' },
                { id: 'knee', label: 'Knee & Leg' },
                { id: 'foot', label: 'Foot & Heel' }
              ].map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setSelectedRegion(filter.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    selectedRegion === filter.id
                      ? 'bg-teal-600 text-white shadow-sm'
                      : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Conditions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredConditions.map((cond) => (
              <div 
                key={cond.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-base font-bold text-slate-900">
                    {cond.name}
                  </h3>
                  <span className="text-[10px] bg-slate-100 text-slate-700 font-semibold px-2 py-0.5 rounded-full shrink-0">
                    {cond.bodyRegionLabel}
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {cond.overview}
                </p>

                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 mb-4 space-y-1.5">
                  <p className="text-[11px] font-bold text-slate-700 uppercase tracking-wide">
                    Common Diagnostic Signs:
                  </p>
                  {cond.symptoms.slice(0, 2).map((sym, idx) => (
                    <p key={idx} className="text-[11px] text-slate-600 flex items-start gap-1.5">
                      <span className="text-teal-500 font-bold">•</span>
                      <span>{sym}</span>
                    </p>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                  <Link
                    to={`/conditions#${cond.id}`}
                    className="text-teal-600 hover:text-teal-700 font-bold flex items-center gap-1"
                  >
                    <span>View Treatment Protocol</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    to={`/book?condition=${encodeURIComponent(cond.name)}`}
                    className="bg-teal-50 hover:bg-teal-100 text-teal-800 font-semibold px-2.5 py-1 rounded-lg text-[11px]"
                  >
                    Book for this
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/conditions"
              className="text-xs font-bold text-teal-600 hover:text-teal-700 inline-flex items-center gap-1"
            >
              <span>Explore complete clinical encyclopedia of treated conditions</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Doctor Profile & Clinic Background */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-lg p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-4/3">
                <img 
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80" 
                  alt="Dr. Amit Jangir - Senior Consultant" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-teal-600 text-white p-4 rounded-2xl shadow-xl flex items-center gap-3">
                <Award className="w-8 h-8 text-teal-200 shrink-0" />
                <div>
                  <p className="text-xl font-extrabold leading-none">15+ Yrs</p>
                  <p className="text-[10px] text-teal-100 uppercase tracking-wider font-semibold mt-0.5">Clinical Practice</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-xs font-bold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                  Lead Clinical Practitioner
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
                  Meet {CLINIC_INFO.doctorName}
                </h2>
                <p className="text-sm font-semibold text-teal-700 mt-0.5">
                  {CLINIC_INFO.doctorQualifications}
                </p>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                As founder and clinical director at <strong>PhysioCare</strong>, Dr. Amit Jangir has transformed non-surgical spine and orthopedic treatment across Mumbai. His approach moves beyond temporary symptomatic relief, addressing biomechanical root causes such as vertebral subluxations, myofascial trigger points, and kinetic chain imbalances.
              </p>

              <blockquote className="border-l-4 border-teal-500 pl-4 py-1 text-xs sm:text-sm italic text-slate-700 bg-slate-50 rounded-r-xl">
                “Surgery should always be the absolute last resort for spinal and musculoskeletal conditions. Through precise chiropractic decompression and scientific exercise re-education, the body’s innate healing potential is remarkable.”
              </blockquote>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <span className="block font-bold text-slate-800">Spine Alignment</span>
                  <span className="text-[11px] text-slate-500">Chiropractic specialist</span>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <span className="block font-bold text-slate-800">Dry Needling</span>
                  <span className="text-[11px] text-slate-500">Certified practitioner</span>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <span className="block font-bold text-slate-800">Disc Therapy</span>
                  <span className="text-[11px] text-slate-500">Computerized traction</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <Link
                  to="/about"
                  className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-5 py-3 rounded-xl transition-colors"
                >
                  Read Full Bio & Clinical Background
                </Link>
                <Link
                  to="/book"
                  className="text-teal-600 hover:text-teal-700 font-bold text-xs flex items-center gap-1"
                >
                  <span>Book Consultation with Dr. Amit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Video Case Studies (With Blank YouTube Placeholders as required) */}
      <section className="bg-slate-900 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
              Clinical Video Case Studies
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
              Real Patient Recoveries & Clinical Demonstrations
            </h2>
            <p className="text-slate-400 text-sm mt-3">
              Watch patient adjustments, computerized spinal decompression in practice, and functional rehabilitation outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VIDEO_CASES.map((item) => (
              <div key={item.id} className="space-y-4">
                <YouTubePlaceholder 
                  title={item.title}
                  subtitle={item.diagnosis}
                  duration={item.duration}
                  aspectRatio="aspect-video"
                />
                <div>
                  <h3 className="text-sm font-bold text-slate-100">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-slate-400 mt-1">
                    <span>Patient: {item.patientName}</span>
                    <span className="text-teal-400 font-medium">Outcome: {item.outcome}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <span className="text-xs text-slate-500">
              * Video embeds reproduce correct 16:9 aspect ratio placeholders as specified in project deployment constraints.
            </span>
          </div>
        </div>
      </section>

      {/* 7. Verified Patient Testimonials */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Patient Experiences
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
              Stories Of Living Free From Pain
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Read authentic feedback from patients who recovered from slip discs, frozen shoulder, and sports trauma.
            </p>
          </div>

          <Link
            to="/reviews"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 hover:text-teal-700 bg-teal-50 hover:bg-teal-100 px-4 py-2.5 rounded-xl transition-colors"
          >
            <span>View All Verified Reviews</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PATIENT_REVIEWS.slice(0, 3).map((review) => (
            <div 
              key={review.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-teal-700 bg-teal-50 font-bold px-2 py-0.5 rounded-full border border-teal-200">
                    {review.recoveryWeeks} Recovery
                  </span>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed italic mb-4">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-slate-900">{review.name}</p>
                  <p className="text-[11px] text-slate-500">{review.conditionTreated}</p>
                </div>
                <div className="text-[10px] text-slate-400 text-right">
                  <span>{review.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Frequently Asked Questions Section */}
      <section className="bg-slate-100/60 py-16 sm:py-20 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Clear Answers
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Everything you need to know before visiting our Dadar West clinic.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.slice(0, 5).map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? -1 : index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm font-bold text-slate-800 hover:text-teal-600 transition-colors"
                >
                  <span>{faq.q}</span>
                  {openFaqIndex === index ? (
                    <ChevronUp className="w-4 h-4 text-teal-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>

                {openFaqIndex === index && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-slate-500">
            Have a question not answered here? Call our clinic desk directly at{' '}
            <a href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`} className="font-bold text-teal-600 underline">
              {CLINIC_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      {/* 9. Compact Advertisement Placeholder (Prompt Requirement) */}
      <AdPlaceholder slotId="home-bottom" />

      {/* 10. Direct Appointment Booking Callout Banner */}
      <section className="bg-gradient-to-r from-teal-700 to-sky-800 text-white py-12 px-4 sm:px-6 lg:px-8 my-8 max-w-7xl mx-auto rounded-3xl shadow-xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Ready to Live Free From Chronic Pain?
            </h3>
            <p className="text-teal-100 text-sm">
              Schedule your clinical evaluation at Dadar West with Dr. Amit Jangir or request a specialized home physiotherapy visit today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              to="/book"
              className="bg-white hover:bg-slate-100 text-teal-900 font-extrabold text-sm px-6 py-3.5 rounded-xl shadow-md transition-colors"
            >
              Book Consultation Now
            </Link>
            <a
              href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=${encodeURIComponent("Hello PhysioCare, I would like to inquire about an appointment.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <span>WhatsApp Quick Chat</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
