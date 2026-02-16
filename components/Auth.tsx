
import React, { useState } from 'react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (name: string, email: string) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(formData.name || 'User', formData.email);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-[#0D312F]/60 backdrop-blur-md z-[100] flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-md rounded-[40px] shadow-2xl overflow-hidden p-10 relative">
        <button onClick={onClose} className="absolute top-8 right-8 text-slate-400 hover:text-[#0D312F]">
          <i className="fa-solid fa-xmark text-2xl"></i>
        </button>
        
        <div className="text-center mb-10">
          <div className="w-14 h-14 bg-[#0D312F] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-emerald-900/20">
             <span className="text-emerald-400 font-black text-2xl">R</span>
          </div>
          <h2 className="text-3xl font-bold text-[#0D312F] uppercase tracking-tight">{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
          <p className="text-slate-500 mt-2">Join the elite RAJ COURSE community.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Full Name</label>
              <input 
                required
                type="text" 
                placeholder="John Doe"
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-emerald-500 transition-colors"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
          )}
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Email Address</label>
            <input 
              required
              type="email" 
              placeholder="name@company.com"
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-emerald-500 transition-colors"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Password</label>
            <input 
              required
              type="password" 
              placeholder="••••••••"
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-emerald-500 transition-colors"
              value={formData.password}
              onChange={e => setFormData({ ...formData, password: e.target.value })}
            />
          </div>

          <button type="submit" className="w-full bg-[#0D312F] text-white py-5 rounded-2xl font-bold text-lg hover:bg-emerald-900 transition-all shadow-xl shadow-emerald-900/20 mt-4">
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        <p className="text-center mt-8 text-slate-500">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 text-emerald-600 font-bold hover:underline"
          >
            {isLogin ? 'Sign Up' : 'Sign In'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
