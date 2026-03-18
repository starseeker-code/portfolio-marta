import { useState, useRef } from 'react';

/* Equalizer bar heights (px) — each bar gets its own max via CSS var */
const EQ_BARS = [8, 14, 20, 12, 22, 16, 10, 18, 13, 21, 9, 17];

const fmt = (t: number) =>
  `${Math.floor(t / 60)}:${Math.floor(t % 60).toString().padStart(2, '0')}`;

const MusicPlayer = () => {
  const audioRef  = useRef<HTMLAudioElement>(null);
  const [playing,     setPlaying]     = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration,    setDuration]    = useState(0);
  const [volume,      setVolume]      = useState(0.75);
  const [loaded,      setLoaded]      = useState(false);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      a.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const a = audioRef.current;
    if (!a) return;
    const t = parseFloat(e.target.value);
    a.currentTime = t;
    setCurrentTime(t);
  };

  const onVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value);
    setVolume(v);
    if (audioRef.current) audioRef.current.volume = v;
  };

  return (
    <div className="relative p-6 border border-neon-pink/40 overflow-hidden"
         style={{
           background: 'linear-gradient(145deg,#130810 0%,#1c0d18 100%)',
           boxShadow: '0 0 36px rgba(255,20,147,0.22), inset 0 1px 0 rgba(255,150,200,0.1)',
         }}>

      {/* Corner brackets */}
      <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-neon-pink opacity-60 pointer-events-none"/>
      <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-neon-pink opacity-60 pointer-events-none"/>
      <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-neon-pink opacity-60 pointer-events-none"/>
      <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-neon-pink opacity-60 pointer-events-none"/>

      {/* Subtle background dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
           style={{ backgroundImage: 'radial-gradient(circle,#FF1493 1px,transparent 1px)', backgroundSize: '16px 16px' }}/>

      <audio
        ref={audioRef}
        src="/music/track.mp3"
        onTimeUpdate={() => setCurrentTime(audioRef.current?.currentTime ?? 0)}
        onLoadedMetadata={() => { setDuration(audioRef.current?.duration ?? 0); setLoaded(true); }}
        onEnded={() => setPlaying(false)}
        preload="metadata"
      />

      {/* Track info + equalizer */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <p className="text-[10px] text-neon-pink/55 font-body uppercase tracking-widest mb-1">
            Now Playing
          </p>
          <p className="font-display text-2xl text-neon-pink leading-none"
             style={{ textShadow: '0 0 14px rgba(255,20,147,0.7)' }}>
            Marta's Vibe
          </p>
          <p className="text-[11px] text-white/35 font-body mt-1 uppercase tracking-wider">
            hip hop · r&amp;b mix
          </p>
        </div>

        {/* Animated equalizer */}
        <div className="flex items-end gap-[3px] self-end pb-0.5" style={{ height: '28px' }}>
          {EQ_BARS.map((h, i) => (
            <div key={i} style={{
              width: '3px',
              minHeight: '3px',
              height: playing ? undefined : '3px',
              background: 'linear-gradient(180deg,#FF1493,#FF006B)',
              borderRadius: '1px 1px 0 0',
              boxShadow: playing ? '0 0 4px rgba(255,20,147,0.6)' : 'none',
              transition: 'box-shadow 0.3s ease',
              animation: playing
                ? `eqBounce ${0.32 + (i * 0.09) % 0.42}s ease-in-out ${(i * 0.05) % 0.28}s infinite alternate`
                : 'none',
              '--eq-max': `${h}px`,
            } as React.CSSProperties}/>
          ))}
        </div>
      </div>

      {/* Play / Pause button */}
      <div className="flex justify-center mb-6">
        <button
          onClick={toggle}
          aria-label={playing ? 'Pause' : 'Play'}
          className="w-16 h-16 flex items-center justify-center transition-all duration-200 active:scale-95 border-2 border-neon-pink relative group"
          style={{
            background: playing ? 'rgba(255,20,147,0.12)' : 'linear-gradient(135deg,#FF1493,#FF006B)',
            boxShadow: playing
              ? '0 0 20px rgba(255,20,147,0.35), inset 0 0 20px rgba(255,20,147,0.08)'
              : '0 0 32px rgba(255,20,147,0.65)',
          }}
        >
          <span className="text-2xl text-white select-none leading-none" style={{ marginLeft: playing ? 0 : '2px' }}>
            {playing ? '⏸' : '▶'}
          </span>
          {/* Glow ring on play */}
          {playing && (
            <div className="absolute inset-0 pointer-events-none"
                 style={{ boxShadow: '0 0 0 4px rgba(255,20,147,0.15)', animation: 'neonBreathe 2s ease-in-out infinite' }}/>
          )}
        </button>
      </div>

      {/* Progress bar */}
      <div className="mb-4">
        <input
          type="range"
          min={0}
          max={duration || 100}
          step={0.1}
          value={currentTime}
          onChange={seek}
          className="player-range w-full mb-2"
          style={{ '--progress': `${progress}%` } as React.CSSProperties}
        />
        <div className="flex justify-between font-body" style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)' }}>
          <span>{fmt(currentTime)}</span>
          <span>{loaded ? fmt(duration) : '--:--'}</span>
        </div>
      </div>

      {/* Volume */}
      <div className="flex items-center gap-3">
        <span className="text-sm flex-shrink-0" aria-hidden>
          {volume === 0 ? '🔇' : volume < 0.4 ? '🔉' : '🔊'}
        </span>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={onVolume}
          className="player-range flex-1"
          style={{ '--progress': `${volume * 100}%` } as React.CSSProperties}
        />
        <span className="text-[10px] text-white/25 font-body w-8 text-right flex-shrink-0">
          {Math.round(volume * 100)}%
        </span>
      </div>
    </div>
  );
};

export default MusicPlayer;
