
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-emerald-600 font-bold tracking-widest text-xs uppercase">Since 2018</span>
          <h1 className="text-4xl md:text-6xl font-bold text-[#0D312F] mt-4 mb-6">Our Mission is Simple.</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            We provide the hardware and software foundations for the next billion industrial IoT devices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
          <div className="rounded-[40px] overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1200" alt="Office" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#0D312F] mb-6">Innovation in Every Circuit</h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Founded by a team of silicon valley engineers and industrial designers, Prodmast bridges the gap between raw hardware capabilities and user-centric industrial software. 
            </p>
            <div className="space-y-4">
              {[
                { title: 'Global Supply Network', icon: 'fa-globe' },
                { title: 'ISO 9001 Certified Quality', icon: 'fa-certificate' },
                { title: 'Carbon Neutral Operations', icon: 'fa-leaf' },
              ].map(item => (
                <div key={item.title} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <i className={`fa-solid ${item.icon}`}></i>
                  </div>
                  <span className="font-bold text-[#0D312F]">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#E8F5E9] rounded-[60px] p-12 md:p-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-bold text-[#0D312F] mb-4">40+</div>
              <p className="text-[#0D312F]/60 font-medium">Patents Granted</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#0D312F] mb-4">12</div>
              <p className="text-[#0D312F]/60 font-medium">Logistics Hubs</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#0D312F] mb-4">500k+</div>
              <p className="text-[#0D312F]/60 font-medium">Daily Active Sensors</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
