import { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';
import { navLinks } from '@/data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((link) => link.href.substring(1));
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-lg shadow-dark-950/20 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-container px-6 md:px-12 lg:px-20 flex items-center justify-between">
        <button
          onClick={() => handleClick('#home')}
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Cpu className="w-5 h-5 text-white" />
          </div>
          <span className="font-display text-lg font-bold text-white tracking-tight">
            Siphamandla
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                activeSection === link.href.substring(1)
                  ? 'text-primary-400 bg-primary-500/10'
                  : 'text-dark-300 hover:text-white hover:bg-dark-800/50'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg text-white hover:bg-dark-800/50 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass mt-3 mx-4 rounded-2xl p-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className={`px-4 py-3 text-left text-sm font-medium rounded-xl transition-all duration-300 ${
                activeSection === link.href.substring(1)
                  ? 'text-primary-400 bg-primary-500/10'
                  : 'text-dark-300 hover:text-white hover:bg-dark-800/50'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
