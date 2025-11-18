import { Check } from 'lucide-react';

export default function Pricing() {
  const features = [
    'Multi-platform aggregation (Booking.com, Google, TripAdvisor, Hotels.com)',
    'AI-powered insights in your preferred language',
    'Process reviews in ANY language worldwide',
    'Reviews linked to each insight, translated into your language',
    'Trend tracking & analytics',
    'Competitor property tracking at same price',
    'Organization management',
    'Team access & permissions',
    'Reviews and insights export to Excel',
    'Email support',
  ];

  return (
    <section id="pricing" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Simple, Transparent Pricing</h2>
          <p className="mt-3 text-slate-300/80">All features included. Pay only for the properties you analyze. Cancel anytime.</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 rounded-2xl p-8 bg-white/5 ring-1 ring-white/10">
            <div className="flex items-center gap-4">
              <div className="text-white/80">Monthly</div>
              <div className="text-white/40">/</div>
              <div className="text-white">Annual</div>
            </div>
            <div className="mt-4 flex items-end gap-2">
              <div className="text-5xl font-semibold text-white">€39</div>
              <div className="text-white/70">per property per month</div>
            </div>
            <div className="text-white/60 text-sm">Billed annually (€468/year) • All features included • Save ~2 months per year</div>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-emerald-400/20 text-emerald-300 flex items-center justify-center">
                    <Check className="h-4 w-4" />
                  </div>
                  <div className="text-white/80 text-sm">{f}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#cta" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-gradient-to-r from-amber-400 to-orange-600 text-slate-900 font-semibold shadow-[0_8px_30px_rgba(255,140,0,0.35)]">
                Get Last Month's Insights FREE 🎉
              </a>
              <div className="text-white/60 text-sm">More than 10 properties? Let's talk!</div>
            </div>
          </div>

          <div className="rounded-2xl p-8 bg-gradient-to-br from-amber-400 to-orange-600 text-slate-900 ring-1 ring-white/10">
            <div className="text-sm uppercase tracking-widest font-semibold">Optional add-on</div>
            <div className="mt-2 text-3xl font-semibold">Historical analysis</div>
            <div className="text-slate-900/80">Up to 12 months old at €29/property/month</div>
            <ul className="mt-6 space-y-3 text-sm">
              <li>• Import past reviews</li>
              <li>• Backfill insights and trends</li>
              <li>• Compare month-over-month</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
