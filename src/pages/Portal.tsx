import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ShieldCheck, ArrowRight, ExternalLink, MonitorPlay } from 'lucide-react';

const Portal: React.FC = () => {
  // Google Analytics Mock
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=UA-XXXXX-Y';
    document.head.appendChild(script);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-XXXXX-Y');
    `;
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(script2);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 font-sans">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12 mt-12">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
            ZCASE<span className="text-zcase-accent">USA</span> Portal
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Welcome to the development environment. Please select your destination below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Presentation Card */}
          <Link 
            to="/presentation" 
            className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-purple-500"></div>
            <div className="p-10 flex flex-col h-full">
              <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-500 mb-6 group-hover:scale-110 transition-transform">
                <MonitorPlay size={32} />
              </div>
              <h2 className="text-3xl font-black text-gray-900 mb-3 group-hover:text-purple-500 transition-colors">
                Demo & Features
              </h2>
              <p className="text-gray-500 mb-8 flex-grow">
                Explore the comprehensive showcase of store functionalities, admin tools, and system architecture.
              </p>
              <div className="flex items-center text-zcase-black font-bold group-hover:translate-x-2 transition-transform">
                View Presentation <ArrowRight size={20} className="ml-2" />
              </div>
            </div>
            {/* Decorative bg pattern */}
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl group-hover:bg-purple-500/10 transition-colors"></div>
          </Link>

          {/* Shop Card */}
          <Link 
            to="/shop" 
            className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-zcase-accent"></div>
            <div className="p-10 flex flex-col h-full">
              <div className="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center text-zcase-accent mb-6 group-hover:scale-110 transition-transform">
                <ShoppingBag size={32} />
              </div>
              <h2 className="text-3xl font-black text-gray-900 mb-3 group-hover:text-zcase-accent transition-colors">
                Visit Store
              </h2>
              <p className="text-gray-500 mb-8 flex-grow">
                Experience the customer-facing e-commerce store with product configuration, cart, and checkout flows.
              </p>
              <div className="flex items-center text-zcase-black font-bold group-hover:translate-x-2 transition-transform">
                Enter Shop <ArrowRight size={20} className="ml-2" />
              </div>
            </div>
            {/* Decorative bg pattern */}
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-zcase-accent/5 rounded-full blur-3xl group-hover:bg-zcase-accent/10 transition-colors"></div>
          </Link>

          {/* Admin Card */}
          <Link 
            to="/admin/login" 
            className="group relative bg-zinc-900 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-blue-500"></div>
            <div className="p-10 flex flex-col h-full relative z-10">
              <div className="w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck size={32} />
              </div>
              <h2 className="text-3xl font-black text-white mb-3 group-hover:text-blue-400 transition-colors">
                Admin Panel
              </h2>
              <p className="text-zinc-400 mb-8 flex-grow">
                Access the backend dashboard to manage products, orders, customers, analytics, and system settings.
              </p>
              <div className="flex items-center text-white font-bold group-hover:translate-x-2 transition-transform">
                Go to Dashboard <ExternalLink size={20} className="ml-2" />
              </div>
            </div>
            {/* Decorative bg pattern */}
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors"></div>
          </Link>
        </div>

        <div className="mt-12 text-center pb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-xs font-bold text-gray-400 shadow-sm border border-gray-100">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            System Operational
            <span className="mx-1 text-gray-300">|</span>
            v1.0.2-beta
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portal;
