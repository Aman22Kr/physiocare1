import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, Clock, User, Phone, MapPin, CheckCircle2, 
  XCircle, AlertCircle, Printer, ArrowRight, Bookmark, 
  RotateCcw, Sparkles, PlusCircle, Trash2
} from 'lucide-react';
import { useClinic } from '../context/ClinicContext.jsx';
import AdPlaceholder from '../components/AdPlaceholder.jsx';

export default function MyAppointmentsPage() {
  const { 
    appointments, cancelAppointment, rescheduleAppointment, 
    savedItems, toggleSaveItem, recentlyViewed 
  } = useClinic();

  const [reschedulingApt, setReschedulingApt] = useState(null);
  const [newDate, setNewDate] = useState('');
  const [newSlot, setNewSlot] = useState('11:30 AM');

  const slots = [
    '09:30 AM', '10:30 AM', '11:30 AM', '02:30 PM', '04:30 PM', '06:30 PM'
  ];

  const handleRescheduleSubmit = (e) => {
    e.preventDefault();
    if (!reschedulingApt || !newDate) return;
    rescheduleAppointment(reschedulingApt.id, newDate, newSlot);
    setReschedulingApt(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200 mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Device Local Storage</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Patient Portal & My Appointments
            </h1>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Manage your booked clinical consultations, reschedule slots, and view saved rehabilitation therapies.
            </p>
          </div>

          <Link
            to="/book"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs px-5 py-3 rounded-xl shadow-md transition-colors shrink-0"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Book New Appointment</span>
          </Link>
        </div>

        {/* Section 1: Booked Appointments */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-teal-600" />
              <span>Your Booked Sessions ({appointments.length})</span>
            </h2>
            <span className="text-[11px] text-slate-400 font-mono">
              Persisted in localStorage
            </span>
          </div>

          {appointments.length === 0 ? (
            <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-md mx-auto space-y-3">
              <Calendar className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="text-base font-bold text-slate-800">No Appointments Booked Yet</h3>
              <p className="text-xs text-slate-500">
                You currently have no scheduled appointments saved on this browser session.
              </p>
              <Link
                to="/book"
                className="mt-2 inline-flex items-center gap-2 bg-teal-600 text-white font-bold text-xs px-5 py-2.5 rounded-xl"
              >
                Book Your First Consultation
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {appointments.map((apt) => {
                const isCancelled = apt.status === 'Cancelled';

                return (
                  <div
                    key={apt.id}
                    className={`bg-white rounded-2xl border p-6 shadow-xs flex flex-col justify-between transition-all ${
                      isCancelled ? 'border-slate-200 opacity-60 bg-slate-50/70' : 'border-slate-200 hover:shadow-md'
                    }`}
                  >
                    <div className="space-y-4">
                      {/* Top Bar */}
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200">
                          {apt.id}
                        </span>
                        <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                          apt.status === 'Confirmed'
                            ? 'bg-emerald-100 text-emerald-800'
                            : apt.status === 'Rescheduled'
                            ? 'bg-sky-100 text-sky-800'
                            : 'bg-rose-100 text-rose-800'
                        }`}>
                          {apt.status}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-base font-bold text-slate-900">
                          {apt.serviceTitle}
                        </h3>
                        <p className="text-xs text-teal-700 font-semibold mt-0.5">
                          Doctor: {apt.doctor}
                        </p>
                      </div>

                      <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 space-y-2 text-xs">
                        <div className="flex items-center justify-between text-slate-700">
                          <span className="text-slate-500">Scheduled Date:</span>
                          <span className="font-bold">{apt.date} at {apt.timeSlot}</span>
                        </div>
                        <div className="flex items-center justify-between text-slate-700">
                          <span className="text-slate-500">Patient:</span>
                          <span className="font-semibold">{apt.patientName} ({apt.phone})</span>
                        </div>
                        <div className="flex items-center justify-between text-slate-700">
                          <span className="text-slate-500">Venue:</span>
                          <span className="font-semibold">{apt.visitType}</span>
                        </div>
                        {apt.notes && (
                          <div className="pt-1 text-[11px] text-slate-500 border-t border-slate-200/60">
                            <strong>Symptoms:</strong> {apt.notes}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                      <button
                        type="button"
                        onClick={() => window.print()}
                        className="text-slate-500 hover:text-slate-900 font-semibold flex items-center gap-1"
                      >
                        <Printer className="w-3.5 h-3.5" />
                        <span>Print Slip</span>
                      </button>

                      {!isCancelled && (
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              setReschedulingApt(apt);
                              setNewDate(apt.date);
                              setNewSlot(apt.timeSlot);
                            }}
                            className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-3 py-1.5 rounded-lg transition-colors text-[11px]"
                          >
                            Reschedule
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              if (window.confirm(`Cancel appointment ${apt.id}?`)) {
                                cancelAppointment(apt.id);
                              }
                            }}
                            className="text-rose-600 hover:text-rose-700 font-bold px-2 py-1 text-[11px]"
                          >
                            Cancel
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Reschedule Modal */}
        {reschedulingApt && (
          <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="text-base font-bold text-slate-900">
                  Reschedule Appointment: {reschedulingApt.id}
                </h3>
                <button
                  type="button"
                  onClick={() => setReschedulingApt(null)}
                  className="text-slate-400 hover:text-slate-600 text-lg font-bold"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleRescheduleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">New Date</label>
                  <input 
                    type="date"
                    required
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-800 font-semibold"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">New Time Slot</label>
                  <select
                    value={newSlot}
                    onChange={(e) => setNewSlot(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-800 font-semibold"
                  >
                    {slots.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setReschedulingApt(null)}
                    className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-semibold"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-5 py-2 rounded-xl shadow-md"
                  >
                    Save Rescheduled Slot
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Section 2: Saved / Bookmarked Therapies */}
        <div className="space-y-6 pt-6 border-t border-slate-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Bookmark className="w-5 h-5 text-teal-600" />
              <span>Bookmarked Treatments ({savedItems.length})</span>
            </h2>
            <span className="text-xs text-slate-400">Quick access to therapies you saved</span>
          </div>

          {savedItems.length === 0 ? (
            <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-8 text-center text-xs text-slate-500">
              No bookmarked therapies yet. Click the bookmark icon on any treatment card in the Catalog to save it here.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedItems.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 line-clamp-1">{item.title}</h3>
                    <p className="text-[11px] text-teal-600">{item.category || 'Therapy'}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Link
                      to={`/services/${item.slug || item.id}`}
                      className="text-xs text-teal-600 font-bold hover:underline"
                    >
                      View
                    </Link>
                    <button
                      type="button"
                      onClick={() => toggleSaveItem(item)}
                      className="text-slate-400 hover:text-rose-600 p-1"
                      title="Remove bookmark"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Ad Placeholder Section */}
        <AdPlaceholder slotId="portal-page" />

      </div>
    </div>
  );
}
