import Link from 'next/link';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="h-10 w-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                <Heart className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold">Dr. Terlis clinic</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Dr. Terlis clinic (heart&lung) is a board-certified cardiology practice providing comprehensive heart and lung care in Vijayawada.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services/cardiac" className="text-gray-400 hover:text-white transition-colors">Cardiac Care</Link></li>
              <li><Link href="/services/pulmonary" className="text-gray-400 hover:text-white transition-colors">Pulmonary Care</Link></li>
              <li><Link href="/patient-corner" className="text-gray-400 hover:text-white transition-colors">Patient Corner</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="h-5 w-5 text-blue-400 shrink-0" />
                <span>4-24, Vemineni Ramaswamy St, Ramavarapadu, Vijayawada, Andhra Pradesh 521108</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="h-5 w-5 text-blue-400 shrink-0" />
                <span>072077 17574</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="h-5 w-5 text-blue-400 shrink-0" />
                <span>info@terlisclinic.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Emergency</h3>
            <p className="text-gray-400 mb-6">Available 24/7 for cardiac and pulmonary emergencies.</p>
            <a href="tel:+917680804241" className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg transition-colors font-bold">
              <Phone className="h-5 w-5" />
              Emergency Call
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Terlis Heart & Lung Care Platform. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
