import { ShieldCheck, Heart, Award, CheckCircle } from 'lucide-react';

interface AboutViewProps {
  onNavigate: (tab: 'home' | 'about' | 'services' | 'projects' | 'catalogue' | 'contact' | 'inquiry') => void;
}

export default function AboutView({ onNavigate }: AboutViewProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-12 py-12 pb-24 space-y-16">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 bg-primary/5 text-primary border border-primary/10 px-3.5 py-1 text-xs font-mono font-bold tracking-widest uppercase">
          <Award className="w-3.5 h-3.5" />
          Our Heritage
        </div>
        <h2 className="font-sans text-4xl md:text-5xl font-bold uppercase tracking-tight text-primary">
          Premium Systems, Crafted For Life
        </h2>
        <p className="text-on-surface-variant text-base leading-relaxed">
          At Aluminium Designs, we believe your home deserves the finest materials. We design, manufacture, and install beautiful custom aluminium doors and windows that blend safety, luxury, and durability.
        </p>
      </div>

      {/* Two-Column Story Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative h-96 bg-surface-container-high border border-outline-variant overflow-hidden">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPSxtoyaS7-Fhsoz93O6OILuZPPx8lGNzgWbm1z-XniMR74Qu6C5qBV2SbE8FQtcEr--OZHPzjL6Zt_tplr4xOHyKwW9w6CF_p2e6GKeLuBwFxpHfTsT-mqxgN0vnAGCkUv5pZWZaBSsO8rMoyfHSdYBRLbuT1kwNRa0HT4p439mr_nbl_72q1-43q8Y1CZRriogukVEHYKHVQSDZSujJjACM7H8S-59_TSl3qVQ5KvNescoMiUNxDBlMty_jHjgu4RBc0oOE4x2OA" 
            alt="Aluminium Craftsmanship Workshop"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-black/65 backdrop-blur-md text-white font-mono text-xs px-4 py-2 font-bold border border-white/10 uppercase">
            SABS & AAAMSA Standard Compliant
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="font-sans text-2xl md:text-3xl font-bold uppercase tracking-tight text-primary">
            The Aluminium Designs Difference
          </h3>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Founded with a vision to redefine residential systems, Aluminium Designs has grown into a trusted name for homeowners across South Africa. We have moved away from confusing engineering jargon and complicated calculations to bring you an easy, transparent, and beautiful renovation experience.
          </p>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            We use only premium-grade, marine-compliant powder-coated aluminium alloys and energy-efficient glazing solutions. Every system we build is storm-tested to guarantee safety, extreme wind resistance, and perfect insulation.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="flex gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <div className="space-y-0.5">
                <h4 className="font-sans font-bold text-xs text-primary uppercase">100% Certified</h4>
                <p className="text-[11px] text-on-surface-variant">Conforms strictly to South African Bureau of Standards (SABS).</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Heart className="w-5 h-5 text-emerald-600 shrink-0" />
              <div className="space-y-0.5">
                <h4 className="font-sans font-bold text-xs text-primary uppercase">Made Local</h4>
                <p className="text-[11px] text-on-surface-variant">Manufactured by local South African artisans with meticulous quality checks.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values & Standards Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border border-outline-variant p-8 bg-surface-container-lowest space-y-4">
          <div className="w-10 h-10 border border-primary flex items-center justify-center font-mono font-black text-primary bg-primary/5 text-sm">
            01
          </div>
          <h4 className="font-sans font-bold text-lg text-primary uppercase">Uncompromising Quality</h4>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            We never cut corners on hardware or materials. From high-integrity sliding rollers to secure multi-point locks, we build for durability and smooth everyday operation.
          </p>
        </div>

        <div className="border border-outline-variant p-8 bg-surface-container-lowest space-y-4">
          <div className="w-10 h-10 border border-primary flex items-center justify-center font-mono font-black text-primary bg-primary/5 text-sm">
            02
          </div>
          <h4 className="font-sans font-bold text-lg text-primary uppercase">Hassle-Free Process</h4>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            No measurements? No worries. We send an experienced technical expert to your property to handle all sizing and configurations perfectly, with zero cost to you.
          </p>
        </div>

        <div className="border border-outline-variant p-8 bg-surface-container-lowest space-y-4">
          <div className="w-10 h-10 border border-primary flex items-center justify-center font-mono font-black text-primary bg-primary/5 text-sm">
            03
          </div>
          <h4 className="font-sans font-bold text-lg text-primary uppercase">Absolute Conformance</h4>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            All our glass is premium safety glass, and our profiles comply fully with SABS and AAAMSA wind-pressure tests to handle the unique South African elements.
          </p>
        </div>
      </div>

      {/* Trust Quote Banner */}
      <section className="bg-surface-container-low border border-outline-variant p-8 md:p-12 text-center space-y-4">
        <h3 className="font-sans text-xl md:text-2xl font-bold uppercase tracking-tight text-primary">
          "Our goal is simple: to make your home beautiful, safe, and premium."
        </h3>
        <p className="text-on-surface-variant text-xs font-mono uppercase tracking-widest text-secondary">
          - Aluminium Designs Engineering & Design Council
        </p>
      </section>
    </div>
  );
}
