import { useScrollReveal } from '../hooks/useScrollReveal';
import { Star, TrendingDown } from 'lucide-react';

const ACHIEVEMENT_ICONS = [Star, TrendingDown];

const ACCENT = {
  orange: { color: '#b45309', bg: '#fffbeb', border: '#fcd34d' },
  green:  { color: '#059669', bg: '#ecfdf5', border: '#a7f3d0' },
};

export default function Achievements({ achievements }) {
  const [ref, visible] = useScrollReveal(0.15);

  return (
    <section ref={ref} className="py-20">
      <div className="mb-12">
        <p className="eyebrow">Achievements</p>
        <h2 className="font-heading" style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: '#111111' }}>
          Recognition That Matters
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {achievements.map((a, i) => {
          const style = ACCENT[a.color] || ACCENT.orange;
          const Icon  = ACHIEVEMENT_ICONS[i] || Star;
          return (
            <div
              key={i}
              className="card"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ease ${i * 0.13}s, transform 0.5s ease ${i * 0.13}s`,
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex items-center justify-center rounded-xl shrink-0"
                  style={{ width: 46, height: 46, background: style.bg, border: `1px solid ${style.border}` }}
                >
                  <Icon size={22} color={style.color} strokeWidth={1.6} />
                </div>
                <div>
                  <h3 className="font-heading text-xl mb-1" style={{ color: '#111111' }}>{a.title}</h3>
                  <p className="text-xs font-semibold mb-3" style={{ color: style.color, fontFamily: 'Inter, sans-serif' }}>
                    {a.organization}
                  </p>
                  <p className="text-sm" style={{ color: '#666666', fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
                    {a.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
