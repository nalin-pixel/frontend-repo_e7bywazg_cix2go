export default function Testimonials() {
  const items = [
    {
      quote:
        'This platform saved us hours every month. We now know exactly what our guests love and what needs improvement. The AI insights are incredibly accurate and actionable.',
      name: 'Ivan Quintero',
      role: 'Quality Manager — Charming Stay group',
    },
    {
      quote:
        'The competitor tracking feature is a game-changer. We can see how we compare in our market and adjust our strategy. ROI was immediate.',
      name: 'Jean Dupont',
      role: 'Owner — Hotel Chain France (7 properties)',
    },
    {
      quote:
        'Auto-extraction made setup incredibly easy. We were analyzing reviews in 5 minutes. The multi-language support is perfect for our international guests.',
      name: 'Klaus Schmidt',
      role: 'Operations Manager — Berlin Grand Hotel',
    },
  ];

  return (
    <section id="testimonials" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Loved by Hotel Managers Across the World</h2>
          <p className="mt-3 text-slate-300/80">See what our customers are saying.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <div key={t.name} className="rounded-2xl p-6 bg-white/5 ring-1 ring-white/10">
              <p className="text-white/90">“{t.quote}”</p>
              <div className="mt-4 text-sm text-white/70">{t.name}</div>
              <div className="text-xs text-white/50">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
