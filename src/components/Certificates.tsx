import { Award, ExternalLink, Building2, Tag, X } from 'lucide-react';
import { certificatesData } from '@/data/portfolioData';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Certificates() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      id="certificates"
      ref={ref}
      className="relative section-padding overflow-hidden"
    >
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-accent-500/10 rounded-full blur-[100px]" />

      <div className="relative max-w-container">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary-400 tracking-wider uppercase mb-3 reveal">Credentials</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 reveal reveal-delay-1">
            Certificates & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto reveal reveal-delay-2">
            Google AI certifications showcasing foundational knowledge, responsible AI practices, and ongoing AI development.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto mt-4 reveal reveal-delay-3" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificatesData.map((cert, i) => (
            <div
              key={cert.title}
              className={`glass-card overflow-hidden hover:border-primary-500/30 transition-all duration-500 hover:translate-y-[-6px] reveal reveal-delay-${(i % 4) + 1} group flex flex-col`}
            >
              {/* Certificate image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent" />
                <div className="absolute top-3 right-3 w-10 h-10 rounded-lg bg-dark-950/70 backdrop-blur-md flex items-center justify-center border border-dark-700/50">
                  <Award className="w-5 h-5 text-accent-400" />
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="px-2.5 py-1 text-xs font-medium bg-primary-500/20 text-primary-300 rounded-lg border border-primary-500/30 backdrop-blur-md">
                    {cert.category}
                  </span>
                </div>
              </div>

              {/* Certificate info */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display text-base font-semibold text-white mb-2 leading-tight">{cert.title}</h3>

                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="w-4 h-4 text-dark-400" />
                  <span className="text-sm text-dark-300">{cert.organization}</span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <Tag className="w-3.5 h-3.5 text-dark-500" />
                  <span className="text-xs text-dark-400">{cert.category}</span>
                </div>

                <p className="text-xs text-dark-400 leading-relaxed mb-4 flex-1">{cert.description}</p>

                <button className="inline-flex items-center justify-center gap-1.5 w-full px-4 py-2.5 bg-gradient-to-r from-primary-500/10 to-accent-500/10 hover:from-primary-500/20 hover:to-accent-500/20 text-primary-300 font-medium text-sm rounded-xl border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300 group/btn">
                  View Certificate
                  <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-xs text-dark-500 mt-8 reveal">
          Certificate dates and reference numbers are not displayed as they have not been verified for publication.
        </p>
      </div>
    </section>
  );
}
