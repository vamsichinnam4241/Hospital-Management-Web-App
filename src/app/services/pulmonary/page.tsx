import { Wind, Activity, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function PulmonaryPage() {
  const treatments = [
    { name: "PFT (Lung Function Test)", desc: "Measuring how well your lungs take in and release air." },
    { name: "Bronchoscopy", desc: "A procedure to look directly at the airways in the lungs." },
    { name: "Asthma & Allergy Care", desc: "Long-term management and emergency care for asthma." },
    { name: "COPD Management", desc: "Specialized programs for chronic obstructive pulmonary disease." },
    { name: "Sleep Apnea Study", desc: "Diagnosing and treating sleep-related breathing disorders." },
    { name: "Post-COVID Lung Recovery", desc: "Dedicated rehab for lingering respiratory issues." },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-green-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-800 rounded-full text-green-100 text-sm font-bold mb-6">
              <Wind className="h-4 w-4" />
              Pulmonology Department
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Breathing Better, Living Longer</h1>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Expert care for all respiratory conditions. We use advanced diagnostics to help you breathe easy.
            </p>
            <Link href="/contact" className="inline-flex bg-white text-green-900 px-8 py-4 rounded-full font-bold hover:bg-green-50 transition-colors">
              Book a Consultation
            </Link>
          </div>
          <div className="md:w-1/2">
            <div className="bg-green-800/50 p-8 rounded-3xl border border-green-700">
               <div className="flex items-center gap-4 mb-6">
                 <div className="h-12 w-12 bg-green-600 rounded-xl flex items-center justify-center">
                   <Shield className="h-6 w-6" />
                 </div>
                 <div>
                   <h3 className="font-bold text-xl">PFT Preparation</h3>
                   <p className="text-green-200">How to prepare</p>
                 </div>
               </div>
               <ul className="space-y-4">
                 {[
                   "Do not smoke for 24 hours before",
                   "Avoid heavy meals 4 hours prior",
                   "Wear loose-fitting clothing",
                   "Inform us about inhaler usage"
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-green-100">
                     <CheckCircle2 className="h-5 w-5 text-green-400" />
                     <span>{item}</span>
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Lung Health Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Advanced diagnostics and personalized care for all pulmonary disorders.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((t, i) => (
              <div key={i} className="p-8 rounded-2xl border border-gray-100 bg-zinc-50 hover:bg-white hover:shadow-xl transition-all group">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center justify-between">
                  {t.name}
                  <Activity className="h-5 w-5 text-green-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-gray-600 mb-6">{t.desc}</p>
                <Link href="#" className="text-green-600 font-bold flex items-center gap-2 text-sm uppercase tracking-wider">
                  Details <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
