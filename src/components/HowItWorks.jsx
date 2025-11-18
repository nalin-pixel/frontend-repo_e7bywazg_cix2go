export default function HowItWorks() {
  const steps = [
    {
      title: 'Paste Your URL',
      desc: 'Enter your Booking.com link. We’ll find your property on every major platform.',
    },
    { title: 'We Collect Reviews', desc: 'We gather reviews monthly, in any language.' },
    {
      title: 'AI Analyzes',
      desc: 'Trends, positives, issues — all ranked by importance and frequency.',
    },
    { title: 'You Take Action', desc: 'Receive clear, prioritized insights linked to original reviews.' },
  ];

  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">How It Works</h2>
          <p className="mt-3 text-slate-300/80">Get started in 2 minutes and see insights within 5 minutes.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-2xl p-6 bg-white/5 ring-1 ring-white/10">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-amber-400 to-orange-600 text-slate-900 flex items-center justify-center font-semibold">{i + 1}</div>
              <h3 className="mt-4 text-white font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
