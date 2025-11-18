import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-slate-950 pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 ring-1 ring-white/20 mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Get your Last Month's Insights FREE 🎉
          </div>

          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            Turn Guest Reviews Into
            <span className="block bg-gradient-to-r from-white via-amber-200 to-orange-400 bg-clip-text text-transparent"> Strategic Decisions</span>
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-slate-200/80 max-w-2xl">
            Stop sifting through reviews. Our AI reads and analyzes feedback from every platform, in any language, to deliver the strategic insights you need.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-gradient-to-r from-amber-400 to-orange-600 text-slate-900 font-semibold shadow-[0_8px_30px_rgba(255,140,0,0.35)]">
              Get Your Last Month's Insights FREE 🚀
            </a>
            <div className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-white/10 text-white/80 ring-1 ring-white/15">
              <span className="i">No credit card required</span>
              <span className="text-white/40">•</span>
              <span>2-minute setup</span>
              <span className="text-white/40">•</span>
              <span>Subscribe only if you love it</span>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-slate-300/80">
            <span className="text-xs uppercase tracking-widest text-white/60">Integrated with top review platforms</span>
            <div className="flex items-center gap-4 text-white/80">
              <span className="px-2 py-1 rounded bg-white/10 ring-1 ring-white/10">Booking.com</span>
              <span className="px-2 py-1 rounded bg-white/10 ring-1 ring-white/10">Google Maps</span>
              <span className="px-2 py-1 rounded bg-white/10 ring-1 ring-white/10">TripAdvisor</span>
              <span className="px-2 py-1 rounded bg-white/10 ring-1 ring-white/10">Hotels.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
