'use client';

import { useState, useMemo } from 'react';
import { format, addDays, startOfToday, isSameDay, getDay } from 'date-fns';
import { Calendar as CalendarIcon, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { supabase } from '@/utils/supabase';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const weekdaySlots = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
  '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM',
];

const sundaySlots = [
  '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM',
];

export default function BookingSystem() {
  const [selectedDate, setSelectedDate] = useState<Date>(startOfToday());
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const currentSlots = useMemo(() => {
    return getDay(selectedDate) === 0 ? sundaySlots : weekdaySlots;
  }, [selectedDate]);

  const [step, setStep] = useState(1);
  const [isBooking, setIsBooking] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    reason: ''
  });

  const days = Array.from({ length: 7 }, (_, i) => addDays(startOfToday(), i));

  const handleBook = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooking(true);

    const message = `*New Appointment Request*%0A%0A` +
      `*Patient Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Date:* ${format(selectedDate, 'PPP')}%0A` +
      `*Time:* ${selectedSlot}%0A` +
      `*Reason:* ${formData.reason || 'Not specified'}`;

    const whatsappUrl = `https://wa.me/917680804241?text=${message}`;

    // Save appointment to Supabase for the Doctor's dashboard
    try {
      const { error } = await supabase
        .from('appointments')
        .insert([
          {
            name: formData.name,
            phone: formData.phone,
            appointment_date: format(selectedDate, 'yyyy-MM-dd'),
            appointment_time: selectedSlot,
            reason: formData.reason || 'General Checkup',
            note: formData.reason || 'No message provided',
            status: 'pending'
          }
        ]);

      if (error) throw error;
    } catch (err) {
      console.error('Error saving to Supabase:', err);
      // Fallback to local storage if DB fails for now
      const newAppointment = {
        id: Date.now(),
        name: formData.name,
        phone: formData.phone,
        date: format(selectedDate, 'yyyy-MM-dd'),
        time: selectedSlot,
        reason: formData.reason || 'General Checkup',
        message: formData.reason || 'No message provided',
        status: 'pending'
      };
      const existingAppointments = JSON.parse(localStorage.getItem('terlis_appointments') || '[]');
      localStorage.setItem('terlis_appointments', JSON.stringify([...existingAppointments, newAppointment]));
    }

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Show success state locally
    setIsSuccess(true);
    setIsBooking(false);
  };

  if (isSuccess) {
    return (
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 text-center">
        <div className="h-20 w-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="h-10 w-10" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Appointment Received!</h2>
        <p className="text-gray-600 mb-8">
          Your request for <span className="font-bold text-gray-900">{format(selectedDate, 'PPP')}</span> at <span className="font-bold text-gray-900">{selectedSlot}</span> has been sent.
        </p>
        <div className="bg-green-50 p-4 rounded-xl text-green-800 text-sm mb-8">
          <p className="flex items-center justify-center gap-2">
            <AlertCircle className="h-4 w-4" />
            WhatsApp has been opened with your details.
          </p>
        </div>
        <button 
          onClick={() => { setIsSuccess(false); setStep(1); setSelectedSlot(null); }}
          className="text-blue-600 font-bold hover:underline"
        >
          Book another appointment
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      <div className="flex border-b">
        <button 
          className={cn(
            "flex-1 py-4 text-sm font-bold transition-colors",
            step === 1 ? "bg-blue-600 text-white" : "text-gray-500 hover:text-blue-600"
          )}
          onClick={() => setStep(1)}
        >
          1. Select Slot
        </button>
        <button 
          className={cn(
            "flex-1 py-4 text-sm font-bold transition-colors",
            step === 2 ? "bg-blue-600 text-white" : "text-gray-500 hover:text-blue-600",
            !selectedSlot && "opacity-50 cursor-not-allowed"
          )}
          disabled={!selectedSlot}
          onClick={() => setStep(2)}
        >
          2. Patient Details
        </button>
      </div>

      <div className="p-6 md:p-8">
        {step === 1 ? (
          <div className="space-y-8">
            {/* Date Selection */}
            <div>
              <label className="text-sm font-bold text-black mb-4 block flex items-center gap-2">
                <CalendarIcon className="h-4 w-4 text-blue-600" />
                Select Date
              </label>
              <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                {days.map((day) => (
                  <button
                    key={day.toISOString()}
                    onClick={() => {
                      setSelectedDate(day);
                      setSelectedSlot(null); // Clear slot when date changes
                    }}
                    className={cn(
                      "p-3 rounded-xl border transition-all text-center flex flex-col items-center justify-center",
                      isSameDay(day, selectedDate)
                        ? "bg-blue-600 border-blue-600 text-white shadow-md"
                        : "border-gray-200 hover:border-blue-400 text-gray-600"
                    )}
                  >
                    <span className="text-[10px] uppercase font-bold opacity-70">{format(day, 'EEE')}</span>
                    <span className="text-lg font-bold">{format(day, 'd')}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Time Slot Selection */}
            <div>
              <label className="text-sm font-bold text-black mb-4 block flex items-center gap-2">
                <Clock className="h-4 w-4 text-blue-600" />
                Available Slots for {format(selectedDate, 'MMM d')}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {currentSlots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setSelectedSlot(slot)}
                    className={cn(
                      "py-3 rounded-xl border transition-all font-medium text-sm",
                      selectedSlot === slot
                        ? "bg-blue-100 border-blue-600 text-blue-600"
                        : "border-gray-100 bg-gray-50 hover:bg-gray-100 text-gray-700"
                    )}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <button
              disabled={!selectedSlot}
              onClick={() => setStep(2)}
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 disabled:opacity-50 transition-all"
            >
              Continue to Details
            </button>
          </div>
        ) : (
          <form onSubmit={handleBook} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-black">Full Name</label>
                <input 
                  type="text" 
                  required 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 text-black placeholder:text-gray-400" 
                  placeholder="John Doe" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-black">Phone Number</label>
                <input 
                  type="tel" 
                  required 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 text-black placeholder:text-gray-400" 
                  placeholder="+91 XXXXX XXXXX" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-black">Consultation Reason</label>
              <textarea 
                rows={3} 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 text-black placeholder:text-gray-400" 
                placeholder="e.g. Regular heart checkup, chest pain, etc."
                value={formData.reason}
                onChange={(e) => setFormData({...formData, reason: e.target.value})}
              ></textarea>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-xl flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Selected Slot</p>
                <p className="font-bold text-gray-900">{format(selectedDate, 'PPP')} at {selectedSlot}</p>
              </div>
              <button type="button" onClick={() => setStep(1)} className="text-blue-600 text-sm font-bold hover:underline">
                Change
              </button>
            </div>

            <button
              type="submit"
              disabled={isBooking}
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
            >
              {isBooking ? (
                <>
                  <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                'Confirm & Send Request'
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
