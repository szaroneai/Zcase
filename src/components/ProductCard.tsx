import React from 'react';
import type { Product } from '../types';

import { Eye, Plus, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
  viewMode?: 'grid' | 'list';
}

const getCategoryColor = (category: string) => {
  const colors: { [key: string]: string } = {
    'Lighting': 'text-blue-600 bg-blue-50',
    'Audio': 'text-rose-600 bg-rose-50',
    'Video': 'text-purple-600 bg-purple-50',
    'Cases': 'text-emerald-600 bg-emerald-50',
    'Accessories': 'text-amber-600 bg-amber-50',
    'Custom': 'text-indigo-600 bg-indigo-50',
  };
  return colors[category] || 'text-gray-600 bg-gray-50';
};

const ProductCard: React.FC<ProductCardProps> = ({ product, viewMode = 'grid' }) => {
  if (viewMode === 'list') {
    return (
      <Link to={`/product/${product.id}`} className="group relative bg-white rounded-3xl overflow-hidden hover:shadow-[0_20px_50px_rgba(255,215,0,0.15)] transition-all duration-500 flex flex-row h-48 border border-zcase-accent/20 hover:border-zcase-accent transform hover:-translate-y-1 block">
        
        {/* Badges */}
        <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-zcase-accent text-zcase-black text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-xl border border-white/10 backdrop-blur-md">New</span>
          )}
          {product.isBestseller && (
            <span className="bg-zcase-black text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-xl">Best</span>
          )}
        </div>

        {/* Image Container */}
        <div className="w-48 shrink-0 overflow-hidden relative bg-[#F9FAFB] group-hover:bg-white transition-colors duration-500">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover relative z-10 transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zcase-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow bg-white justify-center">
          <div className="flex justify-between items-center mb-3">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{product.brand}</span>
              <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest ${getCategoryColor(product.category)}`}>{product.category}</span>
          </div>

          <h3 className="text-lg font-bold mb-2 text-zcase-black group-hover:text-zcase-accent transition-colors leading-snug">
              {product.name}
          </h3>
          
          <div className="mt-4 flex justify-between items-center">
            <span className="text-xl font-black text-zcase-black tracking-tight">${product.price.toLocaleString()}</span>
            
            <button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-zcase-black hover:bg-zcase-accent hover:text-zcase-black transition-all duration-300 group/icon shadow-sm hover:shadow-md hover:scale-110">
               <Plus size={16} className="transform group-hover/icon:rotate-90 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/product/${product.id}`} className="group relative bg-white rounded-3xl overflow-hidden hover:shadow-[0_20px_50px_rgba(255,215,0,0.15)] transition-all duration-500 flex flex-col h-full border border-zcase-accent/20 hover:border-zcase-accent transform hover:-translate-y-1 block">
      
      {/* Badges */}
      <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
        {product.isNew && (
          <span className="bg-zcase-accent text-zcase-black text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-xl border border-white/10 backdrop-blur-md">New</span>
        )}
        {product.isBestseller && (
          <span className="bg-zcase-black text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-xl">Best</span>
        )}
      </div>

      {/* Image Container - Ultra Clean */}
      <div className="h-[280px] overflow-hidden relative bg-[#F9FAFB] group-hover:bg-white transition-colors duration-500">
        
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover relative z-10 transition-transform duration-700 ease-out group-hover:scale-105"
        />
        
        {/* Overlay Gradient on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-zcase-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
        
        {/* Quick View Button - Centered & Modern */}
        <div className="absolute inset-0 flex flex-col gap-3 items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 translate-y-4 group-hover:translate-y-0">
            <button className="bg-white text-zcase-black font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-full shadow-xl hover:bg-zcase-black hover:text-white transition-all duration-300 flex items-center gap-2 hover:scale-105 min-w-[160px] justify-center">
                <Eye size={14} /> Quick Look
            </button>
            <button className="bg-zcase-accent text-zcase-black font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-full shadow-xl hover:bg-white hover:text-zcase-accent transition-all duration-300 flex items-center gap-2 hover:scale-105 min-w-[160px] justify-center">
                <ShoppingCart size={14} /> Add to Cart
            </button>
        </div>
      </div>

      {/* Content - Minimalist & Airy */}
      <div className="p-6 flex flex-col flex-grow bg-white">
        
        <div className="flex justify-between items-center mb-3">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{product.brand}</span>
            <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest ${getCategoryColor(product.category)}`}>{product.category}</span>
        </div>

        <h3 className="text-base font-bold mb-2 text-zcase-black group-hover:text-zcase-accent transition-colors leading-snug line-clamp-2 min-h-[2.5rem]">
            {product.name}
        </h3>
        
        <div className="mt-auto pt-4 flex justify-between items-center border-t border-gray-50">
          <div className="flex flex-col">
            <span className="text-lg font-black text-zcase-black tracking-tight">${product.price.toLocaleString()}</span>
          </div>
          
          <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-zcase-black hover:bg-zcase-accent hover:text-zcase-black transition-all duration-300 group/icon shadow-sm hover:shadow-md hover:scale-110">
            <Plus size={16} className="transform group-hover/icon:rotate-90 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
