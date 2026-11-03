import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, ArrowLeft, Calendar, Search } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-slate-50 px-4 py-16">
      <div className="max-w-md w-full bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 text-center shadow-lg space-y-6">
        
        <div className="w-16 h-16 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mx-auto shadow-xs">
          <Stethoscope className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
            Error 404 • Page Not Found
          </span>
          <h1 className="text-2xl font-extrabold text-slate-900">
            Let's Get You Back on Track
          </h1>
          <p className="text-xs text-slate-600 leading-relaxed">
            The page or clinical resource you were searching for cannot be located. It may have moved or been updated.
          </p>
        </div>

        <div className="space-y-2.5 pt-2">
          <Link
            to="/"
            className="w-full inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs py-3 rounded-xl shadow-md transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Clinic Home</span>
          </Link>

          <Link
            to="/services"
            className="w-full inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs py-2.5 rounded-xl transition-colors"
          >
            <Search className="w-4 h-4" />
            <span>Browse All Treatments</span>
          </Link>

          <Link
            to="/book"
            className="w-full inline-flex items-center justify-center gap-2 text-teal-600 hover:underline font-bold text-xs py-2"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Schedule An Appointment</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
