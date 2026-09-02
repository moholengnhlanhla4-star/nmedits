import { Instagram, Youtube, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink-950 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-display text-2xl font-extrabold text-white tracking-tight">
              Nhlanhla<span className="text-accent-400">.</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:moholengnlanhla4@gmail.com"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-ink-300 hover:text-white transition-all"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="#contact"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-ink-300 hover:text-white transition-all"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#contact"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-ink-300 hover:text-white transition-all"
              aria-label="YouTube"
            >
              <Youtube size={18} />
            </a>
          </div>

          <a
            href="#top"
            className="inline-flex items-center gap-2 text-sm text-ink-400 hover:text-white transition-colors"
          >
            Back to top
            <ArrowUp size={16} />
          </a>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center text-sm text-ink-500">
          © {new Date().getFullYear()} Nhlanhla Mohuleng. Built from ideas, pixels, and purpose.
        </div>
      </div>
    </footer>
  );
}
