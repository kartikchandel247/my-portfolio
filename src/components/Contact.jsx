import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MessageSquare, Send, ArrowUpRight, CheckCircle2, MapPin, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, WhatsAppIcon } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import TiltCard from './TiltCard';
import SectionBackground from './SectionBackground';
import SubpageHeader from './SubpageHeader';
import { slideLeft, slideRight, zoomIn } from '../utils/motionVariants';

export default function Contact({ onNavigate }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const contactRef = useRef(null);
  const isInView = useInView(contactRef, { once: false, amount: 0.15 });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    try {
      confetti({
        particleCount: 110,
        spread: 70,
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
    <section id="contact" className="pt-8 pb-24 relative overflow-hidden">
      
      {/* Moving Atmosphere Aurora & Cyber Mesh Background */}
      <SectionBackground variant="contact" showTopDivider={false} showBottomDivider={false} />

      {/* Subpage Header Banner */}
      <SubpageHeader
        badge="Get In Touch"
        title="Let's Build Something"
        titleHighlight="Exceptional"
        description="Looking for high-impact full-stack web development, Flutter mobile apps, or enterprise QA test automation? Connect with me directly through the auto-redirecting badges or submit the inquiry form below."
        currentId="contact"
        onNavigate={onNavigate}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div ref={contactRef} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Interactive Badges (Slide from Left) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.05, margin: "120px 0px" }}
            variants={slideLeft}
            className="lg:col-span-5 space-y-6 will-change-transform"
          >
            <div className="p-7 sm:p-8 rounded-3xl bg-white/95 border border-slate-200/90 shadow-soft-sm space-y-6 text-left">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200/70 inline-block mb-2">
                  Direct Verification & Contact
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Interactive Channels
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  Click any verified badge below for instant auto-redirection to WhatsApp, email, or social profiles.
                </p>
              </div>

              {/* Direct Interactive Badges (Auto-Redirecting) */}
              <div className="space-y-3 pt-1">
                
                {/* 1. Phone & WhatsApp (+91 8580675928) */}
                <TiltCard maxTilt={6} scale={1.03} horizontalMove={10} className="rounded-2xl">
                  <a
                    href={personalInfo.contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/40 shadow-soft-sm transition-all group cursor-pointer"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                        <WhatsAppIcon className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Phone & WhatsApp</div>
                        <div className="text-sm font-bold text-slate-900">+91 8580675928</div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </TiltCard>

                {/* 2. Official Email (kartikchandel284@gmail.com) */}
                <TiltCard maxTilt={6} scale={1.03} horizontalMove={10} className="rounded-2xl">
                  <a
                    href={`mailto:${personalInfo.contact.email}`}
                    className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50/40 shadow-soft-sm transition-all group cursor-pointer"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Official Email</div>
                        <div className="text-sm font-bold text-slate-900">{personalInfo.contact.email}</div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </TiltCard>

                {/* 3. LinkedIn Profile */}
                <TiltCard maxTilt={6} scale={1.03} horizontalMove={10} className="rounded-2xl">
                  <a
                    href={personalInfo.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:bg-blue-50/40 shadow-soft-sm transition-all group cursor-pointer"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                        <LinkedinIcon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">LinkedIn Professional</div>
                        <div className="text-sm font-bold text-slate-900">Kartik Chandel</div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </TiltCard>

                {/* 4. GitHub Profile */}
                <TiltCard maxTilt={6} scale={1.03} horizontalMove={10} className="rounded-2xl">
                  <a
                    href={personalInfo.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200 hover:border-slate-400 hover:bg-slate-50 shadow-soft-sm transition-all group cursor-pointer"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800 group-hover:scale-110 transition-transform">
                        <GithubIcon className="w-5 h-5 text-slate-800" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">GitHub Codebases</div>
                        <div className="text-sm font-bold text-slate-900">@kartikchandel247</div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </TiltCard>

                {/* 5. Instagram Profile */}
                <TiltCard maxTilt={6} scale={1.03} horizontalMove={10} className="rounded-2xl">
                  <a
                    href={personalInfo.contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200 hover:border-pink-400 hover:bg-pink-50/40 shadow-soft-sm transition-all group cursor-pointer"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center text-pink-600 group-hover:scale-110 transition-transform">
                        <InstagramIcon className="w-5 h-5 text-pink-600" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Instagram Profile</div>
                        <div className="text-sm font-bold text-slate-900">{personalInfo.contact.instagramHandle}</div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-pink-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </TiltCard>

                {/* Location Badge */}
                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-2xs">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Primary Location</div>
                    <div className="text-sm font-bold text-slate-900">{personalInfo.location}</div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Right Column: Clean Light-Themed Glassmorphism Form (Slide from Right) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.05, margin: "120px 0px" }}
            variants={slideRight}
            className="lg:col-span-7 will-change-transform"
          >
            <TiltCard maxTilt={6} scale={1.02} horizontalMove={10} className="p-8 sm:p-10 rounded-3xl bg-white/95 border border-slate-200/90 shadow-soft-xl relative overflow-hidden text-left">
              {/* Periodic Light Beam Sweep */}
              <div className="pointer-events-none absolute inset-0 -translate-x-full animate-beam-sweep bg-gradient-to-r from-transparent via-white/50 to-transparent z-10 rounded-[inherit]" />
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">Thank You, {formData.name}!</h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Your inquiry has been formulated. Select an option below to immediately transmit it via WhatsApp or your default email application:
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                    <button
                      onClick={handleWhatsAppRedirect}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer hover:-translate-y-0.5"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Transmit via WhatsApp</span>
                    </button>

                    <button
                      onClick={handleEmailRedirect}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer hover:-translate-y-0.5"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Transmit via Email</span>
                    </button>
                  </div>

                  <div className="pt-6">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-slate-500 hover:text-slate-800 underline cursor-pointer"
                    >
                      Compose another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                      Send a Message
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Fill out your requirements below and I will respond within 24 hours.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        autoComplete="name"
                        inputMode="text"
                        placeholder="e.g. Alex Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-900 text-base sm:text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        autoComplete="email"
                        inputMode="email"
                        placeholder="e.g. alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-900 text-base sm:text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Subject / Project Scope
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Full-Stack Web App, Flutter App, or QA Automation"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-900 text-base sm:text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Project Details & Deliverables *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Share context on your project requirements, target timeline, or QA test criteria..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-900 text-base sm:text-sm transition-all resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full min-h-[48px] py-3.5 px-6 rounded-2xl bg-slate-900 hover:bg-indigo-600 active:bg-indigo-700 text-white font-bold text-sm shadow-lg shadow-slate-900/15 hover:shadow-indigo-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message & Trigger Confetti</span>
                  </motion.button>
                </form>
              )}
            </TiltCard>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
