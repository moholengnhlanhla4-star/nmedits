import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Creative work', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-950/80 backdrop-blur-xl border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="font-display text-2xl font-extrabold text-white tracking-tight">
            NM<span className="text-accent-400">.</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-ink-300 hover:text-white transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent-400 group-hover:w-6 transition-all duration-300" />
            </a>
          ))}
          <a
            href="#contact"
            className="ml-3 px-5 py-2.5 text-sm font-semibold bg-accent-400 text-ink-950 rounded-full hover:bg-accent-300 transition-all duration-200 hover:scale-105"
          >
            Work with me
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-ink-950/95 backdrop-blur-xl border-t border-white/5 mt-3">
          <div className="flex flex-col px-6 py-4 gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-ink-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 py-3 text-center font-semibold bg-accent-400 text-ink-950 rounded-full"
            >
              Work with me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
