import type { ReactNode } from 'react';
import RevealOnScroll from '../components/RevealOnScroll';
import SprayHeading from '../components/SprayHeading';

const markMarta = (text: string): ReactNode[] =>
  text.split('Marta').flatMap((part, i, arr) =>
    i < arr.length - 1
      ? [part, <span key={i} className="marta-tag">Marta</span>]
      : [part]
  );

const testimonials = [
  { id: 1, name: 'Sofía R.',     service: 'Manicura en Gel',         initials: 'SR',
    text: "Marta es increíble. Mis uñas nunca habían quedado así. El gel me duró más de un mes sin un solo chip. No pienso ir a ningún otro sitio." },
  { id: 2, name: 'Isabella M.', service: 'Diseño Nail Art',          initials: 'IM',
    text: "Le enseñé una referencia y lo ejecutó a la perfección — incluso mejor que el original. El nivel de detalle en su nail art no tiene comparación. Pura artista." },
  { id: 3, name: 'Valentina P.',service: 'Uñas Acrílicas + Arte',    initials: 'VP',
    text: "Mi set de acrílicas quedó absolutamente perfecto. Marta se toma su tiempo y se nota que ama lo que hace. 10/10, sin peros." },
  { id: 4, name: 'Luna G.',      service: 'Pedicura de Lujo',         initials: 'LG',
    text: "La mejor pedicura de mi vida. Mis pies parecen nuevos y el esmalte sigue perfecto tres semanas después. Volví a la semana siguiente para las manos." },
  { id: 5, name: 'Camila F.',   service: 'Manicura Clásica',         initials: 'CF',
    text: "Hasta una manicura clásica parece un tratamiento de cinco estrellas aquí. Talentosa, profesional y con una pasión de verdad. Lo recomiendo a todo el mundo." },
  { id: 6, name: 'Daniela S.',  service: 'Uñas de Novia',            initials: 'DS',
    text: "Marta me hizo las uñas de novia y no podría estar más contenta. Paciente, detallista, y el resultado fue espectacular. ¡Mil gracias!" },
];

const Stars = () => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className="text-gold text-sm" style={{ textShadow: '0 0 10px rgba(255,215,0,0.7)' }}>★</span>
    ))}
  </div>
);

const Drips = () => (
  <div className="relative w-full pointer-events-none" style={{ height: '24px' }} aria-hidden>
    <div style={{ height: '1px', background: 'linear-gradient(90deg,transparent,rgba(255,20,147,0.35) 30%,rgba(255,20,147,0.35) 70%,transparent)' }}/>
    {[7,18,29,40,51,62,73,84,93].map((l, i) => (
      <div key={i} className="absolute top-0" style={{
        left:`${l}%`, width:`${2+i%3}px`, height:`${5+(i*4)%17}px`,
        background:'linear-gradient(180deg,#FF1493,transparent)', borderRadius:'0 0 50% 50%',
        opacity: 0.45+(i*0.05)%0.45,
      }}/>
    ))}
  </div>
);

const Testimonials = () => (
  <section id="testimonials" className="py-20 md:py-24 bg-ink-black relative overflow-hidden">

    {/* Background */}
    <div className="absolute inset-0 pointer-events-none" aria-hidden>
      <div className="absolute top-0 left-0 right-0"><Drips /></div>
      <svg className="absolute -left-8 bottom-10 w-[45%] md:w-[28%]" viewBox="0 0 320 200" fill="none"
           style={{ opacity: 0.08, animation: 'tagPulse 10s ease-in-out infinite 2s' }}>
        <text x="10" y="170" fontFamily="'Permanent Marker',cursive" fontSize="120" fill="#FF1493"
              transform="rotate(-4,160,100)">REAL</text>
      </svg>
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,20,147,0.18) 1px, transparent 1px)', backgroundSize: '18px 18px' }}/>
      {/* Top-right splatter */}
      <div className="absolute top-20 right-10 w-36 h-36 rounded-full" style={{ background: 'radial-gradient(circle, rgba(255,20,147,0.08) 0%, transparent 70%)' }}/>
    </div>

    <div className="container mx-auto px-5 relative z-10">

      {/* Header */}
      <RevealOnScroll className="text-center mb-12">
        <SprayHeading>
          <div className="section-tag justify-center">Las Clientas</div>
        </SprayHeading>
        <p className="text-ink-muted max-w-sm mx-auto font-body mt-4 text-sm">
          No es sólo mi palabra — que te cuenten ellas
        </p>
      </RevealOnScroll>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {testimonials.map((t, i) => (
          <RevealOnScroll key={t.id} delay={i * 75}>
            <div className="card-glam-testimonial p-6 flex flex-col h-full"
                 style={{ borderLeft: '3px solid rgba(255,20,147,0.4)' }}>

              {/* Big quote */}
              <div className="font-display text-6xl text-neon-pink/25 select-none leading-none mb-2">"</div>

              <Stars />

              <p className="text-white/70 italic leading-relaxed my-4 text-sm flex-grow font-body">
                "{markMarta(t.text)}"
              </p>

              <div className="flex items-center gap-3 mt-3 pt-4 border-t border-ink-border">
                <div className="w-10 h-10 flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
                     style={{
                       background: 'linear-gradient(135deg,#FF1493,#FF006B)',
                       boxShadow: '0 0 14px rgba(255,20,147,0.45)',
                     }}>
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm font-body">{t.name}</h4>
                  <p className="text-[10px] text-neon-pink font-body uppercase tracking-wider">{t.service}</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      {/* Overall rating */}
      <RevealOnScroll delay={150} className="mt-14 text-center">
        <div className="inline-flex flex-col items-center gap-3 px-10 py-6 border border-neon-pink"
             style={{ background: 'rgba(255,20,147,0.05)', boxShadow: '0 0 30px rgba(255,20,147,0.18), inset 0 1px 0 rgba(255,150,200,0.1)' }}>
          <Stars />
          <p className="font-display text-4xl text-neon-pink"
             style={{ textShadow: '0 0 18px rgba(255,20,147,0.65)' }}>
            5.0 / 5.0
          </p>
          <p className="text-ink-muted text-[10px] uppercase tracking-widest font-body">200+ Reseñas Verificadas</p>
        </div>
      </RevealOnScroll>
    </div>

    <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden><Drips /></div>
  </section>
);

export default Testimonials;
