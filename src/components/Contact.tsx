import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useReveal } from '@/hooks/useReveal';

const services = [
  'Logo & Brand Design',
  'Mock-up & Apparel',
  'Poster & Invitations',
  'Photo Retouching',
  'Video Editing',
  'Other',
];

export default function Contact() {
  const { ref, visible } = useReveal();
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('loading');
    setErrorMsg('');

    const { error } = await supabase.from('contact_messages').insert({
      name: form.name,
      email: form.email,
      service: form.service || null,
      message: form.message,
    });

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again.');
      return;
    }
    setStatus('success');
    setForm({ name: '', email: '', service: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-ink-50 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6">
        <div ref={ref} className={`text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-6 flex flex-wrap justify-center gap-3 text-sm text-ink-600">
            <a href="mailto:moholengnlanhla4@gmail.com" className="rounded-full bg-white px-4 py-2 border border-ink-100 hover:border-accent-400 transition-colors">moholengnlanhla4@gmail.com</a>
            <a href="tel:+27784056195" className="rounded-full bg-white px-4 py-2 border border-ink-100 hover:border-accent-400 transition-colors">078 450 6195</a>
          </div>
          <span className="text-sm font-semibold text-accent-600 tracking-widest uppercase">Contact</span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-ink-900 mt-3 leading-tight">
            Have an idea worth seeing?
          </h2>
          <p className="text-lg text-ink-500 mt-4 max-w-xl mx-auto">
            Tell me what you are working on, what you need, or simply say hello. I would love to hear from you.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className={`mt-12 bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-ink-100 transition-all duration-700 delay-150 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {status === 'success' ? (
            <div className="flex flex-col items-center text-center py-10">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <CheckCircle2 size={32} className="text-green-600" />
              </div>
              <h3 className="font-display text-2xl font-bold text-ink-900">Message sent!</h3>
              <p className="text-ink-500 mt-2">Thanks for reaching out. I'll be in touch soon.</p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-6 px-6 py-2.5 text-sm font-semibold text-ink-700 border border-ink-200 rounded-full hover:bg-ink-50 transition-colors"
              >
                Send another
              </button>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-ink-700 mb-2">Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-ink-200 bg-ink-50 text-ink-900 placeholder-ink-400 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@email.com"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-ink-200 bg-ink-50 text-ink-900 placeholder-ink-400 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-ink-700 mb-2">Service (optional)</label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-ink-200 bg-ink-50 text-ink-900 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent transition-all"
                >
                  <option value="">Select a service…</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-ink-700 mb-2">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project…"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-ink-200 bg-ink-50 text-ink-900 placeholder-ink-400 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent transition-all resize-none"
                />
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 px-4 py-3 rounded-xl">
                  <AlertCircle size={18} />
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-ink-950 text-white rounded-xl font-semibold hover:bg-ink-900 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send message
                  </>
                )}
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
