import {
  Brain, ClipboardCheck, ShieldCheck, TrendingUp, Wrench, Terminal,
} from 'lucide-react';
import { aiLearningData } from '@/data/portfolioData';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain, ClipboardCheck, ShieldCheck, TrendingUp, Wrench, Terminal,
};

export default function AIJourney() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      id="ai-journey"
      ref={ref}
      className="relative section-padding bg-dark-900/30 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px]" />

      <div className="relative max-w-container">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent-400 tracking-wider uppercase mb-3 reveal">Continuous Learning</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 reveal reveal-delay-1">
            AI Learning <span className="text-gradient-accent">Journey</span>
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto reveal reveal-delay-2">
            A structured path through the world of Artificial Intelligence — from fundamentals to practical application and responsible use.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full mx-auto mt-4 reveal reveal-delay-3" />
        </div>

        {/* Journey path */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary-500/30 to-transparent hidden lg:block" />

          <div className="space-y-6 lg:space-y-0">
            {aiLearningData.map((item, i) => {
              const Icon = iconMap[item.icon] ?? Brain;
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={item.title}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-12 ${isLeft ? '' : 'lg:[direction:rtl]'}`}
                >
                  {/* Timeline node */}
                  <div className="absolute left-1/2 top-8 -translate-x-1/2 z-10 hidden lg:block">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-primary-400 to-accent-500 border-4 border-dark-950" />
                  </div>

                  {/* Content */}
                  <div
                    className={`reveal ${isLeft ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:col-start-2 lg:[direction:ltr]'} ${i % 2 === 0 ? 'reveal-delay-1' : 'reveal-delay-2'}`}
                  >
                    <div className="glass-card p-6 hover:border-primary-500/30 transition-all duration-500 hover:translate-y-[-2px] mb-6 lg:mb-0">
                      <div className={`flex items-center gap-3 mb-4 ${isLeft ? 'lg:flex-row-reverse' : ''}`}>
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 border border-primary-500/20 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary-400" />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono text-primary-400">0{i + 1}</span>
                          <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                        </div>
                      </div>
                      <p className="text-dark-300 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden lg:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
