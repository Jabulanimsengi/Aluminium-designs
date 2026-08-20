import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ServicesView from './components/ServicesView';
import ProjectsView from './components/ProjectsView';
import CatalogueView from './components/CatalogueView';
import ContactView from './components/ContactView';
import InquiryView from './components/InquiryView';
import { ActiveTab } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [prefilledSpecs, setPrefilledSpecs] = useState<{
    projectType: string;
    width: number;
    height: number;
    finish: string;
    glassSpec: string;
    alloyGrade: string;
  } | null>(null);
  const [showWhatsAppTip, setShowWhatsAppTip] = useState(true);

  const handleNavigate = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClearPrefilledSpecs = () => {
    setPrefilledSpecs(null);
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface font-sans flex flex-col justify-between selection:bg-tertiary-fixed selection:text-on-tertiary-fixed">
      {/* Top Header */}
      <Header activeTab={activeTab} onNavigate={handleNavigate} />

      {/* Main Container */}
      <main className="flex-grow pt-16 pb-20 md:pb-8">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="w-full"
            >
              <HomeView onNavigate={handleNavigate} />
            </motion.div>
          )}
          {activeTab === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="w-full"
            >
              <AboutView onNavigate={handleNavigate} />
            </motion.div>
          )}
          {activeTab === 'services' && (
            <motion.div
              key="services"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="w-full"
            >
              <ServicesView onNavigate={handleNavigate} />
            </motion.div>
          )}
          {activeTab === 'projects' && (
            <motion.div
              key="projects"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="w-full"
            >
              <ProjectsView onNavigate={handleNavigate} />
            </motion.div>
          )}
          {activeTab === 'catalogue' && (
            <motion.div
              key="catalogue"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="w-full"
            >
              <CatalogueView onNavigate={handleNavigate} />
            </motion.div>
          )}
          {activeTab === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="w-full"
            >
              <ContactView />
            </motion.div>
          )}
          {activeTab === 'inquiry' && (
            <motion.div
              key="inquiry"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="w-full"
            >
              <InquiryView
                prefilledSpecs={prefilledSpecs}
                clearPrefilledSpecs={handleClearPrefilledSpecs}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Floating WhatsApp Quick-Chat Widget */}
      <div className="fixed bottom-20 right-4 md:bottom-8 md:right-8 z-40 flex flex-col items-end gap-2 max-w-[280px]">
        <AnimatePresence>
          {showWhatsAppTip && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white text-black border border-outline-variant p-3.5 shadow-2xl flex flex-col gap-1.5 relative rounded-none select-none text-left"
            >
              <button 
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setShowWhatsAppTip(false); }}
                className="absolute top-1 right-1 p-0.5 text-black/50 hover:text-black hover:bg-black/5 cursor-pointer transition-colors"
                aria-label="Dismiss message"
              >
                <X className="w-3.5 h-3.5" />
              </button>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-pulse" />
                <span className="font-mono text-[9px] uppercase tracking-widest text-black/60 font-bold">Online Assistance</span>
              </div>
              <p className="font-sans text-[11px] font-medium leading-relaxed text-black/80 pr-2">
                Need a free measurement & price check? Speak directly with our design team.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.a
          href="https://wa.me/27821234567?text=Hello%20Aluminium%20Designs%2C%20I%20would%20like%20to%20request%20a%20free%20measurement%20and%20quotation%20for%20my%20home."
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-[#25D366] text-white pl-4 pr-5 h-12 rounded-full shadow-2xl transition-all cursor-pointer hover:bg-[#20ba5a] font-mono text-[11px] font-bold uppercase tracking-wider"
          aria-label="Chat on WhatsApp"
        >
          <svg 
            className="w-5 h-5 fill-current" 
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.742.002-2.583-1.002-5.01-2.825-6.83-1.824-1.822-4.25-2.822-6.83-2.824-5.432 0-9.856 4.37-9.86 9.741-.001 1.705.452 3.37 1.31 4.833l-.95 3.473 3.567-.936zm9.513-5.345c-.263-.118-1.55-.763-1.787-.85-.237-.087-.41-.129-.58.129-.17.258-.66.85-.808 1.023-.15.172-.296.19-.558.073-.263-.117-1.11-.408-2.115-1.3-.782-.696-1.309-1.558-1.463-1.815-.154-.257-.016-.397.116-.514.118-.106.263-.306.394-.459.13-.153.174-.258.262-.43.088-.172.044-.323-.022-.453-.066-.13-.58-1.393-.797-1.91-.21-.51-.422-.44-.58-.448-.152-.008-.328-.01-.504-.01-.176 0-.462.066-.704.329-.242.263-.923.901-.923 2.197 0 1.296.945 2.548 1.077 2.723.132.175 1.86 2.839 4.5 3.977.63.272 1.12.434 1.502.555.632.2 1.21.171 1.666.103.507-.076 1.55-.632 1.768-1.242.217-.61.217-1.135.152-1.242-.065-.107-.237-.17-.5-.288z"/>
          </svg>
          <span className="whitespace-nowrap select-none font-bold">Chat with Expert</span>
        </motion.a>
      </div>

      {/* Structured Footer */}
      <footer className="bg-inverse-surface text-inverse-on-surface border-t border-outline-variant py-10 px-4 md:px-12 text-center flex flex-col items-center gap-6">
        <h2 
          onClick={() => handleNavigate('home')}
          className="font-sans text-2xl font-black tracking-widest text-white select-none cursor-pointer"
        >
          ALUMINIUM DESIGNS
        </h2>
        
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-mono">
          <button
            onClick={() => handleNavigate('about')}
            className="text-outline-variant hover:text-white uppercase transition-colors cursor-pointer"
          >
            About Us
          </button>
          <button
            onClick={() => handleNavigate('services')}
            className="text-outline-variant hover:text-white uppercase transition-colors cursor-pointer"
          >
            Services
          </button>
          <button
            onClick={() => handleNavigate('projects')}
            className="text-outline-variant hover:text-white uppercase transition-colors cursor-pointer"
          >
            Gallery
          </button>
          <button
            onClick={() => handleNavigate('catalogue')}
            className="text-outline-variant hover:text-white uppercase transition-colors cursor-pointer"
          >
            Prices
          </button>
          <button
            onClick={() => handleNavigate('contact')}
            className="text-outline-variant hover:text-white uppercase transition-colors cursor-pointer"
          >
            Contact
          </button>
        </nav>
        
        <p className="font-mono text-[10px] text-outline-variant uppercase max-w-md leading-relaxed">
          © 2026 ALUMINIUM DESIGNS PREMIUM SYSTEMS. ALL RIGHTS RESERVED. <br />
          PROUD MEMBER OF AAAMSA & SABS CONFORMANCE STANDARDS
        </p>
      </footer>

      {/* Bottom Nav Bar */}
      <BottomNav activeTab={activeTab} onNavigate={handleNavigate} />
    </div>
  );
}
