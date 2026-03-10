
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 bg-[#0D312F] rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform shadow-lg shadow-emerald-900/20">
                <span className="text-emerald-400 font-black text-xl">R</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-[#0D312F] tracking-tight leading-none uppercase">SUMIT COURSE</span>
                <span className="text-[10px] text-emerald-600 font-bold tracking-[0.2em] uppercase">Premium Tech</span>
              </div>
            </Link>
            <p className="text-slate-500 leading-relaxed">
              Leading the revolution in tech education and professional electronics since 2018. Empowering the next generation of engineers.
            </p>
            <div className="flex gap-4 mt-8">
              {['facebook', 'twitter', 'linkedin', 'instagram', 'youtube'].map(platform => (
                <a key={platform} href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#0D312F] hover:text-white transition-all">
                  <i className={`fa-brands fa-${platform}`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-[#0D312F] uppercase tracking-widest mb-6">Learning</h4>
            <ul className="flex flex-col gap-4">
              {['Course Catalog', 'Live Sessions', 'Certifications', 'Scholarships'].map(item => (
                <li key={item}><Link to="#" className="text-slate-500 hover:text-[#0D312F] transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-[#0D312F] uppercase tracking-widest mb-6">Support</h4>
            <ul className="flex flex-col gap-4">
              {['Contact Support', 'Student Forum', 'Documentation', 'Affiliates'].map(item => (
                <li key={item}><Link to="#" className="text-slate-500 hover:text-[#0D312F] transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-[#0D312F] uppercase tracking-widest mb-6">Newsletter</h4>
            <p className="text-slate-500 mb-6 text-sm">Join the SUMIT COURSE community for exclusive insights and hardware deals.</p>
            <div className="flex gap-2 p-1 border border-slate-200 rounded-full focus-within:border-emerald-500 transition-colors">
              <input type="email" placeholder="Email address" className="bg-transparent pl-4 py-2 flex-grow outline-none text-sm" />
              <button className="bg-[#0D312F] text-white px-6 py-2 rounded-full text-xs font-bold hover:bg-emerald-800 transition-colors">Join Now</button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>&copy; 2026 SUMIT COURSE Global. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="#" className="hover:text-[#0D312F]">Privacy Policy</Link>
            <Link to="#" className="hover:text-[#0D312F]">Terms of Service</Link>
            <Link to="#" className="hover:text-[#0D312F]">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
