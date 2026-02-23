import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, Menu, X, ChevronDown, User, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '/shop';
  
  // Logic for transparent background: only on home, at top, when menu is closed
  const isTransparent = isHome && !scrolled && !isMenuOpen;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const navigation = [
    {
      name: 'Flip Cases',
      type: 'dropdown',
      items: [
        { name: 'Allen & Heath', to: '/category/allen-heath' },
        { name: 'Digico', to: '/category/digico' },
        { name: 'Behringer', to: '/category/behringer' },
        { name: 'Soundcraft', to: '/category/soundcraft' },
        { name: 'Yamaha', to: '/category/yamaha' },
        { name: 'GrandMA', to: '/category/grandma' },
        { name: 'Chamsys', to: '/category/chamsys' },
        { name: 'SSL', to: '/category/ssl' },
        { name: 'Avid', to: '/category/avid' },
        { name: 'Lawo', to: '/category/lawo' },
        { name: 'Stagetec', to: '/category/stagetec' },
        { name: 'Custom', to: '/category/custom' },
        { name: 'Midas', to: '/category/midas' },
        { name: 'Waves eMotion', to: '/category/waves-emotion' },
      ]
    },
    {
      name: 'Flight Cases',
      type: 'mega',
      columns: [
        {
          title: 'Audio Consoles',
          items: [
            { name: 'Allen & Heath', to: '/flight/audio/allen-heath' },
            { name: 'Digico', to: '/flight/audio/digico' },
            { name: 'Behringer', to: '/flight/audio/behringer' },
            { name: 'Yamaha', to: '/flight/audio/yamaha' },
            { name: 'GrandMa', to: '/flight/audio/grandma' },
            { name: 'Chamsys', to: '/flight/audio/chamsys' },
            { name: 'SSL', to: '/flight/audio/ssl' },
            { name: 'Avid', to: '/flight/audio/avid' },
            { name: 'Lawo', to: '/flight/audio/lawo' },
            { name: 'Stagetec', to: '/flight/audio/stagetec' },
            { name: 'Soundcraft', to: '/flight/audio/soundcraft' },
            { name: 'Custom', to: '/flight/audio/custom' },
            { name: 'Waves eMotion', to: '/flight/audio/waves-emotion' },
          ]
        },
        {
          title: 'Light Consoles',
          items: [
            { name: 'GrandMa', to: '/flight/light/grandma' },
            { name: 'Chamsys', to: '/flight/light/chamsys' },
            { name: 'Custom', to: '/flight/light/custom' },
          ]
        },
        {
          title: 'Rack 19"',
          items: [
            { name: 'Standard', to: '/flight/rack/standard' },
            { name: 'Slide door racks/QSD', to: '/flight/rack/slide-door' },
            { name: 'Modular RACK system', to: '/flight/rack/modular' },
          ]
        },
        {
          title: 'Other',
          items: [
            { name: 'Speakers', to: '/flight/speakers' },
            { name: 'Trunk cases', to: '/flight/trunk-cases' },
            { name: 'Light flight cases', to: '/flight/light-flight-cases' },
            { name: 'TV/LED flight cases', to: '/flight/tv-led' },
            { name: 'Drawer flight cases', to: '/flight/drawers' },
          ]
        }
      ]
    },
    { name: 'About us', to: '/about-us' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isTransparent 
            ? 'bg-transparent py-6' 
            : 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-white/20 py-4'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center relative">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center z-50">
              <Link to="/shop" className={`text-2xl font-black tracking-tighter transition-colors flex items-center gap-1 group ${isTransparent ? 'text-white' : 'text-zcase-black'}`}>
                ZCASE<span className="text-zcase-accent group-hover:rotate-12 transition-transform duration-300 inline-block">USA</span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden xl:flex items-center space-x-1">
              {navigation.map((item) => (
                <div 
                  key={item.name}
                  className="relative group px-1"
                  onMouseEnter={() => item.type && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.type ? (
                    <>
                      <button 
                        className={`flex items-center px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wide transition-all duration-300 gap-1.5 ${
                          isTransparent 
                            ? 'text-white hover:bg-white/10' 
                            : 'text-zcase-black hover:bg-gray-100/80 hover:text-zcase-accent'
                        }`}
                      >
                        {item.name} 
                        <ChevronDown 
                          size={14} 
                          strokeWidth={3}
                          className={`transition-transform duration-300 ${
                            activeDropdown === item.name ? 'rotate-180 text-zcase-accent' : (isTransparent ? 'text-white/70' : 'text-gray-400')
                          }`} 
                        />
                      </button>
                      
                      {/* Dropdown Content */}
                      <div 
                        className={`absolute top-full left-0 pt-4 transition-all duration-300 origin-top-left ${
                          activeDropdown === item.name 
                            ? 'opacity-100 scale-100 visible translate-y-0' 
                            : 'opacity-0 scale-95 invisible -translate-y-2'
                        } ${item.type === 'mega' ? 'w-[1000px] -left-20' : 'w-64'}`}
                      >
                        <div className="bg-white/90 backdrop-blur-xl shadow-2xl rounded-2xl border border-gray-100 overflow-hidden ring-1 ring-black/5">
                          {item.type === 'mega' ? (
                            <div className="flex p-8 gap-8">
                              {item.columns?.map((col, idx) => (
                                <div key={idx} className="flex-1 min-w-[200px]">
                                  <h3 className="text-zcase-black font-black mb-4 uppercase text-xs tracking-widest flex items-center gap-2 pb-2 border-b border-gray-100">
                                    <span className="w-1.5 h-1.5 bg-zcase-accent rounded-full"></span>
                                    {col.title}
                                  </h3>
                                  <ul className="space-y-2">
                                    {col.items.map((link) => (
                                      <li key={link.name}>
                                        <Link 
                                          to={link.to} 
                                          className="text-sm font-medium text-gray-500 hover:text-zcase-black hover:translate-x-1 transition-all flex items-center gap-2 group/link"
                                        >
                                          <span className="w-0 group-hover/link:w-1 h-0.5 bg-zcase-accent transition-all duration-300 rounded-full"></span>
                                          {link.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="p-3">
                              <ul className="space-y-1">
                                {item.items?.map((link) => (
                                  <li key={link.name}>
                                    <Link 
                                      to={link.to} 
                                      className="flex items-center justify-between text-sm font-medium text-gray-600 hover:text-zcase-black hover:bg-gray-50 px-4 py-2.5 rounded-xl transition-all group/link"
                                    >
                                      {link.name}
                                      <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-zcase-accent" />
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link 
                      to={item.to!} 
                      className={`block px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wide transition-all duration-300 ${
                        isTransparent 
                          ? 'text-white hover:bg-white/10' 
                          : 'text-zcase-black hover:bg-gray-100/80 hover:text-zcase-accent'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Right Actions */}
            <div className="hidden md:flex items-center gap-4">
              <div className="relative group hidden lg:block">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className={`w-40 focus:w-56 transition-all duration-300 border-none rounded-full pl-4 pr-10 py-2.5 text-sm outline-none ring-1 ring-transparent focus:ring-zcase-accent/50 ${
                    isTransparent 
                      ? 'bg-white/10 text-white placeholder-white/60 focus:bg-white/20' 
                      : 'bg-gray-100/50 text-zcase-black placeholder-gray-400 focus:bg-white'
                  }`}
                />
                <button className={`transition-colors absolute right-3 top-1/2 -translate-y-1/2 ${isTransparent ? 'text-white/70 hover:text-white' : 'text-gray-400 hover:text-zcase-accent'}`}>
                  <Search size={18} />
                </button>
              </div>
              
              <div className="flex items-center gap-2 pl-2 border-l border-gray-200/20">
                <Link 
                  to="/account" 
                  className={`p-2 rounded-full transition-all hover:scale-110 ${
                    isTransparent ? 'text-white hover:bg-white/10' : 'text-zcase-black hover:bg-gray-100'
                  }`}
                >
                  <User size={20} strokeWidth={2} />
                </Link>

                <Link 
                  to="/cart" 
                  className={`p-2 rounded-full transition-all relative hover:scale-110 ${
                    isTransparent ? 'text-white hover:bg-white/10' : 'text-zcase-black hover:bg-gray-100'
                  }`}
                >
                  <ShoppingCart size={20} strokeWidth={2} />
                  <span className="absolute top-0 right-0 bg-zcase-accent text-zcase-black text-[10px] font-black w-4 h-4 flex items-center justify-center rounded-full shadow-sm ring-2 ring-white">0</span>
                </Link>
              </div>
              
              <Button className={`!py-2.5 !px-6 text-sm font-bold shadow-lg shadow-zcase-accent/20 hover:shadow-xl hover:shadow-zcase-accent/30 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 ${
                isTransparent 
                  ? 'bg-white text-zcase-black hover:bg-white/90' 
                  : 'bg-zcase-black text-white hover:bg-zcase-accent hover:text-zcase-black'
              }`}>
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="xl:hidden flex items-center gap-4">
              <button className={`p-2 rounded-full transition-all active:scale-95 ${isTransparent ? 'text-white' : 'text-zcase-black'}`}>
                <Search size={24} strokeWidth={2} />
              </button>
              <Link to="/cart" className={`relative p-2 ${isTransparent ? 'text-white' : 'text-zcase-black'}`}>
                <ShoppingCart size={24} strokeWidth={2} />
                <span className="absolute top-0 right-0 bg-zcase-accent text-zcase-black text-[10px] font-black w-4 h-4 flex items-center justify-center rounded-full ring-2 ring-white">0</span>
              </Link>
              <button 
                onClick={toggleMenu}
                className={`focus:outline-none p-2 rounded-full transition-all active:scale-95 ${
                  isTransparent 
                    ? 'text-white hover:bg-white/10' 
                    : 'text-zcase-black hover:bg-gray-100'
                }`}
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 xl:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Side Drawer */}
      <div 
        className={`fixed inset-y-0 right-0 w-[300px] sm:w-[400px] bg-white z-50 transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) shadow-2xl xl:hidden flex flex-col ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-white sticky top-0 z-10">
          <span className="text-xl font-black tracking-tighter">MENU</span>
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors bg-gray-50"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {navigation.map((item) => (
            <div key={item.name} className="border-b border-gray-100/50 pb-4 last:border-0">
              {item.type ? (
                <>
                  <div className="text-lg font-black text-zcase-black mb-3 uppercase tracking-wide flex items-center gap-2">
                    {item.name}
                  </div>
                  <div className="pl-4 space-y-4 border-l-2 border-gray-100 ml-1">
                    {item.type === 'mega' ? (
                      item.columns?.map((col, idx) => (
                        <div key={idx} className="mb-4">
                          <h4 className="text-xs font-bold text-gray-400 uppercase mb-2 tracking-widest">{col.title}</h4>
                          <div className="grid gap-2">
                            {col.items.map((link) => (
                              <Link 
                                key={link.name} 
                                to={link.to} 
                                className="text-sm font-medium text-gray-600 py-2 block hover:text-zcase-accent transition-colors flex items-center justify-between group"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {link.name}
                                <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-zcase-accent" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="grid gap-2">
                        {item.items?.map((link) => (
                          <Link 
                            key={link.name} 
                            to={link.to} 
                            className="text-sm font-medium text-gray-600 py-2 block hover:text-zcase-accent transition-colors flex items-center justify-between group"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {link.name}
                            <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-zcase-accent" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <Link 
                  to={item.to!} 
                  className="text-lg font-black text-zcase-black block hover:text-zcase-accent transition-colors uppercase tracking-wide py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="p-6 bg-gray-50 border-t border-gray-100 sticky bottom-0 z-10">
          <Button className="w-full justify-center mb-4 py-4 rounded-xl text-lg font-bold shadow-lg shadow-zcase-accent/10">Get a Quote</Button>
          <div className="flex justify-center gap-6 text-gray-400">
             <Link to="/account" className="hover:text-zcase-black transition-colors flex flex-col items-center gap-1 text-xs font-bold uppercase tracking-wider">
                <div className="p-3 bg-white rounded-full shadow-sm border border-gray-100"><User size={20} /></div>
                Account
             </Link>
             <Link to="/search" className="hover:text-zcase-black transition-colors flex flex-col items-center gap-1 text-xs font-bold uppercase tracking-wider">
                <div className="p-3 bg-white rounded-full shadow-sm border border-gray-100"><Search size={20} /></div>
                Search
             </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
