import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HeartPulse, Phone, Mail, MapPin, Clock, ShieldCheck, 
  ChevronRight, Calendar, Activity, CheckCircle2, Award
} from 'lucide-react';
import { CLINIC_INFO, SERVICES } from '../data/clinicData.js';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Column 1: Clinic & Brand Identity */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-teal-500 flex items-center justify-center text-slate-950 font-bold">
                <HeartPulse className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-extrabold text-white tracking-tight">
                  physiocare
                </span>
                <span className="block text-[10px] text-teal-400 font-semibold uppercase tracking-wider">
                  Advanced Physiotherapy Clinic
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Founded under the clinical leadership of <strong className="text-slate-200">Dr. Amit Jangir</strong>, PhysioCare delivers evidence-based chiropractic adjustments, computerized spinal decompression, trigger point dry needling, and sports rehabilitation in Mumbai.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-xs text-slate-300">
                <Award className="w-3.5 h-3.5 text-teal-400" />
                <span>15+ Years Clinical Mastery</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-xs text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                <span>12,000+ Recoveries</span>
              </div>
            </div>
          </div>

          {/* Column 2: Specialized Therapies */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-teal-400 mb-4">
              Specialized Treatments
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-teal-500 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    <span className="line-clamp-1">{service.title}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  to="/services"
                  className="text-teal-400 hover:text-teal-300 font-semibold text-xs flex items-center gap-1"
                >
                  <span>View all 9+ treatments</span>
                  <span>→</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation & Tools */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-teal-400 mb-4">
              Patient Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Dr. Amit Jangir & Senior Team
                </Link>
              </li>
              <li>
                <Link to="/conditions" className="hover:text-white transition-colors">
                  Conditions Treated (Spine, Neck, Knee)
                </Link>
              </li>
              <li>
                <Link to="/symptom-checker" className="text-teal-400 hover:text-teal-300 font-semibold flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5" />
                  <span>Interactive Pain Assessment</span>
                </Link>
              </li>
              <li>
                <Link to="/book" className="hover:text-white transition-colors">
                  Schedule Consultation (Clinic / Home)
                </Link>
              </li>
              <li>
                <Link to="/my-appointments" className="hover:text-white transition-colors">
                  My Booked Appointments Portal
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors">
                  Clinic Tour & Modalities
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-white transition-colors">
                  Verified Patient Reviews & Video Cases
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  Spine Health & Ergonomic Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-3.5">
            <h4 className="text-xs uppercase tracking-widest font-bold text-teal-400 mb-4">
              Clinic Location & Contact
            </h4>
            
            <div className="flex items-start gap-2.5 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-200">{CLINIC_INFO.address.clinicName}</p>
                <p>{CLINIC_INFO.address.unit}</p>
                <p>{CLINIC_INFO.address.street}, {CLINIC_INFO.address.landmark}</p>
                <p>{CLINIC_INFO.address.locality}, {CLINIC_INFO.address.city} - {CLINIC_INFO.address.pincode}</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-slate-300">
              <Phone className="w-4 h-4 text-teal-400 shrink-0" />
              <div>
                <a href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-teal-400 font-semibold">
                  {CLINIC_INFO.phone}
                </a>
                <span className="text-slate-500 mx-1">/</span>
                <a href={`tel:${CLINIC_INFO.altPhone.replace(/\s+/g, '')}`} className="hover:text-teal-400">
                  {CLINIC_INFO.altPhone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-slate-400">
              <Clock className="w-4 h-4 text-teal-400 shrink-0" />
              <div>
                <p>Mon - Sat: 8:00 AM – 9:00 PM</p>
                <p className="text-[11px] text-slate-500">Sunday: 9:00 AM – 2:00 PM</p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/book"
                className="w-full inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-colors shadow-md"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Reserve An Appointment</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Legal, Privacy & GitHub Deployment Info */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <p>© {new Date().getFullYear()} PhysioCare. All rights reserved. Recreated from reference website under brand identity <strong className="text-slate-400">physiocare</strong>.</p>
            <p className="text-[11px] text-slate-600 mt-1">
              Maintained on GitHub by <strong className="text-slate-400">Aman22kr</strong> • Static build deployed with GitHub Actions for GitHub Pages.
            </p>
          </div>

          <div className="text-[11px] text-slate-400 max-w-md text-center md:text-right">
            <span>Client-side data persistence enabled via browser <code className="text-teal-400 bg-slate-900 px-1 py-0.5 rounded">localStorage</code>. Medical information provided is for educational & appointment scheduling purposes.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
