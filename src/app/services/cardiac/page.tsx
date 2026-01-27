import { Heart, Activity, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function CardiacPage() {
  const treatments = [
    { name: "Angiogram & Angioplasty", desc: "Minimally invasive procedures to diagnose and treat blocked arteries." },
    { name: "Echocardiogram (Echo)", desc: "Ultrasound of the heart to check its structure and function." },
    { name: "ECG/EKG Monitoring", desc: "Recording the electrical activity of the heart to detect arrhythmias." },
    { name: "Stress Testing", desc: "Evaluating heart health under physical exertion." },
    { name: "Heart Failure Management", desc: "Long-term care plans for chronic heart conditions." },
    { name: "Preventive Screenings", desc: "Comprehensive checkups to identify risks early." },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-blue-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-800 rounded-full text-blue-100 text-sm font-bold mb-6">
              <Heart className="h-4 w-4" />
              Cardiology Department
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Advanced Cardiac Care</h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              We provide a full spectrum of heart health services, from advanced interventional procedures to preventive wellness programs.
            </p>
            <Link href="/contact" className="inline-flex bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors">
              Book a Consultation
            </Link>
          </div>
          <div className="md:w-1/2">
            <div className="bg-blue-800/50 p-8 rounded-3xl border border-blue-700">
               <div className="flex items-center gap-4 mb-6">
                 <div className="h-12 w-12 bg-blue-600 rounded-xl flex items-center justify-center">
                   <Shield className="h-6 w-6" />
                 </div>
                 <div>
                   <h3 className="font-bold text-xl">Preparation Guide</h3>
                   <p className="text-blue-200">For your first visit</p>
                 </div>
               </div>
               <ul className="space-y-4">
                 {[
                   "Bring all current medications",
                   "Carry previous ECG/Lab reports",
                   "Fast for 8 hours if blood work is needed",
                   "Wear comfortable loose clothing"
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-blue-100">
                     <CheckCircle2 className="h-5 w-5 text-blue-400" />
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Treatments & Procedures</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Using the latest technology to ensure accurate diagnosis and effective treatment for all heart conditions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((t, i) => (
              <div key={i} className="p-8 rounded-2xl border border-gray-100 bg-zinc-50 hover:bg-white hover:shadow-xl transition-all group">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center justify-between">
                  {t.name}
                  <Activity className="h-5 w-5 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-gray-600 mb-6">{t.desc}</p>
                <Link href="#" className="text-blue-600 font-bold flex items-center gap-2 text-sm uppercase tracking-wider">
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
