import { useReveal } from '@/hooks/useReveal';
import { Zap, Eye, Heart } from 'lucide-react';

const values = [
  {
    icon: Zap,
    title: 'Graphic design',
    desc: 'Logos, posters, invitations, and clothing mock-ups with personality.',
  },
  {
    icon: Eye,
    title: 'Editing',
    desc: 'Photo retouching, video edits, and visual storytelling for creators.',
  },
  {
    icon: Heart,
    title: 'Creative energy',
    desc: 'Music, fashion, photography, and design all feed the work I make.',
  },
];

export default function About() {
  const { ref, visible } = useReveal();

  return (
    <section id="about" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-sm font-semibold text-accent-600 tracking-widest uppercase">Profile</span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-ink-900 mt-3 leading-tight">
              Meet Nhlanhla — a creative with many ways to make an idea visible.
            </h2>
            <div className="mt-6 space-y-4 text-ink-500 text-lg leading-relaxed">
              <p>
                I'm Nhlanhla Mohuleng, a Grade 12 graduate from Phefeni Senior Secondary
                School. My creative world sits at the intersection of graphic design,
                photography, video editing, music, and fashion styling.
              </p>
              <p>
                I enjoy taking an idea from a rough thought to something clear and presentable:
                a logo for an emerging brand, a polished photo, a poster, a clothing
                mock-up, or an edited social video. I also bring practical experience
                from NYS, Malbi's Kitchen, and social media management.
              </p>
            </div>

            <div className="mt-10 grid sm:grid-cols-3 gap-6">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.title}>
                    <div className="w-10 h-10 rounded-lg bg-ink-100 flex items-center justify-center mb-3 text-ink-700">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-semibold text-ink-900 text-sm">{v.title}</h3>
                    <p className="text-sm text-ink-500 mt-1">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: visual collage */}
          <div className={`relative transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-lg">
                  <img
                    src="https://images.pexels.com/photos/7661590/pexels-photo-7661590.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Branding work"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square shadow-lg">
                  <img
                    src="https://images.pexels.com/photos/9317525/pexels-photo-9317525.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Video editing"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden aspect-square shadow-lg">
                  <img
                    src="https://images.pexels.com/photos/39190676/pexels-photo-39190676.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Photo editing"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-lg">
                  <img
                    src="https://images.pexels.com/photos/4088095/pexels-photo-4088095.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Poster design"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            {/* Decorative accent */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-400 rounded-full blur-2xl opacity-30 -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-ocean-400 rounded-full blur-2xl opacity-20 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
