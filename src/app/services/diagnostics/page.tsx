import { Activity, Beaker, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function DiagnosticsPage() {
  const tests = [
    { name: "2D Echocardiography", price: "₹2,500", time: "30 mins" },
    { name: "Pulmonary Function Test (PFT)", price: "₹1,500", time: "20 mins" },
    { name: "Digital X-Ray (Chest)", price: "₹800", time: "10 mins" },
    { name: "ECG / EKG", price: "₹500", time: "5 mins" },
    { name: "Advanced Lipid Profile", price: "₹1,200", time: "Next day" },
    { name: "Cardiac Wellness Package", price: "₹5,000", time: "2-3 hours" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-purple-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-800 rounded-full text-purple-100 text-sm font-bold mb-6">
            <Beaker className="h-4 w-4" />
            Advanced Diagnostic Lab
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Precision Diagnostics</h1>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Our in-house advanced diagnostic center ensures fast, accurate, and reliable results for heart and lung assessments.
          </p>
        </div>
      </section>

      {/* Pricing Table/Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Service Rates & Packages</h2>
              <p className="text-gray-600">Transparent pricing for our most common diagnostic tests.</p>
            </div>
            <Link href="/contact" className="bg-purple-600 text-white px-8 py-3 rounded-full font-bold hover:bg-purple-700 transition-colors">
              Request Full Price List
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tests.map((test, i) => (
              <div key={i} className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-gray-900">{test.name}</h3>
                  <span className="text-purple-600 font-bold">{test.price}</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                   <div className="flex items-center gap-1">
                     <Activity className="h-4 w-4" />
                     {test.time}
                   </div>
                </div>
                <Link href="/contact" className="w-full py-2 px-4 rounded-lg bg-purple-50 text-purple-600 font-bold text-sm text-center block hover:bg-purple-100 transition-colors">
                  Book This Test
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-purple-50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/3">
               <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                 <Shield className="h-6 w-6 text-purple-600" />
                 Quality Guarantee
               </h3>
               <p className="text-gray-600 leading-relaxed">
                 All our tests are performed using NABL accredited protocols and state-of-the-art equipment. Reports are verified by Dr. Suresh Terli to ensure clinical accuracy.
               </p>
            </div>
            <div className="md:w-1/3 text-center md:text-right">
               <p className="text-sm text-gray-500 mb-2 font-medium">Available Reports in</p>
               <p className="text-4xl font-extrabold text-purple-600">24 Hours</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
