import { useReveal } from '@/hooks/useReveal';
import { BriefcaseBusiness, GraduationCap, Music2, Camera, Shirt, Palette } from 'lucide-react';

const work = [
  {
    title: 'Social Media Manager',
    place: '@nhlanhlaseditz',
    description: 'Planning and shaping social content with a visual-first mindset.',
  },
  {
    title: 'Waiter',
    place: "Malbi's Kitchen",
    description: 'Building people skills through attentive service and teamwork.',
  },
  {
    title: 'Early Childhood Development',
    place: 'NYS',
    description: 'Supporting learning, care, and communication in a community setting.',
  },
];

const interests = [
  { icon: Music2, label: 'Music' },
  { icon: Palette, label: 'Graphic design' },
  { icon: Camera, label: 'Photography' },
  { icon: Shirt, label: 'Fashion styling' },
];

export default function Experience() {
  const { ref, visible } = useReveal();

  return (
    <section id="experience" className="py-24 sm:py-32 bg-ink-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`grid lg:grid-cols-[0.9fr_1.1fr] gap-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <span className="text-sm font-semibold text-accent-600 tracking-widest uppercase">The CV</span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-ink-900 mt-3 leading-tight">A creative path with a practical side.</h2>
            <p className="text-lg text-ink-500 mt-5 leading-relaxed">
              My background combines a foundation in school, real-world work experience, and a growing creative practice.
            </p>

            <div className="mt-10 rounded-2xl bg-ink-950 p-7 text-white">
              <div className="flex items-start gap-4">
                <GraduationCap className="text-accent-400 shrink-0" size={26} />
                <div>
                  <p className="text-xs uppercase tracking-widest text-ink-400">Education</p>
                  <h3 className="font-display text-xl font-bold mt-2">Phefeni Senior Secondary School</h3>
                  <p className="text-ink-300 mt-1">Grade 12 · Matriculated 2023</p>
                  <p className="text-sm text-ink-400 mt-4 leading-relaxed">English, Mathematical Literacy, Consumer Studies, isiZulu, History, Tourism, and Life Orientation.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <BriefcaseBusiness size={22} className="text-ocean-600" />
              <h3 className="font-display text-2xl font-bold text-ink-900">Work experience</h3>
            </div>
            <div className="space-y-4">
              {work.map((item, index) => (
                <div key={item.title} className="relative bg-white rounded-2xl border border-ink-100 p-6 pl-16 hover:border-accent-300 hover:shadow-lg transition-all duration-300">
                  <div className="absolute left-6 top-7 w-6 h-6 rounded-full bg-accent-400/20 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-accent-500" />
                  </div>
                  {index < work.length - 1 && <div className="absolute left-[35px] top-14 bottom-[-17px] w-px bg-ink-200" />}
                  <p className="text-xs uppercase tracking-widest text-ocean-600 font-semibold">{item.place}</p>
                  <h4 className="font-display text-xl font-bold text-ink-900 mt-1">{item.title}</h4>
                  <p className="text-sm text-ink-500 mt-2 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <p className="text-xs uppercase tracking-widest text-ink-500 font-semibold mb-4">Outside the screen</p>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest) => {
                  const Icon = interest.icon;
                  return (
                    <span key={interest.label} className="inline-flex items-center gap-2 rounded-full bg-white border border-ink-100 px-4 py-2.5 text-sm font-medium text-ink-700">
                      <Icon size={16} className="text-accent-600" />
                      {interest.label}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
