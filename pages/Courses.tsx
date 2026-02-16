
import React, { useState } from 'react';
import { Product } from '../types';

interface CoursesProps {
  addToCart: (product: Product) => void;
}

const Courses: React.FC<CoursesProps> = ({ addToCart }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const courses: Product[] = [
    { id: 'c1', name: 'Mastering Advanced Robotics', price: 199, category: 'Robotics', description: 'Deep dive into motion planning, kinematics, and ROS2 implementation for industrial robots.', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400' },
    { id: 'c2', name: 'Embedded Systems with ARM', price: 149, category: 'Hardware', description: 'Learn to program ARM Cortex-M microcontrollers from scratch using C and Assembly.', image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=400' },
    { id: 'c3', name: 'Professional PCB Design', price: 129, category: 'Hardware', description: 'Comprehensive guide to Altium Designer and KiCad for multi-layer high-speed board design.', image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=400' },
    { id: 'c4', name: 'AI for Industrial Automation', price: 299, category: 'AI', description: 'Implement computer vision and predictive maintenance models on the edge with TensorRT.', image: 'https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&q=80&w=400' },
    { id: 'c5', name: 'IoT Architecture & Cloud', price: 179, category: 'Networking', description: 'Building secure, scalable IoT networks using MQTT, AWS IoT Core, and Azure IoT Hub.', image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=400' },
    { id: 'c6', name: 'Industrial Power Systems', price: 199, category: 'Energy', description: 'Advanced power electronics, battery management systems, and smart grid integration.', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400' },
  ];

  const categories = ['All', 'Hardware', 'Robotics', 'AI', 'Networking', 'Energy'];

  const filteredCourses = activeCategory === 'All' 
    ? courses 
    : courses.filter(c => c.category === activeCategory);

  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <div>
            <h1 className="text-4xl font-bold text-[#0D312F]">Course Catalog</h1>
            <p className="text-slate-500 mt-2">Professional training from industry leading engineers.</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  activeCategory === cat 
                    ? 'bg-[#0D312F] text-white shadow-lg shadow-emerald-900/20' 
                    : 'bg-white border border-slate-200 text-slate-500 hover:border-[#0D312F] hover:text-[#0D312F]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <div key={course.id} className="bg-white border border-slate-100 rounded-[40px] overflow-hidden group hover:shadow-2xl transition-all duration-500">
              <div className="h-64 relative overflow-hidden bg-slate-50">
                <img 
                  src={course.image} 
                  alt={course.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold text-[#0D312F] uppercase tracking-widest shadow-sm">
                    {course.category}
                  </span>
                </div>
                <div className="absolute bottom-6 right-6">
                   <div className="bg-emerald-500 text-white px-3 py-1 rounded-lg text-xs font-bold shadow-lg">
                     Bestseller
                   </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-[#0D312F] leading-tight group-hover:text-emerald-700 transition-colors">
                    {course.name}
                  </h3>
                  <span className="text-2xl font-bold text-emerald-600">₹{course.price}</span>
                </div>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed h-12 overflow-hidden">
                  {course.description}
                </p>
                <div className="flex items-center gap-4 mb-8 text-xs font-semibold text-slate-400">
                   <span className="flex items-center gap-1"><i className="fa-solid fa-video"></i> 24 Lessons</span>
                   <span className="flex items-center gap-1"><i className="fa-solid fa-clock"></i> 18 Hours</span>
                </div>
                <button 
                  onClick={() => addToCart(course)}
                  className="w-full bg-slate-50 text-[#0D312F] py-4 rounded-2xl font-bold text-sm hover:bg-[#0D312F] hover:text-white transition-all flex items-center justify-center gap-3"
                >
                  <i className="fa-solid fa-graduation-cap text-[12px]"></i> Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
