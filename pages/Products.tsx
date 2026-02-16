
import React, { useState } from 'react';
import { Product } from '../types';

interface ProductsProps {
  addToCart: (product: Product) => void;
}

const Products: React.FC<ProductsProps> = ({ addToCart }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const products: Product[] = [
    { id: '1', name: 'Industrial Sensor X-200', price: 299, category: 'Hardware', description: 'Precision environmental sensor for heavy industry.', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400' },
    { id: '2', name: 'ARM Cortex Controller', price: 450, category: 'Logic', description: 'High-speed processing unit for modular robotics.', image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=400' },
    { id: '3', name: 'Precision Logic Hub', price: 890, category: 'Logic', description: 'Centralized command center for complex production lines.', image: 'https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&q=80&w=400' },
    { id: '4', name: 'Thermal Imaging Module', price: 1250, category: 'Imaging', description: 'Integrated IR scanner for safety monitoring.', image: 'https://images.unsplash.com/photo-1563770660941-20978e870813?auto=format&fit=crop&q=80&w=400' },
    { id: '5', name: 'Fiber-Optic Switcher', price: 620, category: 'Networking', description: 'Low-latency data routing for automated facilities.', image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=400' },
    { id: '6', name: 'Power Matrix 3000', price: 2100, category: 'Energy', description: 'Intelligent power distribution for high-voltage systems.', image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=400' },
  ];

  const categories = ['All', 'Hardware', 'Logic', 'Imaging', 'Networking', 'Energy'];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <div>
            <h1 className="text-4xl font-bold text-[#0D312F]">Hardware Store</h1>
            <p className="text-slate-500 mt-2">Professional components for industrial projects.</p>
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
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white border border-slate-100 rounded-[40px] overflow-hidden group hover:shadow-2xl transition-all duration-500">
              <div className="h-64 relative overflow-hidden bg-slate-50">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold text-[#0D312F] uppercase tracking-widest shadow-sm">
                    {product.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-[#0D312F] leading-tight group-hover:text-emerald-700 transition-colors">
                    {product.name}
                  </h3>
                  <span className="text-2xl font-bold text-emerald-600">₹{product.price}</span>
                </div>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                  {product.description}
                </p>
                <button 
                  onClick={() => addToCart(product)}
                  className="w-full bg-slate-50 text-[#0D312F] py-4 rounded-2xl font-bold text-sm hover:bg-[#0D312F] hover:text-white transition-all flex items-center justify-center gap-3"
                >
                  <i className="fa-solid fa-plus text-[10px]"></i> Add to Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
