import { useScrollReveal } from '../hooks/useScrollReveal';

const ACCENT_COLORS = {
  orange: '#b45309',
  purple: '#7c3aed',
  blue:   '#1d4ed8',
  green:  '#059669',
  ai:     '#7c3aed',
  cyan:   '#0891b2',
};

function SkillCard({ category, data, index, visible }) {
  const color = ACCENT_COLORS[data.color] || ACCENT_COLORS.green;
  return (
    <div
      className="card"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.5s ease ${index * 0.07}s, transform 0.5s ease ${index * 0.07}s`,
      }}
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="text-lg">{data.icon}</span>
        <h3 className="font-body text-xs font-700 uppercase tracking-wide" style={{ fontWeight: 700, color, letterSpacing: '0.08em' }}>
          {category}
        </h3>
      </div>
      <ul className="space-y-1.5">
        {data.items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-xs" style={{ color: '#666666', fontFamily: 'Inter, sans-serif', lineHeight: 1.5 }}>
            <span className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ background: color, opacity: 0.7 }} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function CloudSkills({ skills }) {
  const [ref, visible] = useScrollReveal(0.1);
  const entries = Object.entries(skills);

  return (
    <section id="skills" ref={ref} className="py-20">
      <div className="mb-12">
        <p className="eyebrow">Technical Skills</p>
        <h2 className="font-heading" style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: '#111111' }}>
          Tools & Technologies
        </h2>
        <p className="mt-2" style={{ color: '#888888', fontFamily: 'Inter, sans-serif', fontSize: '1rem' }}>
          Tools and technologies I build with every day
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {entries.map(([category, data], i) => (
          <SkillCard key={category} category={category} data={data} index={i} visible={visible} />
        ))}
      </div>
    </section>
  );
}
