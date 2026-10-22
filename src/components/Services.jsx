import { Layout, Layers, Server, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { services, personalInfo } from '../data/portfolioData';

const iconMap = {
  Layout: Layout,
  Layers: Layers,
  Server: Server,
  ShieldCheck: ShieldCheck,
};

export default function Services() {
  return (
    <section id="services" className="py-20 relative bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-200/70">
            What I Deliver
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Services & <span className="text-gradient-indigo">Solutions</span>
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            High-caliber development paired with rigorous quality assurance to help you build and scale with confidence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Layout;
            return (
              <div
                key={service.id}
                className="glass-card rounded-2xl p-8 relative flex flex-col justify-between group overflow-hidden border border-slate-200 hover:border-indigo-300"
              >
                {/* Background Accent Gradient */}
                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${service.gradient} rounded-full blur-3xl -z-10 group-hover:scale-125 transition-transform`} />

                <div>
                  {/* Service Icon */}
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-soft-sm flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Technology Pills */}
                  <div className="space-y-2 mb-6">
                    <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider block">
                      Core Technologies & Focus:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200/60"
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
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </a>

                  <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                    Active Offering
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
