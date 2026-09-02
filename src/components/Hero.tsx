import { ArrowDown, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden bg-ink-950">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-ocean-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-400/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-ocean-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-16 w-full">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-down">
            <Sparkles size={14} className="text-accent-400" />
            <span className="text-sm text-ink-300 font-medium">Graphic designer · editor · visual creative</span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold text-white leading-[0.95] tracking-tight animate-fade-up">
            Nhlanhla
            <br />
            <span className="text-accent-400">creates</span> with
            <br />
            <span className="text-ocean-400">purpose.</span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-ink-300 max-w-2xl leading-relaxed animate-fade-up" style={{ animationDelay: '0.15s', animationFillMode: 'both' }}>
            A visual creative from Soweto who combines graphic design, photography,
            video editing, and social media thinking to turn ideas into work
            people remember.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-white text-ink-950 rounded-full font-semibold hover:bg-accent-400 transition-all duration-300 hover:scale-105"
            >
              See my creative work
              <ArrowDown size={18} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white rounded-full font-semibold hover:bg-white/5 transition-all duration-300"
            >
              Explore my story
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg animate-fade-up" style={{ animationDelay: '0.45s', animationFillMode: 'both' }}>
            {[
              { num: '2023', label: 'Matric year' },
              { num: '05', label: 'Creative interests' },
              { num: '03', label: 'Work experiences' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl sm:text-4xl font-extrabold text-white">{s.num}</div>
                <div className="text-sm text-ink-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-white/40 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
