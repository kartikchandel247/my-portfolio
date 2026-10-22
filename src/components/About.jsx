import { GraduationCap, MapPin, Award, CheckCircle2, ShieldAlert, Cpu, HeartHandshake, FileText, ArrowUpRight } from 'lucide-react';
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
    <section id="about" className="py-20 relative bg-white border-y border-slate-200/60">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Story & Background */}
          <div className="lg:col-span-7 space-y-6 text-slate-600 text-base leading-relaxed">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                My Story & Background
              </h3>
              <p>
                Originally from the serene town of <strong className="text-slate-800">Bilaspur, Himachal Pradesh</strong>, 
                I am currently pursuing my technical education at <strong className="text-slate-800">{personalInfo.education.institution}</strong>. 
                My passion lies at the intersection of product engineering and quality assurance.
              </p>
              <p>
                As a <strong className="text-slate-800">Full Stack Developer & QA Intern</strong>, I spend my days building dynamic web applications 
                and mobile solutions, while simultaneously writing test automation suites with <strong className="text-slate-800">Playwright</strong>. 
                This dual discipline allows me to write resilient, maintainable code because I understand how software breaks in production.
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
                <p className="text-xs text-slate-500 mt-1">Roots & Hometown, India</p>
                <div className="mt-3 text-xs font-semibold text-emerald-600 inline-flex items-center gap-1">
                  Remote & Onsite Ready
                </div>
              </div>
            </div>

            {/* Quick Resume & Direct Contact CTA */}
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

          {/* Right Column: Strengths & Highlights */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 px-1">
              Key Engineering Superpowers
            </h3>

            <div className="space-y-3.5">
              {highlights.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-soft-sm hover:shadow-soft transition-all hover:-translate-y-0.5 flex gap-4 items-start"
                  >
                    <div className={`p-2.5 rounded-xl border shrink-0 ${item.color}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-12 border-t border-slate-200/70">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 text-center hover:bg-white transition-all shadow-soft-sm"
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
