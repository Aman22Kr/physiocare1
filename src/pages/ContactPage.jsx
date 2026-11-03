import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, Send, CheckCircle2, 
  MessageSquare, Compass, ShieldCheck, Car, Train
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData.js';
import { useClinic } from '../context/ClinicContext.jsx';
import AdPlaceholder from '../components/AdPlaceholder.jsx';

export default function ContactPage() {
  const { submitContactInquiry } = useClinic();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Consultation Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    submitContactInquiry(formData);
    setSubmitted(true);
    setFormData({
      name: '',
      phone: '',
      email: '',
      subject: 'General Consultation Inquiry',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Reach Out Directly
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Contact PhysioCare Clinic
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Conveniently situated in Dadar West, Mumbai directly opposite Shiv Sena Bhavan. Walk-ins, pre-booked consultations, and home care requests welcome.
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Address */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Clinic Address</h3>
            <div className="text-xs text-slate-600 space-y-1">
              <p className="font-bold text-slate-800">{CLINIC_INFO.address.clinicName}</p>
              <p>{CLINIC_INFO.address.unit}</p>
              <p>{CLINIC_INFO.address.street}</p>
              <p className="font-semibold text-teal-700">{CLINIC_INFO.address.landmark}</p>
              <p>{CLINIC_INFO.address.locality}, {CLINIC_INFO.address.city} - {CLINIC_INFO.address.pincode}</p>
            </div>
            <div className="pt-2 text-[11px] text-slate-500 flex items-center gap-1.5">
              <Train className="w-3.5 h-3.5 text-slate-400" />
              <span>{CLINIC_INFO.address.nearStation}</span>
            </div>
          </div>

          {/* Card 2: Phone & WhatsApp */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Phone & Helpline</h3>
            <div className="space-y-2 text-xs">
              <div>
                <p className="text-slate-400 text-[11px]">Primary Consultation Desk:</p>
                <a href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`} className="font-bold text-slate-900 hover:text-teal-600 text-sm">
                  {CLINIC_INFO.phone}
                </a>
              </div>
              <div>
                <p className="text-slate-400 text-[11px]">Alternate / Emergency Helpline:</p>
                <a href={`tel:${CLINIC_INFO.altPhone.replace(/\s+/g, '')}`} className="font-bold text-slate-800 hover:text-teal-600">
                  {CLINIC_INFO.altPhone}
                </a>
              </div>
            </div>
            <div className="pt-1">
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=${encodeURIComponent("Hello Dr. Amit Jangir & PhysioCare team, I have a question regarding consultation.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 rounded-xl text-xs transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Card 3: Hours & Accessibility */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Operating Hours</h3>
            <div className="space-y-1.5 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>Mon – Sat:</span>
                <span className="font-bold text-slate-900">8:00 AM – 9:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span className="font-bold text-teal-700">9:00 AM – 2:00 PM</span>
              </div>
              <div className="flex justify-between pt-1 border-t border-slate-100">
                <span>Home Visits:</span>
                <span className="font-semibold text-slate-800">7:00 AM – 8:00 PM</span>
              </div>
            </div>
            <div className="pt-2 text-[11px] text-slate-500 flex items-center gap-1.5">
              <Car className="w-3.5 h-3.5 text-slate-400" />
              <span>Ground floor entrance • Wheelchair accessible</span>
            </div>
          </div>
        </div>

        {/* Map & Inquiry Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Dadar Location Landmark & Directions Guide */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-5">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Compass className="w-5 h-5 text-teal-600" />
                <span>Directions & How To Reach</span>
              </h2>

              {/* Map Canvas Placeholder */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 aspect-16/10 flex flex-col justify-between p-6">
                <div 
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(#0f766e 1.5px, transparent 1.5px)`,
                    backgroundSize: '20px 20px'
                  }}
                />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="bg-white/90 text-slate-800 text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-teal-600" />
                    <span>Dadar West • Landmark Hub</span>
                  </span>
                  <span className="bg-slate-900/80 text-teal-300 text-[10px] font-mono px-2 py-0.5 rounded">
                    Pin: 400028
                  </span>
                </div>

                <div className="relative z-10 bg-white/95 p-4 rounded-xl shadow-lg border border-slate-200 text-center max-w-sm mx-auto space-y-1">
                  <p className="text-xs font-bold text-slate-900">
                    O3 Physio Clinic / PhysioCare Dadar
                  </p>
                  <p className="text-[11px] text-slate-600">
                    Opposite Shiv Sena Bhavan, Dadasaheb Rege Marg, Dadar West.
                  </p>
                  <a
                    href="https://maps.google.com/?q=Shiv+Sena+Bhavan+Dadar+West+Mumbai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-xs font-bold text-teal-600 hover:text-teal-700 underline pt-1"
                  >
                    Open Directions in Google Maps ↗
                  </a>
                </div>

                <div className="relative z-10 text-[10px] text-slate-500 text-center">
                  Live GPS coordinate placeholder for Dadar West, Mumbai practice.
                </div>
              </div>

              {/* Transit Details */}
              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-slate-900 shrink-0">By Train:</span>
                  <span>Exit Dadar Western or Central Railway Station (Platform 1 / West side). Walk 7 minutes down Ranade Road towards Shiv Sena Bhavan.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-slate-900 shrink-0">By Car / Taxi:</span>
                  <span>Ask driver for "Shiv Sena Bhavan, Dadar West". The clinic is in Jogalekar Building directly across the main road on the ground floor.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-slate-900 shrink-0">Parking:</span>
                  <span>Street parking available along Dadasaheb Rege Marg and pay-and-park facilities near Shivaji Park.</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Send A Message or Clinical Inquiry
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Have a question regarding fees, treatment protocols, or second opinions? Our clinic manager responds within 2 business hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 bg-teal-50 border border-teal-200 rounded-2xl text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-teal-600 mx-auto" />
                  <h3 className="text-base font-bold text-teal-950">Inquiry Submitted Successfully!</h3>
                  <p className="text-xs text-teal-800">
                    Thank you! Your message has been saved and our Dadar West clinic coordinator will reach out to your phone number shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-teal-700 underline"
                  >
                    Send another query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Your Full Name *</label>
                    <input 
                      type="text"
                      required
                      placeholder="e.g. Priyanshu Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-800 focus:ring-2 focus:ring-teal-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-700 font-bold mb-1">Mobile Number *</label>
                      <input 
                        type="tel"
                        required
                        placeholder="+91 93728 73293"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-800 focus:ring-2 focus:ring-teal-500"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-700 font-bold mb-1">Email (Optional)</label>
                      <input 
                        type="email"
                        placeholder="patient@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-800 focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Inquiry Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-800 font-semibold"
                    >
                      <option>General Consultation Inquiry</option>
                      <option>Slip Disc & Chiropractic Question</option>
                      <option>Home Physiotherapy Coverage in Mumbai</option>
                      <option>MRI / Scan Report Second Opinion</option>
                      <option>Corporate Ergonomics Workshop</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Your Message or Question *</label>
                    <textarea 
                      rows={4}
                      required
                      placeholder="Please let us know your current symptoms or what questions you have..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-800 focus:ring-2 focus:ring-teal-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-xs py-3.5 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Clinic Desk</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* Ad Placeholder Section */}
        <AdPlaceholder slotId="contact-page" />

      </div>
    </div>
  );
}
