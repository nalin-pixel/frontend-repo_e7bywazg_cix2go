export default function CTA() {
  return (
    <section id="cta" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden">
          <div className="relative p-10 bg-gradient-to-r from-amber-400 to-orange-600">
            <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[radial-gradient(circle_at_20%_10%,white,transparent_30%),radial-gradient(circle_at_80%_50%,white,transparent_30%)]" />
            <div className="relative">
              <h3 className="text-3xl font-semibold text-slate-900">Ready to Transform Your Review Management?</h3>
              <p className="mt-2 text-slate-900/80 max-w-2xl">Start your free trial today. Get instant analysis of last month's reviews in minutes and see how AI-powered insights can transform your business.</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="#" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-slate-900 text-white font-semibold">Get your Last Month's Insights FREE 🚀</a>
                <div className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-white/40 text-slate-900">
                  <span>No credit card required</span>
                  <span className="text-slate-900/60">•</span>
                  <span>2-minute setup</span>
                  <span className="text-slate-900/60">•</span>
                  <span>Subscribe only if you love it</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
