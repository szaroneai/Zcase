import React, { useState } from 'react';
import { Star, Check, ShoppingCart, MessageCircle, ArrowRight, ZoomIn, X, ChevronRight, ChevronLeft } from 'lucide-react';
import Button from './Button';

const FeaturedProduct: React.FC = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const product = {
    name: "ZCase Pro Tour - GrandMA3 Light Edition",
    price: 5400,
    oldPrice: 6200,
    rating: 4.9,
    reviews: 124,
    description: "The ultimate protection for your GrandMA3 Light console. Engineered for world tours, featuring our signature shock-mount system and premium Hexagrip finish.",
    images: [
      'https://zcaseusa.com/771-home_default/flip-case-for-grandma3-light-with-2u-rack-19-under-console-with-detachable-mechanism.jpg',
      'https://zcaseusa.com/600-home_default/flip-case-for-allen-heath-dlive-s5000-with-detecheble-mechanism.jpg',
      'https://zcaseusa.com/427-home_default/flight-case-flip-case-for-waves-emotion-lv1-classic-with-2u-under-cosnole-with-detecheble-mechanism.jpg',
      'https://zcaseusa.com/414-home_default/flight-case-flip-case-midas-heritage-96-24.jpg'
    ],
    specs: [
      { label: "Material", value: "9mm Birch Plywood" },
      { label: "Weight", value: "24 kg (Empty)" },
      { label: "Dimensions", value: "110 x 60 x 30 cm" },
      { label: "Warranty", value: "Lifetime Structural" }
    ],
    competitors: [
      { name: "ZCase Pro Tour", weight: "24kg", protection: "Shock-mount", price: "$5,400", warranty: "Lifetime" },
      { name: "Standard Case", weight: "32kg", protection: "Foam only", price: "$4,800", warranty: "2 Years" },
      { name: "Budget Brand", weight: "35kg", protection: "None", price: "$3,500", warranty: "1 Year" }
    ]
  };

  const openLightbox = (index: number) => {
    setActiveImage(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => setIsLightboxOpen(false);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <section className="py-16 bg-white rounded-3xl shadow-sm border border-gray-100 my-12 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <span className="bg-zcase-accent/10 text-zcase-accent font-black uppercase tracking-widest text-xs px-3 py-1 rounded-full mb-4 inline-block">Special Offer</span>
            <h2 className="text-3xl md:text-4xl font-black text-zcase-black mb-4">Featured Product of the Month</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Discover the pinnacle of flight case engineering. Limited time offer for professional touring companies.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Gallery */}
            <div className="space-y-4">
                <div 
                    className="relative aspect-[4/3] bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 group cursor-zoom-in"
                    onClick={() => openLightbox(activeImage)}
                >
                    <img src={product.images[activeImage]} alt={product.name} className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <ZoomIn size={20} className="text-zcase-black" />
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                    {product.images.map((img, i) => (
                        <div 
                            key={i} 
                            className={`aspect-square rounded-xl overflow-hidden border cursor-pointer transition-all ${activeImage === i ? 'border-zcase-accent ring-2 ring-zcase-accent/20' : 'border-gray-200 hover:border-zcase-accent'}`}
                            onClick={() => setActiveImage(i)}
                        >
                            <img src={img} alt="" className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Details */}
            <div className="flex flex-col h-full">
                <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} fill="currentColor" className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"} />
                        ))}
                    </div>
                    <span className="text-sm font-bold text-gray-500">({product.reviews} reviews)</span>
                </div>

                <h3 className="text-3xl font-black text-zcase-black mb-4 leading-tight">{product.name}</h3>
                
                <div className="flex items-end gap-4 mb-6">
                    <span className="text-4xl font-black text-zcase-accent">${product.price.toLocaleString()}</span>
                    <span className="text-xl font-bold text-gray-400 line-through mb-1">${product.oldPrice.toLocaleString()}</span>
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded mb-2">-15%</span>
                </div>

                <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                    {product.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                    {product.specs.map((spec, i) => (
                        <div key={i} className="flex justify-between border-b border-gray-100 pb-2">
                            <span className="text-gray-500 text-sm">{spec.label}</span>
                            <span className="font-bold text-zcase-black text-sm">{spec.value}</span>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                    <Button className="flex-1 py-4 text-lg justify-center shadow-xl shadow-zcase-accent/20">
                        <ShoppingCart size={20} className="mr-2" /> Add to Cart
                    </Button>
                    <Button variant="secondary" className="flex-1 py-4 text-lg justify-center">
                        <MessageCircle size={20} className="mr-2" /> Ask Question
                    </Button>
                </div>
            </div>
        </div>

        {/* Comparison & Reviews */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h4 className="text-xl font-black text-zcase-black mb-6">Competitive Comparison</h4>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead>
                            <tr className="border-b-2 border-gray-200">
                                <th className="py-3 font-black text-gray-500 uppercase tracking-wider">Feature</th>
                                {product.competitors.map((c, i) => (
                                    <th key={i} className={`py-3 px-4 font-black ${i === 0 ? 'text-zcase-accent' : 'text-gray-600'}`}>
                                        {c.name} {i === 0 && '(Us)'}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {['Weight', 'Protection', 'Warranty', 'Price'].map((feature) => (
                                <tr key={feature}>
                                    <td className="py-4 font-bold text-gray-700">{feature}</td>
                                    {product.competitors.map((c, i) => (
                                        <td key={i} className={`py-4 px-4 ${i === 0 ? 'font-bold text-zcase-black bg-white rounded-lg shadow-sm' : 'text-gray-500'}`}>
                                            {/* @ts-ignore */}
                                            {c[feature.toLowerCase()]}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="bg-zcase-black text-white rounded-2xl p-8 flex flex-col justify-center relative overflow-hidden">
                <div className="relative z-10">
                    <div className="flex text-zcase-accent mb-4">
                        {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
                    </div>
                    <blockquote className="text-xl font-bold italic mb-6">
                        "This case saved our console when it fell off the truck ramp. Not a scratch on the desk. Absolutely worth every penny."
                    </blockquote>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center font-bold">JD</div>
                        <div>
                            <div className="font-bold">John Doe</div>
                            <div className="text-gray-400 text-sm">Production Manager, LiveNation</div>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-zcase-accent/20 rounded-full blur-3xl"></div>
            </div>
        </div>
      </div>

      {/* Lightbox Overlay */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-[1000] bg-black/95 flex items-center justify-center animate-fade-in" onClick={closeLightbox}>
            <button onClick={closeLightbox} className="absolute top-6 right-6 text-white hover:text-zcase-accent p-2"><X size={32} /></button>
            <button onClick={prevImage} className="absolute left-4 text-white hover:text-zcase-accent p-4"><ChevronLeft size={48} /></button>
            <img src={product.images[activeImage]} alt={product.name} className="max-w-[90vw] max-h-[90vh] object-contain select-none" onClick={e => e.stopPropagation()} />
            <button onClick={nextImage} className="absolute right-4 text-white hover:text-zcase-accent p-4"><ChevronRight size={48} /></button>
        </div>
      )}
    </section>
  );
};

export default FeaturedProduct;
