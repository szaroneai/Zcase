import React from 'react';
import { Star } from 'lucide-react';

const SocialProof: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Mike Stevenson",
      role: "FOH Engineer, Metallica",
      quote: "These cases are built like tanks. My Digico survived a 6-month world tour without a scratch. The flip mechanism is a game changer for quick load-ins.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      role: "Production Manager, Live Nation",
      quote: "ZCase delivers on time and the quality is unmatched. We exclusively use their racks for all our rental inventory.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 3,
      name: "David Chen",
      role: "System Tech, Clair Global",
      quote: "The attention to detail is incredible. Everything fits perfectly. Best investment for our touring gear.",
      image: "https://randomuser.me/api/portraits/men/85.jpg"
    }
  ];

  const partners = [
    "CLARITY", "SOUNDIMAGE", "LIVENATION", "SOLOTECH", "PRG", "BRIT ROW"
  ];

  return (
    <section className="py-20 bg-white border-t border-zcase-border">
      <div className="container mx-auto px-4">
        
        {/* Trusted By */}
        <div className="mb-20 text-center">
          <p className="text-zcase-muted uppercase tracking-widest text-sm font-bold mb-8">Trusted by Industry Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {partners.map(partner => (
              <span key={partner} className="text-2xl md:text-3xl font-black text-zcase-text tracking-tighter hover:text-zcase-accent cursor-default transition-colors">
                {partner}
              </span>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(t => (
            <div key={t.id} className="bg-zcase-surface p-8 rounded-lg border border-zcase-border relative">
              <div className="absolute -top-4 -left-4 text-6xl text-zcase-border font-serif opacity-50">"</div>
              
              <div className="flex gap-1 mb-4 text-zcase-accent">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" stroke="none" />)}
              </div>
              
              <p className="text-zcase-text mb-6 italic relative z-10">
                "{t.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-zcase-border" />
                <div>
                  <h4 className="font-bold text-zcase-text text-sm">{t.name}</h4>
                  <p className="text-xs text-zcase-muted uppercase tracking-wide">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SocialProof;
