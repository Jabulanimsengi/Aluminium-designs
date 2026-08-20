import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { Layers, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';

import { ActiveTab } from '../types';

interface ProjectsViewProps {
  onNavigate: (tab: ActiveTab) => void;
}

const PROJECTS_DATA: Project[] = [
  {
    id: 'clifton-beach',
    name: 'Coastal Pivot Entry Door',
    category: 'pivot-doors',
    location: 'Camps Bay, Cape Town',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkeibdDXwr-FJES_Tfr8yzaZ9vOw2-EJUYfr38Mhk58vJUnimovxkMIuiXqW3f6w7pb36hQO4xuAqeRf3qn7aezq0CsrWs1jDKkdfHKWxVo7e1r3Ml_NuSJvJpe0jLnMOPxXu4p6StVW2_vJ7YmzY_oSFKW09Y6kLKJFMjhLu071RAsGkOw7c4jm0n9aKVMuoA8zdrMxPi9Nt6bmD8-jZAVr9GFyDSvLmS1VHiOVS60qenOea1nO7KwjD6a48tupnpnY-qXza_gMHL',
    alloy: 'Coastal Rust-Proof Grade',
    dimensions: '2400mm (H) x 1200mm (W)',
    description: 'A stunning, oversized glass and aluminium front entrance for a beachfront home in Camps Bay. Built with weather-sealed hydraulic hinges to keep out the cold Atlantic sea breeze.',
    specs: {
      'Glass Type': 'Toughened Safety Glass',
      'Locking System': 'Secure Multi-Point Locking',
      'Main Benefit': 'Stops Sea Breeze Drafts'
    }
  },
  {
    id: 'sandton-loft',
    name: 'Vista Fold Patio Doors',
    category: 'curtain-walls',
    location: 'Sandton, Johannesburg',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPSxtoyaS7-Fhsoz93O6OILuZPPx8lGNzgWbm1z-XniMR74Qu6C5qBV2SbE8FQtcEr--OZHPzjL6Zt_tplr4xOHyKwW9w6CF_p2e6GKeLuBwFxpHfTsT-mqxgN0vnAGCkUv5pZWZaBSsO8rMoyfHSdYBRLbuT1kwNRa0HT4p439mr_nbl_72q1-43q8Y1CZRriogukVEHYKHVQSDZSujJjACM7H8S-59_TSl3qVQ5KvNescoMiUNxDBlMty_jHjgu4RBc0oOE4x2OA',
    alloy: 'Heavy Duty Structural',
    dimensions: '2100mm (H) x 3000mm (W)',
    description: 'Bespoke sliding-folding stacker doors that completely open up a luxurious lounge onto the patio and braai area. Ideal for South Africa’s outdoor lifestyle.',
    specs: {
      'Glass Type': 'Energy-Saving Glazing',
      'Opening Mechanism': 'Finger-Glide Roller System',
      'Main Benefit': 'Perfect Indoor-Outdoor Flow'
    }
  },
  {
    id: 'umhlanga-atrium',
    name: 'Elite Aluminium Skylight',
    category: 'skylights',
    location: 'Umhlanga, Durban',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSobcmqwGOq8OaP8KweSkBr0tYx6yHxGapHzIkvIlY1G1kYXMao1MLrjU1dElNU7FqBLh2Rcw4Clx7fkZJStMNdQghLZuVY_n-R_7-Asqr3cUr_npZB5jGVthlwb7N_DqalWham8N8NjOoa9CKjLe0nVoxGhwONX_fqkDHcS8QR4Cjslfsbeckjza0YKMlK4vH0GR1EgImOWFxv8rbFU1N9hUIJS8UmxeY0M_UYd037fRf6yQjckw5KLhVHouxLQimngHXsd8jovH3',
    alloy: 'Premium Lightweight Grade',
    dimensions: '1800mm (H) x 1200mm (W)',
    description: 'A beautiful glass roof installation that floods the home with natural African sunlight. Fitted with heat-reflective solar glass to keep the living spaces perfectly cool in Durban’s hot summers.',
    specs: {
      'Glass Type': 'Heat-Reflective Low-E Glass',
      'Drainage System': 'Built-In Leak-Free Channels',
      'Main Benefit': 'Beautiful Natural Light'
    }
  },
  {
    id: 'knysna-lagoon',
    name: 'Frameless Balustrade System',
    category: 'balustrades',
    location: 'Knysna, Garden Route',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSobcmqwGOq8OaP8KweSkBr0tYx6yHxGapHzIkvIlY1G1kYXMao1MLrjU1dElNU7FqBLh2Rcw4Clx7fkZJStMNdQghLZuVY_n-R_7-Asqr3cUr_npZB5jGVthlwb7N_DqalWham8N8NjOoa9CKjLe0nVoxGhwONX_fqkDHcS8QR4Cjslfsbeckjza0YKMlK4vH0GR1EgImOWFxv8rbFU1N9hUIJS8UmxeY0M_UYd037fRf6yQjckw5KLhVHouxLQimngHXsd8jovH3',
    alloy: 'Marine-Grade Coastal Channel',
    dimensions: '1100mm (H) x 5000mm (W)',
    description: 'Modern, frameless glass barriers for an elevated patio overlooking the Knysna lagoon. Uses highly rust-resistant base tracks to withstand damp sea-salt air.',
    specs: {
      'Glass Type': 'Thick Toughened Safety Glass',
      'Track Finish': 'Brushed Silver Satin',
      'Main Benefit': '100% Uninterrupted Lagoon Views'
    }
  }
];

export default function ProjectsView({ onNavigate }: ProjectsViewProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'pivot-doors' | 'curtain-walls' | 'skylights' | 'balustrades'>('all');

  const filteredProjects = activeFilter === 'all' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === activeFilter);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-12 py-12 pb-24 space-y-16">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 bg-primary/5 text-primary border border-primary/10 px-3.5 py-1 text-xs font-mono font-bold tracking-widest uppercase">
          <Layers className="w-3.5 h-3.5" />
          Homeowner Gallery
        </div>
        <h2 className="font-sans text-4xl md:text-5xl font-bold uppercase tracking-tight text-primary">
          Our Completed Installations
        </h2>
        <p className="text-on-surface-variant text-base leading-relaxed">
          See how our premium windows, doors, and balustrades look in real South African homes. Built custom for every client, designed for durability, and installed with expert care.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 border-b border-outline-variant pb-4">
        {[
          { id: 'all', label: 'ALL INSTALLATIONS' },
          { id: 'pivot-doors', label: 'PIVOT DOORS' },
          { id: 'curtain-walls', label: 'PATIO DOORS' },
          { id: 'skylights', label: 'SKYLIGHTS' },
          { id: 'balustrades', label: 'BALUSTRADES' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveFilter(tab.id as any)}
            className={`px-4 py-2 text-xs font-mono font-bold tracking-wider rounded-none cursor-pointer border transition-all duration-150 ${
              activeFilter === tab.id
                ? 'bg-primary text-on-primary border-primary'
                : 'bg-surface hover:bg-surface-container border-outline-variant text-on-surface'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              key={project.id}
              className="border border-outline-variant bg-surface-container-lowest flex flex-col hover:border-primary transition-all duration-200"
            >
              {/* Image Section */}
              <div className="relative h-72 md:h-80 overflow-hidden bg-surface-container-high border-b border-outline-variant">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white font-mono text-[10px] tracking-widest uppercase px-3 py-1.5 flex items-center gap-1.5 font-bold">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  {project.location}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <h3 className="font-sans text-2xl uppercase font-bold tracking-tight text-primary">
                    {project.name}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Clean Client-Friendly Info list */}
                  <div className="border border-outline-variant bg-surface p-4 space-y-2.5">
                    {Object.entries(project.specs).map(([label, val]) => (
                      <div key={label} className="flex justify-between items-center text-xs">
                        <span className="text-on-surface-variant font-sans font-semibold uppercase">{label}</span>
                        <span className="font-mono font-bold text-primary">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Inviting Contact CTA for normal clients */}
      <section className="bg-primary text-on-primary p-8 md:p-12 text-center space-y-6">
        <h3 className="font-sans text-2xl md:text-3xl font-bold uppercase tracking-tight text-white">
          Like any of these installation styles?
        </h3>
        <p className="text-on-primary-container/90 max-w-xl mx-auto text-sm leading-relaxed">
          You don't need to know anything about measurements or technical specs. Simply let us know what style you like, and we will send an expert to your home to take the measurements for you!
        </p>
        <div className="pt-2">
          <button
            onClick={() => onNavigate('inquiry')}
            className="inline-flex items-center gap-3 bg-white text-primary hover:bg-surface-container transition-colors duration-150 px-8 py-4 font-mono text-xs font-bold uppercase tracking-widest rounded-none cursor-pointer"
          >
            Request Quotation Now
            <ArrowRight className="w-4 h-4 text-primary" />
          </button>
        </div>
      </section>
    </div>
  );
}
