import type { MouseEvent } from 'react';
import RevealOnScroll from '../components/RevealOnScroll';
import SprayHeading from '../components/SprayHeading';

const services = [
  {
    icon: '💅', name: 'Manicura Clásica', duration: '45 min', price: '€25',
    description: 'Forma, lima, cutículas, masaje de manos y tu color. Lo de siempre, pero hecho como nadie más lo hace.',
    features: ['Forma y limado', 'Cuidado de cutículas', 'Masaje de manos', 'Esmalte a elegir'],
    hot: false,
  },
  {
    icon: '⚡', name: 'Manicura en Gel', duration: '60 min', price: '€40',
    description: 'Sin chips, brillante, aguanta 3–4 semanas. Para las que quieren ir perfectas sin mover un dedo.',
    features: ['Duración 3–4 semanas', 'Amplia gama de colores', 'Acabado curado UV', 'Diseño adicional disponible'],
    hot: true,
  },
  {
    icon: '💎', name: 'Uñas Acrílicas', duration: '75 min', price: '€55',
    description: 'Extensiones resistentes para el largo y la forma que siempre quisiste. Duras, atrevidas, completamente personalizables.',
    features: ['Largo y forma a medida', 'Duraderas y resistentes', 'Tip o esculpidas', 'Arte disponible'],
    hot: false,
  },
  {
    icon: '🎨', name: 'Diseño Nail Art', duration: '30–60 min', price: 'Desde €15',
    description: 'Tus uñas, tu lienzo. Flores, geometría, abstracto, street — lo que sientas, ella lo convierte en fuego.',
    features: ['Diseños pintados a mano', 'Piedras, purpurina y foils', 'Temáticas personalizadas', 'Consulta a medida'],
    hot: false,
  },
  {
    icon: '🌿', name: 'Pedicura de Lujo', duration: '60 min', price: '€45',
    description: 'Tratamiento completo para tus pies. Remojo, exfoliación, masaje y esmalte. Suave como la seda y con buena pinta.',
    features: ['Remojo y exfoliación', 'Eliminación de durezas', 'Masaje piernas y pies', 'Esmalte o gel'],
    hot: false,
  },
  {
    icon: '👑', name: 'Set Completo + Arte', duration: '90 min', price: '€75',
    description: 'El pack completo. Set entero de gel o acrílicas más un diseño nail art personalizado desde cero. Sin límites.',
    features: ['Set completo incluido', 'Diseño artístico a medida', 'Acabado premium', 'Cuidado de cutículas'],
    hot: false,
  },
];

const onTilt = (e: MouseEvent<HTMLDivElement>) => {
  const el = e.currentTarget, r = el.getBoundingClientRect();
  const x = ((e.clientX - r.left) / r.width - 0.5) * 12;
  const y = ((e.clientY - r.top)  / r.height - 0.5) * -12;
  el.style.transform  = `perspective(900px) rotateX(${y}deg) rotateY(${x}deg) scale3d(1.03,1.03,1.03)`;
  el.style.transition = 'transform 0.08s ease';
};
const resetTilt = (e: MouseEvent<HTMLDivElement>) => {
  e.currentTarget.style.transform  = 'perspective(900px) rotateX(0) rotateY(0) scale3d(1,1,1)';
  e.currentTarget.style.transition = 'transform 0.5s ease';
};

const Drips = () => (
  <div className="relative w-full pointer-events-none" style={{ height: '24px' }} aria-hidden>
    <div style={{ height: '1px', background: 'linear-gradient(90deg,transparent,rgba(255,20,147,0.35) 30%,rgba(255,20,147,0.35) 70%,transparent)' }}/>
    {[5,16,27,38,49,60,71,82,92].map((l, i) => (
      <div key={i} className="absolute top-0" style={{
        left:`${l}%`, width:`${2 + i % 3}px`, height:`${5 + (i*4)%16}px`,
        background:'linear-gradient(180deg,#FF1493,transparent)', borderRadius:'0 0 50% 50%',
        opacity: 0.45 + (i * 0.05) % 0.45,
      }}/>
    ))}
  </div>
);

const Services = () => (
  <section id="services" className="py-20 md:py-24 bg-ink-black relative overflow-hidden">

    {/* Background */}
    <div className="absolute inset-0 pointer-events-none" aria-hidden>
      <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,20,147,0.14) 1px, transparent 1px)', backgroundSize: '22px 22px' }}/>
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'repeating-linear-gradient(-45deg,#FF1493 0px,#FF1493 1px,transparent 1px,transparent 30px)' }}/>
      <svg className="absolute bottom-8 right-0 w-[35%] md:w-[22%]" viewBox="0 0 280 180" fill="none"
           style={{ opacity: 0.08, animation: 'tagPulse 9s ease-in-out infinite 1s' }}>
        <text x="5" y="150" fontFamily="'Permanent Marker',cursive" fontSize="110" fill="#FF1493"
              transform="rotate(-5,140,90)">$$</text>
      </svg>
      <div className="absolute top-0 left-0 right-0 pointer-events-none">
        <Drips />
      </div>
    </div>

    <div className="container mx-auto px-5 relative z-10">

      {/* Header */}
      <RevealOnScroll className="text-center mb-12">
        <SprayHeading>
          <div className="section-tag justify-center">Lo que ofrezco</div>
        </SprayHeading>
        <p className="text-ink-muted max-w-sm mx-auto font-body mt-4 text-sm">
          Trabajo premium, sin rollos. Cada servicio hecho como toca o no se hace.
        </p>
      </RevealOnScroll>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {services.map((s, i) => (
          <RevealOnScroll key={s.name} delay={i * 65}>
            <div
              onMouseMove={s.hot ? undefined : onTilt}
              onMouseLeave={s.hot ? undefined : resetTilt}
              className={`relative p-6 flex flex-col h-full cursor-default transition-all duration-300 ${
                s.hot ? 'card-glam-popular' : 'card-urban'
              }`}
              style={s.hot ? {} : { willChange: 'transform' }}
            >
              {s.hot && (
                <div className="absolute -top-3 left-5 bg-neon-pink text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest"
                     style={{ boxShadow: '0 0 14px rgba(255,20,147,0.6)' }}>
                  ⚡ Popular
                </div>
              )}

              <div className="text-4xl mb-3">{s.icon}</div>

              <h3 className={`font-display text-lg mb-1 ${s.hot ? 'text-neon-pink' : 'text-white'}`}
                  style={s.hot ? { textShadow: '0 0 12px rgba(255,20,147,0.6)' } : {}}>
                {s.name}
              </h3>

              <div className="flex items-center gap-3 text-xs mb-4 font-body">
                <span className="text-ink-muted">⏱ {s.duration}</span>
                <span className="text-ink-border">|</span>
                <span className={`font-bold text-base ${s.hot ? 'text-neon-light' : 'text-neon-pink'}`}>{s.price}</span>
              </div>

              <p className={`text-xs leading-relaxed mb-4 flex-grow font-body ${s.hot ? 'text-white/80' : 'text-ink-muted'}`}>
                {s.description}
              </p>

              <ul className="space-y-1.5 mb-5">
                {s.features.map((f) => (
                  <li key={f} className={`flex items-center gap-2 text-xs font-body ${s.hot ? 'text-white/75' : 'text-ink-muted'}`}>
                    <span className="text-neon-pink font-bold">✓</span>{f}
                  </li>
                ))}
              </ul>

              <a href="#contact"
                 className={`block text-center font-bold text-xs tracking-widest uppercase py-3 px-5 transition-all duration-200 mt-auto border ${
                   s.hot
                     ? 'bg-neon-pink border-neon-pink text-white hover:bg-transparent hover:text-neon-pink'
                     : 'border-neon-pink/40 text-neon-pink hover:border-neon-pink hover:bg-neon-pink hover:text-white'
                 }`}>
                Quiero esto
              </a>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll>
        <p className="text-center text-ink-muted text-xs mt-10 font-body">
          ★ Los precios varían según largo, estado y diseño. Escríbeme para un presupuesto a medida.
        </p>
      </RevealOnScroll>
    </div>

    <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden>
      <Drips />
    </div>
  </section>
);

export default Services;
