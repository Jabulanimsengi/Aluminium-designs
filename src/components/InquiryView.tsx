import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Inquiry } from '../types';
import { ClipboardCheck, ArrowRight, AlertCircle, Trash2, FileOutput, ShieldCheck, Phone, MapPin, Sparkles, HelpCircle } from 'lucide-react';

interface InquiryViewProps {
  prefilledSpecs: {
    projectType: string;
    width: number;
    height: number;
    finish: string;
    glassSpec: string;
    alloyGrade: string;
  } | null;
  clearPrefilledSpecs: () => void;
}

export default function InquiryView({ prefilledSpecs, clearPrefilledSpecs }: InquiryViewProps) {
  // Input states
  const [projectType, setProjectType] = useState<string>('Pivot Door');
  const [houseArea, setHouseArea] = useState<string>('Front Entrance / Grand Door');
  const [finish, setFinish] = useState<string>('Matte Black Powder Coated');
  const [glassSpec, setGlassSpec] = useState<string>('Double Glazed Low-E');
  const [sizeReference, setSizeReference] = useState<string>('I don\'t know - please send a professional to measure!');

  // Client info state
  const [clientName, setClientName] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [clientCity, setClientCity] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  // Form submission / list states
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [submittedInquiry, setSubmittedInquiry] = useState<Inquiry | null>(null);
  const [showHistory, setShowHistory] = useState<boolean>(false);

  // Load inquiries from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('aluminiumdesigns_inquiries');
    if (saved) {
      try {
        setInquiries(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse inquiries', e);
      }
    }
  }, []);

  // Sync pre-filled specs if they arrive (from old code fallback or legacy references)
  useEffect(() => {
    if (prefilledSpecs) {
      setProjectType(prefilledSpecs.projectType);
      setFinish(prefilledSpecs.finish);
      setGlassSpec(prefilledSpecs.glassSpec);
      clearPrefilledSpecs(); // consume it
    }
  }, [prefilledSpecs]);

  const handleInquirySubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientEmail || !clientPhone || !clientCity) {
      alert('Please fill in your Name, Email, Phone, and Suburb to request a quotation.');
      return;
    }

    const newInquiry: Inquiry = {
      id: `ALU-REQ-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toLocaleDateString('en-ZA', { month: 'short', day: 'numeric', year: 'numeric' }),
      clientName,
      clientEmail,
      clientPhone,
      clientCity,
      projectType,
      finish,
      glassSpec,
      sizeReference,
      alloyGrade: '6063-T6', // kept internally for type safety
      status: 'New Request',
      notes: notes ? `${notes} (Where in house: ${houseArea})` : `Where in house: ${houseArea}`
    };

    const updated = [newInquiry, ...inquiries];
    setInquiries(updated);
    localStorage.setItem('aluminiumdesigns_inquiries', JSON.stringify(updated));
    setSubmittedInquiry(newInquiry);

    // Reset inputs
    setClientName('');
    setClientEmail('');
    setClientPhone('');
    setClientCity('');
    setNotes('');
  };

  const loadPastInquiry = (past: Inquiry) => {
    setProjectType(past.projectType);
    setFinish(past.finish);
    setGlassSpec(past.glassSpec);
    if (past.sizeReference) setSizeReference(past.sizeReference);
    setShowHistory(false);
  };

  const deleteInquiry = (id: string) => {
    const updated = inquiries.filter(i => i.id !== id);
    setInquiries(updated);
    localStorage.setItem('aluminiumdesigns_inquiries', JSON.stringify(updated));
  };

  const exportInquiries = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(inquiries, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `Aluminium_Designs_Quotations_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-12 py-12 pb-24 space-y-12">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-outline-variant pb-6">
        <div>
          <h3 className="font-mono text-xs uppercase text-secondary tracking-widest mb-1.5">
            Quotation Request
          </h3>
          <h2 className="font-sans text-4xl font-bold uppercase tracking-tight text-primary">
            Request A Quotation
          </h2>
          <p className="text-on-surface-variant max-w-xl text-sm mt-2">
            No measurements? No problem! Tell us what you would like, and we will handle all the hard technical work and sizing for you.
          </p>
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={() => setShowHistory(!showHistory)}
            className="px-4 py-2 text-xs font-mono font-bold tracking-wider rounded-none cursor-pointer border border-outline-variant bg-surface-container-low hover:bg-surface-container transition-all"
          >
            {showHistory ? 'SHOW REQUEST FORM' : `VIEW SENT QUOTATIONS (${inquiries.length})`}
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {showHistory ? (
          /* Past Quotations Screen */
          <motion.div
            key="history"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-sans text-xl font-bold uppercase text-primary">Sent Quotation Requests</h3>
              {inquiries.length > 0 && (
                <button
                  onClick={exportInquiries}
                  className="flex items-center gap-2 text-xs font-mono font-bold text-secondary hover:text-primary transition-colors cursor-pointer border border-outline-variant px-3 py-1.5 rounded-none bg-surface"
                >
                  <FileOutput className="w-3.5 h-3.5" />
                  DOWNLOAD LIST
                </button>
              )}
            </div>

            {inquiries.length === 0 ? (
              <div className="border border-outline-variant p-12 text-center bg-surface-container-lowest">
                <AlertCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-sans text-lg font-bold uppercase text-primary mb-1">No quotation requests found</h4>
                <p className="text-xs text-on-surface-variant max-w-md mx-auto leading-relaxed">
                  You have not submitted any quotation requests yet. Return to the form to easily request a free measurement and price list.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {inquiries.map((past) => (
                  <div 
                    key={past.id}
                    className="border border-outline-variant hover:border-primary transition-colors bg-surface-container-lowest p-6 flex flex-col md:flex-row justify-between gap-6"
                  >
                    <div className="space-y-3 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs font-bold text-primary bg-surface-container border border-outline-variant px-2.5 py-0.5">
                          {past.id}
                        </span>
                        <span className="font-mono text-[10px] text-secondary">
                          {past.date}
                        </span>
                        <span className="font-mono text-[10px] bg-amber-50 text-amber-800 border border-amber-300 px-2.5 py-0.5 font-bold uppercase">
                          Awaiting Measurement Appointment
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-2 gap-x-4">
                        <div className="text-xs">
                          <span className="text-on-surface-variant">Client Name:</span> <strong className="text-primary">{past.clientName}</strong>
                        </div>
                        <div className="text-xs">
                          <span className="text-on-surface-variant">Product:</span> <strong className="text-primary">{past.projectType}</strong>
                        </div>
                        <div className="text-xs">
                          <span className="text-on-surface-variant">Size Option:</span> <strong className="text-primary">{past.sizeReference}</strong>
                        </div>
                        <div className="text-xs">
                          <span className="text-on-surface-variant">Suburb/City:</span> <strong className="text-primary">{past.clientCity}</strong>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 border-t md:border-t-0 pt-4 md:pt-0 border-outline-variant/50">
                      <div className="flex gap-2">
                        <button
                          onClick={() => loadPastInquiry(past)}
                          className="px-3 py-2 text-xs font-mono font-bold tracking-wider uppercase border border-primary hover:bg-primary hover:text-on-primary bg-surface text-primary rounded-none transition-all cursor-pointer"
                        >
                          LOAD Specs
                        </button>
                        <button
                          onClick={() => deleteInquiry(past.id)}
                          className="p-2 border border-outline-variant hover:border-red-600 hover:bg-red-50 text-secondary hover:text-red-600 rounded-none transition-colors cursor-pointer"
                          aria-label="Delete Quotation"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ) : submittedInquiry ? (
          /* Submission Receipt / Success Screen */
          <motion.div
            key="receipt"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="border-2 border-primary bg-surface-container-lowest p-8 md:p-12 space-y-8"
          >
            <div className="flex items-start justify-between border-b border-outline-variant pb-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-emerald-600 mb-1">
                  <ShieldCheck className="w-6 h-6" />
                  <span className="font-sans font-bold text-sm uppercase tracking-wide">Request Received</span>
                </div>
                <h3 className="font-sans text-2xl md:text-3xl font-bold uppercase text-primary leading-none">
                  Your Quotation Request is Submitted
                </h3>
                <p className="font-mono text-xs text-secondary mt-1">
                  Reference: {submittedInquiry.id} | Date: {submittedInquiry.date}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-2">
              {/* Left Summary */}
              <div className="space-y-4">
                <h4 className="font-mono text-xs uppercase font-bold text-secondary border-b border-outline-variant/50 pb-1.5">Your Chosen Style Preferences</h4>
                <ul className="space-y-2.5">
                  <li className="flex justify-between text-xs">
                    <span className="text-on-surface-variant">Product Category:</span>
                    <strong className="text-primary font-mono">{submittedInquiry.projectType}</strong>
                  </li>
                  <li className="flex justify-between text-xs">
                    <span className="text-on-surface-variant">Size Reference Chosen:</span>
                    <strong className="text-primary font-mono text-right max-w-[200px] leading-tight">{submittedInquiry.sizeReference}</strong>
                  </li>
                  <li className="flex justify-between text-xs">
                    <span className="text-on-surface-variant">Aluminium Finish Color:</span>
                    <strong className="text-primary font-mono text-right max-w-[200px] leading-tight">{submittedInquiry.finish}</strong>
                  </li>
                  <li className="flex justify-between text-xs">
                    <span className="text-on-surface-variant">Glass Option:</span>
                    <strong className="text-primary font-mono text-right max-w-[200px] leading-tight">{submittedInquiry.glassSpec}</strong>
                  </li>
                </ul>
              </div>

              {/* Right Summary */}
              <div className="space-y-4">
                <h4 className="font-mono text-xs uppercase font-bold text-secondary border-b border-outline-variant/50 pb-1.5">Your Contact Details</h4>
                <ul className="space-y-2.5">
                  <li className="flex justify-between text-xs">
                    <span className="text-on-surface-variant">Full Name:</span>
                    <strong className="text-primary font-sans">{submittedInquiry.clientName}</strong>
                  </li>
                  <li className="flex justify-between text-xs">
                    <span className="text-on-surface-variant">Phone Number:</span>
                    <strong className="text-primary font-mono">{submittedInquiry.clientPhone}</strong>
                  </li>
                  <li className="flex justify-between text-xs">
                    <span className="text-on-surface-variant">Email Address:</span>
                    <strong className="text-primary font-mono">{submittedInquiry.clientEmail}</strong>
                  </li>
                  <li className="flex justify-between text-xs">
                    <span className="text-on-surface-variant">Suburb / City:</span>
                    <strong className="text-primary font-sans">{submittedInquiry.clientCity}</strong>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border border-outline-variant bg-surface p-6 space-y-3">
              <span className="font-sans font-bold uppercase text-primary block text-sm">🏡 What happens next?</span>
              <ul className="space-y-2 text-xs text-on-surface-variant list-disc pl-5">
                <li>We will contact you via phone or email within 24 business hours.</li>
                <li>We will arrange a quick, <strong>100% free on-site measurement</strong> at your property.</li>
                <li>An expert will measure your openings perfectly so you don't have to worry about a thing.</li>
                <li>You will receive a complete, detailed Rand quotation with zero obligation.</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row justify-end gap-3 pt-2">
              <button
                onClick={() => setSubmittedInquiry(null)}
                className="px-6 py-3 border border-outline-variant hover:bg-surface-container font-mono text-xs font-bold uppercase tracking-wider rounded-none cursor-pointer transition-colors"
              >
                REQUEST ANOTHER QUOTE
              </button>
              <button
                onClick={() => {
                  setSubmittedInquiry(null);
                  setShowHistory(true);
                }}
                className="px-6 py-3 bg-primary hover:bg-secondary text-on-primary font-mono text-xs font-bold uppercase tracking-wider rounded-none cursor-pointer transition-colors"
              >
                VIEW SENT REQUESTS
              </button>
            </div>
          </motion.div>
        ) : (
          /* Active Easy Client Form Interface */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Form Section */}
            <form onSubmit={handleInquirySubmit} className="lg:col-span-7 space-y-8">
              {/* Product Preferences */}
              <div className="border border-outline-variant bg-surface-container-lowest p-6 space-y-6">
                <div className="flex items-center gap-2 border-b border-outline-variant pb-2.5">
                  <ClipboardCheck className="w-5 h-5 text-primary" />
                  <span className="font-sans text-sm uppercase font-bold tracking-wider text-primary">1. What Products Do You Need?</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Category select */}
                  <div className="space-y-1.5 col-span-2 md:col-span-1">
                    <label className="font-mono text-[10px] uppercase font-bold text-secondary">Product Style / Service *</label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full font-sans text-sm bg-surface border border-outline-variant p-2.5 rounded-none outline-none text-primary font-semibold focus:border-primary"
                    >
                      <optgroup label="Aluminium Doors">
                        <option value="Aluminium Sliding Doors">Aluminium Sliding Doors</option>
                        <option value="Aluminium Stacking Doors">Aluminium Stacking Doors</option>
                        <option value="Aluminium Front Doors">Aluminium Front Doors</option>
                        <option value="Aluminium French Doors">Aluminium French Doors</option>
                        <option value="Aluminium Garage Doors">Aluminium Garage Doors</option>
                      </optgroup>
                      <optgroup label="Windows & Glass">
                        <option value="Aluminium Windows">Aluminium Windows</option>
                        <option value="Aluminium Sliding Windows">Aluminium Sliding Windows</option>
                        <option value="Double Glazed Windows">Double Glazed Windows</option>
                        <option value="Glass Shopfronts">Glass Shopfronts</option>
                        <option value="Office Glass Partitions">Office Glass Partitions</option>
                        <option value="Fly Screens">Fly Screens & Bug Screens</option>
                      </optgroup>
                      <optgroup label="Steel Security">
                        <option value="Burglar Bars">Burglar Bars</option>
                        <option value="Security Gates">Security Gates (Trellis & Swing)</option>
                        <option value="Driveway Gates">Driveway Gates</option>
                        <option value="Gate Motors">Gate Motors & Automation</option>
                        <option value="Palisade Fencing">Palisade Fencing</option>
                        <option value="Mesh Fencing">Mesh Security Fencing (ClearVu Style)</option>
                      </optgroup>
                      <optgroup label="Outdoor & Patio">
                        <option value="Glass Balustrades">Glass Balustrades</option>
                        <option value="Patio Enclosures">Patio Enclosures & Sunrooms</option>
                        <option value="Aluminium Awnings">Aluminium Awnings & Canopies</option>
                        <option value="Aluminium Pergolas">Aluminium Pergolas & Louvred Roofs</option>
                      </optgroup>
                      <optgroup label="Steel Structures">
                        <option value="Steel Carports">Steel Carports & Shadeports</option>
                        <option value="Steel Balustrades">Steel Balustrades & Handrails</option>
                        <option value="Steel Staircases">Steel Staircases & Spiral Stairs</option>
                        <option value="Steel Sheds">Steel Sheds & Tool Units</option>
                      </optgroup>
                      <optgroup label="Repairs & Fabrication">
                        <option value="Aluminium Repairs">Aluminium Window & Door Repairs</option>
                        <option value="Glass Replacement">Glass Replacement</option>
                        <option value="Steel Repairs">Steel Gate & Fence Repairs</option>
                        <option value="Custom Welding">Custom Welding & Fabrication</option>
                      </optgroup>
                      <option value="Multiple Products / Whole House Refit">Multiple Products / Whole House Refit</option>
                    </select>
                  </div>

                  {/* Where is it going */}
                  <div className="space-y-1.5 col-span-2 md:col-span-1">
                    <label className="font-mono text-[10px] uppercase font-bold text-secondary">Where in the house is it going?</label>
                    <select
                      value={houseArea}
                      onChange={(e) => setHouseArea(e.target.value)}
                      className="w-full font-sans text-sm bg-surface border border-outline-variant p-2.5 rounded-none outline-none text-primary font-semibold focus:border-primary"
                    >
                      <option value="Front Entrance / Grand Door">Front Entrance / Grand Door</option>
                      <option value="Braai Area / Patio Flow">Braai Area / Patio Flow</option>
                      <option value="Living Room / Lounge">Living Room / Lounge</option>
                      <option value="Bedrooms / Bathroom">Bedrooms / Bathroom</option>
                      <option value="Balcony / Pool Fence">Balcony / Pool Fence</option>
                      <option value="I want advice from your expert">I want advice from your expert</option>
                    </select>
                  </div>

                  {/* Sizing selection (Simplified - NO measurement input!) */}
                  <div className="space-y-1.5 col-span-2">
                    <label className="font-mono text-[10px] uppercase font-bold text-secondary">Measurements & Sizes</label>
                    <select
                      value={sizeReference}
                      onChange={(e) => setSizeReference(e.target.value)}
                      className="w-full font-sans text-sm bg-surface border border-outline-variant p-2.5 rounded-none outline-none text-primary font-semibold focus:border-primary"
                    >
                      <option value="I don't know - please send a professional to measure!">
                        I don't know the measurements - please send an expert to measure for free!
                      </option>
                      <option value="Standard residential opening size">
                        Standard residential opening (fits standard sizes)
                      </option>
                      <option value="Large custom / bespoke size opening">
                        Large custom or double-volume size opening
                      </option>
                      <option value="I will provide approximate sizes in the notes below">
                        I have approximate sizes (I will type them in notes below)
                      </option>
                    </select>
                  </div>

                  {/* Finish / Coating select */}
                  <div className="space-y-1.5 col-span-2 md:col-span-1">
                    <label className="font-mono text-[10px] uppercase font-bold text-secondary">Aluminium Colour Finish</label>
                    <select
                      value={finish}
                      onChange={(e) => setFinish(e.target.value)}
                      className="w-full font-sans text-sm bg-surface border border-outline-variant p-2.5 rounded-none outline-none text-primary font-semibold focus:border-primary"
                    >
                      <option value="Matte Black Powder Coated">Matte Black Powder Coated</option>
                      <option value="Charcoal Textured Powder Coated">Charcoal Textured Powder Coated (Popular)</option>
                      <option value="Satin Silver Anodized">Satin Silver Anodized (Great for Coastal Salt)</option>
                      <option value="Brushed Bronze Anodized">Brushed Bronze Anodized</option>
                      <option value="I want advice on colours">I want advice on colours</option>
                    </select>
                  </div>

                  {/* Glass spec select */}
                  <div className="space-y-1.5 col-span-2 md:col-span-1">
                    <label className="font-mono text-[10px] uppercase font-bold text-secondary">Glass Choice</label>
                    <select
                      value={glassSpec}
                      onChange={(e) => setGlassSpec(e.target.value)}
                      className="w-full font-sans text-sm bg-surface border border-outline-variant p-2.5 rounded-none outline-none text-primary font-semibold focus:border-primary"
                    >
                      <option value="Double Glazed Low-E (Energy Saving)">Double Glazed Low-E (Highly recommended for cold winters)</option>
                      <option value="Toughened Safety Glass (Standard Clear)">Toughened Safety Glass (Standard Clear)</option>
                      <option value="Laminated Acoustic Safety Glass">Laminated Acoustic (Reduces traffic/outside noise)</option>
                      <option value="Help Me Choose Glass type">Help Me Choose Glass type</option>
                      <option value="No Glass (Frame Only)">No Glass (Frame Only)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Contact Information Group */}
              <div className="border border-outline-variant bg-surface-container-lowest p-6 space-y-6">
                <div className="flex items-center gap-2 border-b border-outline-variant pb-2.5">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="font-sans text-sm uppercase font-bold tracking-wider text-primary">2. Your Contact details</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5 col-span-2 md:col-span-1">
                    <label className="font-mono text-[10px] uppercase font-bold text-secondary">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sipho Nkosi"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full font-sans text-sm bg-surface border border-outline-variant p-2.5 rounded-none outline-none text-primary focus:border-primary"
                    />
                  </div>

                  <div className="space-y-1.5 col-span-2 md:col-span-1">
                    <label className="font-mono text-[10px] uppercase font-bold text-secondary">South African Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 082 123 4567"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full font-mono text-sm bg-surface border border-outline-variant p-2.5 rounded-none outline-none text-primary focus:border-primary"
                    />
                  </div>

                  <div className="space-y-1.5 col-span-2 md:col-span-1">
                    <label className="font-mono text-[10px] uppercase font-bold text-secondary">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sipho@example.co.za"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      className="w-full font-mono text-sm bg-surface border border-outline-variant p-2.5 rounded-none outline-none text-primary focus:border-primary"
                    />
                  </div>

                  <div className="space-y-1.5 col-span-2 md:col-span-1">
                    <label className="font-mono text-[10px] uppercase font-bold text-secondary">Your Suburb & City *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Camps Bay, Cape Town"
                      value={clientCity}
                      onChange={(e) => setClientCity(e.target.value)}
                      className="w-full font-sans text-sm bg-surface border border-outline-variant p-2.5 rounded-none outline-none text-primary focus:border-primary"
                    />
                  </div>

                  <div className="space-y-1.5 col-span-2">
                    <label className="font-mono text-[10px] uppercase font-bold text-secondary">Tell us more about your request (Optional)</label>
                    <textarea
                      rows={4}
                      placeholder="e.g. I have some wood frames I need to replace, or tell us the best time to call you for the free measurement..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full font-sans text-sm bg-surface border border-outline-variant p-2.5 rounded-none outline-none text-primary focus:border-primary resize-none"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-secondary text-on-primary py-4 font-mono text-xs uppercase tracking-widest font-bold rounded-none cursor-pointer flex justify-between items-center px-6 transition-colors border border-primary hover:border-secondary"
              >
                Send Quotation Request
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Client Information Side Guide Panel */}
            <div className="lg:col-span-5 space-y-6">
              <div className="border border-outline-variant bg-surface p-6 space-y-6 sticky top-24">
                <div className="border-b border-outline-variant pb-3">
                  <h4 className="font-sans text-base font-bold text-primary uppercase">Aluminium Designs Client Promise</h4>
                  <p className="text-xs text-on-surface-variant mt-1">Our simple 3-step quotation process is designed to save you time and hassle.</p>
                </div>
                
                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-none border border-primary font-mono text-xs font-black bg-primary/5 text-primary">
                      01
                    </div>
                    <div className="space-y-1">
                      <h5 className="font-sans font-bold text-sm text-primary uppercase">Submit Your Choice</h5>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        Fill in this simple, measurement-free form and choose your style preferences. No confusing engineering math or specs needed.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-none border border-primary font-mono text-xs font-black bg-primary/5 text-primary">
                      02
                    </div>
                    <div className="space-y-1">
                      <h5 className="font-sans font-bold text-sm text-primary uppercase">Free On-Site Sizing</h5>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        We will contact you to schedule a quick, <strong>100% free home visit</strong>. Our professional installers will take the absolute perfect measurements for you.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-none border border-primary font-mono text-xs font-black bg-primary/5 text-primary">
                      03
                    </div>
                    <div className="space-y-1">
                      <h5 className="font-sans font-bold text-sm text-primary uppercase">Get Your Rand Quote</h5>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        We provide an itemized, clear quotation in Rands (ZAR) based on the expert measurements. Absolute transparency with zero hidden costs.
                      </p>
                    </div>
                  </div>
                </div>

                {/* SABS Quality badges */}
                <div className="border-t border-outline-variant pt-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                    <span className="font-mono text-[10px] uppercase font-bold text-secondary tracking-wider">
                      Guaranteed Conformance
                    </span>
                  </div>
                  <p className="text-[11px] text-on-surface-variant leading-relaxed">
                    Aluminium Designs products conform to strict <strong>SABS (South African Bureau of Standards)</strong> safety policies and <strong>AAAMSA</strong> wind-pressure storm requirements. Made to withstand South Africa's intense climate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
