import { useScrollReveal } from '../hooks/useScrollReveal';
import { Mail, ExternalLink, Code2, Phone, MapPin, CalendarDays, CheckCircle2, Target } from 'lucide-react';

const QUICK_FACTS = [
  { label: 'Location',     value: 'Delhi, India',             Icon: MapPin },
  { label: 'Experience',   value: '3+ Years',                 Icon: CalendarDays },
  { label: 'Availability', value: 'Open to Roles',            Icon: CheckCircle2 },
  { label: 'Focus',        value: 'DevOps · SRE · Platform',  Icon: Target },
];

const CONTACT_LINKS = [
  { href: 'mailto:arshali471@gmail.com',                          Icon: Mail,     label: 'Email',    value: 'arshali471@gmail.com' },
  { href: 'https://www.linkedin.com/in/md-arshad-ali-06279a1b2', Icon: ExternalLink, label: 'LinkedIn', value: 'md-arshad-ali-06279a1b2', external: true },
  { href: 'https://github.com/arshali471',                        Icon: Code2,       label: 'GitHub',   value: 'github.com/arshali471',   external: true },
  { href: 'tel:+917870831211',                                    Icon: Phone,    label: 'Phone',    value: '+91 78708 31211' },
];

export default function Contact({ profile }) {
  const [ref, visible] = useScrollReveal(0.1);

  return (
    <section id="contact" className="py-20">
      <div className="mb-16">
        <p className="eyebrow">Contact</p>
        <h2 className="font-heading mt-2" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#111111' }}>
          Let's Work Together
        </h2>
        <p style={{ color: '#888888', fontFamily: 'Inter, sans-serif', fontSize: '1.05rem', marginTop: '0.5rem' }}>
          Open to DevOps, SRE, and Platform Engineering opportunities
        </p>
      </div>

      <div
        ref={ref}
        className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(25px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        {/* LEFT — portrait photo */}
        <div className="relative">
          <div
            className="overflow-hidden rounded-2xl w-full"
            style={{
              height: 'clamp(380px, 50vw, 520px)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.10)',
              border: '1px solid #ebe2d8',
            }}
          >
            <img
              src="/image.png"
              alt="Arshad Ali"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%' }}
            />
            <div
              style={{
                position: 'absolute', bottom: 16, left: 16,
                background: 'rgba(0,0,0,0.40)',
                backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.18)',
                borderRadius: '9999px', padding: '0.3rem 1rem',
              }}
            >
              <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)', fontFamily: 'Inter, sans-serif' }}>
                Available · Delhi, India
              </p>
            </div>
          </div>

          {/* Availability badge */}
          <div
            className="absolute -bottom-5 -right-2 md:-right-5 bg-white rounded-2xl px-5 py-4 shadow-lg"
            style={{ border: '1px solid #a7f3d0' }}
          >
            <div className="flex items-center gap-2.5">
              <CheckCircle2 size={18} color="#10b981" strokeWidth={2} />
              <div>
                <p className="text-sm font-semibold" style={{ color: '#059669', fontFamily: 'Inter, sans-serif' }}>Open to Work</p>
                <p className="text-xs" style={{ color: '#34d399', fontFamily: 'Inter, sans-serif' }}>DevOps · SRE · Platform</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-5">
          {/* Quick facts */}
          <div className="grid grid-cols-2 gap-3">
            {QUICK_FACTS.map(({ label, value, Icon }) => (
              <div key={label} className="card-cream p-4 rounded-2xl">
                <Icon size={18} color="#888888" strokeWidth={1.6} style={{ marginBottom: 8 }} />
                <p className="text-xs mb-0.5" style={{ color: '#888888', fontFamily: 'Inter, sans-serif' }}>{label}</p>
                <p className="text-sm font-semibold" style={{ color: '#111111', fontFamily: 'Inter, sans-serif' }}>{value}</p>
              </div>
            ))}
          </div>

          {/* Contact links */}
          <div className="card space-y-4">
            {CONTACT_LINKS.map(link => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-3 group"
                style={{ textDecoration: 'none' }}
              >
                <div
                  className="flex items-center justify-center rounded-xl shrink-0 transition-colors"
                  style={{ width: 40, height: 40, background: '#f5f5f5', border: '1px solid #e5e5e5' }}
                >
                  <link.Icon size={16} color="#666666" strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-xs" style={{ color: '#888888', fontFamily: 'Inter, sans-serif' }}>{link.label}</p>
                  <p className="text-sm font-medium" style={{ color: '#444444', fontFamily: 'Inter, sans-serif' }}>{link.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="rounded-2xl p-6 text-center" style={{ background: '#111111' }}>
            <p className="text-sm mb-4" style={{ color: '#aaaaaa', fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
              Got an interesting role or project?<br />I'd love to hear about it.
            </p>
            <a
              href={`mailto:${profile.contact.email}`}
              className="btn-primary inline-flex items-center gap-2"
              style={{ background: '#ffffff', color: '#111111' }}
            >
              <Mail size={15} strokeWidth={2} />
              Send me an email
            </a>
            <p className="text-xs mt-4" style={{ color: '#555555', fontFamily: 'Inter, sans-serif' }}>
              I typically respond within 24 hours
            </p>
          </div>

          {/* Download row */}
          <div className="flex gap-3">
            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 rounded-2xl py-3 text-sm font-semibold transition-colors"
              style={{
                background: '#f9f5f0',
                border: '1px solid #e8dfd6',
                color: '#111111',
                textDecoration: 'none',
                fontFamily: 'Inter, sans-serif',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#111111'; e.currentTarget.style.color = '#ffffff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#f9f5f0'; e.currentTarget.style.color = '#111111'; }}
            >
              ↓ Resume
            </a>
            <a
              href="/cover-letter.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 rounded-2xl py-3 text-sm font-semibold transition-colors"
              style={{
                background: '#f9f5f0',
                border: '1px solid #e8dfd6',
                color: '#111111',
                textDecoration: 'none',
                fontFamily: 'Inter, sans-serif',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#111111'; e.currentTarget.style.color = '#ffffff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#f9f5f0'; e.currentTarget.style.color = '#111111'; }}
            >
              ↓ Cover Letter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
