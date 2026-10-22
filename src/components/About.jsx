import { GraduationCap, MapPin, Award, CheckCircle2, Cpu, HeartHandshake, ArrowUpRight, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import TiltCard from './TiltCard';
import SectionBackground from './SectionBackground';
import SubpageHeader from './SubpageHeader';

export default function About({ onNavigate }) {
  const highlights = [
    {
      title: 'Full Stack Web & Mobile Engineering',
      desc: 'Building responsive web interfaces with React & Tailwind CSS, cross-platform mobile apps with Flutter, and server-side APIs with Node.js and Supabase.',
      icon: Cpu,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-200 group-hover:bg-indigo-600 group-hover:text-white',
      borderGlow: 'hover:border-indigo-400 hover:shadow-[0_16px_36px_rgba(99,102,241,0.22)]',
      accentGlow: 'from-indigo-500/15 via-purple-500/10 to-transparent',
      floatClass: 'animate-card-float-1',
      glowClass: 'glow-card-indigo',
      glareColor: 'rgba(99, 102, 241, 0.4)',
      badge: 'React & Flutter',
      badgeColor: 'text-indigo-600 bg-indigo-50 border-indigo-200/80',
    },
    {
      title: 'QA Automation & Edge Probing',
      desc: 'Specialized in Playwright E2E automation scripts, boundary testing, cascade form verification, and generating automated visual QA audit reports.',
      icon: CheckCircle2,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200 group-hover:bg-emerald-600 group-hover:text-white',
      borderGlow: 'hover:border-emerald-400 hover:shadow-[0_16px_36px_rgba(16,185,129,0.22)]',
      accentGlow: 'from-emerald-500/15 via-teal-500/10 to-transparent',
      floatClass: 'animate-card-float-2',
      glowClass: 'glow-card-emerald',
      glareColor: 'rgba(16, 185, 129, 0.4)',
      badge: 'Playwright E2E',
      badgeColor: 'text-emerald-600 bg-emerald-50 border-emerald-200/80',
    },
    {
      title: 'Continuous Innovation & AI',
      desc: 'Hands-on experience designing autonomous AI agents (KIRA Jarvis), integrating voice/NLP workflows, and containerizing backends with Docker.',
      icon: Award,
      color: 'text-violet-600 bg-violet-50 border-violet-200 group-hover:bg-violet-600 group-hover:text-white',
      borderGlow: 'hover:border-violet-400 hover:shadow-[0_16px_36px_rgba(168,85,247,0.22)]',
      accentGlow: 'from-violet-500/15 via-pink-500/10 to-transparent',
      floatClass: 'animate-card-float-3',
      glowClass: 'glow-card-violet',
      glareColor: 'rgba(168, 85, 247, 0.4)',
      badge: 'AI & Systems',
      badgeColor: 'text-violet-600 bg-violet-50 border-violet-200/80',
    },
    {
      title: 'Collaborative Problem Solver',
      desc: 'Clear communicator with a proactive mindset. Focused on shipping clean code on time, meeting business milestones, and customer satisfaction.',
      icon: HeartHandshake,
      color: 'text-sky-600 bg-sky-50 border-sky-200 group-hover:bg-sky-600 group-hover:text-white',
      borderGlow: 'hover:border-sky-400 hover:shadow-[0_16px_36px_rgba(14,165,233,0.22)]',
      accentGlow: 'from-sky-500/15 via-cyan-500/10 to-transparent',
      floatClass: 'animate-card-float-4',
      glowClass: 'glow-card-cyan',
      glareColor: 'rgba(14, 165, 233, 0.4)',
      badge: 'Agile Delivery',
      badgeColor: 'text-sky-600 bg-sky-50 border-sky-200/80',
    },
  ];

  const stats = [
    { number: '4+', label: 'Flagship Projects', detail: 'Mobile, Web, CRM, AI' },
    { number: '100+', label: 'QA Test Scenarios', detail: 'Automated & Manual Probes' },
    { number: '100%', label: 'Commitment', detail: 'Clean code & Zero regressions' },
    { number: '24/7', label: 'Availability', detail: 'Direct on WhatsApp & Email' },
  ];

  return (
    <section id="about" className="pt-8 pb-24 relative overflow-hidden">
      
      {/* Moving Atmosphere Aurora & Cyber Mesh Background */}
      <SectionBackground variant="about" showTopDivider={false} showBottomDivider={true} />

      {/* Subpage Header Banner */}
      <SubpageHeader
        badge="About Kartik Chandel"
        title="Developer Mindset."
        titleHighlight="QA Precision."
        description="I don't just build applications — I ensure they operate flawlessly under every edge case. Explore my background, academic credentials, and core engineering superpowers below."
        currentId="about"
        onNavigate={onNavigate}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Portrait Photo with 3D Tilt */}
          <div className="lg:col-span-5 flex justify-center">
            <TiltCard maxTilt={10} scale={1.03} className="relative w-full max-w-[340px]">
              
              {/* Cinematic Glow Behind Image */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-500/30 via-purple-500/25 to-emerald-500/30 rounded-3xl blur-lg transition-all" />

              <div className="relative rounded-3xl p-3 bg-white/90 border border-slate-200 shadow-xl overflow-hidden">
                <div className="w-full h-[380px] rounded-2xl overflow-hidden bg-slate-100">
                  <img
                    src="/kartik-portrait.jpg"
                    alt="Kartik Chandel Profile"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top transition-transform duration-300"
                  />
                </div>

                {/* Floating Location Overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-3 rounded-xl bg-slate-900/85 backdrop-blur-md text-white text-xs flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald-400" />
                    <span className="font-semibold">Bilaspur, HP</span>
                  </div>
                  <span className="text-[11px] text-slate-300 font-medium">India</span>
                </div>
              </div>

            </TiltCard>
          </div>

          {/* Right Column: Story & Background */}
          <div className="lg:col-span-7 space-y-6 text-slate-600 text-base leading-relaxed">
            <div className="p-6 rounded-2xl bg-white/90 border border-slate-200/90 shadow-soft-sm space-y-4">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-600" />
                My Story & Background
              </h3>
              <p>
                Originally from the scenic hills of <strong className="text-slate-800">Bilaspur, Himachal Pradesh</strong>, 
                I am currently pursuing my technical degree at <strong className="text-slate-800">{personalInfo.education.institution}</strong>. 
                My focus centers on high-impact software engineering and test automation.
              </p>
              <p>
                As an active <strong className="text-slate-800">Full Stack Developer & QA Intern</strong>, I balance both worlds: 
                engineering robust full-stack web and mobile apps with <strong className="text-slate-800">React, Flutter, and Node.js</strong>, 
                while simultaneously writing comprehensive automated E2E tests using <strong className="text-slate-800">Playwright</strong>. 
                Knowing how software breaks in production enables me to design cleaner, resilient architectures.
              </p>
            </div>

            {/* Academic & Internship Cards with Fast Response */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <TiltCard maxTilt={8} scale={1.03} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-soft-sm hover:border-indigo-300 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-3">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">{personalInfo.education.institution}</h4>
                <p className="text-xs text-slate-500 mt-1">{personalInfo.education.status} • {personalInfo.education.focus}</p>
                <div className="mt-3 text-xs font-semibold text-indigo-600 inline-flex items-center gap-1">
                  Active Student
                </div>
              </TiltCard>

              <TiltCard maxTilt={8} scale={1.03} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-soft-sm hover:border-emerald-300 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-3">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">Bilaspur, Himachal Pradesh</h4>
                <p className="text-xs text-slate-500 mt-1">Hometown & Roots, India</p>
                <div className="mt-3 text-xs font-semibold text-emerald-600 inline-flex items-center gap-1">
                  Remote & Onsite Ready
                </div>
              </TiltCard>
            </div>

            {/* Inquire on WhatsApp & Email */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={personalInfo.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 px-5 py-3 rounded-xl transition-all shadow-sm hover:-translate-y-0.5"
              >
                Inquire on WhatsApp
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="inline-flex items-center gap-2 text-xs font-bold text-indigo-600 hover:text-indigo-700 bg-indigo-50 hover:bg-indigo-100/70 px-5 py-3 rounded-xl transition-all border border-indigo-200/80 shadow-sm hover:-translate-y-0.5"
              >
                Send Email ({personalInfo.contact.email})
              </a>
            </div>

          </div>

        </div>

        {/* Core Engineering Superpowers: Fast Organic Motion & Floating Levitation */}
        <div className="mt-16 space-y-4">
          <h3 className="text-lg font-extrabold text-slate-900 text-center">
            Core Engineering Superpowers
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.title} className="h-full">
                  <div className={`${item.floatClass} pause-on-hover h-full`}>
                    <TiltCard
                      maxTilt={12}
                      scale={1.04}
                      glareColor={item.glareColor}
                      className={`group h-full p-6 rounded-3xl bg-white border border-slate-200/90 ${item.glowClass} ${item.borderGlow} transition-all duration-150 flex flex-col justify-between overflow-hidden cursor-pointer relative shadow-sm`}
                    >
                      {/* Periodic Cinematic Light Beam Sweep */}
                      <div className="pointer-events-none absolute inset-0 -translate-x-full animate-beam-sweep bg-gradient-to-r from-transparent via-white/50 to-transparent z-10 rounded-[inherit]" />

                      {/* Top Accent Gradient Flare */}
                      <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-br ${item.accentGlow} rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-200`} />

                      <div>
                        {/* Top Row: Icon + Badge */}
                        <div className="flex items-center justify-between gap-2 mb-4">
                          <div className="relative">
                            <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-all duration-150 group-hover:scale-115 shadow-sm ${item.color}`}>
                              <IconComponent className="w-6 h-6 transition-transform duration-150 group-hover:rotate-6" />
                            </div>
                          </div>
                          <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border shadow-2xs ${item.badgeColor}`}>
                            {item.badge}
                          </span>
                        </div>

                        <h4 className="text-sm font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400 group-hover:text-indigo-600 transition-colors">
                        <span>Active Capability</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-150" />
                      </div>
                    </TiltCard>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Row with Immediate Presence, Lively Floating Motion, Beam Sweeps & Fast Hover Elevation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-12 border-t border-slate-200/70">
          {stats.map((stat, sIdx) => {
            const statFloats = ['animate-card-float-2', 'animate-card-float-3', 'animate-card-float-4', 'animate-card-float-1'];
            const currentFloat = statFloats[sIdx % statFloats.length];

            return (
              <div key={stat.label}>
                <div className={`${currentFloat} pause-on-hover`}>
                  <TiltCard
                    maxTilt={10}
                    scale={1.04}
                    glareColor="rgba(99, 102, 241, 0.3)"
                    className="group p-5 rounded-2xl bg-white border border-slate-200/90 text-center shadow-soft-sm hover:border-indigo-300 hover:shadow-xl transition-all duration-150 cursor-pointer overflow-hidden relative"
                  >
                    {/* Periodic Light Beam Sweep */}
                    <div className="pointer-events-none absolute inset-0 -translate-x-full animate-beam-sweep bg-gradient-to-r from-transparent via-white/50 to-transparent z-10 rounded-[inherit]" />

                    <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-1 text-gradient-indigo group-hover:scale-115 transition-transform duration-150">
                      {stat.number}
                    </div>
                    <div className="text-sm font-bold text-slate-800">{stat.label}</div>
                    <div className="text-xs text-slate-500 mt-1">{stat.detail}</div>
                  </TiltCard>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
