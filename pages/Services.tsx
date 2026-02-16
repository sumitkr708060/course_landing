
import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Custom PCB Fabrication',
      desc: 'Precision manufacturing for complex multi-layer boards using high-performance materials.',
      icon: 'fa-microchip',
      bg: 'bg-emerald-50'
    },
    {
      title: 'Industrial Automation',
      desc: 'End-to-end robotics and logic controller implementation for high-scale assembly lines.',
      icon: 'fa-robot',
      bg: 'bg-blue-50'
    },
    {
      title: 'Real-time Monitoring',
      desc: 'Cloud-based dashboards and alert systems for your entire hardware ecosystem.',
      icon: 'fa-display',
      bg: 'bg-purple-50'
    },
    {
      title: 'Supply Chain Consulting',
      desc: 'Optimizing your BOM and sourcing to ensure zero production downtime.',
      icon: 'fa-truck-fast',
      bg: 'bg-orange-50'
    }
  ];

  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-[#0D312F] mb-6">Built for Performance.</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            From prototype to mass production, we offer the technical expertise required for modern industrial scaling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className={`${service.bg} p-12 rounded-[40px] flex flex-col md:flex-row gap-8 items-start transition-all hover:shadow-xl`}>
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#0D312F] text-2xl flex-shrink-0">
                <i className={`fa-solid ${service.icon}`}></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0D312F] mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>
                <button className="text-[#0D312F] font-bold border-b-2 border-[#0D312F] pb-1 hover:text-emerald-700 hover:border-emerald-700 transition-colors">
                  Learn more &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
