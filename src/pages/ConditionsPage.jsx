import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Activity, ShieldCheck, CheckCircle2, ArrowRight, Calendar, 
  HelpCircle, ChevronRight, Stethoscope, Dumbbell, AlertTriangle
} from 'lucide-react';
import { CONDITIONS, SERVICES } from '../data/clinicData.js';
import AdPlaceholder from '../components/AdPlaceholder.jsx';

export default function ConditionsPage() {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [activeCondition, setActiveCondition] = useState(CONDITIONS[0]);

  const regions = [
    { id: 'all', label: 'All Conditions' },
    { id: 'spine', label: 'Spine & Lower Back' },
    { id: 'neck', label: 'Neck & Cervical' },
    { id: 'shoulder', label: 'Shoulder & Arm' },
    { id: 'knee', label: 'Knee & Hip' },
    { id: 'foot', label: 'Foot & Ankle' },
  ];

  const filteredConditions = selectedRegion === 'all'
    ? CONDITIONS
    : CONDITIONS.filter(c => c.bodyRegion === selectedRegion);

  return (
    <div className="min-h-screen bg-slate-50 py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Clinical Diagnostic Reference
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Conditions Treated at PhysioCare
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Detailed guides to musculoskeletal, neurological, and spinal disorders. Learn clinical symptoms, our multi-modal treatment protocols, and doctor-prescribed home exercises.
          </p>
        </div>

        {/* Anatomical Region Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {regions.map((reg) => (
            <button
              key={reg.id}
              type="button"
              onClick={() => setSelectedRegion(reg.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedRegion === reg.id
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {reg.label}
            </button>
          ))}
        </div>

        {/* Two-Column Explorer: List on Left, In-Depth Protocol on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* List of Conditions */}
          <div className="lg:col-span-5 space-y-3">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider px-1">
              Select Condition ({filteredConditions.length})
            </p>

            <div className="space-y-2.5 max-h-[800px] overflow-y-auto pr-1">
              {filteredConditions.map((cond) => {
                const isSelected = activeCondition.id === cond.id;

                return (
                  <div
                    key={cond.id}
                    onClick={() => setActiveCondition(cond)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-teal-50/90 border-teal-500 shadow-sm'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className={`text-sm font-bold ${isSelected ? 'text-teal-900' : 'text-slate-900'}`}>
                          {cond.name}
                        </h3>
                        <span className="text-[10px] text-slate-500 uppercase font-medium">
                          {cond.bodyRegionLabel}
                        </span>
                      </div>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                        cond.severity.includes('Severe')
                          ? 'bg-rose-100 text-rose-700'
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {cond.severity}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 mt-2 line-clamp-2">
                      {cond.overview}
                    </p>

                    <div className="mt-3 flex items-center justify-between text-xs">
                      <span className="text-teal-600 font-bold text-[11px] flex items-center gap-1">
                        <span>Read protocol</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </span>

                      <Link
                        to={`/book?condition=${encodeURIComponent(cond.name)}`}
                        onClick={(e) => e.stopPropagation()}
                        className="text-[11px] font-bold text-slate-700 hover:text-teal-600"
                      >
                        Book slot →
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Detailed Condition Dossier */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
              
              <div className="border-b border-slate-100 pb-5">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="text-xs font-bold text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200 uppercase tracking-wider">
                    {activeCondition.bodyRegionLabel}
                  </span>
                  <span className="text-xs text-slate-500">
                    Severity Grade: <strong className="text-slate-800">{activeCondition.severity}</strong>
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {activeCondition.name}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mt-2">
                  {activeCondition.overview}
                </p>
              </div>

              {/* Clinical Symptoms */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                  <span>Key Symptoms & Diagnostic Signs</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeCondition.symptoms.map((sym, idx) => (
                    <div key={idx} className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-start gap-2 text-xs text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0 mt-1.5" />
                      <span>{sym}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Treatment Protocol */}
              <div className="bg-teal-50/70 p-5 rounded-2xl border border-teal-100 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-teal-900 flex items-center gap-1.5">
                  <Stethoscope className="w-4 h-4 text-teal-700" />
                  <span>PhysioCare Clinical Protocol</span>
                </h4>
                <p className="text-xs sm:text-sm text-teal-900 leading-relaxed font-medium">
                  {activeCondition.treatmentProtocol}
                </p>
                <div className="pt-2">
                  <Link
                    to={`/services/${activeCondition.recommendedServiceId}`}
                    className="text-xs font-bold text-teal-700 hover:text-teal-900 underline inline-flex items-center gap-1"
                  >
                    <span>View primary recommended therapy</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Home Exercises */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Dumbbell className="w-4 h-4 text-teal-600" />
                  <span>Prescribed Home Rehabilitation Exercises</span>
                </h4>
                <div className="space-y-2">
                  {activeCondition.homeExercises.map((ex, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>{ex}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-slate-400 italic">
                  * Note: Home exercises should be performed without acute exacerbation of pain. Consult our therapists before initiating strenuous loads.
                </p>
              </div>

              {/* Direct Booking Callout */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold text-slate-900">Suffering from this condition?</p>
                  <p className="text-[11px] text-slate-500">Book an assessment at Dadar West clinic or request home visit.</p>
                </div>

                <Link
                  to={`/book?condition=${encodeURIComponent(activeCondition.name)}`}
                  className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs px-5 py-3 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule Consultation</span>
                </Link>
              </div>

            </div>
          </div>

        </div>

        {/* Ad Placeholder Section */}
        <AdPlaceholder slotId="conditions-page" />

      </div>
    </div>
  );
}
