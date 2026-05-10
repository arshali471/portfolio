import { useScrollReveal } from '../hooks/useScrollReveal';
import { Cloud, HardHat, Wrench, Bot, BadgeCheck } from 'lucide-react';

const CERT_COLORS = {
  orange: { bg: '#fffbeb', border: '#fcd34d', color: '#b45309' },
  purple: { bg: '#f5f3ff', border: '#c4b5fd', color: '#7c3aed' },
  blue:   { bg: '#eff6ff', border: '#bfdbfe', color: '#1d4ed8' },
  green:  { bg: '#ecfdf5', border: '#a7f3d0', color: '#059669' },
};

const CERT_ICONS = {
  'AWS Certified Solutions Architect – Associate': Cloud,
  'AWS Certified Cloud Practitioner':             HardHat,
  'HashiCorp Certified: Terraform Associate':     Wrench,
  'AWS Certified AI Practitioner':                Bot,
};

export default function CertBadges({ certs }) {
  const [ref, visible] = useScrollReveal(0.15);

  return (
    <section ref={ref} className="py-20">
      <div className="mb-12">
        <p className="eyebrow">Certifications</p>
        <h2 className="font-heading" style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: '#111111' }}>
          Industry-Validated Expertise
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {certs.map((cert, i) => {
          const c    = CERT_COLORS[cert.color] || CERT_COLORS.orange;
          const Icon = CERT_ICONS[cert.name] || Cloud;
          return (
            <div
              key={i}
              className="card text-center flex flex-col items-center gap-4 py-7"
              style={{
                borderColor: c.border,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ease ${i * 0.09}s, transform 0.5s ease ${i * 0.09}s`,
              }}
            >
              <div
                className="flex items-center justify-center rounded-2xl"
                style={{ width: 52, height: 52, background: c.bg, border: `1px solid ${c.border}` }}
              >
                <Icon size={24} color={c.color} strokeWidth={1.6} />
              </div>
              <div>
                <p className="font-heading text-base leading-tight mb-1" style={{ color: '#111111' }}>
                  {cert.name}
                </p>
                <p className="text-xs font-semibold" style={{ color: c.color, fontFamily: 'Inter, sans-serif' }}>
                  {cert.issuer}
                </p>
              </div>
              {cert.verified && (
                <span
                  className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full font-semibold"
                  style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.color, fontFamily: 'Inter, sans-serif' }}
                >
                  <BadgeCheck size={12} strokeWidth={2} />
                  Verified
                </span>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
