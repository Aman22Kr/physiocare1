import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, Clock, MapPin, Calendar, Menu, X, ChevronDown, 
  Activity, Shield, Stethoscope, HeartPulse, UserCheck, Bookmark
} from 'lucide-react';
import { CLINIC_INFO, SERVICES } from '../data/clinicData.js';
import { useClinic } from '../context/ClinicContext.jsx';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();
  const { appointments, savedItems } = useClinic();

  const activeAppointmentsCount = appointments.filter(a => a.status !== 'Cancelled').length;

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Top Utility Announcement Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-teal-400 font-medium">
              <MapPin className="w-3.5 h-3.5" />
              <span>Dadar West, Mumbai (Opp. Shiv Sena Bhavan)</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              <span>Mon-Sat: 8:00 AM – 9:00 PM</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <a 
              href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`} 
              className="flex items-center gap-1 text-slate-200 hover:text-teal-400 font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span>Emergency / Desk: {CLINIC_INFO.phone}</span>
            </a>
            
            <Link
              to="/my-appointments"
              className="flex items-center gap-1 bg-slate-800 hover:bg-slate-700 text-slate-200 px-2.5 py-0.5 rounded-full transition-colors text-[11px]"
            >
              <UserCheck className="w-3 h-3 text-teal-400" />
              <span>My Appointments</span>
              {activeAppointmentsCount > 0 && (
                <span className="bg-teal-500 text-slate-950 font-bold px-1.5 rounded-full text-[10px]">
                  {activeAppointmentsCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group shrink-0"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-teal-600 to-sky-500 p-0.5 shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                <HeartPulse className="w-6 h-6 text-teal-600" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-extrabold tracking-tight text-slate-900 group-hover:text-teal-700 transition-colors">
                  physiocare
                </span>
                <span className="bg-teal-100 text-teal-800 text-[10px] font-bold px-1.5 py-0.5 rounded-md uppercase tracking-wide">
                  Clinic
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium tracking-wide">
                Advanced Physiotherapy & Spine Clinic
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              to="/"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                isActive('/') && location.pathname === '/'
                  ? 'text-teal-600 bg-teal-50'
                  : 'text-slate-700 hover:text-teal-600 hover:bg-slate-50'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                isActive('/about')
                  ? 'text-teal-600 bg-teal-50'
                  : 'text-slate-700 hover:text-teal-600 hover:bg-slate-50'
              }`}
            >
              About Doctor
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link
                to="/services"
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  isActive('/services')
                    ? 'text-teal-600 bg-teal-50'
                    : 'text-slate-700 hover:text-teal-600 hover:bg-slate-50'
                }`}
              >
                <span>Treatments</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:rotate-180 transition-transform" />
              </Link>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 py-3 px-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1">
                    Specialized Clinical Care
                  </div>
                  {SERVICES.slice(0, 6).map((service) => (
                    <Link
                      key={service.id}
                      to={`/services/${service.slug}`}
                      onClick={() => setServicesDropdownOpen(false)}
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-teal-50/80 transition-colors group"
                    >
                      <div>
                        <p className="text-xs font-semibold text-slate-800 group-hover:text-teal-700">
                          {service.title}
                        </p>
                        <p className="text-[10px] text-slate-500">
                          {service.category}
                        </p>
                      </div>
                      <span className="text-[10px] text-teal-600 opacity-0 group-hover:opacity-100 font-semibold transition-opacity">
                        View →
                      </span>
                    </Link>
                  ))}
                  <div className="border-t border-slate-100 mt-2 pt-2 px-3">
                    <Link
                      to="/services"
                      onClick={() => setServicesDropdownOpen(false)}
                      className="text-xs font-bold text-teal-600 hover:text-teal-700 flex items-center justify-between"
                    >
                      <span>Explore All 9+ Specialized Treatments</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/conditions"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                isActive('/conditions')
                  ? 'text-teal-600 bg-teal-50'
                  : 'text-slate-700 hover:text-teal-600 hover:bg-slate-50'
              }`}
            >
              Conditions
            </Link>

            <Link
              to="/symptom-checker"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                isActive('/symptom-checker')
                  ? 'text-teal-600 bg-teal-50'
                  : 'text-slate-700 hover:text-teal-600 hover:bg-slate-50'
              }`}
            >
              <Activity className="w-4 h-4 text-teal-500" />
              <span>Pain Checker</span>
            </Link>

            <Link
              to="/gallery"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                isActive('/gallery')
                  ? 'text-teal-600 bg-teal-50'
                  : 'text-slate-700 hover:text-teal-600 hover:bg-slate-50'
              }`}
            >
              Clinic Tour
            </Link>

            <Link
              to="/reviews"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                isActive('/reviews')
                  ? 'text-teal-600 bg-teal-50'
                  : 'text-slate-700 hover:text-teal-600 hover:bg-slate-50'
              }`}
            >
              Reviews
            </Link>

            <Link
              to="/blog"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                isActive('/blog')
                  ? 'text-teal-600 bg-teal-50'
                  : 'text-slate-700 hover:text-teal-600 hover:bg-slate-50'
              }`}
            >
              Health Blog
            </Link>

            <Link
              to="/contact"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                isActive('/contact')
                  ? 'text-teal-600 bg-teal-50'
                  : 'text-slate-700 hover:text-teal-600 hover:bg-slate-50'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/book"
              className="flex items-center gap-2 bg-gradient-to-r from-teal-600 to-sky-600 hover:from-teal-700 hover:to-sky-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-md shadow-teal-500/25 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/book"
              className="bg-teal-600 text-white text-xs font-bold px-3 py-2 rounded-lg sm:hidden"
            >
              Book
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-1">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-teal-50 hover:text-teal-700"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-teal-50 hover:text-teal-700"
            >
              About Dr. Amit Jangir & Clinic
            </Link>
            <Link
              to="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-teal-50 hover:text-teal-700"
            >
              Treatments & Services (All 9)
            </Link>
            <Link
              to="/conditions"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-teal-50 hover:text-teal-700"
            >
              Conditions Treated (Spine, Joint, Neuro)
            </Link>
            <Link
              to="/symptom-checker"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-sm font-semibold text-teal-700 bg-teal-50 flex items-center justify-between"
            >
              <span>Pain & Symptom Checker Tool</span>
              <Activity className="w-4 h-4 text-teal-600" />
            </Link>
            <Link
              to="/gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-teal-50 hover:text-teal-700"
            >
              Clinic Tour & Equipment Gallery
            </Link>
            <Link
              to="/reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-teal-50 hover:text-teal-700"
            >
              Patient Reviews & Video Cases
            </Link>
            <Link
              to="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-teal-50 hover:text-teal-700"
            >
              Spine & Health Blog
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-teal-50 hover:text-teal-700"
            >
              Contact & Location Map (Dadar West)
            </Link>
            <Link
              to="/my-appointments"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-100 flex items-center justify-between mt-2 pt-2 border-t border-slate-100"
            >
              <span>My Booked Appointments</span>
              {activeAppointmentsCount > 0 && (
                <span className="bg-teal-600 text-white font-bold px-2 py-0.5 rounded-full text-xs">
                  {activeAppointmentsCount}
                </span>
              )}
            </Link>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-200 flex flex-col gap-2.5">
            <Link
              to="/book"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-teal-600 text-white font-bold py-3 rounded-xl shadow-md text-sm"
            >
              Book Consultation Now
            </Link>
            <a
              href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
              className="w-full text-center border border-slate-300 text-slate-700 font-semibold py-2.5 rounded-xl text-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-teal-600" />
              <span>Call Clinic: {CLINIC_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
