
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User } from '../types';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenAuth: () => void;
  user: User | null;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, onOpenAuth, user, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Courses', path: '/courses' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 py-4 px-6 md:px-12 border-b border-slate-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-[#0D312F] rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform shadow-lg shadow-emerald-900/20">
            <span className="text-emerald-400 font-black text-xl">R</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-[#0D312F] tracking-tight leading-none uppercase">SUMIT COURSE</span>
            <span className="text-[10px] text-emerald-600 font-bold tracking-[0.2em] uppercase">Premium Tech</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-semibold transition-all hover:text-emerald-600 ${
                isActive(link.path) ? 'text-[#0D312F]' : 'text-slate-500'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onOpenCart}
            className="relative p-2 text-slate-600 hover:text-[#0D312F] transition-colors"
          >
            <i className="fa-solid fa-cart-shopping text-xl"></i>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold border-2 border-white">
                {cartCount}
              </span>
            )}
          </button>
          
          {user ? (
            <div className="flex items-center gap-4">
              <span className="hidden sm:block text-sm font-medium text-[#0D312F]">Hi, {user.name}</span>
              <button 
                onClick={onLogout}
                className="bg-[#0D312F] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#1E6B65] transition-all shadow-lg shadow-emerald-900/10"
              >
                Logout
              </button>
            </div>
          ) : (
            <button 
              onClick={onOpenAuth}
              className="bg-[#0D312F] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#1E6B65] transition-all shadow-lg shadow-emerald-900/10"
            >
              Sign Up
            </button>
          )}

          {/* Mobile menu toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl text-[#0D312F]`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t p-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`text-lg font-medium ${
                isActive(link.path) ? 'text-[#0D312F]' : 'text-slate-500'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
