import { Code2, Smartphone, Database, ShieldCheck, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';
import TiltCard from './TiltCard';
import SectionBackground from './SectionBackground';

const categoryIcons = {
  'Frontend Development': Code2,
  'Mobile & AI': Smartphone,
  'Backend & Databases': Database,
  'Quality Assurance & Testing': ShieldCheck,
};

export default function TechStack() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      
      {/* Moving Atmosphere Aurora & Cyber Mesh Background */}
      <SectionBackground variant="skills" showTopDivider={true} showBottomDivider={true} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Slide-Down */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-200/70">
            Skills & Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Technical Stack & <span className="text-gradient-indigo">Tools</span>
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            A battle-tested stack spanning full-stack web architectures, mobile application development, and industrial-strength QA automation.
          </p>
        </motion.div>

        {/* Skills Category Grid with Fast Staggered Rise & 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group, index) => {
            const IconComponent = categoryIcons[group.category] || Code2;
            const skillFloats = ['animate-card-float-3', 'animate-card-float-1', 'animate-card-float-4', 'animate-card-float-2'];
            const floatClass = skillFloats[index % skillFloats.length];

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.25, delay: index * 0.04, ease: 'easeOut' }}
                className="h-full"
              >
                <div className={`${floatClass} pause-on-hover h-full`}>
                  <TiltCard
                    maxTilt={10}
                    scale={1.03}
                    glareColor="rgba(99, 102, 241, 0.3)"
                    className="glass-card rounded-3xl p-6 border border-slate-200/90 hover:border-indigo-400 transition-all flex flex-col justify-between h-full shadow-soft-sm hover:shadow-xl relative overflow-hidden"
                  >
                    {/* Periodic Cinematic Light Beam Sweep */}
                    <div className="pointer-events-none absolute inset-0 -translate-x-full animate-beam-sweep bg-gradient-to-r from-transparent via-white/50 to-transparent z-10 rounded-[inherit]" />

                    <div>
                      {/* Category Header */}
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform duration-150">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <h3 className="text-sm font-bold text-slate-900">
                          {group.category}
                        </h3>
                      </div>

                      {/* Skills List */}
                      <div className="space-y-2.5">
                        {group.skills.map((skill) => (
                          <div
                            key={skill.name}
                            className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-between hover:bg-white hover:border-indigo-200 hover:shadow-xs transition-all duration-150"
                          >
                            <span className="text-xs font-semibold text-slate-800 flex items-center gap-1.5">
                              <CheckCircle className="w-3.5 h-3.5 text-indigo-500" />
                              {skill.name}
                            </span>
                            <span
                              className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                                skill.level === 'Expert'
                                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/60'
                                  : skill.level === 'Advanced'
                                  ? 'bg-indigo-50 text-indigo-700 border border-indigo-200/60'
                                  : 'bg-slate-100 text-slate-600 border border-slate-200/60'
                              }`}
                            >
                              {skill.level}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 mt-6 border-t border-slate-100 text-[11px] text-slate-400 font-medium">
                      Actively updated & deployed
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
