import { useState, useMemo } from 'react';
import { 
  CheckCircle, 
  PenTool, 
  ShieldCheck, 
  ArrowRight, 
  Search, 
  Phone, 
  MessageCircle, 
  Wrench, 
  Shield, 
  Home, 
  Sparkles,
  X,
  Send
} from 'lucide-react';
import { allCoreServices } from '../data/services/index';
import { ServiceObject } from '../types/service';
import { ActiveTab } from '../types';
import { LeadCaptureEngine } from '../logic/leadCaptureEngine';
import { LeadUserInput } from '../types/lead';

interface ServicesViewProps {
  onNavigate: (tab: ActiveTab) => void;
}

export default function ServicesView({ onNavigate }: ServicesViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Lead Capture Modal States for Quote and WhatsApp
  const [activeModal, setActiveModal] = useState<{
    isOpen: boolean;
    service: ServiceObject | null;
    actionType: 'QUOTE' | 'WHATSAPP';
  }>({
    isOpen: false,
    service: null,
    actionType: 'QUOTE'
  });

  const [formData, setFormData] = useState<LeadUserInput>({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    suburbOrArea: '',
    cityOrTown: 'Johannesburg / Gauteng',
    serviceRequested: '',
    projectDescription: '',
    preferredContactMethod: 'phone'
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [generatedTicketId, setGeneratedTicketId] = useState<string>('');

  // Categories list
  const categories = [
    { id: 'all', label: 'ALL SERVICES', count: allCoreServices.length },
    { id: 'Aluminium Doors', label: 'ALUMINIUM DOORS', count: allCoreServices.filter(s => s.category === 'Aluminium Doors').length },
    { id: 'Windows & Glass', label: 'WINDOWS & GLASS', count: allCoreServices.filter(s => s.category === 'Windows & Glass').length },
    { id: 'Steel Security', label: 'STEEL SECURITY', count: allCoreServices.filter(s => s.category === 'Steel Security').length },
    { id: 'Steel Structures', label: 'STEEL STRUCTURES', count: allCoreServices.filter(s => s.category === 'Steel Structures').length },
    { id: 'Outdoor & Enclosures', label: 'OUTDOOR & PATIO', count: allCoreServices.filter(s => s.category === 'Outdoor & Enclosures').length },
    { id: 'Repairs & Maintenance', label: 'REPAIRS & FIXES', count: allCoreServices.filter(s => s.category === 'Repairs & Maintenance').length },
    { id: 'Steel Fabrication & Repairs', label: 'FABRICATION & WELDING', count: allCoreServices.filter(s => s.category === 'Steel Fabrication & Repairs').length }
  ];

  // Filtered services
  const filteredServices = useMemo(() => {
    return allCoreServices.filter((srv) => {
      const matchesCategory = selectedCategory === 'all' || srv.category.toLowerCase() === selectedCategory.toLowerCase();
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query || 
        srv.serviceName.toLowerCase().includes(query) ||
        srv.tagline.toLowerCase().includes(query) ||
        srv.category.toLowerCase().includes(query) ||
        srv.overview.paragraphs.some(p => p.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Open modal handlers
  const handleOpenQuoteModal = (service: ServiceObject) => {
    setFormData(prev => ({
      ...prev,
      serviceRequested: service.serviceName,
      preferredContactMethod: 'phone'
    }));
    setFormErrors({});
    setSubmitSuccess(false);
    setActiveModal({
      isOpen: true,
      service,
      actionType: 'QUOTE'
    });
  };

  const handleOpenWhatsAppModal = (service: ServiceObject) => {
    setFormData(prev => ({
      ...prev,
      serviceRequested: service.serviceName,
      preferredContactMethod: 'whatsapp'
    }));
    setFormErrors({});
    setSubmitSuccess(false);
    setActiveModal({
      isOpen: true,
      service,
      actionType: 'WHATSAPP'
    });
  };

  const handleCloseModal = () => {
    setActiveModal({ isOpen: false, service: null, actionType: 'QUOTE' });
    setSubmitSuccess(false);
  };

  // Form submission handler
  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeModal.service) return;

    if (activeModal.actionType === 'QUOTE') {
      const result = LeadCaptureEngine.processQuotationSubmission(formData, {
        pageUrl: `/services/${activeModal.service.slug}`,
        serviceSlug: activeModal.service.slug,
        locationSlug: 'gauteng',
        suburbSlug: formData.suburbOrArea.toLowerCase().replace(/[^a-z0-9]+/g, '-')
      });

      if (!result.success && result.validationErrors) {
        setFormErrors(result.validationErrors);
        return;
      }

      if (result.success && result.leadPayload) {
        setGeneratedTicketId(result.leadPayload.leadId);
        setSubmitSuccess(true);
      }
    } else {
      // WhatsApp Flow: Requires user details first, then dispatches WhatsApp
      const result = LeadCaptureEngine.processWhatsAppSubmission(formData, {
        pageUrl: `/services/${activeModal.service.slug}`,
        serviceName: activeModal.service.serviceName,
        serviceSlug: activeModal.service.slug,
        locationSlug: 'gauteng',
        cityName: 'Gauteng',
        suburbSlug: formData.suburbOrArea.toLowerCase().replace(/[^a-z0-9]+/g, '-')
      });

      if (!result.success && result.validationErrors) {
        setFormErrors(result.validationErrors);
        return;
      }

      if (result.success && result.dispatchPayload) {
        setGeneratedTicketId(result.dispatchPayload.leadTicketId);
        setSubmitSuccess(true);
        // Open WhatsApp window with pre-filled lead details
        window.open(result.dispatchPayload.whatsappUrl, '_blank');
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-12 py-12 pb-24 space-y-12">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 bg-primary/5 text-primary border border-primary/10 px-3.5 py-1 text-xs font-mono font-bold tracking-widest uppercase">
          <PenTool className="w-3.5 h-3.5" />
          Complete Product & Service Directory
        </div>
        <h2 className="font-sans text-4xl md:text-5xl font-bold uppercase tracking-tight text-primary">
          Our Full Services & Products
        </h2>
        <p className="text-on-surface-variant text-base leading-relaxed">
          From custom aluminium sliding and stacking doors to heavy-duty steel burglar bars, driveway gates, carports, and repairs. We manufacture and install everything across Gauteng.
        </p>
      </div>

      {/* Search & Filter Controls */}
      <div className="space-y-6">
        {/* Search Bar */}
        <div className="max-w-md mx-auto relative">
          <Search className="w-4 h-4 text-secondary absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input 
            type="text"
            placeholder="Search products (e.g. windows, burglar bars, carports)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-xs font-mono bg-surface border border-outline-variant rounded-none outline-none focus:border-primary text-primary"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary hover:text-primary text-xs"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 border-b border-outline-variant pb-4">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-3.5 py-2 text-xs font-mono font-bold tracking-wider rounded-none cursor-pointer border transition-all duration-150 flex items-center gap-1.5 ${
                selectedCategory === tab.id
                  ? 'bg-primary text-on-primary border-primary'
                  : 'bg-surface hover:bg-surface-container border-outline-variant text-on-surface'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-none ${
                selectedCategory === tab.id ? 'bg-white/20 text-white' : 'bg-surface-container text-secondary'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Services Count Banner */}
      <div className="flex justify-between items-center text-xs font-mono text-secondary border-b border-outline-variant/60 pb-3">
        <span>SHOWING {filteredServices.length} OF {allCoreServices.length} SERVICES</span>
        <span>GAUTENG PROVINCE COVERAGE</span>
      </div>

      {/* Services Grid (All 29 Services) */}
      {filteredServices.length === 0 ? (
        <div className="text-center py-16 border border-outline-variant bg-surface-container-lowest p-8 space-y-4">
          <p className="text-sm font-mono text-secondary">No services found matching "{searchQuery}".</p>
          <button 
            onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
            className="px-4 py-2 bg-primary text-on-primary text-xs font-mono font-bold uppercase cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((srv, idx) => (
            <div 
              key={srv.id}
              className="border border-outline-variant bg-surface-container-lowest p-6 flex flex-col justify-between hover:border-primary transition-all duration-200 group shadow-sm hover:shadow-md"
            >
              <div className="space-y-4">
                {/* Header Badge */}
                <div className="flex justify-between items-start">
                  <span className="font-mono text-[10px] text-secondary font-black bg-surface-container px-2.5 py-0.5 border border-outline-variant">
                    {srv.category.toUpperCase()}
                  </span>
                  <span className="font-mono text-[10px] text-primary font-bold">
                    #{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div className="space-y-1.5">
                  <h3 className="font-sans text-xl font-bold uppercase text-primary tracking-tight group-hover:text-primary transition-colors">
                    {srv.serviceName}
                  </h3>
                  <p className="text-secondary font-mono text-xs italic line-clamp-1">
                    "{srv.tagline}"
                  </p>
                </div>

                {/* Overview Text */}
                <p className="text-on-surface-variant text-xs leading-relaxed line-clamp-3">
                  {srv.overview.paragraphs[0]}
                </p>

                {/* Key Features Bullet Points */}
                <ul className="space-y-1.5 pt-3 border-t border-outline-variant/60">
                  {srv.features.slice(0, 3).map((feat) => (
                    <li key={feat.id} className="flex items-center gap-2 text-xs text-on-surface">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="font-sans font-medium text-[11px] line-clamp-1">{feat.title}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons (Strict User Details Gating) */}
              <div className="pt-6 mt-4 border-t border-outline-variant/60 flex flex-col sm:flex-row gap-2">
                <button
                  onClick={() => handleOpenQuoteModal(srv)}
                  className="flex-1 bg-primary hover:bg-secondary text-on-primary font-mono text-[11px] font-bold uppercase tracking-wider py-2.5 px-3 rounded-none transition-colors cursor-pointer border border-primary hover:border-secondary flex items-center justify-center gap-1.5"
                >
                  Get Quote
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => handleOpenWhatsAppModal(srv)}
                  className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-mono text-[11px] font-bold uppercase tracking-wider py-2.5 px-3 rounded-none transition-colors cursor-pointer flex items-center justify-center gap-1.5 shrink-0"
                  aria-label="WhatsApp Quote"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* SABS Standards Assurance */}
      <div className="border border-outline-variant bg-surface-container-low p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase font-bold tracking-widest">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            AAAMSA & SABS CONFORMANCE GUARANTEED
          </div>
          <h3 className="font-sans text-2xl uppercase font-bold text-primary tracking-tight leading-none">
            Built Tough for Gauteng Homes & Businesses
          </h3>
          <p className="text-on-surface-variant text-xs leading-relaxed">
            All aluminium profiles and steel structures undergo rigorous deflection, weld strength, and water-resistance testing. We manufacture all materials locally to ensure they withstand Highveld hail storms, torrential rain, and intense summer sun.
          </p>
        </div>

        <button
          onClick={() => onNavigate('inquiry')}
          className="bg-primary hover:bg-secondary text-on-primary font-mono text-xs font-bold uppercase tracking-wider px-6 py-4.5 rounded-none shrink-0 transition-colors cursor-pointer border border-primary hover:border-secondary flex items-center gap-2.5"
        >
          Request Custom Quotation
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* ========================================================================= */}
      {/* LEAD CAPTURE MODAL (Gated Details Collection for Quotes & WhatsApp) */}
      {/* ========================================================================= */}
      {activeModal.isOpen && activeModal.service && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg bg-surface border-2 border-primary shadow-2xl p-6 md:p-8 space-y-6">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-secondary hover:text-primary p-1 cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div>
              <div className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 mb-2">
                {activeModal.actionType === 'WHATSAPP' ? 'WHATSAPP DIRECT ROUTING' : 'FREE ON-SITE QUOTATION'}
              </div>
              <h3 className="font-sans text-2xl font-bold uppercase text-primary">
                {activeModal.service.serviceName}
              </h3>
              <p className="text-xs text-on-surface-variant mt-1">
                {activeModal.actionType === 'WHATSAPP'
                  ? 'Please enter your details below so we can connect you directly with our local installation team on WhatsApp.'
                  : 'Please enter your contact details below to request a free on-site measuring and quotation in Gauteng.'}
              </p>
            </div>

            {submitSuccess ? (
              <div className="bg-surface-container-low border border-emerald-300 p-6 space-y-4 text-center">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto rounded-none border border-emerald-400">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-sans text-lg font-bold uppercase text-primary">
                    {activeModal.actionType === 'WHATSAPP' ? 'Connecting to WhatsApp...' : 'Quotation Request Received!'}
                  </h4>
                  <p className="font-mono text-xs text-secondary">
                    Reference ID: <strong className="text-primary">{generatedTicketId}</strong>
                  </p>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  {activeModal.actionType === 'WHATSAPP'
                    ? 'Your WhatsApp chat has opened with your pre-filled inquiry. Our consultant will respond shortly.'
                    : 'Our team will contact you within 24 business hours to arrange a 100% free on-site measurement.'}
                </p>
                <button
                  onClick={handleCloseModal}
                  className="w-full bg-primary hover:bg-secondary text-on-primary py-3 font-mono text-xs font-bold uppercase cursor-pointer transition-colors"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleModalSubmit} className="space-y-4">
                {/* Full Name */}
                <div className="space-y-1">
                  <label className="font-mono text-[10px] uppercase font-bold text-secondary">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sipho Khumalo"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full p-2.5 bg-surface-container-lowest border border-outline-variant text-xs font-sans text-primary outline-none focus:border-primary rounded-none"
                  />
                  {formErrors.fullName && (
                    <p className="text-[10px] text-red-600 font-mono">{formErrors.fullName}</p>
                  )}
                </div>

                {/* Phone Number */}
                <div className="space-y-1">
                  <label className="font-mono text-[10px] uppercase font-bold text-secondary">
                    WhatsApp / Contact Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 082 123 4567"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    className="w-full p-2.5 bg-surface-container-lowest border border-outline-variant text-xs font-mono text-primary outline-none focus:border-primary rounded-none"
                  />
                  {formErrors.phoneNumber && (
                    <p className="text-[10px] text-red-600 font-mono">{formErrors.phoneNumber}</p>
                  )}
                </div>

                {/* Suburb / Town */}
                <div className="space-y-1">
                  <label className="font-mono text-[10px] uppercase font-bold text-secondary">
                    Your Suburb / Town (Gauteng) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Katlehong, Sandton, Centurion, Midrand"
                    value={formData.suburbOrArea}
                    onChange={(e) => setFormData({ ...formData, suburbOrArea: e.target.value })}
                    className="w-full p-2.5 bg-surface-container-lowest border border-outline-variant text-xs font-sans text-primary outline-none focus:border-primary rounded-none"
                  />
                  {formErrors.suburbOrArea && (
                    <p className="text-[10px] text-red-600 font-mono">{formErrors.suburbOrArea}</p>
                  )}
                </div>

                {/* Project Description */}
                <div className="space-y-1">
                  <label className="font-mono text-[10px] uppercase font-bold text-secondary">
                    Project Notes / Sizes (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Need 4 bedroom windows replaced, or custom sliding gate..."
                    value={formData.projectDescription}
                    onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                    className="w-full p-2.5 bg-surface-container-lowest border border-outline-variant text-xs font-sans text-primary outline-none focus:border-primary rounded-none resize-none"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className={`w-full py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-white transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    activeModal.actionType === 'WHATSAPP'
                      ? 'bg-[#25D366] hover:bg-[#20ba5a]'
                      : 'bg-primary hover:bg-secondary'
                  }`}
                >
                  {activeModal.actionType === 'WHATSAPP' ? (
                    <>
                      <MessageCircle className="w-4 h-4" />
                      Continue to WhatsApp Chat
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit Free Quote Request
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
