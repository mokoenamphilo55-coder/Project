import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';
import { educationData } from '@/data/portfolioData';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Award,
  GraduationCap,
};

export default function Education() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      id="education"
      ref={ref}
      className="relative section-padding bg-dark-900/30 overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-500/10 rounded-full blur-[100px]" />

      <div className="relative max-w-container">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent-400 tracking-wider uppercase mb-3 reveal">My Background</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 reveal reveal-delay-1">
            <span className="text-gradient-accent">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full mx-auto reveal reveal-delay-2" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-accent-500/50 to-transparent hidden md:block" />

          <div className="space-y-8">
            {educationData.map((edu, i) => {
              const Icon = iconMap[edu.icon] ?? GraduationCap;
              return (
                <div
                  key={i}
                  className={`relative md:pl-20 reveal ${i % 2 === 0 ? 'slide-in-left' : ''}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-br from-primary-400 to-accent-500 border-4 border-dark-950 z-10 hidden md:block">
                    <div className="absolute inset-0 rounded-full bg-primary-400 animate-ping opacity-30" />
                  </div>

                  <div className="glass-card p-6 md:p-8 hover:border-primary-500/30 transition-all duration-500 hover:translate-x-1">
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 border border-primary-500/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display text-xl font-semibold text-white">{edu.institution}</h3>
                        <p className="text-primary-400 text-sm font-medium mt-1">{edu.program}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Calendar className="w-4 h-4 text-dark-400" />
                          <span className="text-dark-400 text-sm">{edu.dates}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <BookOpen className="w-4 h-4 text-accent-400" />
                          <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Relevant Subjects</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {edu.subjects.map((subject) => (
                            <span
                              key={subject}
                              className="px-3 py-1.5 text-xs font-medium bg-dark-800/60 text-dark-200 rounded-lg border border-dark-700/50"
                            >
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Award className="w-4 h-4 text-accent-400" />
                          <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Achievements</h4>
                        </div>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-dark-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent-400 mt-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
