const stats = [
  { value: '50+', label: 'Campaigns Managed' },
  { value: '3x', label: 'Average ROI' },
  { value: '100+', label: 'Clients Served' },
  { value: '10+', label: 'Years Experience' },
];

export function Credibility() {
  return (
    <section className="py-24 px-6 border-y border-border relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent-purple/5" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl sm:text-5xl font-black text-foreground mb-2">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
