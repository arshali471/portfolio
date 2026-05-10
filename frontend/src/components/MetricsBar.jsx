import { useScrollReveal, useCounter } from '../hooks/useScrollReveal';
import { CalendarDays, Zap, Rocket, DollarSign } from 'lucide-react';

const METRIC_ICONS = [CalendarDays, Zap, Rocket, DollarSign];

function MetricCard({ metric, index, visible }) {
  const count = useCounter(metric.value, 1600, visible);
  const Icon  = METRIC_ICONS[index] || CalendarDays;

  return (
    <div
      className="stat-card text-center py-8 px-6"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`,
      }}
    >
      <Icon size={22} color="#888888" strokeWidth={1.6} style={{ margin: '0 auto 10px' }} />
      <div className="font-heading font-bold leading-none mb-1" style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: '#111111' }}>
        {count}<span style={{ fontSize: '1.2rem' }}>{metric.suffix}</span>
      </div>
      <p className="eyebrow mb-0 mt-2" style={{ marginBottom: 0 }}>{metric.label}</p>
    </div>
  );
}

export default function MetricsBar({ metrics }) {
  const [ref, visible] = useScrollReveal(0.2);

  return (
    <section ref={ref}>
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-ink-100">
        {metrics.map((metric, i) => (
          <MetricCard key={i} metric={metric} index={i} visible={visible} />
        ))}
      </div>
    </section>
  );
}
