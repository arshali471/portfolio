import { useState, useEffect } from 'react';
import { LogoFull } from './Logo';

const NAV_LINKS = [
  { href: '#about',      label: 'About' },
  { href: '#skills',     label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects',   label: 'Projects' },
  { href: '#ai',         label: 'AI Work' },
  { href: '#journey',    label: 'Story' },
  { href: '#contact',    label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.href.slice(1));
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { threshold: 0.3 }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(249,245,240,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid #e5e5e5' : '1px solid transparent',
      }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#about" style={{ textDecoration: 'none' }}>
          <LogoFull size={34} />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-0.5">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link ${active === link.href.slice(1) ? 'active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/md-arshad-ali-06279a1b2"
            target="_blank" rel="noopener noreferrer"
            className="nav-link"
          >
            LinkedIn
          </a>
          <a href="mailto:arshali471@gmail.com" className="btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}>
            Hire Me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-ink-50 transition-colors"
          onClick={() => setMenuOpen(p => !p)}
          aria-label="Toggle menu"
        >
          <div style={{ width: 20, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div style={{ height: 1.5, background: '#111', borderRadius: 2, transition: 'all 0.2s', transform: menuOpen ? 'rotate(45deg) translateY(5.5px)' : 'none' }} />
            <div style={{ height: 1.5, background: '#111', borderRadius: 2, transition: 'all 0.2s', opacity: menuOpen ? 0 : 1 }} />
            <div style={{ height: 1.5, background: '#111', borderRadius: 2, transition: 'all 0.2s', transform: menuOpen ? 'rotate(-45deg) translateY(-5.5px)' : 'none' }} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream-50 border-t border-ink-100 px-5 py-4 space-y-1">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-2.5 text-sm font-medium text-ink-600 hover:text-ink-900 hover:bg-ink-50 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-ink-100 mt-2">
            <a href="mailto:arshali471@gmail.com" className="btn-primary w-full justify-center" style={{ padding: '0.625rem 1.5rem' }}>
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
