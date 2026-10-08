import { useState } from 'react';
import {
  Mail, FileText, CalendarCheck, Search,
  Target, User, Wrench, CheckCircle2, X, ChevronRight,
} from 'lucide-react';
import { projectsData } from '@/data/portfolioData';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Mail, FileText, CalendarCheck, Search,
};

export default function Projects() {
  const ref = useScrollReveal<HTMLElement>();
  const [selected, setSelected] = useState<number | null>(null);

  const selectedProject = selected !== null ? projectsData[selected] : null;

  return (
    <section
      id="projects"
      ref={ref}
      className="relative section-padding overflow-hidden"
    >
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-primary-500/10 rounded-full blur-[100px]" />

      <div className="relative max-w-container">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary-400 tracking-wider uppercase mb-3 reveal">My Work</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 reveal reveal-delay-1">
            AI <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto reveal reveal-delay-2">
            Practical AI-powered tools that demonstrate the real-world application of prompt engineering, generative AI, and responsible AI practices.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto mt-4 reveal reveal-delay-3" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projectsData.map((project, i) => {
            const Icon = iconMap[project.icon] ?? Search;
            return (
              <div
                key={project.name}
                className={`glass-card p-6 md:p-8 hover:border-primary-500/30 transition-all duration-500 hover:translate-y-[-4px] cursor-pointer group reveal reveal-delay-${(i % 2) + 1}`}
                onClick={() => setSelected(i)}
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 border border-primary-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-primary-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold text-white mb-1">{project.name}</h3>
                    <p className="text-dark-400 text-sm leading-relaxed">{project.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 text-xs font-medium bg-dark-800/60 text-primary-300 rounded-lg border border-primary-500/20"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelected(i)}
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary-400 hover:text-primary-300 transition-colors group/btn"
                >
                  View Details
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project detail modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-dark-950/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <div
            className="glass-card max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-8 animate-scale-in scrollbar-hide"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 border border-primary-500/20 flex items-center justify-center">
                  {(() => {
                    const Icon = iconMap[selectedProject.icon] ?? Search;
                    return <Icon className="w-7 h-7 text-primary-400" />;
                  })()}
                </div>
                <h3 className="font-display text-2xl font-bold text-white">{selectedProject.name}</h3>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="w-10 h-10 rounded-lg flex items-center justify-center text-dark-400 hover:text-white hover:bg-dark-800/60 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-dark-300 text-sm leading-relaxed mb-6">{selectedProject.description}</p>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Target className="w-4 h-4 text-primary-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-1">Objective</h4>
                  <p className="text-dark-300 text-sm leading-relaxed">{selectedProject.objective}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <User className="w-4 h-4 text-primary-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-1">My Role</h4>
                  <p className="text-dark-300 text-sm leading-relaxed">{selectedProject.role}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Wrench className="w-4 h-4 text-accent-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-2">Tools & Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1.5 text-xs font-medium bg-dark-800/60 text-primary-300 rounded-lg border border-primary-500/20"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-accent-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-2">Skills Demonstrated</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-xs font-medium bg-dark-800/60 text-accent-300 rounded-lg border border-accent-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-1">Final Outcome</h4>
                  <p className="text-dark-300 text-sm leading-relaxed">{selectedProject.outcome}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
