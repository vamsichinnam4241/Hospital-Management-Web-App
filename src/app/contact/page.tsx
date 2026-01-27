'use client';

import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import BookingSystem from '@/components/BookingSystem';

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact & Appointment</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to take the next step for your health? Book an appointment or send us an enquiry.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Clinic Info</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="h-10 w-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Address</p>
                      <p className="text-gray-600">4-24, Vemineni Ramaswamy St, Ramavarapadu, Vijayawada, AP 521108</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="h-10 w-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Office Phone</p>
                      <p className="text-gray-600">072077 17574</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="h-10 w-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Hours</p>
                      <p className="text-gray-600 text-sm">Mon - Sat: 9:00 AM - 9:00 PM</p>
                      <p className="text-gray-600 text-sm">Sun: 10:00 AM - 12:30 PM</p>
                      <p className="text-red-500 font-medium">Emergency: 24/7</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-600 p-8 rounded-2xl text-white">
                <h3 className="text-xl font-bold mb-4">Need Help?</h3>
                <p className="mb-6 text-blue-100">Our medical staff is available to answer your questions via WhatsApp.</p>
                <a href="#" className="flex items-center justify-center gap-2 bg-white text-blue-600 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">
                  <MessageSquare className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-2">
              <BookingSystem />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-gray-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.228182283!2d80.669!3d16.516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fb5c!2sDr.+Terlis+clinic+(heart%26lung)clinic!5e0!3m2!1sen!2sin!4v1700000000000"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Terlis Clinic Location"
        ></iframe>
      </section>
    </div>
  );
}
