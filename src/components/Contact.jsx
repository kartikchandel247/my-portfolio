import { useState } from 'react';
import { Mail, Phone, MessageSquare, Send, ArrowUpRight, CheckCircle2, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import TiltCard from './TiltCard';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    try {
      confetti({
        particleCount: 90,
        spread: 65,
        origin: { y: 0.6 },
      });
    } catch (err) {
      // Fallback gracefully
    }

    setSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = `Hi Kartik, I am ${formData.name || 'a visitor'} (${formData.email || 'Email'}). Regarding: ${formData.subject || 'Inquiry'}. Message: ${formData.message}`;
    window.open(`https://wa.me/918580675928?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleEmailRedirect = () => {
    const mailto = `mailto:${personalInfo.contact.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi Kartik,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="py-24 relative bg-white/80 backdrop-blur-md border-t border-slate-200/60 overflow-hidden">
      
      {/* Background Neon Spotlight Glow */}
      <div className="absolute top-1/2 right-10 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-100/50 to-pink-100/40 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Fast Slide-Down */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-200/70">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Let's Build Something <span className="text-gradient-indigo">Exceptional</span>
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Have a project in mind, need full-stack engineering, or require comprehensive QA automation testing? Reach out directly!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Action Badges (Fast Slide in from Left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-7 rounded-3xl bg-slate-50/90 border border-slate-200/80 space-y-6 shadow-soft-sm">
              <h3 className="text-xl font-bold text-slate-900">
                Direct Communication Channels
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                I am actively responsive via WhatsApp, Email, or direct phone calls. Feel free to connect for freelance projects, full-time roles, or technical discussions.
              </p>

              {/* Action Badges with Micro-Tilt */}
              <div className="space-y-3 pt-2">
                
                {/* WhatsApp Direct */}
                <TiltCard maxTilt={6} className="rounded-2xl">
                  <a
                    href={personalInfo.contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/40 shadow-soft-sm transition-all group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 group-hover:scale-105 transition-transform">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-500">Instant Chat</div>
                        <div className="text-sm font-bold text-slate-900">+91 8580675928 (WhatsApp)</div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors" />
                  </a>
                </TiltCard>

                {/* Email Direct */}
                <TiltCard maxTilt={6} className="rounded-2xl">
                  <a
                    href={`mailto:${personalInfo.contact.email}`}
                    className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/40 shadow-soft-sm transition-all group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 group-hover:scale-105 transition-transform">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-500">Official Email</div>
                        <div className="text-sm font-bold text-slate-900">{personalInfo.contact.email}</div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                  </a>
                </TiltCard>

                {/* Phone Direct */}
                <TiltCard maxTilt={6} className="rounded-2xl">
                  <a
                    href={`tel:${personalInfo.contact.phone}`}
                    className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:bg-sky-50/40 shadow-soft-sm transition-all group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 group-hover:scale-105 transition-transform">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-500">Phone Call</div>
                        <div className="text-sm font-bold text-slate-900">+91 8580675928</div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 transition-colors" />
                  </a>
                </TiltCard>

                {/* Location */}
                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-slate-200 shadow-soft-sm">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500">Location</div>
                    <div className="text-sm font-bold text-slate-900">{personalInfo.location}</div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form (Fast Slide in from Right) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <TiltCard maxTilt={6} className="p-8 sm:p-10 rounded-3xl bg-white/95 border border-slate-200/90 shadow-soft-xl relative overflow-hidden">
              {/* Periodic Light Beam Sweep */}
              <div className="pointer-events-none absolute inset-0 -translate-x-full animate-beam-sweep bg-gradient-to-r from-transparent via-white/50 to-transparent z-10 rounded-[inherit]" />
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">Thank You, {formData.name}!</h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Your message has been composed. Choose an option below to immediately deliver it via WhatsApp or your default email client:
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                    <button
                      onClick={handleWhatsAppRedirect}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Send via WhatsApp
                    </button>

                    <button
                      onClick={handleEmailRedirect}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md transition-all"
                    >
                      <Mail className="w-4 h-4" />
                      Send via Email Client
                    </button>
                  </div>

                  <div className="pt-6">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-slate-500 hover:text-slate-800 underline"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rahul@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Web App Development / QA Automation Inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, goals, or requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white font-bold text-sm shadow-lg shadow-slate-900/10 hover:shadow-indigo-500/25 transition-all hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry Message</span>
                  </button>
                </form>
              )}

            </TiltCard>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
