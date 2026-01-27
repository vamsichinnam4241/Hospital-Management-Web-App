'use client';

import Link from 'next/link';
import { Heart, Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="h-10 w-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                <Heart className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold text-gray-900">Dr. Terlis clinic</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">About Us</Link>
            <div className="relative group">
              <Link href="/services/cardiac" className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
                Services
              </Link>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 transition-all duration-200 invisible group-hover:visible translate-y-2 group-hover:translate-y-0">
                <div className="py-1">
                  <Link href="/services/cardiac" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Cardiac Care</Link>
                  <Link href="/services/pulmonary" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Pulmonary Care</Link>
                  <Link href="/services/diagnostics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Diagnostics</Link>
                </div>
              </div>
            </div>
            <Link href="/patient-corner" className="text-gray-700 hover:text-blue-600 font-medium">Patient Corner</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
            <Link href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium">
              Book Appointment
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 text-gray-700 hover:bg-blue-50">Home</Link>
            <Link href="/about" className="block px-3 py-2 text-gray-700 hover:bg-blue-50">About Us</Link>
            <Link href="/services/cardiac" className="block px-3 py-2 text-gray-700 hover:bg-blue-50">Cardiac Care</Link>
            <Link href="/services/pulmonary" className="block px-3 py-2 text-gray-700 hover:bg-blue-50">Pulmonary Care</Link>
            <Link href="/services/diagnostics" className="block px-3 py-2 text-gray-700 hover:bg-blue-50">Diagnostics</Link>
            <Link href="/patient-corner" className="block px-3 py-2 text-gray-700 hover:bg-blue-50">Patient Corner</Link>
            <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:bg-blue-50">Contact</Link>
            <Link href="/contact" className="block px-3 py-2 bg-blue-600 text-white rounded-md text-center mt-4">
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
