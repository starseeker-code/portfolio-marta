const DRIPS = [
  { left:  5, h: 28, w: 5,  delay: 1.50 },
  { left: 16, h: 44, w: 4,  delay: 1.62 },
  { left: 28, h: 20, w: 6,  delay: 1.72 },
  { left: 42, h: 52, w: 5,  delay: 1.58 },
  { left: 55, h: 18, w: 4,  delay: 1.80 },
  { left: 67, h: 36, w: 6,  delay: 1.68 },
  { left: 78, h: 24, w: 5,  delay: 1.88 },
  { left: 90, h: 42, w: 4,  delay: 1.75 },
];

interface Props {
  mode?: 'playing' | 'revealed';
  style?: React.CSSProperties;
}

const GraffitiMarta = ({ mode, style }: Props) => (
  <div className={`graffiti-wrapper${mode ? ` ${mode}` : ''}`} style={style}>
    <span className="graffiti-chroma graffiti-chroma-a" aria-hidden>MARTA</span>
    <span className="graffiti-chroma graffiti-chroma-b" aria-hidden>MARTA</span>
    <h1 className="graffiti-name">MARTA</h1>

    {/* Paint drips */}
    <div
      className="absolute bottom-0 left-0 right-0 overflow-visible pointer-events-none"
      aria-hidden
      style={{ transform: 'translateY(88%)' }}
    >
      {DRIPS.map((d, i) => (
        <div key={i} className="absolute" style={{
          left: `${d.left}%`, width: `${d.w}px`, height: `${d.h}px`,
          background: 'linear-gradient(180deg,#FF1493 0%,rgba(255,20,147,0.45) 65%,transparent 100%)',
          borderRadius: '0 0 50% 50%', transformOrigin: 'top', transform: 'scaleY(0)',
          boxShadow: '0 0 12px rgba(255,20,147,0.75)',
          animation: `drip 0.45s ease forwards ${d.delay}s`,
        }}/>
      ))}
    </div>
  </div>
);

export default GraffitiMarta;
