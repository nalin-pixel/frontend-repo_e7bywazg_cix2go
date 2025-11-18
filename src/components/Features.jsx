import { Globe2, Languages, BarChart3, Zap, SearchCheck, Sparkles } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: SearchCheck,
      title: 'Instant Property Setup',
      desc: "Just paste your Booking.com URL. We'll automatically locate your property across all other platforms.",
    },
    {
      icon: Globe2,
      title: 'Multi-Platform Aggregation',
      desc: 'Collect reviews from Booking.com, Google, TripAdvisor, and Hotels.com in one place.',
    },
    {
      icon: Sparkles,
      title: 'AI-Powered Analysis',
      desc: 'Trends, what guests love, and issues to fix — ranked by frequency, importance, and actionability.',
    },
    {
      icon: Languages,
      title: 'Reviews in ANY Language',
      desc: 'Understands every language, delivers summarized insights in yours.',
    },
    {
      icon: Zap,
      title: 'Automated Monthly Reports',
      desc: 'Set and forget. Fresh insights delivered monthly. Zero manual work.',
    },
    {
      icon: BarChart3,
      title: 'Competitor Tracking',
      desc: 'Benchmark against competitors to uncover strengths, gaps, and opportunities.',
    },
  ];

  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Everything You Need to Understand Your Guests</h2>
          <p className="mt-3 text-slate-300/80">Transform thousands of reviews in any language into clear, actionable insights delivered monthly.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl p-6 bg-gradient-to-br from-white/5 to-white/[0.03] ring-1 ring-white/10 hover:ring-white/20 transition shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 text-slate-900 flex items-center justify-center shadow-lg">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
