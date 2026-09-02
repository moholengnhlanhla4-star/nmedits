import { useReveal } from '@/hooks/useReveal';
import { Palette, Film, Camera, CheckCircle2 } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Logo & Brand Design',
    desc: 'Distinctive logos and brand identities for emerging companies and startups that want to stand out.',
    items: ['Logo design', 'Brand guidelines', 'Business cards', 'Stationery'],
    color: 'accent',
  },
  {
    icon: Camera,
    title: 'Mock-ups & Apparel',
    desc: 'Photorealistic mock-up designs for clothing brands — t-shirts, hoodies, and product showcases.',
    items: ['T-shirt mock-ups', 'Hoodie designs', 'Product mock-ups', 'Lookbooks'],
    color: 'ocean',
  },
  {
    icon: Palette,
    title: 'Posters & Invitations',
    desc: 'Eye-catching posters, event flyers, and custom invitation cards for any occasion.',
    items: ['Event posters', 'Flyer design', 'Wedding invitations', 'Birthday cards'],
    color: 'accent',
  },
  {
    icon: Camera,
    title: 'Photo Retouching',
    desc: 'I remove unwanted elements from backgrounds, add life to dull photos, and make every picture clear and presentable.',
    items: ['Background removal', 'Color correction', 'Object removal', 'Enhancement'],
    color: 'ocean',
  },
  {
    icon: Film,
    title: 'Video Editing',
    desc: 'Edits for content creators, brand ads, and animated YouTube intros. Short videos with creative flair.',
    items: ['YouTube intros', 'Brand ads', 'Short-form videos', 'Cartoonish effects'],
    color: 'accent',
  },
  {
    icon: Film,
    title: 'Stylized Video Effects',
    desc: 'Cartoonish, blue-and-yellow grading, and graphic design elements woven into every frame.',
    items: ['Color grading', 'Motion graphics', 'Section icons', 'Transitions'],
    color: 'ocean',
  },
];

export default function Services() {
  const { ref, visible } = useReveal();

  return (
    <section id="services" className="py-24 sm:py-32 bg-ink-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-2xl mb-16">
            <span className="text-sm font-semibold text-accent-600 tracking-widest uppercase">What I do</span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-ink-900 mt-3 leading-tight">
              A creative toolkit shaped by my experience.
            </h2>
            <p className="text-lg text-ink-500 mt-4">
              I bring together the skills I enjoy most to help people, creators, and emerging
              brands look clear, confident, and ready to be seen.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isAccent = service.color === 'accent';
            return (
              <div
                key={service.title}
                className={`group relative bg-white rounded-2xl p-8 border border-ink-100 hover:border-ink-200 hover:shadow-xl transition-all duration-500 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${
                  isAccent ? 'bg-accent-400/10 text-accent-600' : 'bg-ocean-500/10 text-ocean-600'
                }`}>
                  <Icon size={28} />
                </div>
                <h3 className="font-display text-xl font-bold text-ink-900 mb-3">{service.title}</h3>
                <p className="text-ink-500 text-sm leading-relaxed mb-5">{service.desc}</p>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-ink-600">
                      <CheckCircle2 size={15} className={isAccent ? 'text-accent-500' : 'text-ocean-500'} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
