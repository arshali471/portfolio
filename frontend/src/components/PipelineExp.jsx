import { useScrollReveal } from '../hooks/useScrollReveal';

export default function PipelineExp({ experience }) {
  const [ref, visible] = useScrollReveal(0.1);

  return (
    <section id="experience" ref={ref} className="py-20">
      <div className="mb-12">
        <p className="eyebrow">Work Experience</p>
        <h2 className="font-heading" style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: '#111111' }}>
          Where I've Shipped Impact
        </h2>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div
          className="absolute left-5 top-0 bottom-0 w-px hidden md:block"
          style={{ background: 'linear-gradient(to bottom, #111111, #cccccc, transparent)' }}
        />

        <div className="space-y-8">
          {experience.map((job, idx) => (
            <div
              key={job.id}
              className="relative md:pl-16"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateX(0)' : 'translateX(-20px)',
                transition: `opacity 0.6s ease ${idx * 0.18}s, transform 0.6s ease ${idx * 0.18}s`,
              }}
            >
              {/* Timeline dot */}
              <div className="absolute left-5 top-6 -translate-x-1/2 hidden md:flex">
                <div className="timeline-dot" />
              </div>

              <div className="card">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                  <div>
                    <h3 className="font-heading text-xl" style={{ color: '#111111' }}>{job.company}</h3>
                    <p className="mt-0.5 font-body text-sm font-semibold" style={{ color: '#b45309', fontFamily: 'Inter, sans-serif' }}>
                      {job.role}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 shrink-0">
                    <span className="tag tag-dark">{job.period}</span>
                    <span className="tag tag-orange">{job.type}</span>
                    <span className="text-xs self-center" style={{ color: '#888888', fontFamily: 'Inter, sans-serif' }}>{job.location}</span>
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {job.highlights.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm" style={{ color: '#666666', fontFamily: 'Inter, sans-serif', lineHeight: 1.65 }}>
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-ink-900 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
