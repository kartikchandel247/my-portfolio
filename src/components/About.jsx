import { GraduationCap, MapPin, Award, CheckCircle2, Cpu, HeartHandshake, ArrowUpRight, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const highlights = [
    {
      title: 'Full Stack Web & Mobile Engineering',
      desc: 'Building responsive web interfaces with React & Tailwind CSS, cross-platform mobile apps with Flutter, and server-side APIs with Node.js and Supabase.',
      icon: Cpu,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-200',
    },
    {
      title: 'QA Automation & Edge Probing',
      desc: 'Specialized in Playwright E2E automation scripts, boundary testing, cascade form verification, and generating automated visual QA audit reports.',
      icon: CheckCircle2,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    },
    {
      title: 'Continuous Innovation & AI',
      desc: 'Hands-on experience designing autonomous AI agents (KIRA Jarvis), integrating voice/NLP workflows, and containerizing backends with Docker.',
      icon: Award,
      color: 'text-violet-600 bg-violet-50 border-violet-200',
    },
    {
      title: 'Collaborative Problem Solver',
      desc: 'Clear communicator with a proactive mindset. Focused on shipping clean code on time, meeting business milestones, and customer satisfaction.',
      icon: HeartHandshake,
      color: 'text-sky-600 bg-sky-50 border-sky-200',
    },
  ];

  const stats = [
    { number: '4+', label: 'Flagship Projects', detail: 'Mobile, Web, CRM, AI' },
    { number: '100+', label: 'QA Test Scenarios', detail: 'Automated & Manual Probes' },
    { number: '100%', label: 'Commitment', detail: 'Clean code & Zero regressions' },
    { number: '24/7', label: 'Availability', detail: 'Direct on WhatsApp & Email' },
  ];

  return (
    <section id="about" className="py-20 relative bg-white/70 backdrop-blur-md border-y border-slate-200/60">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-200/70">
            About Kartik Chandel
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Developer Mindset. <span className="text-gradient-indigo">QA Precision.</span>
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            I don't just build applications — I ensure they operate flawlessly under every edge case.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Portrait Photo with Cinematic Frame & Badges */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-[340px]">
              
              {/* Cinematic Glow Behind Image */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-500/30 via-purple-500/25 to-emerald-500/30 rounded-3xl blur-lg group-hover:blur-xl transition-all" />

              <div className="relative rounded-3xl p-3 bg-white/90 border border-slate-200 shadow-xl overflow-hidden">
                <div className="w-full h-[380px] rounded-2xl overflow-hidden bg-slate-100">
                  <img
                    src="/kartik-portrait.jpg"
                    alt="Kartik Chandel Profile"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
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

            </div>
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

            {/* Academic & Internship Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-soft-sm">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-3">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">{personalInfo.education.institution}</h4>
                <p className="text-xs text-slate-500 mt-1">{personalInfo.education.status} • {personalInfo.education.focus}</p>
                <div className="mt-3 text-xs font-semibold text-indigo-600 inline-flex items-center gap-1">
                  Active Student
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-soft-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-3">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">Bilaspur, Himachal Pradesh</h4>
                <p className="text-xs text-slate-500 mt-1">Hometown & Roots, India</p>
                <div className="mt-3 text-xs font-semibold text-emerald-600 inline-flex items-center gap-1">
                  Remote & Onsite Ready
                </div>
              </div>
            </div>

            {/* Inquire on WhatsApp & Email */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={personalInfo.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 px-5 py-3 rounded-xl transition-all"
              >
                Inquire on WhatsApp
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="inline-flex items-center gap-2 text-xs font-bold text-indigo-600 hover:text-indigo-700 bg-indigo-50 hover:bg-indigo-100/70 px-5 py-3 rounded-xl transition-all border border-indigo-200/80"
              >
                Send Email ({personalInfo.contact.email})
              </a>
            </div>

          </div>

        </div>

        {/* Strengths & Highlights Grid */}
        <div className="mt-14 space-y-4">
          <h3 className="text-lg font-bold text-slate-900 text-center">
            Core Engineering Superpowers
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-soft-sm hover:shadow-soft transition-all hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-3 ${item.color}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14 pt-12 border-t border-slate-200/70">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-5 rounded-2xl bg-white border border-slate-200/80 text-center hover:bg-slate-50 transition-all shadow-soft-sm"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-1 text-gradient-indigo">
                {stat.number}
              </div>
              <div className="text-sm font-bold text-slate-800">{stat.label}</div>
              <div className="text-xs text-slate-500 mt-1">{stat.detail}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
