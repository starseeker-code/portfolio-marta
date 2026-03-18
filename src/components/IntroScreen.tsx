import { useState, useEffect, useRef } from 'react';
import GraffitiMarta from './GraffitiMarta';

type Phase = 'waiting' | 'active' | 'exiting' | 'done';

interface Props {
  audioRef: React.RefObject<HTMLAudioElement>;
  onPlay: () => void;
  onReveal: () => void;
  onDone: () => void;
}

/* Deterministic spray dots for the wall background */
const DOTS = Array.from({ length: 60 }, (_, i) => ({
  top:  3  + ((i * 11.3 + 7)  % 93),
  left: 2  + ((i * 17.7 + 13) % 95),
  size: 1.5 + (i * 0.4 % 3.5),
  opacity: 0.03 + (i * 0.007 % 0.08),
}));

const IntroScreen = ({ audioRef, onPlay, onReveal, onDone }: Props) => {
  const [phase, setPhase] = useState<Phase>('waiting');
  const timerRefs = useRef<ReturnType<typeof setTimeout>[]>([]);

  const handleTap = () => {
    if (phase !== 'waiting') return;
    setPhase('active');

    /* Start audio — user gesture guarantees it works */
    audioRef.current?.play().then(() => onPlay()).catch(() => {});

    /* 6.5 s total: spray (~4.4 s) → hold → fade out (1.4 s) → done */
    const t1 = setTimeout(() => { setPhase('exiting'); onReveal(); }, 5100);
    const t2 = setTimeout(() => { setPhase('done'); onDone(); },      6500);
    timerRefs.current = [t1, t2];
  };

  useEffect(() => {
    return () => { timerRefs.current.forEach(clearTimeout); };
  }, []);

  if (phase === 'done') return null;

  const isWaiting = phase === 'waiting';
  const isExiting = phase === 'exiting';

  return (
    <div
      onClick={handleTap}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: '#080808',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        opacity:    isExiting ? 0 : 1,
        transition: isExiting ? 'opacity 1.4s cubic-bezier(0.4,0,0.2,1)' : 'none',
        overflow: 'hidden',
        cursor: isWaiting ? 'pointer' : 'default',
      }}
      aria-hidden
    >
      {/* ── Concrete block grid ── */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        opacity: 0.06,
        backgroundImage: `
          repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(255,20,147,0.6) 79px, rgba(255,20,147,0.6) 80px),
          repeating-linear-gradient(90deg, transparent, transparent 159px, rgba(255,20,147,0.6) 159px, rgba(255,20,147,0.6) 160px)`,
      }}/>

      {/* ── Diagonal texture ── */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        opacity: 0.025,
        backgroundImage: 'repeating-linear-gradient(45deg,#FF1493 0px,#FF1493 1px,transparent 1px,transparent 28px)',
      }}/>

      {/* ── Spray dot particles ── */}
      {DOTS.map((d, i) => (
        <div key={i} style={{
          position: 'absolute', borderRadius: '50%', background: '#FF1493',
          top: `${d.top}%`, left: `${d.left}%`,
          width: `${d.size}px`, height: `${d.size}px`,
          opacity: d.opacity,
        }}/>
      ))}

      {/* ── Radial bloom ── */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 55% at 50% 52%, rgba(255,20,147,0.18) 0%, rgba(255,20,147,0.06) 40%, transparent 70%)',
      }}/>

      {/* ── Ghost "EME" tag top-right ── */}
      <svg style={{
        position: 'absolute', top: '-2%', right: '-3%', width: 'min(55%, 340px)',
        opacity: 0.07, animation: 'tagPulse 6s ease-in-out infinite 1s',
        pointerEvents: 'none',
      }} viewBox="0 0 520 260" fill="none">
        <text x="10" y="220" fontFamily="'Permanent Marker',cursive" fontSize="210"
              fill="#FF1493" transform="rotate(-4,260,130)">EME</text>
      </svg>

      {/* ── Ghost "ART" tag bottom-left ── */}
      <svg style={{
        position: 'absolute', bottom: '4%', left: '-2%', width: 'min(50%, 300px)',
        opacity: 0.07, animation: 'tagPulse 8s ease-in-out infinite 2s',
        pointerEvents: 'none',
      }} viewBox="0 0 380 200" fill="none">
        <text x="5" y="165" fontFamily="'Permanent Marker',cursive" fontSize="160"
              fill="#FF69B4" transform="rotate(5,190,100)">ART</text>
      </svg>

      {/* ── Paint splatter blobs ── */}
      <div style={{
        position: 'absolute', top: '15%', left: '8%', width: '120px', height: '120px',
        borderRadius: '50%', pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(255,20,147,0.11) 0%, transparent 70%)',
      }}/>
      <div style={{
        position: 'absolute', bottom: '18%', right: '10%', width: '90px', height: '90px',
        borderRadius: '50%', pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(255,0,107,0.10) 0%, transparent 70%)',
      }}/>

      {/* ── MARTA graffiti — only after tap, same position as Hero ── */}
      {!isWaiting && (
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 2, paddingTop: '80px' }}>
          <GraffitiMarta mode="playing" />
        </div>
      )}

      {/* ── "Vamos a darle" tap prompt — direct flex child so outer centering works ── */}
      <div style={{
        position: 'relative', zIndex: 3,
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        gap: '16px', textAlign: 'center', padding: '0 6%',
        opacity: isWaiting ? 1 : 0,
        transition: 'opacity 0.4s ease',
        pointerEvents: 'none',
        width: '100%',
        marginBottom: '35vh',
      }}>
        <span style={{
          fontFamily: "'Permanent Marker', cursive",
          fontSize: 'clamp(2.8rem, 13vw, 9rem)',
          lineHeight: 1.0, letterSpacing: '0.04em', textTransform: 'uppercase',
          color: '#FF1493',
          textShadow: '2px 2px 0 #c2185b, 4px 4px 0 #8b003a, 0 0 22px rgba(255,20,147,1), 0 0 50px rgba(255,20,147,0.7), 0 0 90px rgba(255,20,147,0.4)',
          transform: 'rotate(-2deg)', display: 'block',
          animation: 'neonBreathe 1.8s ease-in-out infinite',
        }}>Vamos a darle</span>
        <span style={{
          fontFamily: "'Permanent Marker', cursive",
          fontSize: 'clamp(0.9rem, 3.5vw, 1.6rem)',
          color: 'rgba(255,105,180,0.75)',
          letterSpacing: '0.18em',
          textShadow: '0 0 14px rgba(255,20,147,0.5)',
          animation: 'neonBreathe 2.4s ease-in-out infinite 0.6s',
        }}>// tap para entrar //</span>
      </div>
    </div>
  );
};

export default IntroScreen;
