import { ArrowRight, Mail, FolderGit2, Award, Sparkles } from 'lucide-react';
import { profileData } from '@/data/portfolioData';

export default function Hero() {
  const handleClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-950/95 to-dark-950" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/15 rounded-full blur-[120px] animate-pulse-slow" />

      <div className="relative max-w-container px-6 md:px-12 lg:px-20 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20">
        {/* Left: Text content */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-fade-in-down">
            <Sparkles className="w-4 h-4 text-accent-400" />
            <span className="text-sm text-dark-200 font-medium">AI & Technology Enthusiast</span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 animate-fade-in-up">
            Hi, I'm{' '}
            <span className="text-gradient">Siphamandla</span>
          </h1>

          <p className="text-lg md:text-xl text-dark-300 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-in-up" style={{ animationDelay: '0.15s', opacity: 0, animationFillMode: 'forwards' }}>
            {profileData.tagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>
            <button
              onClick={() => handleClick('#projects')}
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:glow-primary"
            >
              <FolderGit2 className="w-5 h-5" />
              View My Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => handleClick('#certificates')}
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 glass text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:border-accent-500/50"
            >
              <Award className="w-5 h-5 text-accent-400" />
              View My Certificates
            </button>
            <button
              onClick={() => handleClick('#contact')}
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 glass text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:border-primary-500/50"
            >
              <Mail className="w-5 h-5 text-primary-400" />
              Contact Me
            </button>
          </div>
        </div>

        {/* Right: Profile image */}
        <div className="order-1 lg:order-2 flex justify-center animate-scale-in" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
          <div className="relative">
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary-500/30 to-accent-500/30 blur-2xl scale-110 animate-pulse-slow" />

            {/* Image container */}
            <div className="relative w-72 h-96 md:w-80 md:h-[28rem] rounded-[2rem] overflow-hidden border-2 border-dark-700/50 glow-primary">
              <img
                src={profileData.profileImage}
                alt="Siphamandla"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 glass-card px-4 py-3 flex items-center gap-3 animate-float">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-500 to-accent-700 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-dark-400">Certified by</p>
                <p className="text-sm font-semibold text-white">Google AI</p>
              </div>
            </div>

            {/* Floating top badge */}
            <div className="absolute -top-4 -right-4 glass-card px-4 py-3 flex items-center gap-3 animate-float" style={{ animationDelay: '1s' }}>
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-dark-400">4 Certificates</p>
                <p className="text-sm font-semibold text-white">AI Certified</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-bounce-slow">
        <span className="text-xs text-dark-400 font-medium tracking-wider uppercase">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-dark-600 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-primary-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
