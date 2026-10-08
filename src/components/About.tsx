import { User, GraduationCap, Target, Cpu, ShieldCheck, BookOpen } from 'lucide-react';
import { profileData } from '@/data/portfolioData';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const aboutCards = [
  {
    icon: User,
    title: 'Personal Introduction',
    content: profileData.about,
  },
  {
    icon: GraduationCap,
    title: 'Educational Background',
    content: profileData.educationBackground,
  },
  {
    icon: Target,
    title: 'Career Interests',
    content: profileData.careerInterests,
  },
  {
    icon: Cpu,
    title: 'Interest in AI & Technology',
    content: profileData.aiInterest,
  },
  {
    icon: BookOpen,
    title: 'Professional Goals',
    content: profileData.professionalGoals,
  },
  {
    icon: ShieldCheck,
    title: 'Responsible AI Statement',
    content: profileData.responsibleAIStatement,
  },
];

export default function About() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      id="about"
      ref={ref}
      className="relative section-padding overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary-500/10 rounded-full blur-[100px]" />

      <div className="relative max-w-container">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary-400 tracking-wider uppercase mb-3 reveal">About Me</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 reveal reveal-delay-1">
            About <span className="text-gradient">Siphamandla</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto reveal reveal-delay-2" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aboutCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className={`glass-card p-6 hover:border-primary-500/30 transition-all duration-500 hover:translate-y-[-4px] reveal reveal-delay-${i % 3 + 1}`}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 border border-primary-500/20 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="font-display text-lg font-semibold text-white mb-3">{card.title}</h3>
                <p className="text-dark-300 text-sm leading-relaxed">{card.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
