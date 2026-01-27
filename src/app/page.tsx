import Link from 'next/link';
import Image from 'next/image';
import { Heart, Activity, Wind, Calendar, Shield, Clock, ArrowRight, Star } from 'lucide-react';
import TestimonialCarousel from '@/components/TestimonialCarousel';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-blue-50 py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Expert Care for Your <span className="text-blue-600">Heart</span> and <span className="text-green-600">Lungs</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Dr. Suresh Terli provides world-class cardiology and pulmonology services. 
              Advanced diagnostics, personalized treatment, and compassionate care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                <Calendar className="h-5 w-5" />
                Book Appointment
              </Link>
              <Link href="/services/cardiac" className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-50 transition-colors flex items-center justify-center">
                Explore Services
              </Link>
            </div>
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-12 w-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <div className="h-full w-full bg-blue-100 flex items-center justify-center">
                      <Star className="h-6 w-6 text-yellow-500 fill-yellow-500" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <p className="font-bold text-gray-900">500+ Happy Patients</p>
                <div className="flex items-center text-yellow-500">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <span className="ml-1 text-gray-600 font-medium">4.9/5 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-green-50 rounded-full opacity-50 blur-3xl"></div>
          <div className="relative h-full w-full flex items-center justify-center">
             <div className="relative w-96 h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="/doctor-hero.jpg" 
                  alt="Dr. Suresh Terli" 
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
             </div>
          </div>
        </div>
      </section>

      {/* Core Specialties */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Specialties</h2>
          <p className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
            Comprehensive diagnostic and therapeutic solutions for all your cardiac and pulmonary health needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cardiac Care */}
            <div className="p-8 rounded-2xl border border-gray-100 bg-white shadow-xl hover:shadow-2xl transition-shadow group">
              <div className="h-16 w-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cardiac Care</h3>
              <p className="text-gray-600 mb-6">
                From preventive screenings to advanced intervention, we offer complete heart care including Angiography and Echo.
              </p>
              <Link href="/services/cardiac" className="text-blue-600 font-bold flex items-center justify-center gap-2 hover:gap-3 transition-all">
                Learn More <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            {/* Pulmonary Care */}
            <div className="p-8 rounded-2xl border border-gray-100 bg-white shadow-xl hover:shadow-2xl transition-shadow group">
              <div className="h-16 w-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Wind className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pulmonary Care</h3>
              <p className="text-gray-600 mb-6">
                Expert management of asthma, COPD, and other lung conditions with modern diagnostic tools like PFT and Bronchoscopy.
              </p>
              <Link href="/services/pulmonary" className="text-green-600 font-bold flex items-center justify-center gap-2 hover:gap-3 transition-all">
                Learn More <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            {/* Diagnostics */}
            <div className="p-8 rounded-2xl border border-gray-100 bg-white shadow-xl hover:shadow-2xl transition-shadow group">
              <div className="h-16 w-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Activity className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Diagnostics</h3>
              <p className="text-gray-600 mb-6">
                In-house advanced lab testing, ECG, Echo, and Imaging to ensure accurate and timely diagnosis for every patient.
              </p>
              <Link href="/services/diagnostics" className="text-purple-600 font-bold flex items-center justify-center gap-2 hover:gap-3 transition-all">
                Learn More <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-blue-600 rounded-3xl p-8 md:p-12">
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-2">Need Urgent Care?</h2>
              <p className="text-blue-100 text-lg">Our clinic provides 24/7 emergency support for cardiac and pulmonary distress.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <a href="tel:+917680804241" className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                <Shield className="h-5 w-5" />
                Emergency Contact
              </a>
              <Link href="/contact" className="bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-bold border border-blue-500 hover:bg-blue-800 transition-colors flex items-center justify-center gap-2">
                <Clock className="h-5 w-5" />
                Clinic Hours
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
            <p className="text-gray-600 text-lg">Join hundreds of patients who trust Dr. Suresh Terli for their care.</p>
          </div>
          
          <TestimonialCarousel />
        </div>
      </section>

      {/* Clinic Gallery */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Clinic Gallery</h2>
            <p className="text-gray-600 text-lg">A glimpse into our modern facilities and advanced medical environment.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Video 1 */}
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-md group">
              <video 
                src="/clinic-video-1.mp4" 
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
            {/* Video 2 */}
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-md group">
              <video 
                src="/clinic-video-2.mp4" 
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
            {[
              { id: 1, ext: 'jpg' },
              { id: 2, ext: 'jpg' },
              { id: 3, ext: 'jpg' },
              { id: 4, ext: 'avif' },
              { id: 5, ext: 'jpg' },
              { id: 6, ext: 'jpg' },
            ].map((img) => (
              <div key={img.id} className="relative h-64 rounded-2xl overflow-hidden shadow-md group">
                <Image 
                  src={`/gallery-${img.id}.${img.ext}`} 
                  alt={`Clinic Gallery ${img.id}`} 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
