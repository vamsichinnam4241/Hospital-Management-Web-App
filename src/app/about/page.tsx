import Image from 'next/image';
import { Award, Users, Calendar, Heart, Wind, ShieldCheck } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/about-bg.jpg" 
            alt="Clinic Background" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-sm"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Dr. Terlis clinic</h1>
          <p className="text-xl text-blue-50 max-w-3xl mx-auto">
            Providing exceptional cardiac and pulmonary care to the community of Vijayawada.
          </p>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Expert Doctors</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our clinic is led by highly proficient and trustworthy specialists dedicated to your health.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Dr. Suresh Card */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-1/2 relative h-80 md:h-auto">
                <Image 
                  src="/dr-suresh.jpg" 
                  alt="Dr. Suresh Garu" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold mb-4">
                  <Award className="h-3 w-3" />
                  Senior Surgeon
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Suresh</h3>
                <p className="text-blue-600 font-bold text-sm mb-4">Cardiac & Lung Specialist</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Renowned for his expertise in complex cardiac surgeries like CABG and open heart surgery. Known for his "down to earth" personality and exceptional patient handling.
                </p>
                <div className="flex gap-4">
                   <div className="text-center">
                     <p className="text-xl font-bold text-gray-900">15+</p>
                     <p className="text-[10px] text-gray-400 uppercase font-bold">Years Exp</p>
                   </div>
                   <div className="text-center border-l border-gray-100 pl-4">
                     <p className="text-xl font-bold text-gray-900">100%</p>
                     <p className="text-[10px] text-gray-400 uppercase font-bold">Success</p>
                   </div>
                </div>
              </div>
            </div>

            {/* Dr. Bhanu Card */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-1/2 relative h-80 md:h-auto">
                <Image 
                  src="/dr-bhanu.jpg" 
                  alt="Dr. Bhanu Madam" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-bold mb-4">
                  <Award className="h-3 w-3" />
                  Expert Specialist
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Bhanu</h3>
                <p className="text-green-600 font-bold text-sm mb-4">Medical Specialist</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  A highly proficient and trustworthy doctor recognized for her dedicated care and expertise in medical diagnostics and patient management.
                </p>
                <div className="flex gap-4">
                   <div className="text-center">
                     <p className="text-xl font-bold text-gray-900">12+</p>
                     <p className="text-[10px] text-gray-400 uppercase font-bold">Years Exp</p>
                   </div>
                   <div className="text-center border-l border-gray-100 pl-4">
                     <p className="text-xl font-bold text-gray-900">High</p>
                     <p className="text-[10px] text-gray-400 uppercase font-bold">Trust</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We are driven by a commitment to excellence and a passion for saving lives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <Heart className="h-10 w-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Patient-Centric Care</h3>
              <p className="text-gray-600 leading-relaxed">
                Every patient is unique. We tailor our treatments to individual needs and lifestyles.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <ShieldCheck className="h-10 w-10 text-green-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Integrity & Trust</h3>
              <p className="text-gray-600 leading-relaxed">
                Transparent pricing and honest medical advice are the foundations of our practice.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <Wind className="h-10 w-10 text-purple-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                We stay at the forefront of medical technology to provide the best possible outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
