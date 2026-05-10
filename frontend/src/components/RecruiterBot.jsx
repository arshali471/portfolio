import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, ChevronRight } from 'lucide-react';

/* ── Knowledge base ─────────────────────────────────────── */
const KB = {
  hire: {
    keywords: ['how to hire', 'how do i hire', 'hiring process', 'onboard', 'make an offer', 'interview process', 'recruit', 'want to hire'],
    response: {
      title: 'How to Hire Arshad',
      body: `Here's the quickest path to bringing Arshad on board:

**Step 1 — Reach out directly**
Drop him an email at **arshali471@gmail.com** or message on LinkedIn. He responds within 24 hours.

**Step 2 — Share the role**
Send the JD and your timeline. He's open to DevOps, SRE, Platform, and AI/ML infrastructure roles — India or international.

**Step 3 — Schedule a call**
A 30-min intro call is all it takes to align on expectations, tech fit, and joining timeline.

**Step 4 — Move fast**
Arshad is actively interviewing. Top candidates go quickly — don't wait.`,
      contacts: [
        { icon: '✉', label: 'Email (fastest)',   value: 'arshali471@gmail.com',            url: 'mailto:arshali471@gmail.com' },
        { icon: '💼', label: 'LinkedIn',          value: 'md-arshad-ali-06279a1b2',         url: 'https://www.linkedin.com/in/md-arshad-ali-06279a1b2' },
        { icon: '☎', label: 'Phone',              value: '+91 78708 31211',                 url: 'tel:+917870831211' },
      ],
      highlights: [],
    },
  },

  availability: {
    keywords: ['available', 'availab', 'open to', 'notice period', 'when can he join', 'join', 'start', 'looking', 'opportunity', 'when', 'relocat', 'location', 'remote', 'work from', 'where'],
    response: {
      title: 'Availability',
      body: `Arshad is **actively open to new opportunities** in:

• Cloud & DevOps Engineering
• Site Reliability Engineering (SRE)
• Platform Engineering
• AI/ML Infrastructure

📍 **Location:** Delhi, India
🌏 **Open to:** Any location in India and outside the country (international relocation welcome)
💻 **Also open to:** Fully remote roles

📧 Best way to reach: **arshali471@gmail.com**`,
      highlights: [
        { label: 'Open to Work', desc: 'Available for immediate interviews' },
        { label: 'India + Global', desc: 'Open to any location' },
      ],
    },
  },

  intro: {
    keywords: ['who', 'about', 'tell me', 'summary', 'overview', 'introduce', 'arshad', 'background', 'profile'],
    response: {
      title: 'About Arshad Ali',
      body: `Md Arshad Ali is a **Cloud & DevOps Engineer** based in **Delhi, India** with **3+ years** of hands-on experience building scalable, AI-augmented infrastructure at enterprise scale.

He currently works at **Tata Consultancy Services (TCS)** where he manages AWS infrastructure, builds CI/CD pipelines, and integrates AI capabilities into DevOps workflows.`,
      highlights: [
        { label: '80%', desc: 'Reduction in manual ops effort' },
        { label: '60%', desc: 'Faster deployment cycles' },
        { label: '20%', desc: 'Cloud cost savings' },
        { label: '3+',  desc: 'Years of experience' },
      ],
    },
  },

  skills: {
    keywords: ['skill', 'tech', 'stack', 'technolog', 'tool', 'know', 'expert', 'proficient', 'language', 'framework'],
    response: {
      title: 'Technical Skills',
      body: `Arshad's core technical stack:`,
      tags: [
        { group: 'Cloud',       items: ['AWS', 'EC2', 'Lambda', 'S3', 'RDS', 'EKS', 'Bedrock'] },
        { group: 'DevOps',      items: ['Kubernetes', 'Docker', 'Terraform', 'Helm', 'ArgoCD'] },
        { group: 'CI/CD',       items: ['Jenkins', 'GitHub Actions', 'AWS CodePipeline', 'GitOps'] },
        { group: 'AI & ML',     items: ['AWS Bedrock', 'Claude API', 'SageMaker', 'LangChain', 'RAG'] },
        { group: 'Monitoring',  items: ['Grafana', 'Prometheus', 'CloudWatch'] },
        { group: 'Programming', items: ['Python', 'JavaScript', 'TypeScript', 'Bash'] },
      ],
    },
  },

  experience: {
    keywords: ['experience', 'work', 'job', 'career', 'tcs', 'tata', 'company', 'role', 'position', 'employer', 'history'],
    response: {
      title: 'Work Experience',
      body: `**Tata Consultancy Services — Cloud Engineer** *(July 2022 – Present)*
Delhi, India · Full-time

Key achievements at TCS:
• Built an **AWS Cloud Data Inventory Tool** → **80% reduction** in manual effort
• Optimised CI/CD pipelines (Jenkins, CodePipeline) → **60% faster** deployments
• Led cloud cost optimisation → **20% reduction** in monthly AWS spend
• Maintained **100% security compliance** score (AWS Config, GuardDuty)
• Cut incident response time by **50%** using CloudWatch + Grafana
• Integrated **AWS Bedrock & GenAI** into infrastructure automation

**Panicle Tech — Full Stack Developer** *(May 2021 – May 2022)*
Remote · Internship
Built production React + Node.js apps, designed REST APIs, prototyped ML features.`,
      highlights: [],
    },
  },

  projects: {
    keywords: ['project', 'built', 'build', 'create', 'develop', 'portfolio', 'serverpulse', 'monitor', 'platform', 'product'],
    response: {
      title: 'Key Projects',
      body: `**ServerPulse** *(Live Product — serverpulse.in)*
Real-time server analytics platform — tracks CPU, memory, disk, network across multiple servers from a single dashboard.

**TCS AWS Management Platform**
Enterprise-grade full-stack platform (~35K lines TypeScript) — browser SSH terminal, EC2/S3/RDS/EKS dashboards, cost analysis, Azure AD SSO. → **80% ops reduction**

**MonitorPlatform — SaaS**
Self-hosted multi-tenant monitoring SaaS. Cross-platform agent (Linux/macOS/Windows) → real-time metrics via Redis + Socket.io, security scanning, vulnerability scoring, configurable alerts.`,
      links: [
        { label: 'Visit ServerPulse', url: 'https://serverpulse.in' },
      ],
      highlights: [],
    },
  },

  ai: {
    keywords: ['ai', 'ml', 'machine learning', 'artificial', 'bedrock', 'claude', 'llm', 'genai', 'rag', 'sagemaker', 'intelligent'],
    response: {
      title: 'AI & ML Work',
      body: `Arshad builds at the intersection of **DevOps and Artificial Intelligence**:

• **AI Cost Intelligence** — AWS Bedrock + Claude API to analyse spend patterns & generate NL recommendations → **35% additional cost reduction**
• **Incident Response Bot** — LLM-powered bot (Claude + LangChain) integrated with PagerDuty/Slack → **70% MTTR reduction**
• **Log Anomaly Detector** — AWS SageMaker (Random Cut Forest) to predict failures before impact → **90% failure prediction accuracy**
• **RAG Knowledge Base** — Infrastructure runbooks via AWS Bedrock Knowledge Bases → **80% fewer ops queries**`,
      highlights: [
        { label: 'AWS Certified AI Practitioner', desc: 'Verified' },
      ],
    },
  },

  certifications: {
    keywords: ['cert', 'certif', 'aws', 'terraform', 'hashicorp', 'qualification', 'credential', 'badge'],
    response: {
      title: 'Certifications',
      body: `All certifications are **industry-verified**:`,
      certs: [
        { name: 'AWS Certified Solutions Architect – Associate', issuer: 'Amazon Web Services', color: '#b45309' },
        { name: 'AWS Certified Cloud Practitioner',             issuer: 'Amazon Web Services', color: '#b45309' },
        { name: 'HashiCorp Certified: Terraform Associate',     issuer: 'HashiCorp',            color: '#7c3aed' },
        { name: 'AWS Certified AI Practitioner',               issuer: 'Amazon Web Services', color: '#1d4ed8' },
      ],
    },
  },

  education: {
    keywords: ['education', 'degree', 'college', 'university', 'study', 'cgpa', 'grade', 'btech', 'b.tech', 'academic'],
    response: {
      title: 'Education',
      body: `**B.Tech in Computer Science & Engineering**
Guru Gobind Singh Educational Society's Technical Campus, Bokaro, Jharkhand
2018 – 2022`,
      highlights: [
        { label: '8.64 / 10', desc: 'CGPA — top academic performance' },
      ],
    },
  },

  contact: {
    keywords: ['contact', 'email', 'phone', 'linkedin', 'github', 'reach', 'connect', 'message', 'call', 'hire'],
    response: {
      title: 'Contact Arshad',
      body: `Arshad is **actively looking for opportunities** in DevOps, SRE, and Platform Engineering. Reach out through any channel below:`,
      contacts: [
        { icon: '✉', label: 'Email',    value: 'arshali471@gmail.com',                         url: 'mailto:arshali471@gmail.com' },
        { icon: '💼', label: 'LinkedIn', value: 'md-arshad-ali-06279a1b2',                      url: 'https://www.linkedin.com/in/md-arshad-ali-06279a1b2' },
        { icon: '{ }', label: 'GitHub',  value: 'github.com/arshali471',                        url: 'https://github.com/arshali471' },
        { icon: '☎', label: 'Phone',    value: '+91 78708 31211',                               url: 'tel:+917870831211' },
      ],
    },
  },

  resume: {
    keywords: ['resume', 'cv', 'curriculum vitae', 'cover letter', 'cover', 'download', 'pdf', 'document'],
    response: {
      title: 'Resume & Cover Letter',
      body: `Arshad's resume and cover letter are ready to view and download as PDF.

Click a link below — the page opens with a **"Save as PDF"** button at the top. Works in all browsers.`,
      links: [
        { label: 'View Resume & Save as PDF', url: '/resume.html' },
        { label: 'View Cover Letter & Save as PDF', url: '/cover-letter.html' },
      ],
      highlights: [
        { label: '1 page', desc: 'Concise, ATS-friendly resume' },
      ],
    },
  },

  achievements: {
    keywords: ['achievement', 'award', 'recognition', 'accomplishment', 'honor', 'star'],
    response: {
      title: 'Key Achievements',
      body: `**Star Employee of the Month — TCS**
Recognised for delivering critical infrastructure automation projects ahead of schedule with **zero production incidents**.

**Cloud Cost Optimisation Leader — TCS**
Led organisation-wide AWS cost optimisation saving **20% monthly spend** — recognised at division level for financial impact.`,
      highlights: [],
    },
  },
};

/* ── Greeting ─────────────────────────────────────────────── */
const GREETING = {
  title: `Hi! I'm Arshad's AI assistant 👋`,
  body:  `Ask me anything about Arshad's experience, skills, projects, or how to contact him. I'm here to help recruiters find the right information quickly.`,
  highlights: [],
};

const QUICK_CHIPS = [
  { label: '👤 Who is Arshad?',      query: 'Tell me about Arshad' },
  { label: '🛠 Skills & Stack',       query: 'What are his skills?' },
  { label: '💼 Experience',           query: 'Tell me about his work experience' },
  { label: '🚀 Projects',             query: 'What projects has he built?' },
  { label: '🤖 AI Work',              query: 'What AI and ML work has he done?' },
  { label: '📜 Certifications',       query: 'What certifications does he have?' },
  { label: '📄 Download Resume',      query: 'Download resume' },
  { label: '✉ Cover Letter',         query: 'Download cover letter' },
  { label: '📞 How to hire him?',     query: 'How to hire Arshad?' },
  { label: '✅ Is he available?',     query: 'Is Arshad available and open to relocation?' },
];

const FALLBACK = {
  title: 'Not sure about that',
  body: `I can answer questions about Arshad's **skills, experience, projects, certifications, education, and how to contact him**. Try one of the quick questions below, or ask me something specific!`,
  highlights: [],
};

/* ── Response matcher ─────────────────────────────────────── */
function getResponse(input) {
  const lower = input.toLowerCase();
  for (const key of Object.keys(KB)) {
    const entry = KB[key];
    // Sort longer keywords first so specific phrases beat single words
    const sorted = [...entry.keywords].sort((a, b) => b.length - a.length);
    if (sorted.some(kw => lower.includes(kw))) {
      return entry.response;
    }
  }
  return FALLBACK;
}

/* ── Render response body (bold + bullet) ─────────────────── */
function FormattedText({ text }) {
  const lines = text.split('\n');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
      {lines.map((line, i) => {
        if (!line.trim()) return <div key={i} style={{ height: '0.25rem' }} />;
        const formatted = line.replace(/\*\*(.*?)\*\*/g, (_, m) =>
          `<strong style="color:#111111;font-weight:700">${m}</strong>`
        );
        const isBullet = line.trimStart().startsWith('•');
        return (
          <p
            key={i}
            style={{
              margin: 0,
              paddingLeft: isBullet ? '0.1rem' : 0,
              color: '#444444',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.85rem',
              lineHeight: 1.65,
            }}
            dangerouslySetInnerHTML={{ __html: formatted }}
          />
        );
      })}
    </div>
  );
}

/* ── Bot message bubble ─────────────────────────────────────── */
function BotMessage({ response, isGreeting }) {
  if (!response) return null;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
      {/* Title */}
      {response.title && (
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            background: '#111111',
            color: '#ffffff',
            borderRadius: '9999px',
            padding: '0.25rem 0.8rem',
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.04em',
            fontFamily: 'Inter, sans-serif',
            alignSelf: 'flex-start',
          }}
        >
          <Sparkles size={11} strokeWidth={2} />
          {response.title}
        </div>
      )}

      {/* Body text */}
      <div
        style={{
          background: '#f9f5f0',
          border: '1px solid #ebe2d8',
          borderRadius: '0 1rem 1rem 1rem',
          padding: '0.9rem 1rem',
        }}
      >
        <FormattedText text={response.body} />

        {/* Highlights — key metric pills */}
        {response.highlights?.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.75rem' }}>
            {response.highlights.map((h, i) => (
              <div
                key={i}
                style={{
                  background: '#ffffff',
                  border: '1px solid #ddd3c8',
                  borderRadius: '0.75rem',
                  padding: '0.4rem 0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <span style={{ fontFamily: 'Playfair Display, Georgia, serif', fontWeight: 700, fontSize: '1rem', color: '#111111', lineHeight: 1 }}>
                  {h.label}
                </span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', color: '#888888' }}>
                  {h.desc}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Tag groups — for skills */}
        {response.tags?.map((group, gi) => (
          <div key={gi} style={{ marginTop: '0.65rem' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', fontWeight: 700, color: '#888888', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.35rem' }}>
              {group.group}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
              {group.items.map((item, ii) => (
                <span key={ii} style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 500, padding: '0.2rem 0.6rem', borderRadius: '9999px', border: '1px solid #cccccc', color: '#444444', background: '#ffffff' }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}

        {/* Cert list */}
        {response.certs?.map((cert, ci) => (
          <div
            key={ci}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              marginTop: '0.5rem',
              background: '#ffffff',
              border: '1px solid #e5e5e5',
              borderRadius: '0.75rem',
              padding: '0.5rem 0.75rem',
            }}
          >
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: cert.color, flexShrink: 0, display: 'inline-block' }} />
            <div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', fontWeight: 600, color: '#111111', margin: 0 }}>{cert.name}</p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.68rem', color: '#888888', margin: 0 }}>{cert.issuer}</p>
            </div>
          </div>
        ))}

        {/* Contact links */}
        {response.contacts?.map((c, ci) => (
          <a
            key={ci}
            href={c.url}
            target={c.url.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              marginTop: '0.5rem',
              background: '#ffffff',
              border: '1px solid #e5e5e5',
              borderRadius: '0.75rem',
              padding: '0.5rem 0.75rem',
              textDecoration: 'none',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = '#111111'}
            onMouseLeave={e => e.currentTarget.style.borderColor = '#e5e5e5'}
          >
            <span style={{ fontSize: '0.9rem', width: 20, textAlign: 'center', flexShrink: 0 }}>{c.icon}</span>
            <div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.68rem', color: '#888888', margin: 0 }}>{c.label}</p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', fontWeight: 600, color: '#111111', margin: 0 }}>{c.value}</p>
            </div>
            <ChevronRight size={14} color="#cccccc" style={{ marginLeft: 'auto', flexShrink: 0 }} />
          </a>
        ))}

        {/* External links */}
        {response.links?.map((l, li) => (
          <a
            key={li}
            href={l.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              marginTop: '0.75rem',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.8rem',
              fontWeight: 600,
              color: '#059669',
              textDecoration: 'none',
              border: '1px solid #a7f3d0',
              background: '#ecfdf5',
              borderRadius: '9999px',
              padding: '0.3rem 0.8rem',
            }}
          >
            {l.label} ↗
          </a>
        ))}
      </div>
    </div>
  );
}

/* ── Main ChatBot component ──────────────────────────────── */
export default function RecruiterBot() {
  const [open, setOpen]       = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput]     = useState('');
  const [typing, setTyping]   = useState(false);
  const bottomRef             = useRef(null);
  const inputRef              = useRef(null);

  // Greet on first open
  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ role: 'bot', response: GREETING, isGreeting: true }]);
    }
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  function send(text) {
    const trimmed = (text || input).trim();
    if (!trimmed) return;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: trimmed }]);
    setTyping(true);
    setTimeout(() => {
      const response = getResponse(trimmed);
      setMessages(prev => [...prev, { role: 'bot', response }]);
      setTyping(false);
    }, 750);
  }

  function handleKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
  }

  return (
    <>
      {/* ── Floating button ── */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label="Open recruiter assistant"
        style={{
          position: 'fixed',
          bottom: '1.75rem',
          right: '1.75rem',
          zIndex: 1000,
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: '#111111',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 30px rgba(0,0,0,0.22)',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.08)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.28)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.22)'; }}
      >
        {open
          ? <X size={22} color="#ffffff" strokeWidth={2} />
          : <MessageCircle size={22} color="#ffffff" strokeWidth={2} />
        }
        {/* Pulse ring when closed */}
        {!open && (
          <span style={{
            position: 'absolute', inset: -4, borderRadius: '50%',
            border: '2px solid rgba(17,17,17,0.25)',
            animation: 'botPulse 2s ease-out infinite',
          }} />
        )}
      </button>

      {/* ── Chat window ── */}
      <div
        style={{
          position: 'fixed',
          bottom: '5.5rem',
          right: '1.75rem',
          zIndex: 999,
          width: 'min(420px, calc(100vw - 2rem))',
          height: 'min(580px, calc(100vh - 8rem))',
          background: '#ffffff',
          borderRadius: '1.25rem',
          border: '1px solid #e5e5e5',
          boxShadow: '0 24px 80px rgba(0,0,0,0.16)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          opacity: open ? 1 : 0,
          transform: open ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.97)',
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 0.25s ease, transform 0.25s ease',
          transformOrigin: 'bottom right',
        }}
      >
        {/* Header */}
        <div
          style={{
            background: '#111111',
            padding: '1rem 1.25rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: 36, height: 36, borderRadius: '50%',
              background: 'rgba(255,255,255,0.12)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Sparkles size={16} color="#ffffff" strokeWidth={2} />
          </div>
          <div>
            <p style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 700, fontSize: '0.95rem', color: '#ffffff', margin: 0 }}>
              Arshad's Assistant
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', color: 'rgba(255,255,255,0.55)', margin: 0 }}>
              Ask me anything about Arshad
            </p>
          </div>
          <div
            style={{
              marginLeft: 'auto',
              display: 'flex', alignItems: 'center', gap: '0.35rem',
              background: 'rgba(16,185,129,0.2)',
              border: '1px solid rgba(16,185,129,0.4)',
              borderRadius: '9999px',
              padding: '0.2rem 0.6rem',
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.65rem', fontWeight: 600, color: '#10b981' }}>Online</span>
          </div>
        </div>

        {/* Messages */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '1rem 1.1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {messages.map((msg, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                opacity: 0,
                animation: `fadeUp 0.3s ease ${i * 0.05}s forwards`,
              }}
            >
              {msg.role === 'user' ? (
                <div
                  style={{
                    background: '#111111',
                    color: '#ffffff',
                    borderRadius: '1rem 1rem 0.25rem 1rem',
                    padding: '0.6rem 0.9rem',
                    maxWidth: '80%',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.85rem',
                    lineHeight: 1.5,
                  }}
                >
                  {msg.text}
                </div>
              ) : (
                <div style={{ maxWidth: '92%' }}>
                  <BotMessage response={msg.response} />
                </div>
              )}
            </div>
          ))}

          {/* Typing indicator */}
          {typing && (
            <div style={{ display: 'flex', gap: 5, padding: '0.7rem 1rem', background: '#f9f5f0', border: '1px solid #ebe2d8', borderRadius: '0 1rem 1rem 1rem', alignSelf: 'flex-start', width: 'fit-content' }}>
              {[0,1,2].map(i => (
                <span key={i} style={{ width: 7, height: 7, borderRadius: '50%', background: '#aaaaaa', display: 'inline-block', animation: `typingDot 1.2s ease-in-out ${i * 0.2}s infinite` }} />
              ))}
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Quick chips — always visible */}
        <div
          className="chips-strip"
          style={{
            borderTop: '1px solid #f0f0f0',
            padding: '0.55rem 0.9rem',
            overflowX: 'auto',
            flexShrink: 0,
            background: '#fafafa',
            display: 'flex',
            gap: '0.4rem',
            scrollbarWidth: 'none',
          }}
        >
          {QUICK_CHIPS.map((chip, i) => (
            <button
              key={i}
              onClick={() => send(chip.query)}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.72rem',
                fontWeight: 500,
                padding: '0.28rem 0.7rem',
                borderRadius: '9999px',
                border: '1px solid #e5e5e5',
                background: '#ffffff',
                color: '#444444',
                cursor: 'pointer',
                transition: 'all 0.15s',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#111111'; e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.borderColor = '#111111'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.color = '#444444'; e.currentTarget.style.borderColor = '#e5e5e5'; }}
            >
              {chip.label}
            </button>
          ))}
        </div>

        {/* Input */}
        <div
          style={{
            padding: '0.65rem 1rem',
            borderTop: '1px solid #e5e5e5',
            display: 'flex',
            gap: '0.5rem',
            flexShrink: 0,
            background: '#ffffff',
          }}
        >
          <input
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Ask about skills, experience, projects…"
            style={{
              flex: 1,
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.85rem',
              padding: '0.6rem 0.9rem',
              borderRadius: '9999px',
              border: '1px solid #e5e5e5',
              outline: 'none',
              background: '#f9f5f0',
              color: '#111111',
              transition: 'border-color 0.2s',
            }}
            onFocus={e => e.target.style.borderColor = '#111111'}
            onBlur={e => e.target.style.borderColor = '#e5e5e5'}
          />
          <button
            onClick={() => send()}
            style={{
              width: 38,
              height: 38,
              borderRadius: '50%',
              background: input.trim() ? '#111111' : '#e5e5e5',
              border: 'none',
              cursor: input.trim() ? 'pointer' : 'default',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s',
              flexShrink: 0,
            }}
          >
            <Send size={15} color={input.trim() ? '#ffffff' : '#aaaaaa'} strokeWidth={2} />
          </button>
        </div>
      </div>

      <style>{`
        .chips-strip::-webkit-scrollbar { display: none; }
        @keyframes botPulse {
          0%   { transform: scale(1);   opacity: 0.6; }
          70%  { transform: scale(1.5); opacity: 0; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        @keyframes typingDot {
          0%, 80%, 100% { transform: translateY(0);    opacity: 0.4; }
          40%           { transform: translateY(-5px); opacity: 1; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
