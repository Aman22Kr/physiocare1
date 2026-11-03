import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { 
  Calendar, Clock, User, Phone, Mail, MapPin, CheckCircle2, 
  ShieldCheck, ArrowRight, ArrowLeft, Stethoscope, Sparkles
} from 'lucide-react';
import { CLINIC_INFO, SERVICES, CLINIC_TEAM } from '../data/clinicData.js';
import { useClinic } from '../context/ClinicContext.jsx';
import AdPlaceholder from '../components/AdPlaceholder.jsx';

export default function BookAppointmentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { bookAppointment } = useClinic();

  // Parse query parameters
  const queryParams = new URLSearchParams(location.search);
  const initialServiceId = queryParams.get('service') || SERVICES[0].id;
  const initialCondition = queryParams.get('condition') || '';
  const initialType = queryParams.get('type') || 'Clinic Visit';
  const initialDate = queryParams.get('date') || '';
  const initialDoctor = queryParams.get('doctor') || CLINIC_TEAM[0].name;

  const [step, setStep] = useState(1);
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    visitType: initialType,
    serviceId: initialServiceId,
    doctor: initialDoctor,
    date: initialDate || (() => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      return tomorrow.toISOString().split('T')[0];
    })(),
    timeSlot: '10:30 AM',
    patientName: '',
    phone: '',
    email: '',
    age: '',
    gender: 'Male',
    homeAddress: '',
    symptomsNotes: initialCondition ? `Suffering from ${initialCondition}.` : '',
  });

  const timeSlots = [
    '08:30 AM', '09:30 AM', '10:30 AM', '11:30 AM',
    '12:30 PM', '02:30 PM', '03:30 PM', '04:30 PM',
    '05:30 PM', '06:30 PM', '07:30 PM', '08:30 PM'
  ];

  const selectedService = SERVICES.find(s => s.id === formData.serviceId) || SERVICES[0];

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    if (!formData.patientName || !formData.phone) return;

    const newAppointment = bookAppointment({
      patientName: formData.patientName,
      phone: formData.phone,
      email: formData.email || 'patient@example.com',
      serviceId: formData.serviceId,
      serviceTitle: selectedService.title,
      doctor: formData.doctor,
      visitType: formData.visitType,
      date: formData.date,
      timeSlot: formData.timeSlot,
      homeAddress: formData.homeAddress,
      notes: formData.symptomsNotes,
      fee: selectedService.priceEstimate
    });

    setConfirmedBooking(newAppointment);
    setStep(4);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Official Consultation Scheduler
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Schedule Your PhysioCare Appointment
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
            Choose between in-clinic consultation at Dadar West (Opp. Shiv Sena Bhavan) or private at-home physiotherapy across Mumbai.
          </p>
        </div>

        {/* Wizard Progress */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
          
          {step < 4 && (
            <div className="flex items-center justify-between border-b border-slate-100 pb-5">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${
                    step === s 
                      ? 'bg-teal-600 text-white shadow-md' 
                      : step > s 
                      ? 'bg-emerald-100 text-emerald-800' 
                      : 'bg-slate-100 text-slate-400'
                  }`}>
                    {step > s ? '✓' : s}
                  </div>
                  <span className="hidden sm:inline text-xs font-semibold text-slate-700">
                    {s === 1 ? 'Care & Specialist' : s === 2 ? 'Date & Time Slot' : 'Patient Details'}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Step 1: Care Mode & Service */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Step 1: Consultation Format & Treatment
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Select your preferred consultation venue and specialized therapy.
                </p>
              </div>

              {/* Visit Mode Toggle */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, visitType: 'Clinic Visit' })}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    formData.visitType === 'Clinic Visit'
                      ? 'border-teal-500 bg-teal-50/80 shadow-xs'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <p className="text-sm font-bold text-slate-900">In-Clinic Consultation</p>
                  <p className="text-xs text-slate-500 mt-1">Dadar West (Opp. Shiv Sena Bhavan)</p>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, visitType: 'Home Visit' })}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    formData.visitType === 'Home Visit'
                      ? 'border-teal-500 bg-teal-50/80 shadow-xs'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <p className="text-sm font-bold text-slate-900">Home Physio Visit</p>
                  <p className="text-xs text-slate-500 mt-1">Therapist brings equipment to your door</p>
                </button>
              </div>

              {/* Service Selection */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Select Specialized Therapy
                </label>
                <select
                  value={formData.serviceId}
                  onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs sm:text-sm text-slate-800 font-semibold focus:ring-2 focus:ring-teal-500"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title} ({s.duration} • {s.priceEstimate})
                    </option>
                  ))}
                </select>
              </div>

              {/* Specialist Selection */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Consulting Practitioner
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {CLINIC_TEAM.map((doc) => (
                    <button
                      key={doc.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, doctor: doc.name })}
                      className={`p-3.5 rounded-xl border text-left transition-all flex items-center gap-3 ${
                        formData.doctor === doc.name
                          ? 'border-teal-500 bg-teal-50/80'
                          : 'border-slate-200 bg-white hover:bg-slate-50'
                      }`}
                    >
                      <img 
                        src={doc.image} 
                        alt={doc.name} 
                        className="w-10 h-10 rounded-full object-cover border border-slate-200 shrink-0"
                      />
                      <div>
                        <p className="text-xs font-bold text-slate-900">{doc.name}</p>
                        <p className="text-[10px] text-teal-700 font-medium">{doc.speciality.split(',')[0]}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs px-6 py-3 rounded-xl transition-colors flex items-center gap-1.5 shadow-md"
                >
                  <span>Choose Date & Time</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Date & Slot Picker */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Step 2: Select Date & Available Time Slot
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Operating hours: Mon-Sat 8:00 AM – 9:00 PM, Sun 9:00 AM – 2:00 PM.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Appointment Date
                </label>
                <input 
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full sm:w-64 bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs sm:text-sm text-slate-800 font-semibold focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Available Slots for {formData.date}
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setFormData({ ...formData, timeSlot: slot })}
                      className={`py-2.5 px-2 rounded-xl text-xs font-bold transition-all ${
                        formData.timeSlot === slot
                          ? 'bg-teal-600 text-white shadow-md'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-teal-50 rounded-2xl border border-teal-100 text-xs text-teal-900 flex items-center justify-between">
                <div>
                  <span className="font-bold">Summary: </span>
                  <span>{selectedService.title} with {formData.doctor}</span>
                </div>
                <span className="font-bold text-teal-800">{formData.date} at {formData.timeSlot}</span>
              </div>

              <div className="flex items-center justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs px-6 py-3 rounded-xl transition-colors flex items-center gap-1.5 shadow-md"
                >
                  <span>Enter Patient Information</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Patient Information Form */}
          {step === 3 && (
            <form onSubmit={handleConfirmBooking} className="space-y-5 text-xs">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Step 3: Patient Information & Medical Background
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Please provide accurate contact details for appointment confirmation SMS and clinic directions.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Patient Full Name *</label>
                  <input 
                    type="text"
                    required
                    placeholder="e.g. Aman Kumar"
                    value={formData.patientName}
                    onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-800 focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">Mobile Number (WhatsApp) *</label>
                  <input 
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-800 focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Email Address</label>
                  <input 
                    type="email"
                    placeholder="patient@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-800 focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">Age</label>
                  <input 
                    type="number"
                    placeholder="e.g. 38"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-800 focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">Gender</label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-800"
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              {formData.visitType === 'Home Visit' && (
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Home Visit Address (Mumbai) *</label>
                  <textarea 
                    rows={2}
                    required
                    placeholder="Flat/Building, Street, Landmark, Locality in Mumbai (e.g. Bandra, Dadar, Prabhadevi)"
                    value={formData.homeAddress}
                    onChange={(e) => setFormData({ ...formData, homeAddress: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-800 focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              )}

              <div>
                <label className="block text-slate-700 font-bold mb-1">Describe Your Pain, Symptoms, or Previous Scans</label>
                <textarea 
                  rows={3}
                  placeholder="e.g. Severe lower back pain radiating down left thigh for 3 weeks. Have MRI scan from last month."
                  value={formData.symptomsNotes}
                  onChange={(e) => setFormData({ ...formData, symptomsNotes: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-800 focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div className="p-3 bg-slate-100 rounded-xl text-[11px] text-slate-600 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Zero advance deposit needed. Consultation fee is paid directly at the clinic desk upon completion.</span>
              </div>

              <div className="flex items-center justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  type="submit"
                  className="bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-xs px-8 py-3.5 rounded-xl transition-colors shadow-lg flex items-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Confirm Appointment Reservation</span>
                </button>
              </div>
            </form>
          )}

          {/* Step 4: Booking Confirmation View */}
          {step === 4 && confirmedBooking && (
            <div className="text-center space-y-6 py-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Confirmed & Saved to Your Device
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                  Appointment Successfully Scheduled!
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Reference Token: <strong className="font-mono text-teal-700">{confirmedBooking.id}</strong>
                </p>
              </div>

              {/* Printable Slip Card */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-left max-w-md mx-auto space-y-3 text-xs">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Patient:</span>
                  <span className="font-bold text-slate-900">{confirmedBooking.patientName}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Consultation:</span>
                  <span className="font-bold text-slate-900">{confirmedBooking.serviceTitle}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Specialist:</span>
                  <span className="font-bold text-slate-900">{confirmedBooking.doctor}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Date & Slot:</span>
                  <span className="font-bold text-teal-700">{confirmedBooking.date} • {confirmedBooking.timeSlot}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Venue:</span>
                  <span className="font-bold text-slate-900">{confirmedBooking.visitType}</span>
                </div>
                {confirmedBooking.visitType === 'Clinic Visit' ? (
                  <p className="text-[11px] text-slate-500 pt-1">
                    📍 Dadar West Clinic: Opp. Shiv Sena Bhavan, Dadar West, Mumbai.
                  </p>
                ) : (
                  <p className="text-[11px] text-slate-500 pt-1">
                    📍 Home Service: {confirmedBooking.homeAddress}
                  </p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <Link
                  to="/my-appointments"
                  className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs px-6 py-3 rounded-xl shadow-md transition-colors"
                >
                  View In "My Appointments" Portal
                </Link>

                <button
                  type="button"
                  onClick={() => window.print()}
                  className="w-full sm:w-auto border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-xs px-5 py-3 rounded-xl transition-colors"
                >
                  Print Appointment Slip
                </button>

                <Link
                  to="/"
                  className="w-full sm:w-auto text-xs text-slate-500 hover:text-slate-800 font-semibold py-3"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          )}

        </div>

        {/* Ad Placeholder Section */}
        <AdPlaceholder slotId="booking-page" />

      </div>
    </div>
  );
}
