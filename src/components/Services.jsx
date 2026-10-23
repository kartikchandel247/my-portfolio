import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Layout, Layers, Server, ShieldCheck, ArrowRight, CheckCircle2, Bot, Clock, Sparkles, MessageSquare, ArrowUpRight } from 'lucide-react';
import { services, workflowSteps, personalInfo } from '../data/portfolioData';
import TiltCard from './TiltCard';
import SectionBackground from './SectionBackground';
import SubpageHeader from './SubpageHeader';
import { slideLeft, slideRight, fadeUp, zoomIn } from '../utils/motionVariants';

const iconMap = {
  Layout: Layout,
  Layers: Layers,
  Server: Server,
  ShieldCheck: ShieldCheck,
  Bot: Bot,
};

export default function Services({ onNavigate }) {
  const gridRef = useRef(null);
  const isGridInView = useInView(gridRef, { once: false, amount: 0.15 });

  const workflowRef = useRef(null);
  const isWorkflowInView = useInView(workflowRef, { once: false, amount: 0.2 });

  return (
    <section id="services" className="pt-8 pb-24 relative overflow-hidden">
      
      {/* Moving Atmosphere Aurora & Cyber Mesh Background */}
      <SectionBackground variant="services" showTopDivider={false} showBottomDivider={true} />

      {/* Subpage Header Banner */}
      <SubpageHeader
        badge="What I Deliver"
        title="Comprehensive Services &"
        titleHighlight="Solutions"
        description="High-caliber frontend web engineering and cross-platform Flutter development, backed by enterprise-grade Playwright automated test pipelines to ensure your software is fast, responsive, and 100% bug-free."
        currentId="services"
        onNavigate={onNavigate}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 1. Services Grid with Alternating Slide-In (Left vs Right) + 3D Tilt */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Layout;
            // Odd cards enter from Left, Even cards enter from Right
            const cardVariant = index % 2 === 0 ? slideLeft : slideRight;

            return (
              <motion.div
                key={service.id}
                initial="hidden"
                animate={isGridInView ? 'visible' : 'hidden'}
                variants={cardVariant}
                className="h-full will-change-transform"
              >
                <TiltCard
                  maxTilt={8}
                  scale={1.045}
                  horizontalMove={16}
                  glareColor="rgba(99, 102, 241, 0.3)"
                  className="rounded-3xl p-7 sm:p-9 bg-white border border-slate-200/90 hover:border-indigo-400 h-full shadow-soft-sm hover:shadow-2xl hover:shadow-indigo-500/10 transition-all flex flex-col justify-between group overflow-hidden relative cursor-pointer"
                >
                  {/* Periodic Cinematic Light Beam Sweep */}
                  <div className="pointer-events-none absolute inset-0 -translate-x-full animate-beam-sweep bg-gradient-to-r from-transparent via-white/50 to-transparent z-10 rounded-[inherit]" />

                  {/* Top-Right Background Accent Glow */}
                  <div className={`absolute top-0 right-0 w-60 h-60 bg-gradient-to-br ${service.gradient} rounded-full blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-300`} />

                  <div>
                    {/* Top Meta: Icon + Timeline Turnaround Badge */}
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <div className="w-13 h-13 rounded-2xl bg-indigo-50 border border-indigo-100/90 shadow-soft-sm flex items-center justify-center text-indigo-600 group-hover:scale-115 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-200">
                        <Icon className="w-6 h-6" />
                      </div>

                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-700">
                        <Clock className="w-3.5 h-3.5 text-indigo-500" />
                        <span>Turnaround: {service.timeline}</span>
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-indigo-600/90 mt-1 mb-3">
                      {service.subtitle}
                    </p>

                    <p className="text-sm text-slate-600 leading-relaxed mb-5">
                      {service.description}
                    </p>

                    {/* Key Deliverables Checklist */}
                    <div className="space-y-2 mb-6 p-4 rounded-2xl bg-slate-50/80 border border-slate-100">
                      <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Core Deliverables:</span>
                      </div>
                      {service.deliverables.map((item) => (
                        <div key={item} className="text-xs text-slate-700 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technology Badges with Zoom In */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 shadow-2xs hover:border-indigo-300 hover:text-indigo-600 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <a
                      href={`https://wa.me/918580675928?text=${encodeURIComponent(`Hi Kartik, I am interested in your service: ${service.title}. Let's discuss details.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 hover:translate-x-1 transition-all"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>Inquire for this Service</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>

                    <span className="text-[11px] font-mono font-semibold text-slate-400">
                      Service #0{index + 1}
                    </span>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        {/* 2. Structured Workflow Methodology Section (Vertical Staggered Entrance) */}
        <div ref={workflowRef} className="mt-24 space-y-10">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200/70">
              Workflow & Delivery Process
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              From Concept to <span className="text-gradient-indigo">Zero-Regression Deployment</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              A transparent, 5-stage sprint methodology that ensures every feature meets strict performance, aesthetic, and automated quality benchmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {workflowSteps.map((step, idx) => (
              <motion.div
                key={step.step}
                initial="hidden"
                animate={isWorkflowInView ? 'visible' : 'hidden'}
                variants={fadeUp}
                transition={{ delay: idx * 0.1 }}
                className="h-full"
              >
                <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-soft-sm hover:border-indigo-300 hover:shadow-md transition-all h-full flex flex-col justify-between">
                  <div>
                    <span className="text-2xl font-extrabold text-gradient-indigo font-mono block mb-2">
                      {step.step}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 mb-1.5">
                      {step.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] font-bold text-emerald-600 uppercase tracking-wider">
                    Stage Validated ✓
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. Bottom Direct Action Banner */}
        <div className="mt-20 p-8 sm:p-10 rounded-3xl bg-slate-900 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-2 text-center md:text-left max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-3 py-1 rounded-full">
              Available for Hire
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to Kickstart Your Next Project?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Get in touch for custom web development, Flutter mobile apps, or enterprise test automation setup.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={personalInfo.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/25 transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Quick WhatsApp Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 backdrop-blur-md transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Send Inquiry Form</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
