export default function Stats() {
  const items = [
    { label: 'Hotels Trust Us', value: '300+' },
    { label: 'Reviews Analyzed', value: '1M+' },
  ];

  return (
    <section className="relative py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.label} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 text-center">
              <div className="text-3xl font-semibold text-white">{item.value}</div>
              <div className="mt-1 text-sm text-white/70">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
