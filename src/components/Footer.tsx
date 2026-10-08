import { Cpu, ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-dark-800/50 bg-dark-950 py-12 px-6 md:px-12 lg:px-20">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-primary-500/50 to-transparent" />

      <div className="max-w-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
              <Cpu className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-display text-lg font-bold text-white">Siphamandla</p>
              <p className="text-xs text-dark-400">AI & Technology Enthusiast</p>
            </div>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 px-4 py-2.5 glass text-sm text-dark-200 font-medium rounded-xl hover:text-white hover:border-primary-500/30 transition-all duration-300"
          >
            Back to Top
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="mt-8 pt-8 border-t border-dark-800/50 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-dark-500">
            © {new Date().getFullYear()} Siphamandla. All rights reserved.
          </p>
          <p className="text-xs text-dark-500 flex items-center gap-1.5">
            Built with passion for AI and technology
            <Heart className="w-3 h-3 text-primary-400" />
          </p>
        </div>
      </div>
    </footer>
  );
}
