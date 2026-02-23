import React, { useState } from 'react';
import ProductCard from './ProductCard';
import SidebarFilter from './SidebarFilter';
import type { Product } from '../types';
import { ArrowRight, ChevronDown, Filter, X, LayoutGrid, List } from 'lucide-react';

const Bestsellers: React.FC = () => {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Real Data from Reference
  const products: Product[] = [
    {
      id: '93',
      name: 'Flip Case for GrandMA3 light with 2U rack 19”',
      category: 'Lighting',
      brand: 'GrandMA',
      model: 'GrandMA3 light',
      price: 5400,
      image: 'https://zcaseusa.com/771-home_default/flip-case-for-grandma3-light-with-2u-rack-19-under-console-with-detachable-mechanism.jpg',
      isNew: true
    },
    {
      id: '74',
      name: 'Flip Case for Allen & Heath dLive S5000',
      category: 'Audio',
      brand: 'Allen & Heath',
      model: 'dLive S5000',
      price: 4600,
      image: 'https://zcaseusa.com/600-home_default/flip-case-for-allen-heath-dlive-s5000-with-detecheble-mechanism.jpg',
      isBestseller: true
    },
    {
      id: '63',
      name: 'Flight case - Flip case for Waves eMotion LV1 Classic',
      category: 'Audio',
      brand: 'Waves',
      model: 'eMotion LV1',
      price: 3150,
      image: 'https://zcaseusa.com/427-home_default/flight-case-flip-case-for-waves-emotion-lv1-classic-with-2u-under-cosnole-with-detecheble-mechanism.jpg'
    },
    {
      id: '62',
      name: 'Flip Case Midas Heritage 96-24 with 2x2U',
      category: 'Audio',
      brand: 'Midas',
      model: 'Heritage 96-24',
      price: 5000,
      image: 'https://zcaseusa.com/414-home_default/flight-case-flip-case-midas-heritage-96-24.jpg'
    },
    {
      id: '40',
      name: 'Flight case Flip Digico Quantum 338 with 3x2U',
      category: 'Audio',
      brand: 'Digico',
      model: 'Quantum 338',
      price: 10900,
      image: 'https://zcaseusa.com/179-home_default/flight-case-flip-digico-quantum-338-with-3x2u-under-console-with-detecheble-mechanism.jpg',
      isBestseller: true
    },
    {
      id: '19',
      name: 'Flight case Flip Yamaha DM7 /DM7 EX',
      category: 'Audio',
      brand: 'Yamaha',
      model: 'DM7',
      price: 4950,
      image: 'https://zcaseusa.com/71-home_default/flight-case-flip-yamaha-dm7-dm7-ex-with-1x2u-under-cosnole-with-detectable-mechanisms-.jpg'
    },
    {
      id: '73',
      name: 'Flip Case for Allen & Heath dLive S5000 with 2x2U',
      category: 'Audio',
      brand: 'Allen & Heath',
      model: 'dLive S5000',
      price: 5200,
      image: 'https://zcaseusa.com/571-home_default/flip-case-flight-case-for-allen-heath-dlive-s5000-with-2x2u-rack-19-under-console.jpg'
    },
    {
      id: '41',
      name: 'Flight case Flip Digico Quantum Q225',
      category: 'Audio',
      brand: 'Digico',
      model: 'Quantum Q225',
      price: 5750,
      image: 'https://zcaseusa.com/186-home_default/flight-case-flip-digico-quantum-q225-with-2x2u-under-console-with-detecheble-mechanism.jpg'
    }
  ];

  return (
    <section className="bg-zcase-surface relative overflow-hidden min-h-screen">
       {/* Pseudo-Hero Header */}
       <div className="bg-zcase-black text-white pt-24 pb-12 relative overflow-hidden">

           <div className="absolute -right-20 -top-20 w-96 h-96 bg-zcase-accent/10 rounded-full blur-3xl animate-spin-slow"></div>
           <div className="absolute -left-20 -bottom-20 w-72 h-72 bg-zcase-surface/10 rounded-full blur-3xl animate-reverse-spin"></div>
           
           <div className="container mx-auto px-4 relative z-10 text-center">
        </div>
    </div>

    {/* Categories Section */}
    <div className="container mx-auto px-4 relative z-20 mt-8 mb-20 hidden md:block">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <a href="#" className="group relative overflow-hidden rounded-2xl aspect-[4/5] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10"></div>
                <img src="https://zcaseusa.com/img/cms/20200701_151903-Photoroom.png" alt="Flip Cases" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                    <h3 className="text-white text-2xl font-black uppercase tracking-tighter mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">Flip Cases</h3>
                    <div className="h-1 w-12 bg-zcase-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
                </div>
            </a>
            
            <a href="#" className="group relative overflow-hidden rounded-2xl aspect-[4/5] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10"></div>
                <img src="https://zcaseusa.com/img/cms/20240725_164536-Photoroom-Photoroom.jpg" alt="Flight Cases" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                    <h3 className="text-white text-2xl font-black uppercase tracking-tighter mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">Flight Cases</h3>
                    <div className="h-1 w-12 bg-zcase-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
                </div>
            </a>

            <a href="#" className="group relative overflow-hidden rounded-2xl aspect-[4/5] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10"></div>
                <img src="https://zcaseusa.com/img/cms/20240830_151442-Photoroom.png" alt="Modular Rack System" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                    <h3 className="text-white text-2xl font-black uppercase tracking-tighter mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">Modular Rack System</h3>
                    <div className="h-1 w-12 bg-zcase-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
                </div>
            </a>

            <a href="#" className="group relative overflow-hidden rounded-2xl aspect-[4/5] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10"></div>
                <img src="https://zcaseusa.com/img/cms/20240520_144625-Photoroom_1.jpg" alt="Fiberglass Epoxy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                    <h3 className="text-white text-2xl font-black uppercase tracking-tighter mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">Fiberglass Epoxy</h3>
                    <div className="h-1 w-12 bg-zcase-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
                </div>
            </a>

            <a href="#" className="group relative overflow-hidden rounded-2xl aspect-[4/5] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10"></div>
                <img src="https://zcaseusa.com/img/cms/20240904_070752-Photoroom.png" alt="Slam Door Racks" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                    <h3 className="text-white text-2xl font-black uppercase tracking-tighter mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">Slam Door Racks</h3>
                    <div className="h-1 w-12 bg-zcase-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
                </div>
            </a>
        </div>
    </div>

    <div className="container mx-auto px-4 relative z-10">
     
     {/* Toolbar (Sort/Filter) */}
        <div className="bg-white border border-zcase-border p-4 md:p-6 rounded-xl mb-8 md:mb-12 flex flex-col md:flex-row justify-between items-center shadow-xl shadow-black/5 animate-fade-in-up delay-300 gap-4 md:gap-0">
            <div className="text-sm font-medium text-zcase-muted hidden md:flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Showing <span className="font-bold text-zcase-black">{products.length}</span> premium products
            </div>

            <div className="flex items-center justify-between w-full md:w-auto gap-4">
                {/* Mobile View Toggle */}
                <div className="flex items-center gap-1 md:hidden bg-zcase-surface p-1 rounded-lg border border-zcase-border">
                    <button 
                        onClick={() => setViewMode('grid')}
                        className={`p-2 rounded-md transition-all ${viewMode === 'grid' ? 'bg-white shadow-sm text-zcase-black' : 'text-gray-400 hover:text-zcase-black'}`}
                    >
                        <LayoutGrid size={18} />
                    </button>
                    <button 
                        onClick={() => setViewMode('list')}
                        className={`p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-white shadow-sm text-zcase-black' : 'text-gray-400 hover:text-zcase-black'}`}
                    >
                        <List size={18} />
                    </button>
                </div>

                <div className="flex items-center gap-2 text-sm whitespace-nowrap hidden md:flex">
                    <span className="text-zcase-muted">Sort by:</span>
                    <button className="flex items-center gap-2 font-bold text-zcase-black hover:text-zcase-accent transition-colors">
                        Relevance <ChevronDown size={14} />
                    </button>
                </div>
                
                <button 
                    onClick={() => setIsMobileFilterOpen(true)}
                    className="flex-1 md:flex-none md:ml-auto flex items-center justify-center gap-2 bg-zcase-black text-white px-4 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-zcase-accent/10 hover:bg-zcase-accent hover:text-zcase-black transition-all"
                >
                    <Filter size={16} /> Filter
                </button>
            </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            {/* Sidebar - Desktop */}
            <div className="hidden lg:block sticky top-24">
                <SidebarFilter />
            </div>

            {/* Sidebar - Mobile Drawer */}
            <div className={`fixed inset-0 z-[9999] lg:hidden transition-all duration-300 ${isMobileFilterOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                <div className={`absolute inset-0 bg-white shadow-2xl transform transition-transform duration-300 flex flex-col ${isMobileFilterOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex justify-between items-center p-6 border-b border-gray-100 flex-shrink-0">
                        <h3 className="text-xl font-black text-zcase-black tracking-tight">FILTERS</h3>
                        <button onClick={() => setIsMobileFilterOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors bg-gray-50">
                            <X size={24} />
                        </button>
                    </div>
                    <div className="flex-1 overflow-y-auto p-6">
                        <SidebarFilter />
                    </div>
                    <div className="p-6 border-t border-gray-100 flex-shrink-0 bg-white">
                        <button 
                            onClick={() => setIsMobileFilterOpen(false)}
                            className="w-full py-4 bg-zcase-black text-white font-bold rounded-xl hover:bg-zcase-accent hover:text-zcase-black transition-colors shadow-lg shadow-zcase-accent/10 uppercase tracking-wider"
                        >
                            Show {products.length} Results
                        </button>
                    </div>
                </div>
            </div>

            {/* Product Grid */}
            <div className="flex-1 w-full">
                <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                {products.map((product, index) => (
                    <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 100 + 400}ms`, animationFillMode: 'both' }}>
                        <ProductCard product={product} viewMode={viewMode} />
                    </div>
                ))}
                </div>

                {/* Pagination */}
                <div className="mt-12 mb-16 flex flex-col md:flex-row justify-between items-center border-t border-zcase-border pt-8 pb-8">
                    <div className="text-sm text-zcase-muted mb-4 md:mb-0">
                        Showing 1-{products.length} of 15 items
                    </div>
                    
                    <div className="flex items-center gap-2">
                        <button className="w-10 h-10 flex items-center justify-center rounded bg-zcase-black text-white font-bold text-sm shadow-md">1</button>
                        <button className="w-10 h-10 flex items-center justify-center rounded bg-white text-zcase-text hover:bg-zcase-surface font-bold text-sm border border-zcase-border transition-colors">2</button>
                        <button className="px-4 h-10 flex items-center justify-center rounded bg-white text-zcase-text hover:text-zcase-accent font-bold text-sm border border-zcase-border transition-colors gap-1">
                            Next <ArrowRight size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Bestsellers;
