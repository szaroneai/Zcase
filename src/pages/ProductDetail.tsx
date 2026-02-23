import React, { useState } from 'react';
import Button from '../components/Button';
import { ShoppingCart, Check, Shield, Truck, Settings, X, ChevronRight, Play, Instagram } from 'lucide-react';

const ProductDetail: React.FC = () => {
  const [activeTab, setActiveTab] = useState('specs');
  const [isConfiguring, setIsConfiguring] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = (index: number) => {
    setActiveImage(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  // Real Product Data from Reference
  const product = {
    name: 'Flight case for GrandMa3 onPC command wing',
    price: 850,
    description: 'Professional flight case designed specifically for the GrandMA3 onPC command wing. Features a custom foam insert for maximum protection and a built-in screen mount system.',
    specs: [
      { label: 'Weight (Empty)', value: '18 kg / 40 lbs' },
      { label: 'Dimensions', value: '65cm x 55cm x 25cm' },
      { label: 'Material', value: '9mm Hexagrip Plywood' },
      { label: 'Hardware', value: 'Penn Elcom Heavy Duty' },
      { label: 'Screen Mount', value: 'VESA 100x100 / 75x75' },
      { label: 'Warranty', value: 'Lifetime Structural' }
    ],
    features: [
      'Custom foam insert for GrandMA3 onPC command wing',
      'Built-in adjustable screen mount',
      'Laptop compartment',
      'Accessory compartment for cables',
      'Removable lid'
    ],
    images: [
      'https://zcaseusa.com/1049-large_default/flight-case-for-grandma3-onpc-command-wing-.jpg',
      'https://zcaseusa.com/1033-large_default/flight-case-for-grandma3-onpc-command-wing-.jpg',
      'https://zcaseusa.com/1034-large_default/flight-case-for-grandma3-onpc-command-wing-.jpg',
      'https://zcaseusa.com/1035-large_default/flight-case-for-grandma3-onpc-command-wing-.jpg',
      'https://zcaseusa.com/1046-large_default/flight-case-for-grandma3-onpc-command-wing-.jpg',
      'https://zcaseusa.com/1038-large_default/flight-case-for-grandma3-onpc-command-wing-.jpg',
      'https://zcaseusa.com/1039-large_default/flight-case-for-grandma3-onpc-command-wing-.jpg',
      'https://zcaseusa.com/1041-large_default/flight-case-for-grandma3-onpc-command-wing-.jpg'
    ],
    video: 'https://www.instagram.com/reel/DGLRkJhxF-r/embed'
  };

  return (
    <div className="bg-zcase-base min-h-screen pb-20 pt-24">
      
      {/* Product Hero */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Image Gallery */}
      <div className="space-y-4">
        <div className="bg-white border border-zcase-border rounded-lg overflow-hidden aspect-square relative group" onClick={() => openLightbox(activeImage)}>
            <img 
                src={product.images[activeImage]} 
                alt={product.name} 
                className="w-full h-full object-contain p-4"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                <span className="text-white font-bold uppercase tracking-wider border-2 border-white px-6 py-3 rounded hover:bg-white hover:text-black transition-colors">View Fullscreen</span>
            </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
            {product.images.map((img, i) => (
                <div 
                    key={i} 
                    className={`bg-white border rounded cursor-pointer aspect-square overflow-hidden transition-all ${activeImage === i ? 'border-zcase-accent ring-2 ring-zcase-accent/50' : 'border-zcase-border hover:border-zcase-accent'}`}
                    onClick={() => setActiveImage(i)}
                >
                    <img src={img} className={`w-full h-full object-contain p-2 ${activeImage === i ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`} />
                </div>
            ))}
        </div>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center animate-fade-in" onClick={closeLightbox}>
            <button 
                onClick={closeLightbox} 
                className="absolute top-6 right-6 text-white hover:text-zcase-accent transition-colors p-2 rounded-full hover:bg-white/10"
            >
                <X size={32} />
            </button>

            <button 
                onClick={prevImage}
                className="absolute left-4 md:left-8 text-white hover:text-zcase-accent transition-colors p-4 rounded-full hover:bg-white/10"
            >
                <ChevronRight size={48} className="rotate-180" />
            </button>

            <div className="max-w-[90vw] max-h-[90vh] relative" onClick={(e) => e.stopPropagation()}>
                <img 
                    src={product.images[activeImage]} 
                    alt={product.name} 
                    className="max-w-full max-h-[90vh] object-contain select-none"
                />
            </div>

            <button 
                onClick={nextImage}
                className="absolute right-4 md:right-8 text-white hover:text-zcase-accent transition-colors p-4 rounded-full hover:bg-white/10"
            >
                <ChevronRight size={48} />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {product.images.map((_, i) => (
                    <button 
                        key={i}
                        onClick={(e) => {
                            e.stopPropagation();
                            setActiveImage(i);
                        }}
                        className={`w-3 h-3 rounded-full transition-all ${activeImage === i ? 'bg-zcase-accent scale-125' : 'bg-white/50 hover:bg-white'}`}
                    />
                ))}
            </div>
        </div>
      )}

          {/* Product Info */}
          <div>
            <div className="mb-2 bg-zcase-accent/10 text-zcase-accent font-bold uppercase tracking-wider text-sm inline-block px-3 py-1 rounded-full">Yamaha Consoles</div>
            <h1 className="text-3xl md:text-5xl font-bold text-zcase-text mb-4">{product.name}</h1>
            <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-zcase-text">${product.price.toLocaleString()}</span>
                <span className="text-green-600 text-sm font-bold flex items-center gap-1"><Check size={16} /> In Stock</span>
            </div>

            <p className="text-zcase-muted leading-relaxed mb-8 text-lg">
              {product.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="flex-1 flex items-center justify-center gap-2 py-4 text-lg">
                <ShoppingCart size={20} /> Add to Cart
              </Button>
              <Button variant="outline" onClick={() => setIsConfiguring(true)} className="flex-1 flex items-center justify-center gap-2 py-4 text-lg !text-zcase-text !border-zcase-border hover:!bg-zcase-accent hover:!text-white hover:!border-zcase-accent">
                <Settings size={20} /> Configure
              </Button>
            </div>

            {/* Configuration Modal */}
            {isConfiguring && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in-up">
                    <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl">
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-zcase-border sticky top-0 bg-white z-10">
                            <div>
                                <h2 className="text-2xl font-black uppercase tracking-tight">Configure Your Case</h2>
                                <p className="text-zcase-muted text-sm">Customize specifications for {product.name}</p>
                            </div>
                            <button onClick={() => setIsConfiguring(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                <X size={24} />
                            </button>
                        </div>
                        
                        {/* Content - Enhanced Configurator */}
                        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-50">
                            
                            {/* Option Group 1 - Case Color */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="text-lg font-bold mb-6 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-zcase-black text-white flex items-center justify-center text-sm font-bold shadow-lg shadow-zcase-accent/20">1</div> 
                                    Case Color
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {['Black', 'Grey'].map(color => (
                                        <div key={color} className="group border-2 border-transparent hover:border-zcase-accent rounded-xl p-4 cursor-pointer bg-gray-50 hover:bg-white transition-all text-center relative overflow-hidden">
                                            <div className={`w-12 h-12 rounded-full mx-auto mb-3 shadow-inner ring-2 ring-white`} style={{ backgroundColor: color.toLowerCase() }}></div>
                                            <span className="text-sm font-bold text-zcase-text">{color}</span>
                                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-zcase-accent rounded-xl pointer-events-none transition-colors"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                             {/* Option Group 2 - Screen Mount */}
                             <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="text-lg font-bold mb-6 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-zcase-black text-white flex items-center justify-center text-sm font-bold shadow-lg shadow-zcase-accent/20">2</div> 
                                    Screen Mount
                                </h3>
                                <div className="space-y-3">
                                    <div className="border-2 border-zcase-accent bg-zcase-accent/5 rounded-xl p-4 cursor-pointer flex justify-between items-center shadow-sm">
                                        <div className="flex flex-col">
                                            <span className="font-bold text-zcase-black">Standard VESA</span>
                                            <span className="text-xs text-zcase-muted">Fits 100x100 / 75x75 mounts</span>
                                        </div>
                                        <div className="w-6 h-6 rounded-full bg-zcase-accent text-white flex items-center justify-center">
                                            <Check size={14} />
                                        </div>
                                    </div>
                                    <div className="border border-gray-200 rounded-xl p-4 cursor-pointer hover:border-zcase-accent hover:shadow-md transition-all bg-white group">
                                        <div className="flex justify-between items-center">
                                            <div className="flex flex-col">
                                                <span className="font-bold text-gray-700 group-hover:text-zcase-black">Adjustable Arm</span>
                                                <span className="text-xs text-gray-400">Full motion gas spring arm</span>
                                            </div>
                                            <span className="text-sm font-bold text-zcase-accent">+ $85</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Option Group 3 - Accessories */}
                             <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="text-lg font-bold mb-6 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-zcase-black text-white flex items-center justify-center text-sm font-bold shadow-lg shadow-zcase-accent/20">3</div> 
                                    Accessories
                                </h3>
                                <div className="space-y-3">
                                    {[
                                        { label: 'Keyboard Drawer', price: 120, desc: 'Pull-out tray for keyboard & mouse' },
                                        { label: 'Extra Drawers', price: 150, desc: 'Additional storage space' },
                                        { label: 'Additional Screen', price: 300, desc: 'Mount for second monitor' }
                                    ].map((acc, i) => (
                                        <label key={i} className="flex items-start gap-4 p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 hover:border-zcase-accent transition-all group">
                                            <div className="relative flex items-center mt-1">
                                                <input type="checkbox" className="peer w-5 h-5 appearance-none border-2 border-gray-300 rounded checked:bg-zcase-accent checked:border-zcase-accent transition-colors" />
                                                <Check size={12} className="absolute inset-0 m-auto text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex justify-between">
                                                    <span className="font-bold text-gray-800">{acc.label}</span>
                                                    <span className="text-sm font-bold text-zcase-accent">+ ${acc.price}</span>
                                                </div>
                                                <p className="text-xs text-gray-400 mt-1">{acc.desc}</p>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>

                             {/* Option Group 4 - Branding & Keyboard */}
                             <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="text-lg font-bold mb-6 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-zcase-black text-white flex items-center justify-center text-sm font-bold shadow-lg shadow-zcase-accent/20">4</div> 
                                    Personalization
                                </h3>
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Custom Logo</label>
                                        <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-zcase-accent hover:bg-zcase-accent/5 transition-all cursor-pointer group">
                                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white group-hover:text-zcase-accent text-gray-400 transition-colors">
                                                <Settings size={20} />
                                            </div>
                                            <p className="text-sm font-bold text-gray-600 group-hover:text-zcase-black">Click to Upload Logo</p>
                                            <p className="text-xs text-gray-400 mt-1">Supports SVG, PNG, JPG (Max 5MB)</p>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Keyboard Type</label>
                                        <div className="relative">
                                            <select className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm font-medium focus:border-zcase-accent focus:ring-2 focus:ring-zcase-accent/20 focus:outline-none appearance-none cursor-pointer">
                                                <option>Standard Membrane (Included)</option>
                                                <option>Cherry MX Mechanical (+ $50)</option>
                                                <option>Backlit RGB Mechanical (+ $80)</option>
                                            </select>
                                            <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 rotate-90 pointer-events-none" size={16} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Footer */}
                        <div className="p-6 border-t border-zcase-border sticky bottom-0 bg-white z-10 flex flex-col sm:flex-row justify-between items-center gap-4">
                            <div className="text-left">
                                <span className="block text-xs text-zcase-muted uppercase tracking-wider">Estimated Total</span>
                                <span className="text-2xl font-black text-zcase-text">$850.00</span>
                            </div>
                            <div className="flex gap-4 w-full sm:w-auto">
                                <Button variant="secondary" onClick={() => setIsConfiguring(false)} className="flex-1 sm:flex-none">Cancel</Button>
                                <Button onClick={() => setIsConfiguring(false)} className="flex-1 sm:flex-none">Save Configuration</Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="grid grid-cols-3 gap-2 md:gap-4 border-t border-b border-zcase-border py-6 mb-8">
                <div className="flex flex-col items-center text-center">
                    <Shield className="text-zcase-accent mb-2 w-5 h-5 md:w-6 md:h-6" />
                    <span className="font-bold text-xs md:text-sm text-zcase-text leading-tight">Lifetime Warranty</span>
                    <span className="text-[10px] md:text-xs text-zcase-muted hidden sm:inline">On all hardware</span>
                </div>
                <div className="flex flex-col items-center text-center border-l border-r border-zcase-border/50 px-1">
                    <Truck className="text-zcase-accent mb-2 w-5 h-5 md:w-6 md:h-6" />
                    <span className="font-bold text-xs md:text-sm text-zcase-text leading-tight">Global Shipping</span>
                    <span className="text-[10px] md:text-xs text-zcase-muted hidden sm:inline">Air & Sea Freight</span>
                </div>
                <div className="flex flex-col items-center text-center">
                    <Settings className="text-zcase-accent mb-2 w-5 h-5 md:w-6 md:h-6" />
                    <span className="font-bold text-xs md:text-sm text-zcase-text leading-tight">Customizable</span>
                    <span className="text-[10px] md:text-xs text-zcase-muted hidden sm:inline">Colors & Branding</span>
                </div>
            </div>

            {/* Features List */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-black text-zcase-black mb-4 flex items-center gap-2">
                    <div className="w-1 h-6 bg-zcase-accent rounded-full"></div>
                    Key Features
                </h3>
                <ul className="grid grid-cols-1 gap-3">
                    {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-zcase-accent/20 group cursor-default">
                            <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-zcase-accent shadow-sm group-hover:scale-110 group-hover:border-zcase-accent transition-all shrink-0">
                                <Check size={16} strokeWidth={3} />
                            </div>
                            <span className="text-gray-600 font-medium group-hover:text-zcase-black transition-colors leading-relaxed pt-1">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="container mx-auto px-4 mt-12">
        <div className="border-b border-zcase-border mb-8">
            <div className="flex space-x-8">
                {['specs', 'video', 'downloads'].map(tab => (
                    <button 
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`pb-4 text-sm font-bold uppercase tracking-wider border-b-2 transition-colors ${activeTab === tab ? 'border-zcase-accent text-zcase-text' : 'border-transparent text-zcase-muted hover:text-zcase-text'}`}
                    >
                        {tab === 'specs' ? 'Technical Specifications' : tab === 'video' ? 'Demo Video' : 'Downloads'}
                    </button>
                ))}
            </div>
        </div>

        <div className="bg-white p-8 rounded-lg border border-zcase-border">
            {activeTab === 'specs' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                    {product.specs.map((spec, i) => (
                        <div key={i} className="flex justify-between border-b border-zcase-border pb-2">
                            <span className="text-zcase-muted font-mono text-sm">{spec.label}</span>
                            <span className="text-zcase-text font-mono text-sm font-bold">{spec.value}</span>
                        </div>
                    ))}
                </div>
            )}
            {activeTab === 'video' && (
                <div className="aspect-video bg-black flex items-center justify-center overflow-hidden rounded-lg">
                    <iframe 
                        src={product.video} 
                        className="w-full h-full" 
                        frameBorder="0" 
                        allowFullScreen 
                        title="Instagram Video"
                    />
                </div>
            )}
            {activeTab === 'downloads' && (
                <div className="space-y-4">
                    <a href="#" className="flex items-center justify-between bg-zcase-surface p-4 rounded border border-zcase-border hover:border-zcase-accent transition-colors">
                        <span className="text-zcase-text font-bold">Product Manual (PDF)</span>
                        <span className="text-zcase-accent text-sm">Download</span>
                    </a>
                    <a href="#" className="flex items-center justify-between bg-zcase-surface p-4 rounded border border-zcase-border hover:border-zcase-accent transition-colors">
                        <span className="text-zcase-text font-bold">CAD Drawings (DXF)</span>
                        <span className="text-zcase-accent text-sm">Download</span>
                    </a>
                </div>
            )}
        </div>
      </div>

    </div>
  );
};

export default ProductDetail;
