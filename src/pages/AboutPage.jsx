import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, ShieldCheck, HeartPulse, Stethoscope, Users, CheckCircle2, 
  MapPin, Clock, Calendar, ArrowRight, Sparkles
} from 'lucide-react';
import { CLINIC_INFO, CLINIC_TEAM } from '../data/clinicData.js';
import AdPlaceholder from '../components/AdPlaceholder.jsx';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Breadcrumb & Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Clinical Excellence & Heritage</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            About Dr. Amit Jangir & PhysioCare
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Pioneering non-surgical spinal decompression, evidence-based chiropractic realignment, and clinical physiotherapy in Dadar West, Mumbai.
          </p>
        </div>

        {/* Doctor Spotlight Hero Card */}
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-8 sm:p-12 items-center">
            
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-slate-100 aspect-4/5">
                <img 
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80" 
                  alt="Dr. Amit Jangir - Senior Consultant Physiotherapist" 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-4 -right-4 bg-teal-600 text-white p-4 rounded-2xl shadow-xl flex items-center gap-3">
                <Award className="w-8 h-8 text-teal-200 shrink-0" />
                <div>
                  <p className="text-xl font-extrabold leading-none">{CLINIC_INFO.experienceYears}+ Yrs</p>
                  <p className="text-[10px] text-teal-100 uppercase tracking-wider font-semibold mt-0.5">Clinical Practice</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-xs font-bold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                  Founder & Head Consultant
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                  {CLINIC_INFO.doctorName}
                </h2>
                <p className="text-sm font-semibold text-teal-700 mt-0.5">
                  {CLINIC_INFO.doctorQualifications}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Lead Practitioner at O3 Physio Clinic & PhysioCare Rehabilitation Center
                </p>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                With over a decade and a half of dedicated clinical service in Mumbai, <strong>Dr. Amit Jangir</strong> has established an exceptional reputation for resolving acute and complex spine conditions without resorting to invasive spine surgery.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                His clinical methodology seamlessly bridges Western chiropractic manual therapy, computerized mechanical traction, trigger point dry needling, and biomechanical posture restoration. Having personally treated over 12,000 patients suffering from severe slip discs, sciatica, neck spasms, and joint osteoarthritis, Dr. Jangir is dedicated to restoring pain-free movement.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <p className="text-xs font-bold text-slate-900">Chiropractic Mastery</p>
                  <p className="text-[11px] text-slate-500">Gentle spinal cavitation & pelvic realignment</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <p className="text-xs font-bold text-slate-900">Disc Decompression</p>
                  <p className="text-[11px] text-slate-500">Negative intra-discal pressure protocols</p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <Link
                  to="/book"
                  className="bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs px-6 py-3.5 rounded-xl transition-colors shadow-md flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation with Dr. Amit</span>
                </Link>
                <Link
                  to="/contact"
                  className="text-slate-700 hover:text-teal-600 font-semibold text-xs flex items-center gap-1.5"
                >
                  <MapPin className="w-4 h-4 text-teal-600" />
                  <span>Visit Dadar West Clinic</span>
                </Link>
              </div>

            </div>

          </div>
        </div>

        {/* Clinical Philosophy & Approach */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center">
              <Stethoscope className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Root-Cause Diagnosis</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We never treat symptoms in isolation. Every patient undergoes an in-depth orthopaedic and neurological evaluation including dermatomal mapping, reflex assessment, and postural gait analysis before any intervention.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Surgery Avoidance Protocol</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Over 90% of disc herniation and spondylosis patients can be spared surgical instrumentation when decompressed early with targeted traction and stabilized with deep core kinetic retraining.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <HeartPulse className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Empowerment & Self-Care</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              True healing happens when patients understand their own biomechanics. Every patient receives customized ergonomic workstation recommendations and home exercise routines to prevent future recurrences.
            </p>
          </div>
        </div>

        {/* Senior Clinical Team */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Multidisciplinary Expertise
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
              Meet Our Senior Clinical Specialists
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Experienced physiotherapists covering orthopedic spine care, sports rehabilitation, neuro-rehab, and ergonomic health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CLINIC_TEAM.map((doctor) => (
              <div 
                key={doctor.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="h-56 overflow-hidden bg-slate-100">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 space-y-2">
                    <h3 className="text-base font-bold text-slate-900">{doctor.name}</h3>
                    <p className="text-xs font-semibold text-teal-600">{doctor.role}</p>
                    <p className="text-[11px] text-slate-500 font-medium">{doctor.qualification}</p>
                    <div className="text-[11px] bg-slate-50 p-2 rounded-lg text-slate-600 mt-2">
                      <strong className="text-slate-800">Speciality:</strong> {doctor.speciality}
                    </div>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                      {doctor.bio}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    to={`/book?doctor=${encodeURIComponent(doctor.name)}`}
                    className="w-full flex items-center justify-center gap-1.5 bg-slate-50 hover:bg-teal-600 text-slate-700 hover:text-white font-semibold py-2 rounded-xl border border-slate-200 hover:border-teal-600 transition-colors text-xs"
                  >
                    <span>Consult {doctor.name.split(' ')[1]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ad Placeholder Section */}
        <AdPlaceholder slotId="about-page" />

      </div>
    </div>
  );
}
