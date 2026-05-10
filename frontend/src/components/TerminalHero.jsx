import { useState, useEffect } from 'react';

const ROLES = ['Cloud & DevOps Engineer', 'SRE Practitioner', 'Platform Engineer', 'AI/ML Integrations'];

function RoleRotator() {
  const [index, setIndex]     = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setVisible(false);
      setTimeout(() => { setIndex(i => (i + 1) % ROLES.length); setVisible(true); }, 350);
    }, 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <span
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(-6px)',
        transition: 'opacity 0.35s ease, transform 0.35s ease',
        display: 'inline-block',
        color: '#888888',
      }}
    >
      {ROLES[index]}
    </span>
  );
}

const SOCIAL = [
  { href: 'mailto:arshali471@gmail.com',                          label: '✉',   title: 'Email' },
  { href: 'https://www.linkedin.com/in/md-arshad-ali-06279a1b2', label: 'in',  title: 'LinkedIn', target: '_blank' },
  { href: 'https://github.com/arshali471',                        label: '{ }', title: 'GitHub',   target: '_blank' },
  { href: 'tel:+917870831211',                                    label: '☎',   title: 'Phone' },
];

export default function TerminalHero({ profile }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 80); }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center pt-14"
      style={{ background: 'linear-gradient(160deg, #f9f5f0 0%, #fdfcfb 60%, #f0e9df 100%)' }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 w-full py-4 md:py-6">
        <div
          className="grid md:grid-cols-2 gap-10 lg:gap-16 items-end"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          {/* ── LEFT — Content ── */}
          <div className="order-2 md:order-1 space-y-6 pb-4">
            <p className="eyebrow">Cloud & DevOps Engineer · Delhi, India</p>

            <div>
              <h1
                className="font-heading"
                style={{
                  fontSize: 'clamp(2.4rem, 5vw, 4rem)',
                  lineHeight: 1.08,
                  letterSpacing: '-0.02em',
                  color: '#111111',
                }}
              >
                {profile.name}
              </h1>
              <p className="mt-2" style={{ fontSize: '1.1rem', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                <RoleRotator />
              </p>
            </div>

            <p
              style={{
                color: '#666666',
                lineHeight: 1.8,
                fontSize: '1rem',
                fontFamily: 'Inter, sans-serif',
                maxWidth: '42ch',
              }}
            >
              {profile.summary}
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <a href={`mailto:${profile.contact.email}`} className="btn-primary">
                Get in Touch
              </a>
              <a href="#projects" className="btn-outline">
                View Projects
              </a>
              <a
                href="/resume.html"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
              >
                ↓ Resume
              </a>
              <a
                href="/cover-letter.html"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
              >
                ↓ Cover Letter
              </a>
            </div>

            <div className="flex items-center gap-2">
              {SOCIAL.map(s => (
                <a
                  key={s.title}
                  href={s.href}
                  target={s.target}
                  rel={s.target ? 'noopener noreferrer' : undefined}
                  title={s.title}
                  className="icon-btn"
                  style={{
                    fontSize: s.label === 'in' || s.label === '{ }' ? '0.7rem' : '0.95rem',
                    fontWeight: 700,
                  }}
                >
                  {s.label}
                </a>
              ))}
              <span style={{ marginLeft: '0.5rem', fontSize: '0.8rem', color: '#aaaaaa', fontFamily: 'Inter, sans-serif' }}>
                · Open to opportunities
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {['AWS', 'Kubernetes', 'Terraform', 'Python', 'Docker', 'CI/CD', 'Bedrock'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

          {/* ── RIGHT — Photo ── */}
          <div className="order-1 md:order-2 relative" style={{ paddingTop: '2rem', paddingLeft: '1.5rem' }}>
            {/* Dark stat badge — top left, outside the photo */}
            <div
              className="absolute top-0 left-0 z-10 rounded-2xl px-4 py-3"
              style={{
                background: '#111111',
                fontFamily: 'Inter, sans-serif',
                boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
              }}
            >
              <p className="text-xl font-bold leading-none text-white">20%</p>
              <p className="text-xs mt-0.5 whitespace-nowrap" style={{ color: '#888888' }}>Cost Saved</p>
            </div>

            {/* Main photo */}
            <div
              className="overflow-hidden rounded-2xl w-full"
              style={{
                height: 'clamp(400px, 55vw, 580px)',
                boxShadow: '0 20px 70px rgba(0,0,0,0.12)',
                border: '1px solid #ebe2d8',
              }}
            >
              <img
                src="/avatar.png"
                alt={profile.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                }}
                onError={e => {
                  e.currentTarget.parentElement.style.background = 'linear-gradient(135deg,#f0e9df,#ebe2d8)';
                  e.currentTarget.style.display = 'none';
                }}
              />

              {/* Overlay label — bottom left inside the image */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 16,
                  left: 16,
                  background: 'rgba(0,0,0,0.40)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '9999px',
                  padding: '0.3rem 1rem',
                }}
              >
                <p style={{
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.85)',
                  fontFamily: 'Inter, sans-serif',
                }}>
                  Cloud & DevOps · Delhi, India
                </p>
              </div>
            </div>

            {/* White stat card — bottom right outside photo */}
            <div
              className="absolute z-10 rounded-2xl px-5 py-4"
              style={{
                bottom: '-1.5rem',
                right: '-0.5rem',
                background: '#ffffff',
                border: '1px solid #e5e5e5',
                boxShadow: '0 8px 30px rgba(0,0,0,0.10)',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              <p className="font-heading font-bold leading-none" style={{ fontSize: '2rem', color: '#111111' }}>3+</p>
              <p className="text-sm mt-0.5 whitespace-nowrap" style={{ color: '#888888' }}>Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
