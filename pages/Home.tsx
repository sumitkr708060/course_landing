
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface HomeProps {
  addToCart: (product: Product) => void;
}

const Home: React.FC<HomeProps> = ({ addToCart }) => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-widest border border-emerald-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            New Session Enrolling Now
          </div>
          <h1 className="text-4xl md:text-7xl font-bold text-[#0D312F] max-w-4xl mx-auto leading-tight md:leading-[1.1]">
            Master Hardware with <span className="text-emerald-700 underline decoration-emerald-200 underline-offset-8">sumit COURSE</span> Technology
          </h1>
          <p className="mt-8 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto">
            Expert-led courses and professional grade electronics to elevate your manufacturing. Take your career further with cutting-edge automation.
          </p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/courses" className="bg-[#0D312F] text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-[#1E6B65] transition-all shadow-xl shadow-emerald-900/20">
              Get Started
            </Link>
            <button className="bg-white text-[#0D312F] border border-slate-200 px-10 py-4 rounded-full text-lg font-bold hover:bg-slate-50 transition-all">
              Try Demo
            </button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map(i => (
                <i key={i} className="fa-solid fa-star text-yellow-400 text-sm"></i>
              ))}
            </div>
            <span className="font-bold text-[#0D312F]">5.0</span>
            <span className="text-slate-500 text-sm">from 80+ graduates</span>
          </div>
        </div>

        {/* Floating elements like in screenshot */}
        <div className="absolute top-1/4 left-10 md:left-40 animate-bounce transition-all opacity-20 md:opacity-100">
           <div className="bg-[#133E3B] p-3 rounded-full text-white shadow-lg">
             <i className="fa-solid fa-graduation-cap"></i>
           </div>
        </div>
        <div className="absolute top-1/3 left-4 md:left-20 border border-slate-200 p-4 rounded-full text-slate-400 opacity-20 md:opacity-100">
           <i className="fa-solid fa-code"></i>
        </div>
        <div className="absolute top-1/2 left-8 md:left-32 bg-emerald-50 p-2 rounded-lg text-emerald-600 opacity-20 md:opacity-100">
           <i className="fa-solid fa-microchip"></i>
        </div>
        
        <div className="absolute top-1/4 right-10 md:right-40 animate-pulse bg-emerald-100 p-3 rounded-xl text-emerald-600 opacity-20 md:opacity-100">
           <i className="fa-solid fa-book-open"></i>
        </div>
        <div className="absolute top-1/2 right-4 md:right-24 border border-slate-200 p-3 rounded-full text-slate-400 opacity-20 md:opacity-100">
           <i className="fa-solid fa-bolt"></i>
        </div>
      </section>

      {/* Feature Grid - Replicating screenshot layout */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {/* Main Image Card */}
          <div className="md:col-span-1 lg:col-span-1 h-[400px] rounded-3xl overflow-hidden shadow-2xl relative">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
              alt="Learning Environment" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Stats Card Dark */}
          <div className="bg-[#0D312F] text-white p-10 rounded-[40px] flex flex-col justify-center">
            <h3 className="text-5xl font-bold">5000+</h3>
            <p className="mt-4 text-emerald-100/60 leading-relaxed text-lg">
              Success Stories from sumit COURSE Alumni
            </p>
          </div>

          {/* Activity/Project Card */}
          <div className="bg-white border border-slate-100 shadow-xl p-8 rounded-[40px] flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-[#0D312F]">
                <i className="fa-solid fa-user-graduate text-2xl"></i>
              </div>
              <button className="text-slate-300"><i className="fa-solid fa-ellipsis-vertical"></i></button>
            </div>
            <div>
              <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                Active Learners <span className="text-[#0D312F] flex items-center gap-1"><i className="fa-solid fa-arrow-trend-up"></i> 12%</span>
              </div>
              <h4 className="text-4xl font-bold text-[#0D312F] mt-2">12,400+</h4>
              <p className="text-xs text-slate-400 mt-2">Growth of <span className="text-emerald-500 font-bold">1,200</span> this semester</p>
            </div>
          </div>

          {/* Years Service Light Card */}
          <div className="bg-[#E8F5E9] p-10 rounded-[40px] flex flex-col justify-center items-center text-center">
            <h3 className="text-6xl font-bold text-[#0D312F]">8+</h3>
            <p className="mt-4 text-[#0D312F]/70 font-medium leading-relaxed">
              Excellence in Tech Education
            </p>
          </div>

          {/* Productivity Card Dark with Image/Graphic */}
          <div className="bg-[#0D312F] text-white p-10 rounded-[40px] relative overflow-hidden group">
            <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center mb-10 group-hover:bg-emerald-500 transition-colors">
              <i className="fa-solid fa-lightbulb"></i>
            </div>
            <h3 className="text-2xl font-bold leading-tight relative z-10 uppercase">
              Transform your skills into professional expertise
            </h3>
            {/* Background pattern */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-900/40 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Featured Products Mini section */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-emerald-600 font-bold tracking-widest text-xs uppercase">Elite Learning</span>
              <h2 className="text-4xl font-bold text-[#0D312F] mt-2">Latest Courses</h2>
            </div>
            <Link to="/courses" className="text-emerald-700 font-bold hover:underline">Explore all courses &rarr;</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { id: 'c1', name: 'Advanced Robotics Masterclass', price: 199, image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400', category: 'Course' },
              { id: 'c4', name: 'AI for Industrial Automation', price: 299, image: 'https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&q=80&w=400', category: 'Course' },
              { id: 'c2', name: 'PCB Design Principles', price: 149, image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=400', category: 'Course' },
            ].map(prod => (
              <div key={prod.id} className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 group transition-all hover:-translate-y-2">
                <div className="h-48 rounded-2xl overflow-hidden mb-6 bg-slate-100">
                  <img src={prod.image} alt={prod.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex justify-between items-start mb-2">
                   <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">{prod.category}</span>
                </div>
                <h4 className="text-xl font-bold text-[#0D312F] h-14 overflow-hidden">{prod.name}</h4>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-2xl font-bold text-emerald-600">₹{prod.price}</span>
                  <button 
                    onClick={() => addToCart({ ...prod, description: 'Premium content by SUMIT COURSE', category: prod.category })}
                    className="p-3 bg-slate-50 rounded-xl text-[#0D312F] hover:bg-[#0D312F] hover:text-white transition-colors"
                  >
                    <i className="fa-solid fa-cart-plus"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-[#0D312F] rounded-[60px] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to start your journey with sumit COURSE?</h2>
            <p className="text-emerald-100/60 max-w-xl mx-auto mb-12 text-lg leading-relaxed">
              Join thousands of professionals worldwide who are already mastering the future of tech.
            </p>
            <Link to="/contact" className="bg-white text-[#0D312F] px-10 py-5 rounded-full text-xl font-bold hover:bg-emerald-50 transition-all shadow-2xl">
              Apply Now
            </Link>
          </div>
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grad)" />
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#34D399" />
                  <stop offset="100%" stopColor="#0D312F" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
