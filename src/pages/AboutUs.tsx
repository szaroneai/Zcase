import React from 'react';
import { ShieldCheck, Globe, Award, MapPin, CheckCircle2 } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black mb-12 tracking-tighter uppercase text-zcase-black">
            About <span className="text-zcase-accent">Us</span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image Section */}
            <div className="flex flex-col gap-8">
              <div className="relative group">
                <div className="absolute -inset-4 bg-zcase-accent/20 rounded-2xl rotate-3 group-hover:rotate-2 transition-transform duration-500"></div>
                <img 
                  src="https://zcaseusa.com/img/cms/cms/53816_5k4a7244.jpg" 
                  alt="ZCASE Factory" 
                  className="relative rounded-xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
              </div>

              <div className="bg-gradient-to-br from-zcase-black to-zcase-surface text-white p-8 rounded-2xl shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-zcase-accent/10 rounded-full -mr-10 -mt-10 blur-2xl group-hover:bg-zcase-accent/20 transition-colors duration-500"></div>
                <p className="font-medium relative z-10 text-lg leading-relaxed">
                  We are a prominent Flip case manufacturer in the world. Our flip cases have a number of solutions designed with the highest possible comfort of work and safety of engineers, as well as maximum protection of the console during transport.
                </p>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-8">
              <div className="relative pl-6 border-l-4 border-zcase-accent">
                <p className="text-xl text-zcase-black font-medium leading-relaxed">
                  Since 2012 <strong className="font-black text-2xl">ZCASE</strong> has been a professional manufacturer of transport cases built using Flight Case technology and custom foam inserts.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-zcase-accent/50 transition-colors">
                    <ShieldCheck className="text-zcase-accent mb-4" size={32} />
                    <h3 className="font-bold text-zcase-black mb-2">Unmatched Durability</h3>
                    <p className="text-sm text-gray-600">
                        Based on high-quality plywood and aluminium profiles, locks, handles, and fittings from industry leaders like <span className="font-bold text-zcase-black">Penn Elcom</span> and <span className="font-bold text-zcase-black">Adam Hall</span>.
                    </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-zcase-accent/50 transition-colors">
                    <Globe className="text-zcase-accent mb-4" size={32} />
                    <h3 className="font-bold text-zcase-black mb-2">Global Standard</h3>
                    <p className="text-sm text-gray-600">
                        Perfect for air transport, requiring no sanitary qualification tests. Our cases offer low weight and high endurance for maximum protection.
                    </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-zcase-accent/5 rounded-xl border border-zcase-accent/10">
                  <MapPin className="text-zcase-accent shrink-0 mt-1" size={24} />
                  <div>
                      <h4 className="font-bold text-zcase-black">State-of-the-Art Facility</h4>
                      <p className="text-gray-600 text-sm mt-1">
                          Currently employing several dozen specialists in our new facility located in <span className="font-bold text-zcase-black">Jasionka, Poland</span>.
                      </p>
                  </div>
              </div>

              <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 text-gray-700 font-medium">
                      <Award className="text-zcase-accent" size={20} />
                      <span>Most respected and innovative manufacturer</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700 font-medium">
                      <CheckCircle2 className="text-zcase-accent" size={20} />
                      <span>USPTO Patent Holder & Euipo Designs Holder</span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
