import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  SERVICES, CLINIC_INFO 
} from '../data/clinicData.js';
import { useClinic } from '../context/ClinicContext.jsx';
import { 
  Star, Clock, CheckCircle2, ShieldCheck, Calendar, ArrowLeft, 
  HelpCircle, Sparkles, Bookmark, BookmarkCheck, Phone, ArrowRight
} from 'lucide-react';
import AdPlaceholder from '../components/AdPlaceholder.jsx';

export default function ServiceDetailPage() {
  const { serviceId } = useParams();
  const { toggleSaveItem, isItemSaved, recordRecentView } = useClinic();

  const service = SERVICES.find(s => s.slug === serviceId || s.id === serviceId);

  useEffect(() => {
    if (service) {
      recordRecentView({
        id: service.id,
        title: service.title,
        slug: service.slug,
        type: 'Service',
        image: service.image
      });
      window.scrollTo(0, 0);
    }
  }, [service]);

  if (!service) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-bold text-slate-900">Treatment Not Found</h2>
        <p className="text-sm text-slate-600 mt-2 max-w-md">
          The requested therapy could not be located in our clinical catalog.
        </p>
        <Link
          to="/services"
          className="mt-6 inline-flex items-center gap-2 bg-teal-600 text-white font-bold px-6 py-2.5 rounded-xl text-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Browse All Available Treatments</span>
        </Link>
      </div>
    );
  }

  const saved = isItemSaved(service.id);

  return (
    <div className="min-h-screen bg-slate-50 py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Back Link & Category */}
        <div className="flex items-center justify-between">
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-teal-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Treatments</span>
          </Link>

          <button
            type="button"
            onClick={() => toggleSaveItem(service)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-teal-600 bg-white border border-slate-200 px-3 py-1.5 rounded-xl shadow-xs"
          >
            {saved ? (
              <>
                <BookmarkCheck className="w-4 h-4 text-teal-600 fill-teal-600" />
                <span>Saved to Bookmarks</span>
              </>
            ) : (
              <>
                <Bookmark className="w-4 h-4" />
                <span>Bookmark Treatment</span>
              </>
            )}
          </button>
        </div>

        {/* Hero Banner for Service */}
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-8 sm:p-12 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                {service.category}
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {service.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                <div className="flex items-center gap-1 text-amber-500 font-bold">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>{service.rating} ({service.reviewsCount} patient ratings)</span>
                </div>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span>{service.duration}</span>
                </span>
                <span>•</span>
                <span className="font-bold text-slate-900 bg-slate-100 px-2.5 py-0.5 rounded-md">
                  {service.priceEstimate}
                </span>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pt-2">
                {service.fullDesc}
              </p>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <Link
                  to={`/book?service=${encodeURIComponent(service.id)}`}
                  className="bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-xs sm:text-sm px-7 py-3.5 rounded-xl shadow-md transition-colors flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule This Therapy</span>
                </Link>

                <a
                  href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
                  className="border border-slate-300 text-slate-700 hover:bg-slate-50 font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-teal-600" />
                  <span>Call Desk</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-4/3 relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Detailed Sections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-10">
            {/* Benefits */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-teal-600" />
                <span>Clinically Proven Benefits</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {service.benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-2.5 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 leading-snug">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Who is this for */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-teal-600" />
                <span>Conditions & Indications</span>
              </h2>
              <p className="text-xs text-slate-600">
                This therapy is specifically indicated if you are suffering from any of the following symptoms:
              </p>
              <div className="space-y-2 pt-1">
                {service.idealFor.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 px-4 py-2.5 rounded-xl">
                    <span className="w-2 h-2 rounded-full bg-teal-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Procedure Steps */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
              <h2 className="text-xl font-bold text-slate-900">
                What to Expect During Your Session
              </h2>
              <div className="space-y-4 pt-2">
                {service.procedureSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="w-7 h-7 rounded-full bg-teal-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-slate-800">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Therapy Specific FAQs */}
            {service.faq && service.faq.length > 0 && (
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-teal-600" />
                  <span>Frequently Asked Questions</span>
                </h2>
                <div className="space-y-3 pt-2">
                  {service.faq.map((item, i) => (
                    <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1.5">
                      <p className="text-xs font-bold text-slate-900">{item.q}</p>
                      <p className="text-xs text-slate-600 leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Booking Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-28 bg-white p-6 rounded-3xl border border-slate-200 shadow-lg space-y-5">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-[10px] uppercase font-bold text-teal-600 tracking-wider">
                  Direct Clinical Booking
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">
                  Book {service.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Initial consultation + physical assessment included.
                </p>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Duration:</span>
                  <span className="font-bold text-slate-800">{service.duration}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Estimated Cost:</span>
                  <span className="font-bold text-teal-700">{service.priceEstimate}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Lead Specialist:</span>
                  <span className="font-bold text-slate-800">{CLINIC_INFO.doctorName}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Location:</span>
                  <span className="font-bold text-slate-800">Dadar West / Home Visit</span>
                </div>
              </div>

              <div className="pt-2 space-y-2">
                <Link
                  to={`/book?service=${encodeURIComponent(service.id)}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-4 rounded-xl text-xs transition-colors shadow-md"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Select Date & Time Slot</span>
                </Link>

                <Link
                  to="/symptom-checker"
                  className="w-full inline-flex items-center justify-center gap-1 text-slate-600 hover:text-teal-600 font-semibold py-2 text-xs"
                >
                  <span>Not sure? Take pain test first</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="p-3 bg-teal-50 rounded-xl text-[11px] text-teal-800 border border-teal-100 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>Zero pre-payment required. Pay after your consultation at the clinic or via UPI.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Ad Placeholder Section */}
        <AdPlaceholder slotId={`service-${service.id}`} />

      </div>
    </div>
  );
}
