
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="py-20 px-6 bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-emerald-600 font-bold tracking-widest text-xs uppercase">Get in touch</span>
            <h1 className="text-4xl md:text-6xl font-bold text-[#0D312F] mt-4 mb-8 leading-tight">Let's build something <span className="italic text-slate-400">extraordinary</span> together.</h1>
            <p className="text-xl text-slate-500 mb-12">
              Have a technical inquiry or looking for a long-term manufacturing partner? Our specialist team is ready to assist.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center text-emerald-600">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <h4 className="font-bold text-[#0D312F]">Email us</h4>
                  <p className="text-slate-500">support@prodmast.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center text-emerald-600">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <h4 className="font-bold text-[#0D312F]">Call us</h4>
                  <p className="text-slate-500">+1 (800) TECH-PROD</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center text-emerald-600">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <h4 className="font-bold text-[#0D312F]">Global HQ</h4>
                  <p className="text-slate-500">120 Silicon Way, Tech Park, CA 94043</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[40px] p-10 md:p-16 shadow-2xl border border-slate-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">First Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-emerald-500 transition-colors" placeholder="John" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Last Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-emerald-500 transition-colors" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Subject</label>
                <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-emerald-500 transition-colors appearance-none">
                  <option>General Inquiry</option>
                  <option>Hardware Quote</option>
                  <option>Technical Support</option>
                  <option>Partnership</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Message</label>
                <textarea rows={5} className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-emerald-500 transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
              </div>
              <button className="w-full bg-[#0D312F] text-white py-5 rounded-2xl font-bold text-lg hover:bg-emerald-900 transition-all shadow-xl shadow-emerald-900/10">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
