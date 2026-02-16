
import React from 'react';
import { CartItem } from '../types';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQty: (id: string, delta: number) => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose, items, onRemove, onUpdateQty }) => {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      <div className={`fixed right-0 top-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full flex flex-col p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-[#0D312F]">Your Cart</h2>
            <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full">
              <i className="fa-solid fa-xmark text-xl"></i>
            </button>
          </div>

          <div className="flex-grow overflow-y-auto pr-2 space-y-6">
            {items.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
                  <i className="fa-solid fa-cart-shopping text-3xl"></i>
                </div>
                <p className="text-slate-500">Your cart is empty.</p>
                <button 
                  onClick={onClose}
                  className="mt-6 text-emerald-600 font-bold hover:underline"
                >
                  Start shopping &rarr;
                </button>
              </div>
            ) : (
              items.map(item => (
                <div key={item.id} className="flex gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50/50">
                  <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-white">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-[#0D312F] text-sm">{item.name}</h4>
                      <button onClick={() => onRemove(item.id)} className="text-slate-300 hover:text-red-500">
                        <i className="fa-solid fa-trash-can text-sm"></i>
                      </button>
                    </div>
                    <p className="text-emerald-600 font-bold mt-1">₹{item.price}</p>
                    <div className="flex items-center gap-3 mt-3">
                      <button 
                        onClick={() => onUpdateQty(item.id, -1)}
                        className="w-6 h-6 rounded-md bg-white border border-slate-200 flex items-center justify-center text-xs hover:bg-slate-50"
                      >
                        -
                      </button>
                      <span className="text-sm font-bold text-[#0D312F]">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQty(item.id, 1)}
                        className="w-6 h-6 rounded-md bg-white border border-slate-200 flex items-center justify-center text-xs hover:bg-slate-50"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {items.length > 0 && (
            <div className="mt-auto pt-8 border-t border-slate-100">
              <div className="flex justify-between items-center mb-6">
                <span className="text-slate-500">Subtotal</span>
                <span className="text-2xl font-bold text-[#0D312F]">₹{total.toLocaleString()}</span>
              </div>
              <button className="w-full bg-[#0D312F] text-white py-4 rounded-2xl font-bold text-lg hover:bg-emerald-900 transition-all shadow-xl shadow-emerald-900/10">
                Checkout Now
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
