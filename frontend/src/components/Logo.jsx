/**
 * LogoMark — "AA" monogram for Arshad Ali
 * Two geometric A letterforms drawn as SVG stroke paths on a dark rounded rect.
 * Used in Navbar (dark variant) and Footer (light variant).
 */
export function LogoMark({ size = 38, variant = 'dark' }) {
  const bg = variant === 'dark' ? '#111111' : '#ffffff';
  const fg = variant === 'dark' ? '#ffffff' : '#111111';
  const h  = size;

  return (
    <svg
      width={h}
      height={h}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Arshad Ali logo"
      style={{ display: 'block', flexShrink: 0 }}
    >
      <rect width="40" height="40" rx="10" fill={bg} />

      {/* Single "A" centred */}
      <path
        d="M8 31 L20 9 L32 31"
        stroke={fg}
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 23 H28"
        stroke={fg}
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * LogoFull — logomark + wordmark side-by-side
 */
export function LogoFull({ size = 38, variant = 'dark' }) {
  const textColor = variant === 'dark' ? '#111111' : '#ffffff';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
      <LogoMark size={size} variant="dark" />
      <div style={{ lineHeight: 1.1 }}>
        <p
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontWeight: 700,
            fontSize: '1rem',
            color: textColor,
            margin: 0,
            letterSpacing: '-0.01em',
          }}
        >
          Arshad Ali
        </p>
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 500,
            fontSize: '0.62rem',
            color: '#888888',
            margin: 0,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}
        >
          Cloud & DevOps
        </p>
      </div>
    </div>
  );
}
