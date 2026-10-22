import { Layout, Layers, Server, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { services } from '../data/portfolioData';
import TiltCard from './TiltCard';
import SectionBackground from './SectionBackground';

const iconMap = {
  Layout: Layout,
  Layers: Layers,
  Server: Server,
  ShieldCheck: ShieldCheck,
};

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      
      {/* Moving Atmosphere Aurora & Cyber Mesh Background */}
      <SectionBackground variant="services" showTopDivider={true} showBottomDivider={true} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Rapid Slide-Down */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-200/70">
            What I Deliver
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Services & <span className="text-gradient-indigo">Solutions</span>
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            High-caliber development paired with rigorous quality assurance to help you build and scale with confidence.
          </p>
        </motion.div>

        {/* Services Grid with Fast Alternating Slide Entrance + 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Layout;
            const fromLeft = index % 2 === 0;
            const serviceFloats = ['animate-card-float-1', 'animate-card-float-2', 'animate-card-float-3', 'animate-card-float-4'];
            const floatClass = serviceFloats[index % serviceFloats.length];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: fromLeft ? -25 : 25, y: 12 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.25, delay: index * 0.04, ease: 'easeOut' }}
                className="h-full"
              >
                <div className={`${floatClass} pause-on-hover h-full`}>
                  <TiltCard
                    maxTilt={10}
                    scale={1.03}
                    glareColor="rgba(99, 102, 241, 0.35)"
                    className="glass-card rounded-3xl p-8 relative flex flex-col justify-between group overflow-hidden border border-slate-200/90 hover:border-indigo-400 h-full shadow-soft-sm hover:shadow-2xl transition-all duration-150 cursor-pointer"
                  >
                    {/* Periodic Cinematic Light Beam Sweep */}
                    <div className="pointer-events-none absolute inset-0 -translate-x-full animate-beam-sweep bg-gradient-to-r from-transparent via-white/50 to-transparent z-10 rounded-[inherit]" />

                    {/* Background Accent Gradient */}
                    <div className={`absolute top-0 right-0 w-52 h-52 bg-gradient-to-br ${service.gradient} rounded-full blur-3xl -z-10 group-hover:scale-150 transition-transform duration-200`} />

                    <div>
                      {/* Service Icon with Fast Micro-Bounce */}
                      <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-soft-sm flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-115 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-150">
                        <Icon className="w-6 h-6" />
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-indigo-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                        {service.description}
                      </p>

                      {/* Technology Pills */}
                      <div className="space-y-2 mb-6">
                        <span className="text-xs font-bold text-slate-600 uppercase tracking-wider block">
                          Core Technologies & Focus:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {service.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200/60 group-hover:bg-indigo-50/80 group-hover:text-indigo-700 group-hover:border-indigo-200 transition-all duration-150"
                            >
                              <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Inquiry Link */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <a
                        href={`https://wa.me/918580675928?text=Hi%20Kartik,%20I%20am%20interested%20in%20your%20service:%20${encodeURIComponent(service.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors group/link"
                      >
                        <span>Inquire for this Service</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1.5 transition-transform duration-150" />
                      </a>

                      <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                        Active Offering
                      </span>
                    </div>
                  </TiltCard>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
