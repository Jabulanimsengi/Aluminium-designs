import { motion } from 'motion/react';
import { ArrowRight, Compass, ShieldCheck, Heart, Sparkles, ChevronRight, ArrowUpRight } from 'lucide-react';

import { ActiveTab } from '../types';

interface HomeViewProps {
  onNavigate: (tab: ActiveTab) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="space-y-12 animate-fade-in"
    >
      {/* Hero Section */}
      <section className="relative w-full h-[600px] md:h-[700px] flex flex-col justify-end p-4 md:p-12 overflow-hidden border-b border-outline-variant">
        <div className="absolute inset-0 z-0 bg-surface-container-highest">
          <div 
            className="w-full h-full bg-cover bg-center transition-transform duration-10000 hover:scale-105"
            style={{ 
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCSobcmqwGOq8OaP8KweSkBr0tYx6yHxGapHzIkvIlY1G1kYXMao1MLrjU1dElNU7FqBLh2Rcw4Clx7fkZJStMNdQghLZuVY_n-R_7-Asqr3cUr_npZB5jGVthlwb7N_DqalWham8N8NjOoa9CKjLe0nVoxGhwONX_fqkDHcS8QR4Cjslfsbeckjza0YKMlK4vH0GR1EgImOWFxv8rbFU1N9hUIJS8UmxeY0M_UYd037fRf6yQjckw5KLhVHouxLQimngHXsd8jovH3')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="inline-block border-l-4 border-primary px-4 py-1.5 bg-black/60 backdrop-blur-md">
            <p className="font-mono text-xs uppercase tracking-widest text-white font-semibold">
              Proudly South African | Premium Windows & Doors
            </p>
          </div>
          <h2 className="font-sans text-4xl md:text-6xl font-bold uppercase leading-[1.05] tracking-tight text-white">
            Transform Your Home <br className="hidden md:inline" />With Beautiful Aluminium
          </h2>
          <p className="text-white/90 max-w-lg text-sm md:text-base leading-relaxed bg-black/45 backdrop-blur-md p-4 border border-white/10">
            Elegant, rust-proof, and maintenance-free. We manufacture custom aluminium doors and windows built to withstand Cape wind, coastal air, and Highveld storms, while adding luxury to your everyday living.
          </p>
          <div className="pt-4 max-w-md">
            <button 
              onClick={() => onNavigate('projects')}
              className="w-full bg-primary text-on-primary hover:bg-secondary py-4 font-mono text-sm uppercase tracking-widest transition-all duration-150 flex justify-between items-center px-6 rounded-none group cursor-pointer border border-primary hover:border-secondary active:opacity-90"
            >
              Explore Our Work
              <ArrowRight className="w-5 h-5 transition-transform duration-150 group-hover:translate-x-1.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Value Propositions for Normal Clients */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-3 lg:col-span-2 border border-outline-variant p-8 flex flex-col justify-between gap-6 bg-surface-container-lowest hover:border-primary transition-colors duration-200">
            <div className="p-3 bg-surface-container w-fit rounded-none border border-outline-variant">
              <Heart className="text-primary w-8 h-8" />
            </div>
            <div>
              <h3 className="font-sans text-2xl font-bold uppercase mb-3 tracking-tight">Zero-Maintenance Living</h3>
              <p className="text-on-surface-variant text-base leading-relaxed">
                Forget about sanding and painting old wooden frames that rot, swell, or leak. Our premium South African powder-coated aluminium stays perfect for decades with just a simple wipe down.
              </p>
            </div>
          </div>

          <div className="border border-outline-variant p-8 flex flex-col justify-between gap-6 bg-surface-container-low hover:border-primary transition-colors duration-200">
            <div className="p-3 bg-surface-container-lowest w-fit rounded-none border border-outline-variant">
              <Compass className="text-primary w-6 h-6" />
            </div>
            <div>
              <h4 className="font-mono text-xs uppercase font-bold tracking-widest text-secondary mb-2">Custom-Fit Beauty</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Every South African home is unique. We build everything to your exact measurements to fit your braai room, patio, or main entrance perfectly—no generic sizes forced on your space.
              </p>
            </div>
          </div>

          <div className="border border-outline-variant p-8 flex flex-col justify-between gap-6 bg-primary text-on-primary hover:bg-secondary hover:border-secondary transition-colors duration-200">
            <div className="p-3 bg-primary-container w-fit rounded-none border border-on-primary-container/20">
              <ShieldCheck className="text-on-primary w-6 h-6" />
            </div>
            <div>
              <h4 className="font-mono text-xs uppercase font-bold tracking-widest text-on-primary-container mb-2">High Security & Comfort</h4>
              <p className="text-on-primary-container text-sm leading-relaxed">
                Featuring robust multi-point safety locks and thick toughened glass. Keeps your family safe while keeping draft, cold air, and heavy South African rainstorms completely outside.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-primary-container text-on-primary-container py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="flex flex-col gap-1">
            <button 
              onClick={() => onNavigate('services')}
              className="group flex items-center justify-between py-5 border-b border-on-primary-container/20 text-left cursor-pointer transition-colors duration-150 hover:bg-white/5 px-2 rounded-none"
            >
              <span className="font-sans text-2xl md:text-3xl uppercase tracking-tighter text-on-primary">All 29 Services & Products</span>
              <ChevronRight className="w-6 h-6 text-on-primary-container group-hover:translate-x-2 transition-transform duration-150" />
            </button>
            <button 
              onClick={() => onNavigate('catalogue')}
              className="group flex items-center justify-between py-5 border-b border-on-primary-container/20 text-left cursor-pointer transition-colors duration-150 hover:bg-white/5 px-2 rounded-none"
            >
              <span className="font-sans text-2xl md:text-3xl uppercase tracking-tighter text-on-primary">Simple Price List (Rands)</span>
              <ChevronRight className="w-6 h-6 text-on-primary-container group-hover:translate-x-2 transition-transform duration-150" />
            </button>
            <button 
              onClick={() => onNavigate('projects')}
              className="group flex items-center justify-between py-5 border-b border-on-primary-container/20 text-left cursor-pointer transition-colors duration-150 hover:bg-white/5 px-2 rounded-none"
            >
              <span className="font-sans text-2xl md:text-3xl uppercase tracking-tighter text-on-primary">Client Installations</span>
              <ChevronRight className="w-6 h-6 text-on-primary-container group-hover:translate-x-2 transition-transform duration-150" />
            </button>
            <button 
              onClick={() => onNavigate('inquiry')}
              className="group flex items-center justify-between py-5 border-b border-on-primary-container/20 text-left cursor-pointer transition-colors duration-150 hover:bg-white/5 px-2 rounded-none"
            >
              <span className="font-sans text-2xl md:text-3xl uppercase tracking-tighter text-on-primary">Request A Quotation</span>
              <ChevronRight className="w-6 h-6 text-on-primary-container group-hover:translate-x-2 transition-transform duration-150" />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Projects with client focus */}
      <section className="py-6 max-w-7xl mx-auto px-4 md:px-12 overflow-hidden">
        <div className="mb-8">
          <h3 className="font-mono text-xs uppercase text-secondary tracking-widest mb-1.5">Our Installations</h3>
          <h2 className="font-sans text-3xl font-bold uppercase tracking-tight text-primary">Beautiful Homes We've Upgraded</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project Card 1 */}
          <div className="border border-outline-variant bg-surface-container-lowest flex flex-col group hover:border-primary transition-colors duration-200">
            <div className="h-64 md:h-80 overflow-hidden relative">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ 
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAkeibdDXwr-FJES_Tfr8yzaZ9vOw2-EJUYfr38Mhk58vJUnimovxkMIuiXqW3f6w7pb36hQO4xuAqeRf3qn7aezq0CsrWs1jDKkdfHKWxVo7e1r3Ml_NuSJvJpe0jLnMOPxXu4p6StVW2_vJ7YmzY_oSFKW09Y6kLKJFMjhLu071RAsGkOw7c4jm0n9aKVMuoA8zdrMxPi9Nt6bmD8-jZAVr9GFyDSvLmS1VHiOVS60qenOea1nO7KwjD6a48tupnpnY-qXza_gMHL')`
                }}
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <p className="font-mono text-[10px] text-secondary uppercase tracking-wider mb-2">Location: Clifton, Cape Town</p>
                <h4 className="font-sans text-xl uppercase font-bold mb-4 text-primary">Coastal Glass Pivot Door</h4>
              </div>
              <button 
                onClick={() => onNavigate('projects')}
                className="flex items-center text-secondary hover:text-primary transition-colors duration-150 w-full mt-2 group"
              >
                <span className="font-mono text-xs font-bold tracking-widest uppercase">VIEW DETAILS</span>
                <div className="flex-grow border-b border-dotted border-outline-variant mx-3 mb-1"></div>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="border border-outline-variant bg-surface-container-lowest flex flex-col group hover:border-primary transition-colors duration-200">
            <div className="h-64 md:h-80 overflow-hidden relative">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ 
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBPSxtoyaS7-Fhsoz93O6OILuZPPx8lGNzgWbm1z-XniMR74Qu6C5qBV2SbE8FQtcEr--OZHPzjL6Zt_tplr4xOHyKwW9w6CF_p2e6GKeLuBwFxpHfTsT-mqxgN0vnAGCkUv5pZWZaBSsO8rMoyfHSdYBRLbuT1kwNRa0HT4p439mr_nbl_72q1-43q8Y1CZRriogukVEHYKHVQSDZSujJjACM7H8S-59_TSl3qVQ5KvNescoMiUNxDBlMty_jHjgu4RBc0oOE4x2OA')`
                }}
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <p className="font-mono text-[10px] text-secondary uppercase tracking-wider mb-2">Location: Sandton, Johannesburg</p>
                <h4 className="font-sans text-xl uppercase font-bold mb-4 text-primary">Vista Fold Patio Doors</h4>
              </div>
              <button 
                onClick={() => onNavigate('projects')}
                className="flex items-center text-secondary hover:text-primary transition-colors duration-150 w-full mt-2 group"
              >
                <span className="font-mono text-xs font-bold tracking-widest uppercase">VIEW DETAILS</span>
                <div className="flex-grow border-b border-dotted border-outline-variant mx-3 mb-1"></div>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Guarantees (Simplified and extremely client-oriented) */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 py-8 border-t border-outline-variant">
        <h3 className="font-sans text-2xl font-bold uppercase mb-8 tracking-tight text-primary">Our 100% Client Quality Promise</h3>
        <ul className="space-y-6 max-w-2xl">
          <li className="flex items-end justify-between">
            <span className="font-sans text-sm md:text-base text-on-surface uppercase tracking-wide">Approved Safety Glass</span>
            <div className="flex-grow border-b border-dotted border-outline-variant mx-3 mb-1.5"></div>
            <span className="font-mono text-sm md:text-base text-primary font-bold">SABS & SANS 10400 Certified</span>
          </li>
          <li className="flex items-end justify-between">
            <span className="font-sans text-sm md:text-base text-on-surface uppercase tracking-wide">Coastal Weather Proofing</span>
            <div className="flex-grow border-b border-dotted border-outline-variant mx-3 mb-1.5"></div>
            <span className="font-mono text-sm md:text-base text-primary font-bold">AAAMSA Storm Rated</span>
          </li>
          <li className="flex items-end justify-between">
            <span className="font-sans text-sm md:text-base text-on-surface uppercase tracking-wide">Workmanship Guarantee</span>
            <div className="flex-grow border-b border-dotted border-outline-variant mx-3 mb-1.5"></div>
            <span className="font-mono text-sm md:text-base text-primary font-bold">10-Year Full Warranty</span>
          </li>
        </ul>
      </section>
    </motion.div>
  );
}
