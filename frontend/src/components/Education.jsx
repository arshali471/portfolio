import { useScrollReveal } from '../hooks/useScrollReveal';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export default function Education({ education }) {
  const [ref, visible] = useScrollReveal(0.2);
  const cgpaPercent = Math.round((parseFloat(education.cgpa) / parseFloat(education.maxCgpa)) * 100);

  return (
    <section ref={ref} className="py-20">
      <div className="mb-12">
        <p className="eyebrow">Education</p>
        <h2 className="font-heading" style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: '#111111' }}>
          Academic Background
        </h2>
      </div>

      <div
        className="card"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div
                className="flex items-center justify-center rounded-xl shrink-0"
                style={{ width: 46, height: 46, background: '#eff6ff', border: '1px solid #bfdbfe' }}
              >
                <GraduationCap size={22} color="#1d4ed8" strokeWidth={1.6} />
              </div>
              <h3 className="font-heading text-2xl" style={{ color: '#111111' }}>
                {education.degree}
              </h3>
            </div>

            <div className="flex flex-wrap gap-4 mt-3">
              <span className="flex items-center gap-1.5 text-sm" style={{ color: '#666666', fontFamily: 'Inter, sans-serif' }}>
                <MapPin size={14} color="#888888" strokeWidth={1.6} />
                {education.institution}
              </span>
              <span className="flex items-center gap-1.5 text-sm" style={{ color: '#888888', fontFamily: 'Inter, sans-serif' }}>
                <MapPin size={14} color="#aaaaaa" strokeWidth={1.6} />
                {education.location}
              </span>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
            <span className="flex items-center gap-1.5 tag tag-blue">
              <Calendar size={12} strokeWidth={2} />
              {education.period}
            </span>
            <div className="text-left md:text-right">
              <p className="text-xs mb-1 uppercase tracking-widest" style={{ color: '#888888', fontFamily: 'Inter, sans-serif' }}>CGPA</p>
              <p className="font-heading font-bold" style={{ fontSize: '2.2rem', color: '#111111', lineHeight: 1 }}>
                {education.cgpa}
                <span className="text-base" style={{ color: '#888888' }}>/{education.maxCgpa}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex justify-between text-xs mb-2" style={{ color: '#888888', fontFamily: 'Inter, sans-serif' }}>
            <span>Academic Performance</span>
            <span>{cgpaPercent}%</span>
          </div>
          <div className="h-1.5 rounded-full overflow-hidden" style={{ background: '#e5e5e5' }}>
            <div
              className="h-full rounded-full"
              style={{
                background: '#111111',
                width: `${cgpaPercent}%`,
                transform: visible ? 'scaleX(1)' : 'scaleX(0)',
                transformOrigin: 'left',
                transition: 'transform 1.4s cubic-bezier(0.23,1,0.32,1) 0.3s',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
