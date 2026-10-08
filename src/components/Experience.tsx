import {
  Cpu, Award, Users, Briefcase,
} from 'lucide-react';
import { experienceData } from '@/data/portfolioData';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Cpu, Award, Users, Briefcase,
};

export default function Experience() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      id="experience"
      ref={ref}
      className="relative section-padding bg-dark-900/30 overflow-hidden"
    >
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-accent-500/10 rounded-full blur-[100px]" />

      <div className="relative max-w-container">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent-400 tracking-wider uppercase mb-3 reveal">My Journey</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 reveal reveal-delay-1">
            <span className="text-gradient-accent">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full mx-auto reveal reveal-delay-2" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experienceData.map((exp, i) => {
            const Icon = iconMap[exp.icon] ?? Briefcase;
            return (
              <div
                key={i}
                className={`glass-card p-6 hover:border-accent-500/30 transition-all duration-500 hover:translate-y-[-4px] reveal reveal-delay-${(i % 3) + 1} flex flex-col`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500/20 to-primary-500/20 border border-accent-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-accent-400" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-white leading-tight">{exp.title}</h3>
                    <p className="text-accent-400 text-xs font-medium mt-0.5">{exp.organization}</p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 bg-dark-800/60 rounded-lg w-fit mb-4 border border-dark-700/40">
                  <span className="text-xs text-dark-400 font-mono">{exp.period}</span>
                </div>

                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2">Responsibilities</h4>
                  <ul className="space-y-1.5">
                    {exp.responsibilities.map((r, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-dark-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2 flex-shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2">Skills Developed</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skillsDeveloped.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs font-medium bg-dark-800/60 text-primary-300 rounded-lg border border-primary-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-dark-700/40">
                  <div className="flex items-center gap-2 mb-1">
                    <Award className="w-3.5 h-3.5 text-accent-400" />
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Achievements</h4>
                  </div>
                  <p className="text-sm text-dark-300 mb-3">{exp.achievements}</p>

                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent-400 mt-1 flex-shrink-0" />
                    <p className="text-xs text-dark-400 leading-relaxed">{exp.outcome}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CheckCircle2({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
