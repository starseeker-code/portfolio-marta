import { useState, useEffect } from 'react';

/* Sine wave path — 160 px wide (2× the 80 px visible window) for seamless scroll */
const WAVE_PATH =
  'M0,8 C3.3,3 6.7,3 10,8 C13.3,13 16.7,13 20,8 ' +
  'C23.3,3 26.7,3 30,8 C33.3,13 36.7,13 40,8 ' +
  'C43.3,3 46.7,3 50,8 C53.3,13 56.7,13 60,8 ' +
  'C63.3,3 66.7,3 70,8 C73.3,13 76.7,13 80,8 ' +
  'C83.3,3 86.7,3 90,8 C93.3,13 96.7,13 100,8 ' +
  'C103.3,3 106.7,3 110,8 C113.3,13 116.7,13 120,8 ' +
  'C123.3,3 126.7,3 130,8 C133.3,13 136.7,13 140,8 ' +
  'C143.3,3 146.7,3 150,8 C153.3,13 156.7,13 160,8';

interface NavbarProps {
  audioRef:    React.RefObject<HTMLAudioElement>;
  playing:     boolean;
  onToggle:    () => void;
  currentTime: number;
  duration:    number;
}

const Navbar = ({ playing, onToggle, currentTime, duration }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  const navLinks = [
    { href: '#about',        label: 'Quien Soy' },
    { href: '#services',     label: 'Que Hago'  },
    { href: '#gallery',      label: 'Mi Trabajo' },
    { href: '#testimonials', label: 'Lo que dicen de mi'    },
    { href: '#contact',      label: 'Pide Cita'       },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-ink-black/98 backdrop-blur-sm border-b border-ink-border py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <span
            className="font-display text-2xl text-neon-pink leading-none"
            style={{ textShadow: '0 0 15px rgba(255,20,147,0.7)' }}
          >
            MARTA
          </span>
          <span className="text-white/30 font-bold">★</span>
          <span className="font-display text-xl text-white/60 leading-none">UÑAS</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body font-bold text-xs tracking-widest uppercase text-white/55 hover:text-neon-pink transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: mini player + Book Now */}
        <div className="hidden md:flex items-center gap-4">
          <MiniPlayer playing={playing} onToggle={onToggle} />
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-white font-bold text-xs tracking-widest uppercase px-6 py-2.5 border border-neon-pink hover:bg-neon-pink transition-all duration-200"
            style={{ boxShadow: '0 0 14px rgba(255,20,147,0.35)' }}
          >
            Pide Cita ⚡
          </a>
        </div>

        {/* Mobile: mini player + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <MiniPlayer playing={playing} onToggle={onToggle} />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-neon-pink p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-ink-black border-t border-ink-border px-6 py-6">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block font-bold text-xs tracking-widest uppercase text-white/60 hover:text-neon-pink transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

    </nav>
  );
};

/* ── Mini player widget ──────────────────────────────────────── */
const MiniPlayer = ({ playing, onToggle }: { playing: boolean; onToggle: () => void }) => (
  <button
    onClick={onToggle}
    aria-label={playing ? 'Pause music' : 'Play music'}
    className="flex items-center gap-2 px-2 py-1 transition-all duration-300 active:scale-95"
    style={{ background: 'transparent' }}
  >
    <div style={{ width: '80px', height: '16px', overflow: 'hidden' }}>
      <svg
        width="160" height="16"
        style={{
          display: 'block',
          animation: playing ? 'waveScroll 1.2s linear infinite' : 'none',
        }}
      >
        <path
          d={WAVE_PATH}
          fill="none"
          stroke={playing ? '#FF1493' : 'rgba(255,20,147,0.25)'}
          strokeWidth={playing ? 1.5 : 1}
          strokeLinecap="round"
          style={{
            filter: playing ? 'drop-shadow(0 0 3px rgba(255,20,147,0.8))' : 'none',
            transition: 'stroke 0.3s ease, stroke-width 0.3s ease',
          }}
        />
      </svg>
    </div>
    <span
      className="text-[11px] leading-none transition-colors duration-300"
      style={{ color: playing ? '#FF1493' : 'rgba(255,255,255,0.3)' }}
    >
      {playing ? '⏸' : '▶'}
    </span>
  </button>
);

export default Navbar;
