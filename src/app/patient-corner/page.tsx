'use client';

import { useState, useEffect } from 'react';
import { 
  User, 
  Calendar, 
  Phone, 
  MessageSquare, 
  Lock, 
  LogOut, 
  Search,
  Clock,
  ClipboardList,
  CheckCircle,
  Trash2
} from 'lucide-react';

export default function PatientCorner() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [appointments, setAppointments] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Load appointments and listen for updates
  useEffect(() => {
    const loadAppointments = () => {
      const saved = localStorage.getItem('terlis_appointments');
      if (saved) {
        setAppointments(JSON.parse(saved).reverse());
      }
    };

    if (isLoggedIn) {
      loadAppointments();
      // Listen for changes from other tabs (Auto-update)
      window.addEventListener('storage', loadAppointments);
      // Also poll every 5 seconds for local changes in the same tab
      const interval = setInterval(loadAppointments, 5000);
      return () => {
        window.removeEventListener('storage', loadAppointments);
        clearInterval(interval);
      };
    }
  }, [isLoggedIn]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'terlis111' && password === '123456') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  const markAsCompleted = (id: number) => {
    const updated = appointments.filter(apt => apt.id !== id);
    setAppointments(updated);
    localStorage.setItem('terlis_appointments', JSON.stringify(updated.reverse()));
  };

  const filteredAppointments = appointments.filter(apt => 
    apt.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    apt.phone.includes(searchQuery)
  );

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl w-full max-w-md border border-blue-100">
          <div className="text-center mb-8">
            <div className="h-16 w-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Lock className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Doctor Login</h1>
            <p className="text-gray-500 text-sm mt-2">Access patient appointments.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Username</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none mt-1"
                placeholder="terlis111"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Password</label>
              <input 
                type="password" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none mt-1"
                placeholder="••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-red-500 text-xs font-bold text-center">{error}</p>}
            <button 
              type="submit"
              className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-md active:scale-95 mt-2"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b border-gray-200 px-6 py-3 sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-sm">ST</div>
            <h2 className="font-bold text-gray-900 text-sm">Dr. Suresh Terli</h2>
          </div>
          <button onClick={handleLogout} className="text-xs text-gray-400 hover:text-red-600 font-bold flex items-center gap-1.5 transition-colors">
            <LogOut className="h-4 w-4" /> Logout
          </button>
        </div>
      </header>

      <main className="flex-1 p-4 md:p-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <h1 className="text-xl font-bold text-gray-900">Appointments ({appointments.length})</h1>
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input 
                type="text" 
                className="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none"
                placeholder="Search patient..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredAppointments.map((apt) => (
              <div key={apt.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:border-blue-200 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-3">
                    <div className="h-10 w-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                      <User className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 leading-none mb-1">{apt.name}</h3>
                      <p className="text-xs text-gray-500 font-medium">{apt.phone}</p>
                    </div>
                  </div>
                  <div className="flex gap-1.5">
                    <a 
                      href={`tel:${apt.phone}`}
                      className="h-8 w-8 bg-green-50 text-green-600 rounded-lg flex items-center justify-center hover:bg-green-100 transition-colors"
                      title="Call Patient"
                    >
                      <Phone className="h-4 w-4" />
                    </a>
                    <button 
                      onClick={() => markAsCompleted(apt.id)}
                      className="h-8 w-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-100 transition-colors"
                      title="Mark as Completed"
                    >
                      <CheckCircle className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                    <p className="text-[9px] font-bold text-gray-400 uppercase mb-1">Schedule</p>
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-gray-700">
                      <Calendar className="h-3 w-3 text-blue-500" />
                      {apt.date}
                    </div>
                  </div>
                  <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                    <p className="text-[9px] font-bold text-gray-400 uppercase mb-1">Time Slot</p>
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-gray-700">
                      <Clock className="h-3 w-3 text-blue-500" />
                      {apt.time}
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50/30 rounded-xl p-3 border border-blue-50/50">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-blue-600 uppercase mb-1">
                    <MessageSquare className="h-3 w-3" />
                    Reason & Note
                  </div>
                  <p className="text-[11px] text-gray-600 leading-relaxed line-clamp-2 italic">
                    {apt.reason}: "{apt.message}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredAppointments.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-100">
              <Calendar className="h-12 w-12 text-gray-100 mx-auto mb-3" />
              <p className="text-gray-400 font-bold text-sm">No appointments found</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
