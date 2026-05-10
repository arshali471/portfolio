import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import {
  GraduationCap, Code2, Cloud, Building2, Award,
  Monitor, Activity, Bot, Rocket, Server,
} from 'lucide-react';

const CHAPTER_ICON_MAP = {
  1:  GraduationCap,
  2:  Code2,
  3:  Cloud,
  4:  Building2,
  5:  Award,
  6:  Server,
  65: Monitor,
  7:  Bot,
  8:  Rocket,
};

const STORY = [
  {
    id: 'beginning',
    photo: '/e1f3beb5-daa2-445f-89b6-37ca54907e69.jpeg',
    photoLabel: 'The early days of hustle',
    photoPos: 'center 20%',
    eyebrow: 'The Beginning',
    heading: 'From curiosity to cloud.',
    body: `Growing up and moving to Delhi for college, I was always drawn to how technology could solve real problems. My B.Tech in Computer Science laid the foundation — but the real education happened late at night, teaching myself Linux, networking, and automation while my peers were still figuring out their IDEs. Every broken environment was a puzzle worth solving.`,
    quote: `"The best engineers aren't born — they're forged in failed deployments."`,
    reverse: false,
  },
  {
    id: 'tcs',
    photo: '/image copy.png',
    photoLabel: 'Building at scale — TCS',
    photoPos: 'center 10%',
    eyebrow: 'The Big Leagues',
    heading: 'Shipping infrastructure at enterprise scale.',
    body: `At Tata Consultancy Services, I stopped thinking in single servers and started thinking in fleets. Managing hundreds of EC2 instances, building CI/CD pipelines that teams actually trusted, cutting cloud costs by 20% — this is where DevOps went from theory to muscle memory. I learned that reliability isn't an accident; it's a system.`,
    quote: `"Automate everything that can be automated. Focus humans on what only humans can do."`,
    reverse: true,
  },
  {
    id: 'ai',
    photo: '/image.png',
    photoLabel: 'Exploring AI & beyond',
    photoPos: 'center 15%',
    eyebrow: 'The AI Chapter',
    heading: 'Where DevOps meets intelligence.',
    body: `The next frontier wasn't just infrastructure — it was making infrastructure think. Integrating AWS Bedrock, building RAG pipelines, wiring Claude into incident response workflows. I discovered that the same systems-thinking that makes a great DevOps engineer also makes a great AI integrator. The tools changed; the mindset didn't.`,
    quote: `"AI doesn't replace the engineer. It amplifies the one who understands the system."`,
    reverse: false,
  },
];

function PhotoLabel({ text }) {
  return (
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
        zIndex: 10,
      }}
    >
      <p style={{
        fontSize: '0.65rem',
        fontWeight: 600,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.85)',
        fontFamily: 'Inter, sans-serif',
        whiteSpace: 'nowrap',
      }}>
        {text}
      </p>
    </div>
  );
}

function StorySection({ section }) {
  const [ref, visible] = useScrollReveal(0.12);
  const imgCol = (
    <div className={`relative ${section.reverse ? 'order-1 md:order-2' : 'order-1'}`}>
      <div
        className="overflow-hidden rounded-2xl w-full relative"
        style={{
          height: 'clamp(360px, 48vw, 540px)',
          boxShadow: '0 20px 70px rgba(0,0,0,0.10)',
          border: '1px solid #ebe2d8',
        }}
      >
        <img
          src={import.meta.env.BASE_URL + section.photo.replace(/^\//, '')}
          alt={section.eyebrow}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: section.photoPos || 'center center',
          }}
        />
        <PhotoLabel text={section.photoLabel} />
      </div>
    </div>
  );

  const textCol = (
    <div className={`space-y-5 ${section.reverse ? 'order-2 md:order-1' : 'order-2'}`}>
      <p className="eyebrow">{section.eyebrow}</p>
      <h3
        className="font-heading"
        style={{ fontSize: 'clamp(1.7rem, 3vw, 2.5rem)', color: '#111111', lineHeight: 1.18 }}
      >
        {section.heading}
      </h3>
      <p style={{ color: '#666666', fontFamily: 'Inter, sans-serif', lineHeight: 1.82, fontSize: '1rem' }}>
        {section.body}
      </p>
      <blockquote style={{ borderLeft: '3px solid #111111', paddingLeft: '1.2rem', margin: 0 }}>
        <p className="font-heading" style={{ fontSize: '0.95rem', color: '#444444', fontStyle: 'italic', lineHeight: 1.65 }}>
          {section.quote}
        </p>
      </blockquote>
    </div>
  );

  return (
    <div
      ref={ref}
      className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center py-20"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}
    >
      {imgCol}
      {textCol}
    </div>
  );
}

const CHAPTER_COLORS = {
  blue:   '#1d4ed8',
  green:  '#059669',
  orange: '#b45309',
  cyan:   '#0891b2',
  purple: '#7c3aed',
};

function TimelineItem({ chapter, index, isOpen, onToggle, isLast }) {
  const color = CHAPTER_COLORS[chapter.color] || '#111111';
  const [ref, visible] = useScrollReveal(0.15);
  const Icon = CHAPTER_ICON_MAP[chapter.id] || Activity;

  return (
    <div
      ref={ref}
      className="flex gap-0"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : 'translateX(-16px)',
        transition: `opacity 0.5s ease ${index * 0.07}s, transform 0.5s ease ${index * 0.07}s`,
      }}
    >
      {/* Left: dot + line */}
      <div className="flex flex-col items-center" style={{ width: 48, flexShrink: 0 }}>
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: isOpen ? color : '#ffffff',
            border: `2.5px solid ${color}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'background 0.3s ease',
            zIndex: 1,
            position: 'relative',
            boxShadow: isOpen ? `0 0 0 4px ${color}22` : 'none',
          }}
        >
          <Icon size={16} color={isOpen ? '#ffffff' : color} strokeWidth={1.8} />
        </div>
        {!isLast && (
          <div
            style={{
              width: 2,
              flex: 1,
              minHeight: 20,
              background: `linear-gradient(to bottom, ${color}55, #e5e5e5)`,
              marginTop: 2,
            }}
          />
        )}
      </div>

      {/* Right: card */}
      <div className="flex-1 pb-6" style={{ paddingLeft: 16 }}>
        <div
          className="cursor-pointer rounded-2xl border overflow-hidden transition-all duration-300"
          style={{
            borderColor: isOpen ? color : '#e8e8e8',
            background: isOpen ? '#fafafa' : '#ffffff',
            boxShadow: isOpen ? `0 4px 24px ${color}18` : '0 1px 4px rgba(0,0,0,0.04)',
          }}
          onClick={onToggle}
        >
          <div className="flex items-center justify-between p-4">
            <div className="flex flex-col gap-0.5">
              <span
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  fontFamily: 'Inter, sans-serif',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color,
                }}
              >
                {chapter.year}
              </span>
              <span
                className="font-heading"
                style={{ fontSize: '0.95rem', color: '#111111', lineHeight: 1.3 }}
              >
                {chapter.title}
              </span>
            </div>
            <span
              style={{
                color,
                fontSize: '0.6rem',
                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease',
                display: 'inline-block',
                marginLeft: '1rem',
                flexShrink: 0,
                opacity: 0.8,
              }}
            >
              ▼
            </span>
          </div>

          <div
            style={{
              maxHeight: isOpen ? '500px' : '0',
              overflow: 'hidden',
              transition: 'max-height 0.4s cubic-bezier(0.23,1,0.32,1)',
            }}
          >
            <div className="px-4 pb-5 pt-3 border-t" style={{ borderColor: '#f0f0f0' }}>
              <p style={{ color: '#555555', fontFamily: 'Inter, sans-serif', lineHeight: 1.78, fontSize: '0.9rem' }}>
                {chapter.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChapterList({ chapters }) {
  const [open, setOpen] = useState(null);
  const [ref, visible] = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className="py-16"
      style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.6s ease' }}
    >
      <p className="eyebrow mb-2">Chapter by Chapter</p>
      <h3 className="font-heading mb-8" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: '#111111' }}>
        The Full Timeline
      </h3>

      {/* Lifestyle photo + intro */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div
          className="overflow-hidden rounded-2xl relative"
          style={{ height: 260, border: '1px solid #ebe2d8', boxShadow: '0 8px 30px rgba(0,0,0,0.08)' }}
        >
          <img
            src={import.meta.env.BASE_URL + 'IMG_2094.jpeg'}
            alt="Arshad Ali"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 10%' }}
          />
          <PhotoLabel text="Outside the screen" />
        </div>
        <div className="md:col-span-2 flex items-center">
          <p style={{ color: '#666666', fontFamily: 'Inter, sans-serif', lineHeight: 1.82, fontSize: '1rem' }}>
            Beyond deployments and pipelines, I'm someone who believes in the human side of engineering. I love exploring new places, staying curious about the world outside the terminal, and always learning — whether it's a new cloud service or a new city.
          </p>
        </div>
      </div>

      {/* Vertical timeline */}
      <div className="max-w-2xl">
        {chapters.map((chapter, i) => (
          <TimelineItem
            key={chapter.id}
            chapter={chapter}
            index={i}
            isOpen={open === chapter.id}
            onToggle={() => setOpen(open === chapter.id ? null : chapter.id)}
            isLast={i === chapters.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

export default function Journey({ journey }) {
  const [ref, visible] = useScrollReveal(0.1);

  return (
    <section id="journey">
      {/* Section header */}
      <div
        ref={ref}
        className="pt-20 pb-4"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        <p className="eyebrow">My Story</p>
        <h2 className="font-heading mt-2" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#111111' }}>
          The Journey So Far
        </h2>
        <p style={{ color: '#666666', fontFamily: 'Inter, sans-serif', lineHeight: 1.8, maxWidth: '52ch', marginTop: '0.75rem', fontSize: '1rem' }}>
          {journey?.intro || 'From small-town curiosity to enterprise cloud infrastructure — a story of shipping, breaking, and building better systems.'}
        </p>
      </div>

      {/* Alternating story sections */}
      {STORY.map(section => (
        <StorySection key={section.id} section={section} />
      ))}

      {/* Chapter accordion */}
      {journey?.chapters && <ChapterList chapters={journey.chapters} />}
    </section>
  );
}
