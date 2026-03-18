import RevealOnScroll from '../components/RevealOnScroll';
import SprayHeading from '../components/SprayHeading';

const highlights = [
  { icon: '🎓', title: 'Certificada',        desc: 'Técnica certificada. Formación avanzada en gel, acrílicas y nail art — sin atajos nena, solo talento y mucha pasión.' },
  { icon: '🎨', title: 'Arte sin límites',   desc: 'Tu me dices lo que quieres. Te hago lo más sencillo y lo que no te imaginas.' },
  { icon: '💎', title: 'Solo lo mejor',      desc: 'Productos de primera línea, exclusivamente. Lo barato no toca mis uñas ni las tuyas. La calidad no se negocia.' },
  { icon: '⛓️', title: 'Experiencia real',  desc: 'Más de 8 años en esto. Cientos de clientas, miles de trabajos. Esto es mi vida y se nota.' },
];

const Drips = () => (
  <div className="relative w-full pointer-events-none" style={{ height: '24px' }} aria-hidden>
    <div style={{ height: '1px', background: 'linear-gradient(90deg,transparent,rgba(255,20,147,0.35) 30%,rgba(255,20,147,0.35) 70%,transparent)' }}/>
    {[8,19,30,41,52,63,74,85].map((l, i) => (
      <div key={i} className="absolute top-0" style={{
        left: `${l}%`, width: `${2 + i % 3}px`,
        height: `${6 + (i * 3) % 14}px`,
        background: 'linear-gradient(180deg,#FF1493,transparent)',
        borderRadius: '0 0 50% 50%', opacity: 0.5 + (i * 0.05) % 0.4,
      }}/>
    ))}
  </div>
);

const About = () => (
  <section id="about" className="pt-16 md:pt-20 pb-20 md:pb-24 bg-ink-dark relative overflow-hidden">

    {/* Background graffiti — more visible */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <svg className="absolute -right-8 top-1/2 -translate-y-1/2 w-[55%] md:w-[40%]" viewBox="0 0 400 280" fill="none"
           style={{ opacity: 0.09, animation: 'tagPulse 7s ease-in-out infinite' }}>
        <text x="10" y="240" fontFamily="'Permanent Marker',cursive" fontSize="170" fill="#FF1493"
              transform="rotate(-8,200,140)">ART</text>
      </svg>
      {/* Spray splatter top-left */}
      <div className="absolute top-16 left-8 w-32 h-32 rounded-full" style={{ background: 'radial-gradient(circle, rgba(255,20,147,0.1) 0%, transparent 70%)' }}/>
      {/* Diagonal stripes */}
      <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'repeating-linear-gradient(45deg,#FF1493 0px,#FF1493 1px,transparent 1px,transparent 26px)' }}/>
      {/* Top drips from above */}
      <Drips />
    </div>

    <div className="container mx-auto px-5 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* Left */}
        <RevealOnScroll from="left">
          <SprayHeading style={{ marginBottom: '1.5rem' }}>
            <div className="section-tag">La Artista</div>
          </SprayHeading>

          <div className="border-l-4 border-neon-pink pl-5 mb-5" style={{ boxShadow: '-4px 0 22px rgba(255,20,147,0.22)' }}>
            <p className="text-white/85 text-base md:text-lg leading-relaxed font-body">
              Soy <span className="marta-tag">Marta</span> — artista de uñas, chica creativa, y perfeccionista sin remedio.
              2 años en esto, con base en Albacete. Lo mediocre no va conmigo.
            </p>
          </div>

          <p className="text-ink-muted leading-relaxed mb-4 font-body text-sm md:text-base">
            Cada trabajo que hago es una declaración. No doy cualquier servicio, con tus uñas cuento tu historia.
            Hazte una sesión y verás como hablan de tus manos.
          </p>
          <p className="text-ink-muted leading-relaxed mb-8 font-body text-sm md:text-base">
            Gel, acrílicas, nail art, pedicuras — todo con precisión, productos premium
            y pasión de verdad. Sin prisas. Sin compromisos. Hago la diferencia.
          </p>

          <a href="#services"
             className="inline-flex items-center justify-center gap-3 w-full sm:w-auto border border-neon-pink text-neon-pink font-bold text-xs tracking-widest uppercase px-7 py-4 hover:bg-neon-pink hover:text-white transition-all duration-200 active:scale-95"
             style={{ boxShadow: '0 0 16px rgba(255,20,147,0.25)' }}>
            Lo que hago →
          </a>
        </RevealOnScroll>

        {/* Right: cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {highlights.map((item, i) => (
            <RevealOnScroll key={item.title} delay={i * 90}>
              <div className="card-urban p-5 h-full cursor-default"
                   style={{ borderLeft: '3px solid rgba(255,20,147,0.45)' }}>
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <h3 className="font-display text-base text-neon-pink mb-2">{item.title}</h3>
                <p className="text-xs text-ink-muted leading-relaxed font-body">{item.desc}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </div>

    {/* Bottom drips */}
    <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden>
      <Drips />
    </div>
  </section>
);

export default About;
