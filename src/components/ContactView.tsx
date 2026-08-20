import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle } from 'lucide-react';

export default function ContactView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [msg, setMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !msg) {
      alert('Please fill in all fields before sending your message.');
      return;
    }
    setSuccess(true);
    setName('');
    setEmail('');
    setPhone('');
    setMsg('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-12 py-12 pb-24 space-y-16">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 bg-primary/5 text-primary border border-primary/10 px-3.5 py-1 text-xs font-mono font-bold tracking-widest uppercase">
          <MapPin className="w-3.5 h-3.5" />
          Get In Touch
        </div>
        <h2 className="font-sans text-4xl md:text-5xl font-bold uppercase tracking-tight text-primary">
          We Are Here To Help
        </h2>
        <p className="text-on-surface-variant text-base leading-relaxed">
          Have a question about styles, prices, or SABS standards? Send us a quick message, or visit our central offices for a free consultation.
        </p>
      </div>

      {/* Two Column Layout (Form & Info Card) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Contact Info cards & working hours */}
        <div className="lg:col-span-5 space-y-6">
          <div className="border border-outline-variant bg-surface p-6 md:p-8 space-y-6">
            <h3 className="font-sans text-xl font-bold uppercase text-primary border-b border-outline-variant pb-3">
              Office Details
            </h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <h4 className="font-sans font-bold text-xs uppercase text-primary">Our Showroom Address</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Aluminium Designs Towers, 83 Rivonia Road,<br />
                    Sandhurst, Sandton, 2196,<br />
                    Gauteng, South Africa
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <h4 className="font-sans font-bold text-xs uppercase text-primary">Call or WhatsApp Us</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed font-mono">
                    Phone: +27 (0)11 593 1107 <br />
                    WhatsApp: +27 (0)82 123 4567
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <h4 className="font-sans font-bold text-xs uppercase text-primary">Email Support</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed font-mono">
                    info@aluminiumdesigns.co.za <br />
                    support@aluminiumdesigns.co.za
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <h4 className="font-sans font-bold text-xs uppercase text-primary">Operating Hours</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Monday - Friday: 08:00 - 17:00 <br />
                    Saturdays: 09:00 - 13:00 <br />
                    Sundays & Public Holidays: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form panel */}
        <div className="lg:col-span-7">
          {success ? (
            <div className="border border-primary bg-primary/5 p-8 text-center space-y-4">
              <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="font-sans text-2xl font-bold uppercase text-primary">Message Sent Successfully!</h3>
              <p className="text-xs text-on-surface-variant max-w-md mx-auto leading-relaxed">
                Thank you for contacting Aluminium Designs. An expert support representative will respond to your inquiry within 12 business hours.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="px-6 py-2.5 bg-primary text-on-primary font-mono text-xs uppercase tracking-wider font-bold rounded-none cursor-pointer hover:bg-secondary transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="border border-outline-variant bg-surface-container-lowest p-6 md:p-8 space-y-6">
              <div className="flex items-center gap-2 border-b border-outline-variant pb-2.5">
                <MessageSquare className="w-5 h-5 text-primary" />
                <h3 className="font-sans text-sm uppercase font-bold tracking-wider text-primary">Send A Message</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] uppercase font-bold text-secondary">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lerato Khumalo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full font-sans text-sm bg-surface border border-outline-variant p-2.5 rounded-none outline-none text-primary focus:border-primary"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] uppercase font-bold text-secondary">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 082 123 4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full font-mono text-sm bg-surface border border-outline-variant p-2.5 rounded-none outline-none text-primary focus:border-primary"
                  />
                </div>

                <div className="space-y-1.5 col-span-2">
                  <label className="font-mono text-[10px] uppercase font-bold text-secondary">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. lerato@example.co.za"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full font-mono text-sm bg-surface border border-outline-variant p-2.5 rounded-none outline-none text-primary focus:border-primary"
                  />
                </div>

                <div className="space-y-1.5 col-span-2">
                  <label className="font-mono text-[10px] uppercase font-bold text-secondary">How can we assist you? *</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Tell us about your home design goals or any questions you have..."
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    className="w-full font-sans text-sm bg-surface border border-outline-variant p-2.5 rounded-none outline-none text-primary focus:border-primary resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-secondary text-on-primary py-3.5 font-mono text-xs uppercase tracking-widest font-bold rounded-none cursor-pointer transition-colors border border-primary hover:border-secondary"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Google Maps Section */}
      <div className="space-y-4">
        <div className="border-l-4 border-primary pl-4">
          <h3 className="font-sans text-xl font-black uppercase text-primary leading-none">Find Our Sandton Showroom</h3>
          <p className="text-xs text-on-surface-variant mt-1">Visit us in-person to touch and see our premium pivot doors and glass profiles.</p>
        </div>
        
        {/* Google Maps Real Iframe */}
        <div className="border border-outline-variant bg-surface-container-high h-[400px] w-full overflow-hidden relative shadow-inner">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.187313886558!2d28.0449551!3d-26.1030303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95733a41159843%3A0xc06708779b76ea49!2sSandton%20City!5e0!3m2!1sen!2sza!4v1689620000000!5m2!1sen!2sza" 
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen={false}
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Aluminium Designs Sandton Showroom Google Map Location"
          />
        </div>
      </div>
    </div>
  );
}
