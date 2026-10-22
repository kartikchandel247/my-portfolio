import { Code2, Smartphone, Database, ShieldCheck, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';
import TiltCard from './TiltCard';

const categoryIcons = {
  'Frontend Development': Code2,
  'Mobile & AI': Smartphone,
  'Backend & Databases': Database,
  'Quality Assurance & Testing': ShieldCheck,
};

export default function TechStack() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-emerald-100/40 rounded-full blur-[160px] pointer-events-none -z-10" />

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

        {/* Skills Category Grid with Staggered Rise & 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group, index) => {
            const IconComponent = categoryIcons[group.category] || Code2;

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.1, ease: 'easeOut' }}
              >
                <TiltCard
                  maxTilt={10}
                  scale={1.03}
                  className="glass-card rounded-3xl p-6 border border-slate-200 hover:border-indigo-300 transition-all flex flex-col justify-between h-full shadow-soft-sm"
                >
                  <div>
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
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
                          className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-between hover:bg-white transition-colors"
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
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
