import { useEffect, useRef, useState } from 'react';

/* ── Deterministic spray particles ───────────────────────────── */
const PARTICLES = Array.from({ length: 70 }, (_, i) => ({
  id:    i,
  top:   4   + ((i * 7.91  + 17.3) % 92),
  left:  1   + ((i * 14.17 + 9.7 ) % 98),
  delay: 0.1 + (i * 0.048 % 2.1),
  size:  1.2 + (i * 0.44  % 4.8),
  dur:   0.35 + (i * 0.068 % 1.0),
  color: i % 11 === 0 ? '#00E5FF'
       : i % 7  === 0 ? '#FF4081'
       : i % 13 === 0 ? '#FF69B4'
       : '#FF1493',
}));

/* Paint drips */
const DRIPS = [
  { left:  7, h: 22, w: 5,  delay: 1.55 },
  { left: 20, h: 36, w: 4,  delay: 1.68 },
  { left: 35, h: 17, w: 6,  delay: 1.78 },
  { left: 50, h: 42, w: 5,  delay: 1.62 },
  { left: 63, h: 24, w: 4,  delay: 1.88 },
  { left: 76, h: 30, w: 6,  delay: 1.73 },
  { left: 88, h: 15, w: 4,  delay: 1.95 },
];

/* ── Stat counter ─────────────────────────────────────────────── */
interface StatProps { value: number; suffix: string; label: string; delay?: number; }

const StatCounter = ({ value, suffix, label, delay = 0 }: StatProps) => {
  const [count, setCount] = useState(0);
  const ref     = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        setTimeout(() => {
          const dur = 1800, t0 = Date.now();
          const tick = () => {
            const p = Math.min((Date.now() - t0) / dur, 1);
            setCount(Math.round((1 - Math.pow(1 - p, 3)) * value));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }, delay);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [value, delay]);

  return (
    <div ref={ref} className="text-center">
      <div
        className="font-display text-4xl md:text-5xl font-bold"
        style={{ color: '#FF1493', textShadow: '0 0 20px rgba(255,20,147,0.75)' }}
      >
        {count}{suffix}
      </div>
      <div className="text-white/40 text-xs font-semibold mt-1.5 uppercase tracking-widest">{label}</div>
    </div>
  );
};

/* ── Hero ──────────────────────────────────────────────────────── */
const Hero = () => (
  <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">

    {/* ═══ BACKGROUND ════════════════════════════════════════════ */}

    {/* 1 — Base dark wall */}
    <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg,#0d0710 0%,#160b18 50%,#0a0610 100%)' }} />

    {/* 2 — Concrete block grid (wall texture) */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `
          repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(255,100,180,0.04) 79px, rgba(255,100,180,0.04) 80px),
          repeating-linear-gradient(90deg, transparent, transparent 159px, rgba(255,100,180,0.04) 159px, rgba(255,100,180,0.04) 160px)`,
      }}
    />

    {/* 3 — Fine dot spray texture */}
    <div
      className="absolute inset-0 pointer-events-none opacity-50"
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,20,147,0.09) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
      }}
    />

    {/* 4 — Neon bloom behind MARTA */}
    <div
      className="absolute pointer-events-none"
      style={{
        top: '20%', left: '-5%', right: '10%', bottom: '10%',
        background: 'radial-gradient(ellipse at 40% 55%, rgba(255,20,147,0.18) 0%, rgba(255,20,147,0.06) 35%, transparent 65%)',
      }}
    />

    {/* ═══ BACKGROUND GRAFFITI ART ═══════════════════════════════ */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>

      {/* Large ghost "BCN" tag top-right */}
      <svg className="absolute -top-8 -right-8 w-[55%] opacity-[0.055]" viewBox="0 0 520 260" fill="none">
        <text x="10" y="220" fontFamily="'Rubik Glitch',cursive" fontSize="210" fill="#FF1493"
              transform="rotate(-4,260,130)">BCN</text>
      </svg>

      {/* Abstract arrow/tag bottom-left */}
      <svg className="absolute bottom-[22%] left-[2%] w-36 opacity-[0.07]" viewBox="0 0 140 80" fill="none">
        <text x="5" y="62" fontFamily="'Permanent Marker',cursive" fontSize="48" fill="#FF69B4"
              transform="rotate(-8,70,40)">nails✦</text>
      </svg>

      {/* Graffiti circle rings — classic bubble outline */}
      <svg className="absolute top-[12%] right-[12%] w-52 opacity-[0.06]" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="92" stroke="#FF1493" strokeWidth="6"/>
        <circle cx="100" cy="100" r="68" stroke="#FF4081" strokeWidth="3"/>
        <circle cx="100" cy="100" r="40" stroke="#FF1493" strokeWidth="8" strokeDasharray="12 8"/>
        <circle cx="100" cy="100" r="14" fill="#FF1493"/>
      </svg>

      {/* Star/splat graffiti shape bottom-right */}
      <svg className="absolute bottom-[18%] right-[6%] w-28 opacity-[0.06]" viewBox="0 0 120 120" fill="none">
        <polygon points="60,4 74,44 116,44 82,68 96,108 60,84 24,108 38,68 4,44 46,44"
                 fill="#FF1493" stroke="#C2185B" strokeWidth="2"/>
      </svg>

      {/* Horizontal "wall baseline" scratches */}
      <div className="absolute left-0 right-0" style={{ top: '78%', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(255,20,147,0.12) 20%,rgba(255,20,147,0.12) 80%,transparent)' }}/>
      <div className="absolute left-0 right-0" style={{ top: '79.5%', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(255,100,180,0.07) 30%,rgba(255,100,180,0.07) 70%,transparent)' }}/>

      {/* Diagonal tape accent (urban utility) */}
      <div
        className="absolute inset-0 opacity-[0.022]"
        style={{ backgroundImage: 'repeating-linear-gradient(45deg,#FF1493 0px,#FF1493 2px,transparent 2px,transparent 32px)' }}
      />
    </div>

    {/* SVG filter — makes text edges rough like real spray paint */}
    <svg className="absolute w-0 h-0 overflow-hidden" aria-hidden>
      <defs>
        <filter id="spray-roughen" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.055" numOctaves="3" result="noise"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.2"
                             xChannelSelector="R" yChannelSelector="G"/>
        </filter>
      </defs>
    </svg>

    {/* ═══ SPRAY PARTICLES ══════════════════════════════════════ */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      {PARTICLES.map(p => (
        <span key={p.id} className="absolute rounded-full" style={{
          top: `${p.top}%`, left: `${p.left}%`,
          width: `${p.size}px`, height: `${p.size}px`,
          background: p.color, opacity: 0,
          animation: `sprayParticle ${p.dur}s ease-out forwards ${p.delay}s`,
        }}/>
      ))}
    </div>

    {/* ═══ CONTENT ══════════════════════════════════════════════ */}
    <div className="container mx-auto px-6 relative z-10 pt-28 pb-24">

      {/* Badge */}
      <div
        className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2 rounded-full border mb-6"
        style={{
          background: 'rgba(255,20,147,0.12)', borderColor: 'rgba(255,20,147,0.35)',
          color: '#FF69B4', animation: 'floatIn 0.6s ease forwards', opacity: 0,
        }}
      >
        <span>🏙️</span>
        <span>Barcelona · Est. 2016</span>
        <span className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: '#FF1493', boxShadow: '0 0 6px #FF1493' }}/>
      </div>

      {/* "Hello, I'm" */}
      <p
        className="font-display text-2xl md:text-3xl italic mb-1"
        style={{ color: 'rgba(255,182,193,0.80)', animation: 'floatIn 0.6s ease forwards 0.15s', opacity: 0 }}
      >
        Hello, I'm
      </p>

      {/* ════ MARTA ════════════════════════════════════════════ */}
      <div className="graffiti-wrapper" style={{ marginLeft: '-0.04em' }}>
        <span className="graffiti-chroma graffiti-chroma-a" aria-hidden>MARTA</span>
        <span className="graffiti-chroma graffiti-chroma-b" aria-hidden>MARTA</span>
        <h1 className="graffiti-name" style={{ filter: 'url(#spray-roughen)' }}>MARTA</h1>

        {/* Paint drips */}
        <div className="absolute bottom-0 left-0 right-0 overflow-visible pointer-events-none"
             aria-hidden style={{ transform: 'translateY(85%)' }}>
          {DRIPS.map((d, i) => (
            <div key={i} className="absolute" style={{
              left: `${d.left}%`, width: `${d.w}px`, height: `${d.h}px`,
              background: 'linear-gradient(180deg,#FF1493 0%,rgba(255,20,147,0.5) 60%,transparent 100%)',
              borderRadius: '0 0 50% 50%', transformOrigin: 'top', transform: 'scaleY(0)',
              boxShadow: '0 0 10px rgba(255,20,147,0.7)',
              animation: `drip 0.5s ease forwards ${d.delay}s`,
            }}/>
          ))}
        </div>
      </div>

      {/* Tagline */}
      <p
        className="text-lg md:text-xl font-body mt-10 mb-2 max-w-lg"
        style={{ color: 'rgba(255,182,193,0.85)', animation: 'floatIn 0.6s ease forwards 1.85s', opacity: 0 }}
      >
        Professional Nail Artist ·{' '}
        <span style={{ color: '#FF69B4', fontStyle: 'italic', fontWeight: 700 }}>
          where the street meets glam
        </span>
      </p>
      <p
        className="text-sm max-w-md mb-10 font-body"
        style={{ color: 'rgba(255,255,255,0.35)', animation: 'floatIn 0.6s ease forwards 2.0s', opacity: 0 }}
      >
        Gel nails · Acrylics · Nail Art · Pedicures — crafted with love and raw precision.
      </p>

      {/* CTAs */}
      <div
        className="flex flex-wrap gap-4 mb-16"
        style={{ animation: 'floatIn 0.6s ease forwards 2.15s', opacity: 0 }}
      >
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:brightness-115"
          style={{ background: 'linear-gradient(135deg,#FF1493 0%,#E91E8C 50%,#C2185B 100%)', boxShadow: '0 4px 32px rgba(255,20,147,0.55)' }}
        >
          Book an Appointment <span aria-hidden>→</span>
        </a>
        <a
          href="#services"
          className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-full border-2 transition-all duration-300 hover:bg-barbie-pink/15"
          style={{ borderColor: 'rgba(255,20,147,0.5)', color: '#FF69B4' }}
        >
          View Services
        </a>
      </div>

      {/* Stats */}
      <div
        className="flex flex-wrap gap-12"
        style={{ animation: 'floatIn 0.6s ease forwards 2.35s', opacity: 0 }}
      >
        <StatCounter value={500} suffix="+"  label="Happy Clients"  delay={0}   />
        <StatCounter value={5}   suffix="★"  label="Avg. Rating"    delay={180} />
        <StatCounter value={8}   suffix="+"  label="Years Exp."     delay={340} />
      </div>
    </div>

    {/* ═══ DARK → LIGHT TRANSITION ══════════════════════════════ */}
    {/* Gradient fade before the wave so the jump is smooth */}
    <div
      className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
      style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,240,248,0.6) 70%, #ffffff)' }}
    />
    {/* Wave into white About section */}
    <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
      <svg viewBox="0 0 1440 72" className="w-full fill-white block">
        <path d="M0,36 C360,72 1080,0 1440,36 L1440,72 L0,72 Z" />
      </svg>
    </div>
  </section>
);

export default Hero;
