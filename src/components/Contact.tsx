import { useState } from 'react';
import { Mail, Phone, Linkedin, Send, User, MessageSquare, MapPin, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Contact() {
  const ref = useScrollReveal<HTMLElement>();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative section-padding bg-dark-900/30 overflow-hidden"
    >
      <div className="absolute top-0 right-1/3 w-72 h-72 bg-primary-500/10 rounded-full blur-[100px]" />

      <div className="relative max-w-container">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent-400 tracking-wider uppercase mb-3 reveal">Get In Touch</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 reveal reveal-delay-1">
            Contact <span className="text-gradient">Siphamandla</span>
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto reveal reveal-delay-2">
            Have a question, opportunity, or just want to connect? I'd love to hear from you.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full mx-auto mt-4 reveal reveal-delay-3" />
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-4 reveal">
            <div className="glass-card p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 border border-primary-500/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <p className="text-xs text-dark-400 uppercase tracking-wider">Email</p>
                  <p className="text-sm text-white font-medium">Contact for details</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 border border-primary-500/20 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <p className="text-xs text-dark-400 uppercase tracking-wider">Phone</p>
                  <p className="text-sm text-white font-medium">Available upon request</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 border border-primary-500/20 flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <p className="text-xs text-dark-400 uppercase tracking-wider">Professional Profile</p>
                  <p className="text-sm text-white font-medium">Available upon request</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500/20 to-primary-500/20 border border-accent-500/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent-400" />
                </div>
                <div>
                  <p className="text-xs text-dark-400 uppercase tracking-wider">Availability</p>
                  <p className="text-sm text-white font-medium">Open to opportunities</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3 reveal reveal-delay-2">
            <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-5">
              {submitted && (
                <div className="flex items-center gap-3 p-4 bg-accent-500/10 border border-accent-500/30 rounded-xl animate-fade-in-down">
                  <CheckCircle2 className="w-5 h-5 text-accent-400 flex-shrink-0" />
                  <p className="text-sm text-accent-300">
                    Thank you! Your message has been sent. I'll get back to you soon.
                  </p>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-500" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 bg-dark-800/60 border border-dark-700/50 rounded-xl text-white text-sm placeholder-dark-500 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-500" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 bg-dark-800/60 border border-dark-700/50 rounded-xl text-white text-sm placeholder-dark-500 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-dark-500" />
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 bg-dark-800/60 border border-dark-700/50 rounded-xl text-white text-sm placeholder-dark-500 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all resize-none"
                    placeholder="Write your message here..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] hover:glow-primary"
              >
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
