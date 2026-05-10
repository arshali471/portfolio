import { useScrollReveal } from '../hooks/useScrollReveal';
import { Bot, Brain, Search, Lightbulb, ArrowUpRight } from 'lucide-react';

const BADGE_STYLES = {
  GenAI: { bg: '#f5f3ff', border: '#c4b5fd', color: '#7c3aed' },
  LLM:   { bg: '#ecfeff', border: '#a5f3fc', color: '#0891b2' },
  ML:    { bg: '#eff6ff', border: '#bfdbfe', color: '#1d4ed8' },
  RAG:   { bg: '#fdf4ff', border: '#e9d5ff', color: '#9333ea' },
};

const AI_ICONS = { 1: Bot, 2: Brain, 3: Search, 4: Lightbulb };

function AIProjectCard({ project, index, visible }) {
  const badge = BADGE_STYLES[project.badge] || BADGE_STYLES.GenAI;
  const Icon  = AI_ICONS[project.id] || Bot;

  return (
    <div
      className="card flex flex-col"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(25px)',
        transition: `opacity 0.5s ease ${index * 0.11}s, transform 0.5s ease ${index * 0.11}s`,
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className="flex items-center justify-center rounded-xl"
          style={{ width: 44, height: 44, background: badge.bg, border: `1px solid ${badge.border}`, flexShrink: 0 }}
        >
          <Icon size={20} color={badge.color} strokeWidth={1.6} />
        </div>
        <span
          className="text-xs font-semibold px-2.5 py-1 rounded-full"
          style={{
            background: badge.bg,
            border: `1px solid ${badge.border}`,
            color: badge.color,
            fontFamily: 'Inter, sans-serif',
            letterSpacing: '0.06em',
          }}
        >
          {project.badge}
        </span>
      </div>

      <h3 className="font-heading text-lg mb-2" style={{ color: '#111111' }}>
        {project.name}
      </h3>

      <p className="text-sm mb-4 flex-1" style={{ color: '#666666', fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.map((t, i) => (
          <span key={i} className="tag tag-purple">{t}</span>
        ))}
      </div>

      <div className="pt-4 border-t border-ink-100">
        <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: '#888888', fontFamily: 'Inter, sans-serif' }}>
          Impact
        </p>
        <p className="text-sm font-semibold" style={{ color: '#7c3aed', fontFamily: 'Inter, sans-serif' }}>
          {project.impact}
        </p>
      </div>
    </div>
  );
}

export default function AIProjects({ aiProjects }) {
  const [ref, visible] = useScrollReveal(0.1);

  return (
    <section id="ai" ref={ref} className="py-20">
      <div className="mb-12">
        <p className="eyebrow" style={{ color: '#7c3aed' }}>AI & Machine Learning</p>
        <h2 className="font-heading" style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: '#111111' }}>
          Where DevOps Meets AI
        </h2>
        <p className="mt-2" style={{ color: '#888888', fontFamily: 'Inter, sans-serif', fontSize: '1rem' }}>
          Built with AWS Bedrock, Anthropic Claude API, and SageMaker
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {aiProjects.map((project, i) => (
          <AIProjectCard key={project.id} project={project} index={i} visible={visible} />
        ))}
      </div>
    </section>
  );
}
