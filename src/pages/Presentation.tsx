import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingBag, 
  ShieldCheck, 
  BarChart3, 
  Users, 
  Settings, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  LayoutDashboard,
  Database,
  Calendar,
  Search,
  Rocket,
  Shield,
  Bot
} from 'lucide-react';
import Navbar from '../components/Navbar';

const Presentation: React.FC = () => {
  const [activeDemoTab, setActiveDemoTab] = useState<'store' | 'admin'>('store');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: "Storefront",
      description: "Modern, responsive e-commerce interface designed for conversion.",
      icon: <ShoppingBag className="w-6 h-6" />,
      items: ["Product Configuration", "Real-time Cart", "Secure Checkout", "Mobile Optimized"]
    },
    {
      title: "Admin Panel",
      description: "Powerful backend for complete store management.",
      icon: <LayoutDashboard className="w-6 h-6" />,
      items: ["Dashboard Analytics", "Order Management", "Inventory Control", "Customer Insights"]
    },
    {
      title: "Technology",
      description: "Built with cutting-edge stack for performance and scale.",
      icon: <Zap className="w-6 h-6" />,
      items: ["React & TypeScript", "Tailwind CSS", "Real-time Updates", "SEO Friendly"]
    }
  ];

  const adminFeatures = [
    { icon: <Database />, title: "Product CRUD", desc: "Full control over inventory with rich text editors and media management." },
    { icon: <Users />, title: "User Management", desc: "Detailed customer profiles, order history, and access control." },
    { icon: <BarChart3 />, title: "Advanced Analytics", desc: "Visual reports on sales, revenue, and conversion trends." },
    { icon: <Settings />, title: "System Config", desc: "Global settings for shipping, taxes, and store preferences." }
  ];

  return (
    <div className={`min-h-screen bg-white transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-zcase-base opacity-50 -z-10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-zcase-accent/5 to-transparent -z-10"></div>
        
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 rounded-full text-sm font-bold text-gray-600 mb-8 animate-fade-in-up">
              <span className="w-2 h-2 bg-zcase-accent rounded-full animate-pulse"></span>
              N3O System Solutions
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight mb-8 leading-tight animate-fade-in-up delay-100">
              Complete <span className="text-zcase-accent">E-Commerce</span><br />
              Ecosystem
            </h1>
            
            <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto animate-fade-in-up delay-200">
              Powered by N3O System. We build autonomous systems that work for you.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
              <Link to="/shop" className="w-full sm:w-auto px-8 py-4 bg-zcase-accent text-zcase-black font-bold rounded-lg hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2">
                <ShoppingBag size={20} />
                Explore Store
              </Link>
              <Link to="/admin/login" className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white font-bold rounded-lg hover:bg-black transition-colors flex items-center justify-center gap-2">
                <ShieldCheck size={20} />
                Admin Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, idx) => (
              <div key={idx} className="group p-8 rounded-3xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-zcase-accent shadow-sm mb-6 group-hover:scale-110 transition-transform border border-gray-100">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-500 mb-8">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                      <CheckCircle2 size={16} className="text-zcase-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Preview */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-zcase-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-6">System Architecture</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Switch between views to explore the dual-interface architecture designed for both customers and administrators.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="bg-gray-800 p-1 rounded-full inline-flex">
              <button 
                onClick={() => setActiveDemoTab('store')}
                className={`px-8 py-3 rounded-full font-bold transition-all ${activeDemoTab === 'store' ? 'bg-zcase-accent text-zcase-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
              >
                Storefront View
              </button>
              <button 
                onClick={() => setActiveDemoTab('admin')}
                className={`px-8 py-3 rounded-full font-bold transition-all ${activeDemoTab === 'admin' ? 'bg-blue-500 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
              >
                Admin Dashboard
              </button>
            </div>
          </div>

          {/* Browser Mockup */}
          <div className="max-w-5xl mx-auto bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-700 ring-4 ring-black/20">
            {/* Browser Toolbar */}
            <div className="bg-gray-900 px-4 py-3 flex items-center gap-4 border-b border-gray-700">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 bg-gray-800 rounded-md px-4 py-1.5 text-xs text-gray-400 font-mono text-center truncate">
                {activeDemoTab === 'store' ? 'https://zcase.store/shop' : 'https://zcase.store/admin/dashboard'}
              </div>
            </div>

            {/* Content Area */}
            <div className="bg-white min-h-[500px] relative">
              {activeDemoTab === 'store' ? (
                // Store Preview Mockup
                <div className="flex flex-col h-full text-gray-900">
                  <div className="h-16 border-b flex items-center justify-between px-8 bg-white">
                    <span className="font-black text-xl">ZCASE</span>
                    <div className="flex gap-4 text-sm font-bold">
                      <span>Cases</span>
                      <span>Accessories</span>
                      <span>Support</span>
                    </div>
                  </div>
                  <div className="flex-1 bg-gray-50 p-8">
                    <div className="grid grid-cols-2 gap-8 h-full">
                      <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col justify-center">
                        <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-300">Product Image</div>
                        <div className="h-4 w-2/3 bg-gray-200 rounded mb-2"></div>
                        <div className="h-4 w-1/3 bg-gray-200 rounded"></div>
                      </div>
                      <div className="flex flex-col justify-center space-y-4">
                        <h3 className="text-3xl font-bold">Premium Protection</h3>
                        <p className="text-gray-500">Engineered for durability and style.</p>
                        <div className="flex gap-2">
                          <div className="w-full h-12 bg-zcase-accent rounded-lg flex items-center justify-center font-bold">Add to Cart</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Admin Preview Mockup
                <div className="flex h-full text-gray-900">
                  <div className="w-64 bg-zinc-900 text-gray-400 p-4 flex flex-col gap-2">
                    <div className="text-white font-bold mb-6 px-2">Admin Panel</div>
                    {['Dashboard', 'Products', 'Orders', 'Users', 'Analytics'].map(item => (
                      <div key={item} className="px-3 py-2 rounded hover:bg-zinc-800 cursor-pointer">{item}</div>
                    ))}
                  </div>
                  <div className="flex-1 bg-gray-100 p-8">
                    <div className="flex justify-between items-center mb-8">
                      <h3 className="text-2xl font-bold">Dashboard Overview</h3>
                      <div className="bg-blue-500 text-white px-4 py-2 rounded text-sm font-bold">Export Report</div>
                    </div>
                    <div className="grid grid-cols-3 gap-6 mb-8">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                          <div className="text-gray-400 text-sm mb-1">Total Revenue</div>
                          <div className="text-2xl font-bold">$12,450.00</div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-white rounded-xl shadow-sm p-6 h-48 flex items-center justify-center text-gray-400">
                      Sales Chart Visualization
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Admin Features Deep Dive */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-zcase-accent font-bold tracking-widest uppercase text-sm">Backend Power</span>
            <h2 className="text-4xl font-black mt-2 text-gray-900">Comprehensive Administration</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {adminFeatures.map((feature, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation & Pricing Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                <Bot size={14} />
                Business Automation
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-6">
                We Build Autonomous Systems
              </h2>
              <p className="text-xl text-gray-500 mb-8 leading-relaxed">
                Beyond e-commerce, N3O System specializes in advanced business automation. We identify repetitive processes and implement AI-driven agents to handle them 24/7.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "CRM & ERP Integrations",
                  "AI Customer Support Agents",
                  "Automated Email Marketing Flows",
                  "Inventory Synchronization"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <CheckCircle2 size={14} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="https://www.n3osystem.io/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-700 transition-colors">
                Visit N3O System <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl opacity-20 blur-xl"></div>
              <div className="relative bg-white p-10 rounded-3xl border border-gray-100 shadow-xl text-center">
                <h3 className="text-lg font-bold text-gray-400 uppercase tracking-widest mb-4">Complete Package</h3>
                <div className="text-6xl font-black text-gray-900 mb-2">
                  16,000 <span className="text-2xl text-gray-400 font-bold">PLN</span>
                </div>
                <p className="text-gray-500 mb-8">One-time payment for the complete system source code and ownership.</p>
                
                <div className="space-y-4 text-left border-t border-gray-100 pt-8">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-700">Storefront & Admin Panel</span>
                    <CheckCircle2 size={18} className="text-green-500" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-700">Full Source Code</span>
                    <CheckCircle2 size={18} className="text-green-500" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-700">Deployment Setup</span>
                    <CheckCircle2 size={18} className="text-green-500" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-700">24 Months Support</span>
                    <CheckCircle2 size={18} className="text-green-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section - Implementation Timeline */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        {/* Decorative background lines */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-cyan-500 hidden md:block"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              IMPLEMENTATION <span className="text-cyan-400">TIMELINE</span>
            </h2>
            <p className="text-gray-400 text-lg">Fast track from concept to working system.</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line for Desktop */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-cyan-500/30 md:-ml-0.5 rounded-full"></div>

            {/* Step 1 */}
            <div className="relative flex flex-col md:flex-row items-center mb-16 md:mb-24">
              <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0 order-2 md:order-1 pl-20 md:pl-0">
                <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 shadow-lg hover:border-cyan-500/50 transition-colors">
                  <h3 className="text-xl font-bold mb-2 text-white">KICKOFF</h3>
                  <p className="text-gray-400 text-sm mb-4">30% Deposit | Work Start | 14-Day Sprint</p>
                  <span className="inline-block px-4 py-1 rounded-full border border-green-500 text-green-400 text-xs font-bold">
                    1ST TRANCHE: 30%
                  </span>
                </div>
              </div>
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-gray-900 border-4 border-cyan-500 z-10 order-1 md:order-2 shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                <Calendar className="text-white w-6 h-6" />
              </div>
              <div className="md:w-1/2 md:pl-12 order-3 hidden md:block"></div>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col md:flex-row items-center mb-16 md:mb-24">
              <div className="md:w-1/2 md:pr-12 hidden md:block order-1"></div>
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-gray-900 border-4 border-cyan-500 z-10 order-1 shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                <Search className="text-white w-6 h-6" />
              </div>
              <div className="md:w-1/2 md:pl-12 order-2 pl-20 md:pl-0 w-full">
                <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 shadow-lg hover:border-cyan-500/50 transition-colors">
                  <div className="text-cyan-400 text-xs font-bold mb-1 uppercase tracking-widest">Day 14</div>
                  <h3 className="text-xl font-bold mb-2 text-white">DEMO & ANALYSIS</h3>
                  <p className="text-gray-400 text-sm mb-4">Demo Presentation | Feedback Analysis | Revisions</p>
                  <span className="inline-block px-4 py-1 rounded-full border border-green-500 text-green-400 text-xs font-bold">
                    2ND TRANCHE: 30%
                  </span>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col md:flex-row items-center mb-16 md:mb-24">
              <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0 order-2 md:order-1 pl-20 md:pl-0">
                <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 shadow-lg hover:border-cyan-500/50 transition-colors">
                  <div className="text-cyan-400 text-xs font-bold mb-1 uppercase tracking-widest">Day 35</div>
                  <h3 className="text-xl font-bold mb-2 text-white">SYSTEM READY</h3>
                  <p className="text-gray-400 text-sm mb-4">Final Version | Security Tests | Acceptance</p>
                  <span className="inline-block px-4 py-1 rounded-full border border-green-500 text-green-400 text-xs font-bold">
                    3RD TRANCHE: 40%
                  </span>
                </div>
              </div>
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-gray-900 border-4 border-cyan-500 z-10 order-1 md:order-2 shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                <Rocket className="text-white w-6 h-6" />
              </div>
              <div className="md:w-1/2 md:pl-12 order-3 hidden md:block"></div>
            </div>

            {/* Step 4 */}
            <div className="relative flex flex-col md:flex-row items-center mb-16 md:mb-24">
              <div className="md:w-1/2 md:pr-12 hidden md:block order-1"></div>
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-gray-900 border-4 border-cyan-500 z-10 order-1 shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                <Shield className="text-white w-6 h-6" />
              </div>
              <div className="md:w-1/2 md:pl-12 order-2 pl-20 md:pl-0 w-full">
                <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 shadow-lg hover:border-cyan-500/50 transition-colors">
                  <div className="text-cyan-400 text-xs font-bold mb-1 uppercase tracking-widest">Finalization</div>
                  <h3 className="text-xl font-bold mb-2 text-white">DEPLOYMENT</h3>
                  <p className="text-gray-400 text-sm mb-4">Deployment, full maintenance, and technical support.</p>
                  <span className="inline-block px-4 py-1 rounded-full border border-cyan-500 bg-cyan-500/10 text-cyan-400 text-xs font-bold">
                    100% OWNERSHIP
                  </span>
                </div>
              </div>
            </div>

            {/* Step 5 - Automation */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0 order-2 md:order-1 pl-20 md:pl-0">
                <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 shadow-lg hover:border-cyan-500/50 transition-colors">
                  <div className="text-cyan-400 text-xs font-bold mb-1 uppercase tracking-widest">Scaling</div>
                  <h3 className="text-xl font-bold mb-2 text-white">AI & AUTOMATION</h3>
                  <p className="text-gray-400 text-sm mb-4">Implementation of AI Agents & Business Automation workflows.</p>
                  <span className="inline-block px-4 py-1 rounded-full border border-purple-500 bg-purple-500/10 text-purple-400 text-xs font-bold">
                    NEXT LEVEL
                  </span>
                </div>
              </div>
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-gray-900 border-4 border-purple-500 z-10 order-1 md:order-2 shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                <Bot className="text-white w-6 h-6" />
              </div>
              <div className="md:w-1/2 md:pl-12 order-3 hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Presentation;
