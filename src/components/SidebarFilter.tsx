import React, { useState } from 'react';
import { ChevronDown, Check, Sliders, RotateCcw } from 'lucide-react';

interface FilterSectionProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  className?: string;
}

const FilterSection: React.FC<FilterSectionProps> = ({ title, isOpen, onToggle, children, className = "" }) => {
  return (
    <div className={`border-b border-gray-100 last:border-0 py-5 ${className}`}>
      <button 
        onClick={onToggle}
        className="flex items-center justify-between w-full group select-none"
      >
        <span className="text-sm font-black uppercase tracking-wide text-gray-900 group-hover:text-zcase-accent transition-colors">
          {title}
        </span>
        <span className={`text-gray-400 group-hover:text-zcase-accent transition-all duration-300 bg-gray-50 rounded-full p-1 ${isOpen ? 'rotate-180 bg-zcase-accent/10 text-zcase-accent' : ''}`}>
          <ChevronDown size={14} />
        </span>
      </button>
      
      <div 
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};

const SidebarFilter: React.FC = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    availability: true,
    categories: true,
    brand: true,
    weight: true
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const categories = [
    { name: 'Allen & Heath', count: 3 },
    { name: 'Behringer', count: 1 },
    { name: 'Digico', count: 5 },
    { name: 'GrandMa', count: 1 },
    { name: 'Midas', count: 1 },
    { name: 'Waves eMotion', count: 1 },
    { name: 'Yamaha', count: 2 },
  ];

  const availability = [
    { name: 'In stock', count: 8 },
    { name: 'Available', count: 9 },
    { name: 'Not available', count: 6 },
  ];

  return (
    <div className="w-full lg:w-72 flex-shrink-0 bg-white border border-gray-100 rounded-2xl shadow-xl shadow-black/5 sticky top-24 transition-all duration-300 hover:shadow-2xl hover:shadow-black/10">
      {/* Header */}
      <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white flex items-center justify-between rounded-t-2xl">
        <h3 className="text-sm font-black uppercase tracking-widest text-zcase-black flex items-center gap-2">
            <Sliders size={16} className="text-zcase-accent" /> Filters
        </h3>
        <button className="text-xs font-bold text-gray-400 hover:text-zcase-accent transition-colors flex items-center gap-1 bg-white px-2 py-1 rounded-lg border border-gray-100 shadow-sm hover:shadow-md">
            <RotateCcw size={10} /> Reset
        </button>
      </div>
      
      <div className="px-6 pb-2">
        {/* Availability */}
        <FilterSection 
          title="Availability" 
          isOpen={openSections.availability} 
          onToggle={() => toggleSection('availability')}
        >
          <div className="space-y-3">
            {availability.map((item, idx) => (
              <label key={idx} className="flex items-center group/item cursor-pointer select-none py-1">
                <div className="relative flex items-center justify-center w-5 h-5 mr-3">
                  <input type="checkbox" className="peer appearance-none w-5 h-5 border-2 border-gray-200 rounded-md transition-all checked:bg-zcase-black checked:border-zcase-black hover:border-zcase-accent" />
                  <Check size={12} className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none transform scale-50 peer-checked:scale-100 transition-all" />
                </div>
                <span className="text-sm text-gray-600 font-bold group-hover/item:text-zcase-black transition-colors">{item.name}</span>
                <span className="ml-auto text-xs font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded-md group-hover/item:bg-zcase-accent/10 group-hover/item:text-zcase-accent transition-colors border border-gray-100">{item.count}</span>
              </label>
            ))}
          </div>
        </FilterSection>

        {/* Categories */}
        <FilterSection 
          title="Categories" 
          isOpen={openSections.categories} 
          onToggle={() => toggleSection('categories')}
        >
          <div className="space-y-3 max-h-64 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent hover:scrollbar-thumb-gray-300">
            {categories.map((item, idx) => (
              <label key={idx} className="flex items-center group/item cursor-pointer select-none py-1">
                <div className="relative flex items-center justify-center w-5 h-5 mr-3">
                  <input type="checkbox" className="peer appearance-none w-5 h-5 border-2 border-gray-200 rounded-md transition-all checked:bg-zcase-black checked:border-zcase-black hover:border-zcase-accent" />
                  <Check size={12} className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none transform scale-50 peer-checked:scale-100 transition-all" />
                </div>
                <span className="text-sm text-gray-600 font-bold group-hover/item:text-zcase-black transition-colors">{item.name}</span>
                <span className="ml-auto text-xs font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded-md group-hover/item:bg-zcase-accent/10 group-hover/item:text-zcase-accent transition-colors border border-gray-100">{item.count}</span>
              </label>
            ))}
          </div>
        </FilterSection>

        {/* Brand */}
        <FilterSection 
          title="Brand" 
          isOpen={openSections.brand} 
          onToggle={() => toggleSection('brand')}
        >
          <div className="space-y-3">
            <label className="flex items-center group/item cursor-pointer select-none py-1">
              <div className="relative flex items-center justify-center w-5 h-5 mr-3">
                <input type="checkbox" className="peer appearance-none w-5 h-5 border-2 border-gray-200 rounded-md transition-all checked:bg-zcase-black checked:border-zcase-black hover:border-zcase-accent" />
                <Check size={12} className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none transform scale-50 peer-checked:scale-100 transition-all" />
              </div>
              <span className="text-sm text-gray-600 font-bold group-hover/item:text-zcase-black transition-colors">Studio Design</span>
              <span className="ml-auto text-xs font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded-md group-hover/item:bg-zcase-accent/10 group-hover/item:text-zcase-accent transition-colors border border-gray-100">14</span>
            </label>
          </div>
        </FilterSection>

        {/* Weight Range */}
        <FilterSection 
          title="Weight" 
          isOpen={openSections.weight} 
          onToggle={() => toggleSection('weight')}
          className="border-0"
        >
           <div className="pt-2 pb-4 px-1">
              <div className="flex justify-between text-xs font-black text-gray-400 mb-4">
                  <span>0.3kg</span>
                  <span>260kg</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full relative">
                  <div className="absolute left-0 right-1/3 top-0 bottom-0 bg-zcase-black rounded-full"></div>
                  <input type="range" min="0" max="100" className="absolute w-full h-full opacity-0 cursor-pointer z-10" />
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-zcase-black rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform z-0 ring-4 ring-white"></div>
                  <div className="absolute right-1/3 top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-zcase-black rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform z-0 ring-4 ring-white"></div>
              </div>
              <div className="mt-6 flex gap-2">
                 <div className="flex-1 bg-gray-50 border border-gray-200 rounded-lg p-2 text-center">
                    <span className="text-xs text-gray-400 block mb-1 font-bold">Min</span>
                    <span className="text-sm font-black text-gray-900">0.3 kg</span>
                 </div>
                 <div className="flex-1 bg-gray-50 border border-gray-200 rounded-lg p-2 text-center">
                    <span className="text-xs text-gray-400 block mb-1 font-bold">Max</span>
                    <span className="text-sm font-black text-gray-900">180 kg</span>
                 </div>
              </div>
          </div>
        </FilterSection>
      </div>
    </div>
  );
};
export default SidebarFilter;