import { useScrollReveal } from '../hooks/useScrollReveal';
import {
  Monitor, Building2, Radio, Rocket, DollarSign,
  ShieldCheck, Layers, Zap, Server, Globe, CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';

/* Map project id → Lucide icon component */
const PROJECT_ICONS = {
  0: Monitor,        // ServerPulse
  1: Building2,      // TCS AWS Platform
  2: Radio,          // MonitorPlatform
  3: Rocket,         // CI/CD
  4: DollarSign,     // Cost Optimisation
  5: ShieldCheck,    // Security
  6: Layers,         // Kubernetes
};

function ProjectIcon({ id, size = 28, color = '#111111' }) {
  const Icon = PROJECT_ICONS[id] || Globe;
  return <Icon size={size} color={color} strokeWidth={1.6} />;
}

/* ── Spotlight card — full width, live product ── */
function SpotlightCard({ project, visible }) {
  return (
    <div
      className="rounded-2xl overflow-hidden mb-6"
      style={{
        border: '1px solid #ddd3c8',
        background: 'linear-gradient(135deg, #fdfcfb 0%, #f9f5f0 100%)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(25px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
        boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
      }}
    >
      <div className="p-8 md:p-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div
                className="flex items-center justify-center rounded-xl"
                style={{ width: 48, height: 48, background: '#111111' }}
              >
                <Monitor size={22} color="#ffffff" strokeWidth={1.6} />
              </div>
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{
                  background: '#ecfdf5',
                  color: '#059669',
                  border: '1px solid #a7f3d0',
                  fontFamily: 'Inter, sans-serif',
                  letterSpacing: '0.02em',
                }}
              >
                ● Live Product
              </span>
            </div>

            <h3 className="font-heading mb-3" style={{ fontSize: '2rem', color: '#111111', lineHeight: 1.15 }}>
              {project.name}
            </h3>
            <p className="mb-5" style={{ color: '#666666', fontFamily: 'Inter, sans-serif', lineHeight: 1.75, fontSize: '0.95rem' }}>
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-7">
              {project.tech.map((t, i) => (
                <span key={i} className="tag">{t}</span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
              style={{ textDecoration: 'none' }}
            >
              Visit serverpulse.in
              <ArrowUpRight size={15} strokeWidth={2.2} />
            </a>
          </div>

          {/* Right — stat grid */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'Metric refresh', value: 'Real-time',    Icon: Zap },
              { label: 'Deployment',     value: 'Multi-server', Icon: Server },
              { label: 'Stack',          value: 'Full-stack',   Icon: Layers },
              { label: 'Status',         value: 'Live & running', Icon: CheckCircle2 },
            ].map(s => (
              <div
                key={s.label}
                className="rounded-xl p-4"
                style={{ background: '#ffffff', border: '1px solid #e5e5e5' }}
              >
                <s.Icon size={18} color="#888888" strokeWidth={1.6} style={{ marginBottom: 8 }} />
                <p className="text-xs mb-0.5" style={{ color: '#888888', fontFamily: 'Inter, sans-serif' }}>{s.label}</p>
                <p className="text-sm font-semibold" style={{ color: '#111111', fontFamily: 'Inter, sans-serif' }}>{s.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact bar */}
        <div className="mt-8 pt-5 border-t flex items-center gap-3" style={{ borderColor: '#ebe2d8' }}>
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#888888', fontFamily: 'Inter, sans-serif' }}>Impact</span>
          <span className="w-px h-4 bg-ink-200" />
          <span className="text-sm font-semibold" style={{ color: '#111111', fontFamily: 'Inter, sans-serif' }}>{project.impact}</span>
        </div>
      </div>
    </div>
  );
}

/* ── Standard project card ── */
function ProjectCard({ project, index, visible }) {
  return (
    <div
      className="card flex flex-col"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(25px)',
        transition: `opacity 0.5s ease ${index * 0.08}s, transform 0.5s ease ${index * 0.08}s`,
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className="flex items-center justify-center rounded-xl"
          style={{ width: 42, height: 42, background: '#f5f5f5', border: '1px solid #e5e5e5', flexShrink: 0 }}
        >
          <ProjectIcon id={project.id} size={20} color="#444444" />
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{
              background: '#ecfdf5',
              color: '#059669',
              border: '1px solid #a7f3d0',
              fontFamily: 'Inter, sans-serif',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            Live <ArrowUpRight size={11} strokeWidth={2.4} />
          </a>
        )}
      </div>

      <h3 className="font-heading text-lg mb-2" style={{ color: '#111111', lineHeight: 1.2 }}>
        {project.name}
      </h3>
      <p className="text-sm mb-4 flex-1" style={{ color: '#666666', fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.map((t, i) => (
          <span key={i} className="tag">{t}</span>
        ))}
      </div>

      <div className="pt-4 border-t border-ink-100">
        <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: '#888888', fontFamily: 'Inter, sans-serif' }}>
          Impact
        </p>
        <p className="text-sm font-semibold" style={{ color: '#111111', fontFamily: 'Inter, sans-serif' }}>
          {project.impact}
        </p>
      </div>
    </div>
  );
}

export default function Projects({ projects }) {
  const [ref, visible] = useScrollReveal(0.08);

  const spotlight = projects.find(p => p.id === 0);
  const featured  = projects.filter(p => p.featured && p.id !== 0);
  const rest      = projects.filter(p => !p.featured);

  return (
    <section id="projects" ref={ref} className="py-20">
      <div className="mb-12">
        <p className="eyebrow">Projects</p>
        <h2 className="font-heading" style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: '#111111' }}>
          DevOps & Platform Work
        </h2>
        <p className="mt-2" style={{ color: '#888888', fontFamily: 'Inter, sans-serif', fontSize: '1rem' }}>
          Infrastructure, automation, and platform engineering
        </p>
      </div>

      {spotlight && <SpotlightCard project={spotlight} visible={visible} />}

      {featured.length > 0 && (
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} visible={visible} />
          ))}
        </div>
      )}

      {rest.length > 0 && (
        <>
          <div className="flex items-center gap-4 my-8">
            <hr className="divider flex-1" />
            <span className="text-xs uppercase tracking-widest" style={{ color: '#aaaaaa', fontFamily: 'Inter, sans-serif', whiteSpace: 'nowrap' }}>
              More Projects
            </span>
            <hr className="divider flex-1" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i + featured.length} visible={visible} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
