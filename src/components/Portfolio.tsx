import { useReveal } from '@/hooks/useReveal';

const images = [
  {
    url: 'https://images.pexels.com/photos/26576975/pexels-photo-26576975.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Brand Logo Design',
    cat: 'Logo',
  },
  {
    url: 'https://images.pexels.com/photos/18936418/pexels-photo-18936418.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Apparel Mock-up',
    cat: 'Mock-up',
  },
  {
    url: 'https://images.pexels.com/photos/3964758/pexels-photo-3964758.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Poster Series',
    cat: 'Poster',
  },
  {
    url: 'https://images.pexels.com/photos/11063289/pexels-photo-11063289.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Video Editing Setup',
    cat: 'Video',
  },
  {
    url: 'https://images.pexels.com/photos/31665305/pexels-photo-31665305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Photo Retouching',
    cat: 'Photo',
  },
  {
    url: 'https://images.pexels.com/photos/7661184/pexels-photo-7661184.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Brand Identity Kit',
    cat: 'Logo',
  },
  {
    url: 'https://images.pexels.com/photos/30229850/pexels-photo-30229850.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Color Grading',
    cat: 'Video',
  },
  {
    url: 'https://images.pexels.com/photos/15022208/pexels-photo-15022208.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Portrait Retouch',
    cat: 'Photo',
  },
];

const filters = ['All', 'Logo', 'Mock-up', 'Poster', 'Photo', 'Video'];

import { useState } from 'react';

export default function Portfolio() {
  const { ref, visible } = useReveal();
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? images : images.filter((img) => img.cat === active);

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-ink-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-sm font-semibold text-accent-400 tracking-widest uppercase">Creative work</span>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white mt-3 leading-tight">
                The kind of work I love making.
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    active === f
                      ? 'bg-accent-400 text-ink-950'
                      : 'bg-white/5 text-ink-300 hover:bg-white/10'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((img, i) => (
            <div
              key={img.title}
              className={`group relative overflow-hidden rounded-2xl bg-ink-900 cursor-pointer ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } transition-all duration-700`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={img.url}
                  alt={img.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                <span className="text-xs font-semibold text-accent-400 uppercase tracking-wider">{img.cat}</span>
                <h3 className="font-display text-lg font-bold text-white mt-1">{img.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
