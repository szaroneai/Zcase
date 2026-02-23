import React from 'react';
import { Shield, Truck, Settings, PenTool, Cpu, Globe } from 'lucide-react';

const USP: React.FC = () => {
  const features = [
    {
      icon: <Shield size={32} />,
      title: "Uncompromising Protection",
      desc: "Our cases exceed ATA-300 standards. Built with premium Baltic Birch and industrial-grade hardware to survive any tour."
    },
    {
      icon: <PenTool size={32} />,
      title: "Precision Engineering",
      desc: "Every case is CAD-designed and CNC-cut with 0.1mm accuracy. We guarantee a perfect fit for your specific gear."
    },
    {
      icon: <Settings size={32} />,
      title: "Hydraulic Flip System",
      desc: "Our patented 'ZCase Flip' mechanism allows a single person to deploy a 100kg+ console in under 30 seconds."
    },
    {
      icon: <Cpu size={32} />,
      title: "Smart Integration",
      desc: "Built-in cable management, patch panels, and UPS integration. We design workstations, not just boxes."
    },
    {
      icon: <Globe size={32} />,
      title: "Global Support",
      desc: "With manufacturing in the USA and Poland, we support major tours across North America and Europe."
    },
    {
      icon: <Truck size={32} />,
      title: "Fast Turnaround",
      desc: "Standard models ship in 48h. Custom designs ready in 2-3 weeks. We understand that the show can't wait."
    }
  ];

  return (
    <section className="py-24 bg-zcase-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-zcase-accent/5 skew-x-12 transform translate-x-20"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-white/5 -skew-x-12 transform -translate-x-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-zcase-accent font-bold uppercase tracking-widest text-sm mb-4 block">Why Professionals Choose ZCase</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Not Just a Case. <br/>An Engineering Marvel.</h2>
            <p className="text-gray-400 text-lg">
                We don't just build boxes; we engineer solutions that save you time, protect your investment, and look incredible on stage.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
                <div key={i} className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-zcase-accent/50 transition-all duration-300">
                    <div className="mb-6 p-4 rounded-xl bg-zcase-accent/10 text-zcase-accent inline-block group-hover:scale-110 group-hover:bg-zcase-accent group-hover:text-zcase-black transition-all duration-300">
                        {f.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 group-hover:text-zcase-accent transition-colors">{f.title}</h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                        {f.desc}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default USP;
