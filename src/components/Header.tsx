import { useState } from 'react';
import { Menu, X, Home, Info, Hammer, Layers, Tag, Phone, ClipboardCheck } from 'lucide-react';
import { ActiveTab } from '../types';

interface HeaderProps {
  activeTab?: ActiveTab;
  onNavigate: (tab: ActiveTab) => void;
}

export default function Header({ activeTab, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (tab: ActiveTab) => {
    setIsMenuOpen(false);
    onNavigate(tab);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About Us', icon: Info },
    { id: 'services', label: 'Services', icon: Hammer },
    { id: 'projects', label: 'Gallery', icon: Layers },
    { id: 'catalogue', label: 'Prices', icon: Tag },
    { id: 'contact', label: 'Contact Us', icon: Phone },
  ] as const;

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-surface border-b border-outline-variant flex justify-between items-center px-4 md:px-12 h-16">
        {/* Left Side: Logo & Mobile Hamburger */}
        <div className="flex items-center gap-3 z-10">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="p-1.5 hover:bg-surface-container transition-colors duration-150 rounded-none cursor-pointer text-primary md:hidden"
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
          
          <span 
            onClick={() => handleLinkClick('home')}
            className="font-sans text-lg md:text-xl font-bold tracking-wider text-primary cursor-pointer select-none"
          >
            Aluminium Designs
          </span>
        </div>

        {/* Desktop Centered Navigation */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleLinkClick(item.id)}
              className={`text-[11px] font-mono font-bold tracking-widest uppercase transition-colors py-1 px-1.5 cursor-pointer border-b-2 hover:text-primary ${
                activeTab === item.id 
                  ? 'text-primary border-primary' 
                  : 'text-secondary border-transparent'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        
        {/* Right Side: Primary Call To Action */}
        <div className="z-10">
          <button 
            onClick={() => handleLinkClick('inquiry')}
            className="bg-primary text-on-primary hover:bg-secondary border border-primary hover:border-secondary px-5 py-2 font-mono text-xs font-semibold tracking-wider transition-all duration-150 rounded-none active:opacity-80 cursor-pointer"
          >
            QUOTATION
          </button>
        </div>
      </header>

      {/* Mobile Navigation Sidebar Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] flex">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Sidebar Drawer Panel */}
          <div className="relative flex flex-col w-full max-w-xs bg-surface border-r border-outline-variant h-full p-6 space-y-8 z-10 shadow-2xl animate-slide-in">
            <div className="flex justify-between items-center pb-4 border-b border-outline-variant">
              <span className="font-sans text-base font-black tracking-wider text-primary">Aluminium Designs Menu</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-1 hover:bg-surface-container text-primary transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isSelected = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className={`flex items-center gap-4 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider transition-colors rounded-none cursor-pointer ${
                      isSelected 
                        ? 'bg-primary/5 text-primary border-l-2 border-primary' 
                        : 'text-secondary hover:bg-surface-container'
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0 text-secondary" />
                    {item.label}
                  </button>
                );
              })}
              
              {/* Extra Quotation Button in mobile navigation */}
              <button
                onClick={() => handleLinkClick('inquiry')}
                className={`flex items-center gap-4 px-4 py-3 text-left text-xs font-bold uppercase tracking-wider transition-colors rounded-none cursor-pointer bg-primary/10 text-primary border-l-2 border-primary mt-2`}
              >
                <ClipboardCheck className="w-4 h-4 shrink-0 text-primary" />
                Get Custom Quote
              </button>
            </nav>

            <div className="pt-8 border-t border-outline-variant space-y-4 text-xs text-on-surface-variant">
              <p className="font-mono text-[10px] uppercase tracking-wider text-secondary font-bold">
                Quality Conformance
              </p>
              <p className="leading-relaxed text-[11px]">
                Our luxury residential systems are SABS & AAAMSA storm-tested to guarantee safety and beauty for your South African home.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
