import {
  Brain, Search, Terminal, ShieldCheck, Sparkles,
  Monitor, MessageSquare, Puzzle, Users, BookOpen,
} from 'lucide-react';
import { skillsData } from '@/data/portfolioData';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain, Search, Terminal, ShieldCheck, Sparkles,
  Monitor, MessageSquare, Puzzle, Users, BookOpen,
};

export default function Skills() {
  const ref = useScrollReveal<HTMLElement>();

  const aiSkills = skillsData.filter((s) => s.category === 'AI');
  const coreSkills = skillsData.filter((s) => s.category === 'Core');

  const renderSkillBar = (skill: typeof skillsData[0], index: number) => {
    const Icon = iconMap[skill.icon] ?? Brain;
    return (
      <div
        key={skill.name}
        className={`glass-card p-5 hover:border-primary-500/30 transition-all duration-500 hover:translate-y-[-2px] reveal reveal-delay-${(index % 4) + 1}`}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-500/20 border border-primary-500/20 flex items-center justify-center flex-shrink-0">
            <Icon className="w-5 h-5 text-primary-400" />
          </div>
          <span className="text-sm font-medium text-white">{skill.name}</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex-1 h-2 rounded-full bg-dark-800 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-1000 ease-out"
              style={{ width: `${skill.level}%` }}
            />
          </div>
          <span className="text-xs font-mono text-dark-400 w-9 text-right">{skill.level}%</span>
        </div>
      </div>
    );
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="relative section-padding overflow-hidden"
    >
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-primary-500/10 rounded-full blur-[100px]" />

      <div className="relative max-w-container">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary-400 tracking-wider uppercase mb-3 reveal">What I Bring</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 reveal reveal-delay-1">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto reveal reveal-delay-2" />
        </div>

        {/* AI Skills */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6 reveal">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
              <Brain className="w-4 h-4 text-white" />
            </div>
            <h3 className="font-display text-xl font-semibold text-white">AI & Technical Skills</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {aiSkills.map((skill, i) => renderSkillBar(skill, i))}
          </div>
        </div>

        {/* Core Skills */}
        <div>
          <div className="flex items-center gap-3 mb-6 reveal">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-500 to-accent-700 flex items-center justify-center">
              <Users className="w-4 h-4 text-white" />
            </div>
            <h3 className="font-display text-xl font-semibold text-white">Core Professional Skills</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {coreSkills.map((skill, i) => renderSkillBar(skill, i + 5))}
          </div>
        </div>
      </div>
    </section>
  );
}
