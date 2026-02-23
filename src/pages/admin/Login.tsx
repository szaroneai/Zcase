import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User, ShieldCheck, AlertCircle } from 'lucide-react';
import Button from '../../components/Button';

const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simulated login delay
    setTimeout(() => {
      if (email === 'admin@zcase.com' && password === 'admin123') {
        localStorage.setItem('adminToken', 'mock-token-secure-123');
        navigate('/admin/dashboard');
      } else {
        setError('Invalid credentials. Please try again.');
        setLoading(false);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-zcase-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8 relative z-10 border border-gray-100">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zcase-accent/10 text-zcase-accent mb-4">
            <ShieldCheck size={32} />
          </div>
          <h1 className="text-2xl font-black text-zcase-black mb-2">Admin Portal</h1>
          <p className="text-gray-500 text-sm">Secure access for authorized personnel only</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm flex items-center gap-2 animate-pulse">
              <AlertCircle size={16} />
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-zcase-accent focus:border-transparent outline-none transition-all"
                  placeholder="admin@zcase.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-zcase-accent focus:border-transparent outline-none transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded border-gray-300 text-zcase-accent focus:ring-zcase-accent" />
              <span className="text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-zcase-accent hover:underline font-medium">Forgot Password?</a>
          </div>

          <Button 
            type="submit"
            className={`w-full justify-center py-3 text-base ${loading ? 'opacity-70 cursor-wait' : ''}`}
            disabled={loading}
          >
            {loading ? 'Authenticating...' : 'Sign In'}
          </Button>

          {/* Quick Login for Demo/Dev */}
          <button
            type="button"
            onClick={() => {
              localStorage.setItem('adminToken', 'mock-token-secure-123');
              navigate('/admin/dashboard');
            }}
            className="w-full py-3 bg-gray-100 text-gray-600 rounded-lg text-sm font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
          >
            <ShieldCheck size={16} />
            Instant Login (Demo)
          </button>
        </form>
        
        <div className="mt-8 text-center text-xs text-gray-400">
          &copy; 2024 ZCASEUSA. All rights reserved.
          <br />
          Protected by 256-bit encryption.
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
