import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import Button from './Button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zcase-black border-t border-white/10 pt-24 pb-12 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-zcase-accent/5 pattern-grid-lg opacity-10 pointer-events-none"></div>
      <div className="absolute -left-20 top-20 w-96 h-96 bg-zcase-accent/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Top Section - Newsletter & Branding */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-20 pb-16 border-b border-white/10">
            <div className="max-w-md">
                <a href="/" className="text-4xl font-black tracking-tighter text-white block mb-6">
                ZCASE<span className="text-zcase-accent">USA</span>
                </a>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                The world's most advanced flight cases. Designed in California, manufactured globally. 
                Protecting the gear that powers the world's biggest stages.
                </p>
                <div className="flex space-x-4">
                {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                    <a key={i} href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-zcase-accent hover:text-white hover:border-zcase-accent transition-all duration-300 transform hover:-translate-y-1">
                        <Icon size={20} />
                    </a>
                ))}
                </div>
            </div>

            {/* Newsletter / CTA Section */}
            <div className="w-full max-w-lg bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10">
                <h4 className="text-2xl font-bold mb-4 text-white">Stay Updated</h4>
                <p className="text-gray-400 mb-8 text-base">
                    Subscribe to our newsletter for the latest product releases, exclusive offers, and industry news.
                </p>
                <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                        <input 
                            type="email" 
                            placeholder="Enter your email address" 
                            className="w-full bg-black/20 border border-white/10 rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-zcase-accent focus:border-transparent outline-none text-white transition-all placeholder-gray-600"
                        />
                    </div>
                    <button className="w-full bg-zcase-accent text-white px-6 py-4 rounded-xl font-bold hover:bg-white hover:text-zcase-black transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group text-base uppercase tracking-wider">
                        Subscribe <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </form>
            </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-16 md:mb-20">
          
          {/* Column 1 */}
          <div className="text-center sm:text-left">
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-6 md:mb-8">Products</h4>
            <ul className="space-y-3 md:space-y-4 text-sm text-gray-400 font-medium">
              {['Flip Cases', 'Flight Cases', 'Rack Systems', 'Custom Builds', 'Accessories', 'Replacement Parts'].map(item => (
                  <li key={item}><a href="#" className="hover:text-zcase-accent transition-colors flex items-center justify-center sm:justify-start gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-zcase-accent opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block"></span> {item}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div className="text-center sm:text-left">
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-6 md:mb-8">Support</h4>
            <ul className="space-y-3 md:space-y-4 text-sm text-gray-400 font-medium">
              {['Contact Us', 'Warranty Info', 'Shipping Policy', 'Returns', 'FAQ', 'Download Catalog'].map(item => (
                  <li key={item}><a href="#" className="hover:text-zcase-accent transition-colors flex items-center justify-center sm:justify-start gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-zcase-accent opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block"></span> {item}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="text-center sm:text-left">
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-6 md:mb-8">Company</h4>
            <ul className="space-y-3 md:space-y-4 text-sm text-gray-400 font-medium">
              {['About ZCase', 'Our Technology', 'Gallery', 'Testimonials', 'Careers', 'Dealer Network'].map(item => (
                  <li key={item}><a href="#" className="hover:text-zcase-accent transition-colors flex items-center justify-center sm:justify-start gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-zcase-accent opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block"></span> {item}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div className="text-center sm:text-left">
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-6 md:mb-8">Contact</h4>
            <ul className="space-y-6 text-sm text-gray-400 flex flex-col items-center sm:items-start">
              <li className="flex flex-col sm:flex-row items-center sm:items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-zcase-accent group-hover:bg-zcase-accent group-hover:text-white transition-all duration-300">
                    <MapPin size={20} />
                </div>
                <div>
                    <span className="block font-bold text-white mb-1">Headquarters</span>
                    <span>1234 Industrial Blvd<br />Los Angeles, CA 90021</span>
                </div>
              </li>
              <li className="flex flex-col sm:flex-row items-center sm:items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-zcase-accent group-hover:bg-zcase-accent group-hover:text-white transition-all duration-300">
                    <Phone size={20} />
                </div>
                <div>
                    <span className="block font-bold text-white mb-1">Phone</span>
                    <span>+1 (555) 123-4567</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
            <p className="text-center md:text-left">© 2026 ZCase USA. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 font-medium">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
