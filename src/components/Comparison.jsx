export default function Comparison() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl p-8 bg-white/5 ring-1 ring-white/10">
            <div className="text-sm uppercase tracking-widest text-amber-300">Manager-Level Insights, Not Review Responses</div>
            <div className="mt-4 grid grid-cols-2 gap-6">
              <div>
                <div className="text-white/80">Answering Reviews</div>
                <div className="text-white/40 text-sm">That's your operations team's job</div>
              </div>
              <div className="text-4xl">→</div>
            </div>
            <p className="mt-4 text-white/70">You don’t have time to read hundreds of reviews — and your team shouldn’t spend days compiling reports. Let us handle it. Get automated strategic insights, monthly, in your language.</p>
          </div>

          <div className="rounded-2xl p-8 bg-gradient-to-br from-amber-400 to-orange-600 text-slate-900 ring-1 ring-white/10">
            <div className="text-sm uppercase tracking-widest font-semibold">Strategic Insights</div>
            <ul className="mt-4 space-y-3 text-sm">
              <li>• Prioritized themes ranked by impact</li>
              <li>• Links back to original, translated reviews</li>
              <li>• Clear actions for your team to take</li>
              <li>• Trends tracked over time to measure progress</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
