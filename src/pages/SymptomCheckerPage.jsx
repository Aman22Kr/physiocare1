import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Activity, AlertTriangle, CheckCircle2, ChevronRight, ArrowLeft, 
  RotateCcw, Calendar, Stethoscope, Sparkles, ShieldAlert, History
} from 'lucide-react';
import { useClinic } from '../context/ClinicContext.jsx';
import AdPlaceholder from '../components/AdPlaceholder.jsx';

export default function SymptomCheckerPage() {
  const navigate = useNavigate();
  const { painHistory, savePainAssessment } = useClinic();

  const [step, setStep] = useState(1);
  const [region, setRegion] = useState('');
  const [painLevel, setPainLevel] = useState(5);
  const [symptomType, setSymptomType] = useState([]);
  const [duration, setDuration] = useState('2 to 6 weeks (Subacute)');
  const [hasRedFlags, setHasRedFlags] = useState(false);
  const [assessmentResult, setAssessmentResult] = useState(null);

  const bodyAreas = [
    { id: 'lower-back', label: 'Lower Back & Spine', hint: 'Lumbar spine, sacroiliac joint, buttocks' },
    { id: 'neck', label: 'Neck & Cervical Spine', hint: 'Base of skull, upper shoulders, trapezii' },
    { id: 'sciatica-leg', label: 'Radiating Leg Pain (Sciatica)', hint: 'Electric shooting pain down hamstring or calf' },
    { id: 'shoulder', label: 'Shoulder & Upper Arm', hint: 'Rotator cuff, inability to raise arm, night pain' },
    { id: 'knee', label: 'Knee Joint', hint: 'Meniscus, osteoarthritis, clicking, stairs difficulty' },
    { id: 'heel-foot', label: 'Heel & Foot', hint: 'Morning heel pain, plantar fascia, ankle sprains' },
  ];

  const symptomOptions = [
    "Sharp stabbing pain on movement",
    "Constant dull aching stiffness",
    "Tingling / 'Pins & Needles' sensation",
    "Numbness or reduced sensation in fingers/toes",
    "Burning or electrical shock feelings",
    "Pain worse after sitting at a desk",
    "Stiffness worse during morning upon waking",
    "Audible popping, clicking, or cracking sounds"
  ];

  const toggleSymptom = (sym) => {
    if (symptomType.includes(sym)) {
      setSymptomType(symptomType.filter(s => s !== sym));
    } else {
      setSymptomType([...symptomType, sym]);
    }
  };

  const handleCalculateAssessment = () => {
    let recommendation = "";
    let primaryServiceId = "chiropractic-adjustments";
    let likelyCondition = "";

    if (region === 'lower-back' || region === 'sciatica-leg') {
      likelyCondition = "Lumbar Disc Bulge (Slip Disc) or Sciatic Nerve Compression";
      primaryServiceId = "spinal-rehabilitation-slip-disc";
      recommendation = "Computerized Spinal Decompression combined with gentle chiropractic alignment to take pressure off nerve roots.";
    } else if (region === 'neck') {
      likelyCondition = "Cervical Spondylosis, Tech-Neck & Suboccipital Strain";
      primaryServiceId = "chiropractic-adjustments";
      recommendation = "Cervical chiropractic adjustment, deep dry needling, and posture retraining.";
    } else if (region === 'shoulder') {
      likelyCondition = "Frozen Shoulder (Adhesive Capsulitis) or Rotator Cuff Tendinopathy";
      primaryServiceId = "cupping-therapy-hijama";
      recommendation = "Capsular joint mobilization, dynamic cupping therapy, and scapular biomechanics.";
    } else if (region === 'knee') {
      likelyCondition = "Knee Osteoarthritis or Patellofemoral Syndrome";
      primaryServiceId = "post-surgical-rehab";
      recommendation = "Targeted kinetic chain rehabilitation, laser therapy, and quadriceps loading protocols.";
    } else {
      likelyCondition = "Plantar Fasciitis or Achilles Tendinopathy";
      primaryServiceId = "dry-needling-therapy";
      recommendation = "Trigger point dry needling to calf musculature, shockwave therapy, and arch support.";
    }

    const result = {
      region,
      painLevel,
      duration,
      symptoms: symptomType,
      likelyCondition,
      primaryServiceId,
      recommendation,
      hasRedFlags
    };

    savePainAssessment(result);
    setAssessmentResult(result);
    setStep(4);
  };

  const handleReset = () => {
    setStep(1);
    setRegion('');
    setPainLevel(5);
    setSymptomType([]);
    setDuration('2 to 6 weeks (Subacute)');
    setHasRedFlags(false);
    setAssessmentResult(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Clinical Triage Tool
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Interactive Pain & Symptom Assessment
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Answer a few quick questions regarding your pain location and severity to receive immediate clinical guidance and recommended non-surgical therapies.
          </p>
        </div>

        {/* Wizard Card */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
          
          {/* Progress Indicators */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-5">
            {[1, 2, 3, 4].map((s) => (
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
                <span className="hidden sm:inline text-xs font-semibold text-slate-600">
                  {s === 1 ? 'Location' : s === 2 ? 'Severity & Duration' : s === 3 ? 'Symptoms & Triage' : 'Analysis'}
                </span>
              </div>
            ))}
          </div>

          {/* Step 1: Body Location */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Step 1: Where is your primary discomfort located?
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Select the anatomical region causing you the most pain or stiffness.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {bodyAreas.map((area) => (
                  <button
                    key={area.id}
                    type="button"
                    onClick={() => setRegion(area.id)}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      region === area.id
                        ? 'border-teal-500 bg-teal-50/80 shadow-xs'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <p className={`text-sm font-bold ${region === area.id ? 'text-teal-900' : 'text-slate-900'}`}>
                      {area.label}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">{area.hint}</p>
                  </button>
                ))}
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  disabled={!region}
                  onClick={() => setStep(2)}
                  className="bg-teal-600 hover:bg-teal-700 disabled:opacity-50 text-white font-bold text-xs px-6 py-3 rounded-xl transition-colors flex items-center gap-1.5 shadow-md"
                >
                  <span>Continue to Severity</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Severity & Duration */}
          {step === 2 && (
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Step 2: How intense is your pain right now?
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Rate your discomfort on the standard Visual Analogue Scale (1 to 10).
                </p>
              </div>

              {/* Slider */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">1 (Mild stiffness)</span>
                  <div className="text-center">
                    <span className="text-3xl font-extrabold text-teal-600">{painLevel}</span>
                    <span className="text-xs text-slate-500"> / 10</span>
                  </div>
                  <span className="text-xs font-semibold text-rose-600">10 (Excruciating)</span>
                </div>

                <input 
                  type="range"
                  min="1"
                  max="10"
                  value={painLevel}
                  onChange={(e) => setPainLevel(parseInt(e.target.value))}
                  className="w-full accent-teal-600 cursor-pointer"
                />

                <div className="text-center text-xs font-bold text-slate-700">
                  {painLevel <= 3 && "Mild Discomfort: Noticeable but does not prevent daily tasks."}
                  {painLevel > 3 && painLevel <= 6 && "Moderate Pain: Disrupts posture, sleep, and physical activity."}
                  {painLevel > 6 && painLevel <= 8 && "Severe Pain: Significantly disabling, radiating nerve sensations."}
                  {painLevel > 8 && "Acute / Severe Crisis: Urgent clinical intervention recommended."}
                </div>
              </div>

              {/* Duration */}
              <div className="space-y-3">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  How long have you been experiencing this pain?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    "Less than 2 weeks (Acute)",
                    "2 to 6 weeks (Subacute)",
                    "Over 3 months (Chronic)"
                  ].map((dur) => (
                    <button
                      key={dur}
                      type="button"
                      onClick={() => setDuration(dur)}
                      className={`p-3.5 rounded-xl text-xs font-bold border transition-all text-center ${
                        duration === dur
                          ? 'bg-teal-600 text-white border-teal-600 shadow-xs'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {dur}
                    </button>
                  ))}
                </div>
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
                  <span>Continue to Symptoms</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Specific Symptoms & Red Flags */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Step 3: Specific Sensations & Clinical Triage
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Select all sensations you feel (select multiple):
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {symptomOptions.map((sym) => {
                  const checked = symptomType.includes(sym);
                  return (
                    <button
                      key={sym}
                      type="button"
                      onClick={() => toggleSymptom(sym)}
                      className={`p-3 rounded-xl border text-left text-xs font-medium transition-all flex items-start gap-2.5 ${
                        checked
                          ? 'border-teal-500 bg-teal-50 text-teal-900 font-semibold'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 mt-0.5 ${
                        checked ? 'bg-teal-600 border-teal-600 text-white' : 'border-slate-300'
                      }`}>
                        {checked && '✓'}
                      </span>
                      <span>{sym}</span>
                    </button>
                  );
                })}
              </div>

              {/* Red Flags Checkbox */}
              <div className="p-4 bg-amber-50/80 rounded-2xl border border-amber-200 space-y-2">
                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox"
                    id="redflags"
                    checked={hasRedFlags}
                    onChange={(e) => setHasRedFlags(e.target.checked)}
                    className="w-4 h-4 text-amber-600 rounded mt-0.5 accent-amber-600"
                  />
                  <label htmlFor="redflags" className="text-xs text-amber-900 leading-snug cursor-pointer">
                    <strong className="block text-amber-950 font-bold mb-0.5">Clinical Safety Notice (Red Flags):</strong>
                    Do you have sudden loss of bowel or bladder control, high fever, or saddle anesthesia (numbness in groin area)?
                  </label>
                </div>
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
                  type="button"
                  onClick={handleCalculateAssessment}
                  className="bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs px-7 py-3 rounded-xl transition-colors flex items-center gap-1.5 shadow-lg"
                >
                  <Activity className="w-4 h-4" />
                  <span>Generate Clinical Analysis</span>
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Results & Action Plan */}
          {step === 4 && assessmentResult && (
            <div className="space-y-6">
              {assessmentResult.hasRedFlags ? (
                <div className="p-6 bg-rose-50 border border-rose-300 rounded-2xl space-y-3">
                  <div className="flex items-center gap-2 text-rose-700 font-bold">
                    <ShieldAlert className="w-5 h-5" />
                    <span>Emergency Red Flag Warning</span>
                  </div>
                  <p className="text-xs text-rose-900 leading-relaxed">
                    Based on your reported symptoms (possible Cauda Equina compression or neurological emergency), we strongly advise immediate evaluation at an Emergency Department or spine specialist hospital before commencing manual physiotherapy.
                  </p>
                </div>
              ) : null}

              <div className="bg-teal-50/90 rounded-2xl p-6 border border-teal-200 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-teal-800 uppercase tracking-widest bg-teal-100 px-2.5 py-0.5 rounded-md">
                    Preliminary Clinical Analysis
                  </span>
                  <span className="text-xs text-slate-500 font-mono">
                    VAS Score: <strong className="text-slate-900">{assessmentResult.painLevel}/10</strong>
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-teal-950">
                    Suspected Condition: {assessmentResult.likelyCondition}
                  </h3>
                  <p className="text-xs text-teal-800 mt-1">
                    Duration Profile: <strong>{assessmentResult.duration}</strong>
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-teal-100 space-y-1.5">
                  <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    PhysioCare Recommended Treatment Protocol:
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {assessmentResult.recommendation}
                  </p>
                </div>
              </div>

              {/* Immediate Self-Care Recommendations */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Safe Immediate Self-Care Tips:
                </h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>Apply cold compress for acute sharp flares (15 mins on, 45 mins off); warm compress for chronic morning stiffness.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>Avoid prolonged static sitting greater than 35 consecutive minutes; perform gentle standing extension resets.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>Do not attempt aggressive cracking or self-manipulation of vertebrae at home.</span>
                  </li>
                </ul>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 font-semibold"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Start New Assessment</span>
                </button>

                <div className="flex gap-3 w-full sm:w-auto">
                  <Link
                    to={`/book?service=${encodeURIComponent(assessmentResult.primaryServiceId)}&condition=${encodeURIComponent(assessmentResult.likelyCondition)}&pain=${assessmentResult.painLevel}`}
                    className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-xs px-6 py-3.5 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Evaluation with this Data</span>
                  </Link>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Previous Assessment History from localStorage */}
        {painHistory.length > 0 && (
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <History className="w-4 h-4 text-teal-600" />
              <span>Your Stored Pain Assessment History ({painHistory.length})</span>
            </h3>

            <div className="space-y-2">
              {painHistory.slice(0, 3).map((item) => (
                <div key={item.id} className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-slate-800">{item.likelyCondition}</span>
                    <span className="text-slate-500 block text-[11px]">Region: {item.region} • Pain: {item.painLevel}/10</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">{item.date}</span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-slate-400">
              * Assessment data is stored securely in your browser's localStorage and is never shared without your permission.
            </p>
          </div>
        )}

        {/* Ad Placeholder Section */}
        <AdPlaceholder slotId="symptom-checker" />

      </div>
    </div>
  );
}
