import { useEffect, useState } from 'react';
import Navbar       from './components/Navbar';
import { LogoMark }    from './components/Logo';
import RecruiterBot   from './components/RecruiterBot';
import TerminalHero from './components/TerminalHero';
import MetricsBar   from './components/MetricsBar';
import CloudSkills  from './components/CloudSkills';
import PipelineExp  from './components/PipelineExp';
import Projects     from './components/Projects';
import AIProjects   from './components/AIProjects';
import CertBadges   from './components/CertBadges';
import Achievements from './components/Achievements';
import Education    from './components/Education';
import Journey      from './components/Journey';
import Contact      from './components/Contact';

function Loader() {
  return (
    <div className="min-h-screen bg-cream-100 flex flex-col items-center justify-center gap-4">
      <LogoMark size={40} variant="dark" />
      <div className="flex gap-1.5">
        {[0, 1, 2].map(i => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-ink-300"
            style={{ animation: `bounce 0.9s ease-in-out ${i * 0.15}s infinite` }}
          />
        ))}
      </div>
      <style>{`@keyframes bounce{0%,100%{transform:translateY(0);opacity:0.4}50%{transform:translateY(-6px);opacity:1}}`}</style>
    </div>
  );
}

/* ── Section wrappers alternate between white and cream ── */
function Section({ children, bg = 'white', full = false }) {
  const background = bg === 'cream' ? '#f9f5f0' : '#ffffff';
  return (
    <div style={{ background }}>
      {full ? children : (
        <div className="max-w-6xl mx-auto px-5 md:px-8">{children}</div>
      )}
    </div>
  );
}

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + 'data.json')
      .then(r => r.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return <Loader />;

  return (
    <div className="min-h-screen text-ink-900 relative overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <TerminalHero profile={data.profile} />

      {/* Metrics strip — white, full bleed */}
      <Section bg="white">
        <MetricsBar metrics={data.metrics} />
      </Section>

      {/* Skills — cream */}
      <Section bg="cream">
        <CloudSkills skills={data.skills} />
      </Section>

      {/* Experience — white */}
      <Section bg="white">
        <PipelineExp experience={data.experience} />
      </Section>

      {/* Projects — cream */}
      <Section bg="cream">
        <Projects projects={data.projects} />
      </Section>

      {/* AI Projects — subtle purple-cream tint */}
      <div style={{ background: 'linear-gradient(160deg, #f8f5ff 0%, #f9f5f0 100%)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <AIProjects aiProjects={data.aiProjects} />
        </div>
      </div>

      {/* Certifications — white */}
      <Section bg="white">
        <CertBadges certs={data.certifications} />
      </Section>

      {/* Achievements — cream */}
      <Section bg="cream">
        <Achievements achievements={data.achievements} />
      </Section>

      {/* Education — white */}
      <Section bg="white">
        <Education education={data.education} />
      </Section>

      {/* Journey / Story — alternating (cream overall) with full-width photo sections */}
      <div style={{ background: '#f9f5f0' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          {data.journey && <Journey journey={data.journey} />}
        </div>
      </div>

      {/* Contact — white */}
      <Section bg="white">
        <Contact profile={data.profile} />
      </Section>

      {/* Recruiter AI Assistant */}
      <RecruiterBot />

      {/* Footer */}
      <footer className="border-t border-ink-100 py-12" style={{ background: '#111111' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 text-center">
          <div className="flex justify-center mb-4">
            <LogoMark size={34} variant="light" />
          </div>
          <p className="font-heading font-semibold mb-1" style={{ color: '#ffffff' }}>Md Arshad Ali</p>
          <p className="text-xs mb-6" style={{ color: '#666666', fontFamily: 'Inter, sans-serif' }}>
            Cloud & DevOps Engineer · Delhi, India
          </p>
          <div className="flex justify-center gap-8 mb-6">
            {[
              { label: 'Email', href: `mailto:${data.profile.contact.email}` },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/md-arshad-ali-06279a1b2', external: true },
              { label: 'GitHub', href: `https://${data.profile.contact.github}`, external: true },
            ].map(l => (
              <a
                key={l.label}
                href={l.href}
                target={l.external ? '_blank' : undefined}
                rel={l.external ? 'noopener noreferrer' : undefined}
                className="text-xs transition-colors"
                style={{ color: '#666666', fontFamily: 'Inter, sans-serif', textDecoration: 'none' }}
                onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
                onMouseLeave={e => e.currentTarget.style.color = '#666666'}
              >
                {l.label}
              </a>
            ))}
          </div>
          <p className="text-xs" style={{ color: '#444444', fontFamily: 'Inter, sans-serif' }}>
            © 2025 Md Arshad Ali · Built with React, Tailwind & Vite
          </p>
        </div>
      </footer>
    </div>
  );
}
