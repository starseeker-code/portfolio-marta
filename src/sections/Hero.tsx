import { useState, useEffect, useRef } from 'react';
import GraffitiMarta from '../components/GraffitiMarta';

/* ── 100 deterministic spray particles ───────────────────────── */
const PARTICLES = Array.from({ length: 100 }, (_, i) => ({
  id:    i,
  top:   2   + ((i * 7.91  + 17.3) % 96),
  left:  1   + ((i * 14.17 + 9.7 ) % 98),
  delay: 0.05 + (i * 0.038 % 2.4),
  size:  1.0 + (i * 0.52  % 5.5),
  dur:   0.3  + (i * 0.055 % 1.1),
  color: i % 9  === 0 ? '#00E5FF'
       : i % 6  === 0 ? '#FF4081'
       : i % 14 === 0 ? '#ffffff'
       : '#FF1493',
}));


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
      <div className="font-display text-3xl md:text-4xl"
           style={{ color: '#FF1493', textShadow: '0 0 20px rgba(255,20,147,0.75)' }}>
        {count}{suffix}
      </div>
      <div className="text-white/35 text-[10px] font-bold mt-1 uppercase tracking-widest font-body">{label}</div>
    </div>
  );
};

/* ── Hero ──────────────────────────────────────────────────────── */
const Hero = ({ introComplete = false }: { introComplete?: boolean }) => {
  return (
    <>
      <section id="hero" className="relative flex items-start overflow-hidden">

        {/* ═══ DARK WALL BACKGROUND ══════════════════════════════ */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg,#080808 0%,#120810 60%,#080808 100%)' }} />

        {/* Concrete block grid */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(255,20,147,0.05) 79px, rgba(255,20,147,0.05) 80px),
            repeating-linear-gradient(90deg, transparent, transparent 159px, rgba(255,20,147,0.05) 159px, rgba(255,20,147,0.05) 160px)`,
        }}/>

        {/* Dot spray texture */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,20,147,0.11) 1px, transparent 1px)',
          backgroundSize: '18px 18px',
        }}/>

        {/* Diagonal spray stripes */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.028]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg,#FF1493 0px,#FF1493 2px,transparent 2px,transparent 28px)',
        }}/>

        {/* Neon bloom */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse at 35% 55%, rgba(255,20,147,0.2) 0%, rgba(255,20,147,0.07) 35%, transparent 65%)',
        }}/>

        {/* ═══ BACKGROUND GRAFFITI ART ════════════════════════════ */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>

          {/* Large ghost "EME" — top right */}
          <svg className="absolute -top-6 -right-6 w-[60%] md:w-[45%]" viewBox="0 0 520 260" fill="none" style={{ opacity: 0.07, animation: 'tagPulse 6s ease-in-out infinite' }}>
            <text x="10" y="220" fontFamily="'Permanent Marker',cursive" fontSize="210" fill="#FF1493"
                  transform="rotate(-4,260,130)">EME</text>
          </svg>

          {/* "nails" tag — bottom left */}
          <svg className="absolute bottom-[20%] left-[2%] w-36 md:w-48" viewBox="0 0 200 90" fill="none" style={{ opacity: 0.09, animation: 'tagPulse 8s ease-in-out infinite 2s' }}>
            <text x="5" y="72" fontFamily="'Permanent Marker',cursive" fontSize="52" fill="#FF69B4"
                  transform="rotate(-8,100,45)">nails✦</text>
          </svg>

          {/* Graffiti circle rings */}
          <svg className="absolute top-[10%] right-[8%] w-36 md:w-52" viewBox="0 0 200 200" fill="none" style={{ opacity: 0.08 }}>
            <circle cx="100" cy="100" r="92" stroke="#FF1493" strokeWidth="6"/>
            <circle cx="100" cy="100" r="66" stroke="#FF4081" strokeWidth="3"/>
            <circle cx="100" cy="100" r="38" stroke="#FF1493" strokeWidth="8" strokeDasharray="12 8"/>
            <circle cx="100" cy="100" r="12" fill="#FF1493"/>
          </svg>

          {/* Star splat */}
          <svg className="absolute bottom-[22%] right-[4%] w-20 md:w-28" viewBox="0 0 120 120" fill="none" style={{ opacity: 0.07 }}>
            <polygon points="60,4 74,44 116,44 82,68 96,108 60,84 24,108 38,68 4,44 46,44"
                     fill="#FF1493" stroke="#C2185B" strokeWidth="2"/>
          </svg>

          {/* Paint splatter blobs */}
          <div className="absolute top-[30%] left-[5%] w-24 h-24 rounded-full" style={{ background: 'radial-gradient(circle, rgba(255,20,147,0.12) 0%, transparent 70%)' }}/>
          <div className="absolute top-[60%] right-[20%] w-16 h-16 rounded-full" style={{ background: 'radial-gradient(circle, rgba(255,0,107,0.10) 0%, transparent 70%)' }}/>

          {/* Wall scratches */}
          <div className="absolute left-0 right-0" style={{ top: '78%', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(255,20,147,0.18) 20%,rgba(255,20,147,0.18) 80%,transparent)' }}/>
          <div className="absolute left-0 right-0" style={{ top: '79.5%', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(255,20,147,0.1) 30%,rgba(255,20,147,0.1) 70%,transparent)' }}/>
        </div>

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

        {/* ═══ CONTENT ═══════════════════════════════════════════════ */}
        <div className="container mx-auto px-5 relative z-10 pt-20 md:pt-24 pb-8 md:pb-12">

          {/* ════ MARTA ════════════════════════════════════════════ */}
          <GraffitiMarta mode={introComplete ? 'revealed' : undefined} />

          {/* Tagline */}
          <p
            className="text-base md:text-lg font-body mt-5 md:mt-10 mb-1"
            style={{ color: 'rgba(255,182,193,0.80)', animation: 'floatIn 0.5s ease forwards 1.85s', opacity: 0 }}
          >
            Artista de Uñas Profesional ·{' '}
            <span style={{ color: '#FF69B4', fontStyle: 'italic', fontWeight: 700 }}>
              donde la calle se viste de gala
            </span>
          </p>
          <p
            className="text-xs md:text-sm mb-8 font-body"
            style={{ color: 'rgba(255,255,255,0.30)', animation: 'floatIn 0.5s ease forwards 2.0s', opacity: 0 }}
          >
            Gel · Acrílicas · Nail Art · Pedicuras — Albacete
          </p>

          {/* CTAs — full width on mobile */}
          <div
            className="flex flex-col sm:flex-row gap-3 mb-8 md:mb-12"
            style={{ animation: 'floatIn 0.5s ease forwards 2.15s', opacity: 0 }}
          >
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 text-white font-bold text-sm tracking-wider uppercase px-8 py-4 transition-all duration-200 active:scale-95"
              style={{
                background: 'linear-gradient(135deg,#FF1493,#FF006B,#C2185B)',
                boxShadow: '0 0 28px rgba(255,20,147,0.55)',
              }}
            >
              Pide tu Cita ⚡
            </a>
            <a
              href="#services"
              className="flex items-center justify-center gap-2 font-bold text-sm tracking-wider uppercase px-8 py-4 border-2 transition-all duration-200 active:bg-neon-pink/15"
              style={{ borderColor: 'rgba(255,20,147,0.6)', color: '#FF69B4' }}
            >
              Ver Servicios
            </a>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-4 max-w-xs"
            style={{ animation: 'floatIn 0.5s ease forwards 2.35s', opacity: 0 }}
          >
            <StatCounter value={500} suffix="+"  label="Clientas"  delay={0}   />
            <StatCounter value={5}   suffix="★"  label="Nota"      delay={150} />
            <StatCounter value={8}   suffix="+"  label="Años"      delay={280} />
          </div>
        </div>

        {/* ═══ DRIP BORDER ══════════════════════════════════════════ */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden>
          {/* Neon line */}
          <div style={{ height: '1px', background: 'linear-gradient(90deg,transparent,rgba(255,20,147,0.5) 30%,rgba(255,20,147,0.5) 70%,transparent)' }}/>
          {/* Drips hanging down */}
          <div className="relative flex justify-around" style={{ height: '28px' }}>
            {[6,15,24,33,42,51,60,69,78,87,93].map((l, i) => (
              <div key={i} className="absolute top-0" style={{
                left: `${l}%`,
                width: `${3 + i % 3}px`,
                height: `${8 + (i * 4) % 18}px`,
                background: 'linear-gradient(180deg,#FF1493,transparent)',
                borderRadius: '0 0 50% 50%',
                opacity: 0.55 + (i * 0.04) % 0.4,
              }}/>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
