import RevealOnScroll from '../components/RevealOnScroll';
import SprayHeading from '../components/SprayHeading';

const contactInfo = [
  {
    icon: '📍',
    title: 'Ubicación',
    content: 'Albacete',
    sub: 'Solo con cita previa',
  },
  {
    icon: '⏰',
    title: 'Horario',
    content: 'Lun – Sáb: 9:00 – 20:00',
    sub: 'Domingos solo con cita previa',
  },
  {
    icon: '📱',
    title: 'Teléfono y WhatsApp',
    content: '+34 612 345 678',
    sub: 'WhatsApp es lo más rápido — respondo en horas',
  },
  {
    icon: '📸',
    title: 'Instagram',
    content: '@martanails_abcte',
    sub: 'DM para citas, inspiración o lo que necesites',
  },
];

const Drips = () => (
  <div className="relative w-full pointer-events-none" style={{ height: '24px' }} aria-hidden>
    <div style={{ height: '1px', background: 'linear-gradient(90deg,transparent,rgba(255,20,147,0.35) 30%,rgba(255,20,147,0.35) 70%,transparent)' }}/>
    {[6,17,28,39,50,61,72,83,94].map((l, i) => (
      <div key={i} className="absolute top-0" style={{
        left:`${l}%`, width:`${2+i%3}px`, height:`${5+(i*4)%18}px`,
        background:'linear-gradient(180deg,#FF1493,transparent)', borderRadius:'0 0 50% 50%',
        opacity: 0.45+(i*0.05)%0.45,
      }}/>
    ))}
  </div>
);

/* Calendly booking URL — replace YOUR_CALENDLY_URL with the real link once set up */
const BOOK_URL = 'https://calendly.com/YOUR_CALENDLY_URL';

const Contact = () => (
  <section id="contact" className="py-20 md:py-24 bg-ink-dark relative overflow-hidden">

    {/* Background */}
    <div className="absolute inset-0 pointer-events-none" aria-hidden>
      <div className="absolute top-0 left-0 right-0"><Drips /></div>
      <div className="absolute inset-0 opacity-[0.018]" style={{ backgroundImage: 'repeating-linear-gradient(45deg,#FF1493 0px,#FF1493 1px,transparent 1px,transparent 30px)' }}/>
      <svg className="absolute -right-10 top-1/2 -translate-y-1/2 w-[45%] md:w-[30%]" viewBox="0 0 280 200" fill="none"
           style={{ opacity: 0.08, animation: 'tagPulse 9s ease-in-out infinite 1.5s' }}>
        <text x="5" y="165" fontFamily="'Permanent Marker',cursive" fontSize="110" fill="#FF1493"
              transform="rotate(-8,140,100)">EME</text>
      </svg>
      <div className="absolute bottom-20 left-8 w-40 h-40 rounded-full" style={{ background: 'radial-gradient(circle, rgba(255,20,147,0.09) 0%, transparent 70%)' }}/>
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,20,147,0.18) 1px, transparent 1px)', backgroundSize: '20px 20px' }}/>
    </div>

    <div className="container mx-auto px-5 relative z-10 max-w-2xl">

      {/* Header */}
      <RevealOnScroll className="text-center mb-10">
        <SprayHeading>
          <div className="section-tag justify-center">Contacta</div>
        </SprayHeading>
        <p className="text-ink-muted max-w-sm mx-auto font-body mt-4 text-sm">
          Escríbeme, elige tu hueco y lo hacemos realidad.
        </p>
      </RevealOnScroll>

      {/* Book Now CTA */}
      <RevealOnScroll delay={50} className="mb-10">
        <a
          href={BOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full text-white font-bold text-sm tracking-widest uppercase py-5 transition-all duration-200 active:scale-95"
          style={{
            background: 'linear-gradient(135deg,#FF1493,#FF006B,#C2185B)',
            boxShadow: '0 0 28px rgba(255,20,147,0.55)',
          }}
        >
          📅 Pedir Cita
        </a>
        <p className="text-center text-[10px] text-white/25 font-body mt-2 uppercase tracking-widest">
          Abre el calendario · Elige tu hueco disponible
        </p>
      </RevealOnScroll>

      {/* Contact info */}
      <RevealOnScroll delay={80}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {contactInfo.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-3 p-4 bg-ink-mid border border-ink-border hover:border-neon-pink transition-all duration-300 cursor-default group"
              style={{ borderLeft: '3px solid rgba(255,20,147,0.4)' }}
            >
              <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
              <div>
                <h4 className="font-bold text-white/45 text-[10px] tracking-widest uppercase mb-0.5 font-body group-hover:text-neon-pink transition-colors">
                  {item.title}
                </h4>
                <p className="text-neon-pink font-bold text-sm font-body">{item.content}</p>
                <p className="text-ink-muted text-xs mt-0.5 leading-relaxed font-body">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </RevealOnScroll>

      {/* Social buttons */}
      <RevealOnScroll delay={120}>
        <p className="font-bold text-white/35 text-[10px] tracking-widest uppercase mb-3 font-body text-center">Sígueme</p>
        <div className="flex gap-3">
          {[
            { label: 'Instagram', icon: '📸' },
            { label: 'WhatsApp', icon: '💬' },
            { label: 'TikTok',   icon: '🎵' },
          ].map((s) => (
            <button
              key={s.label}
              className="flex items-center justify-center gap-2 bg-ink-mid border border-ink-border text-white/55 font-bold text-xs tracking-widest uppercase py-3 flex-1 hover:border-neon-pink hover:text-neon-pink transition-all duration-200 font-body active:scale-95"
            >
              <span>{s.icon}</span>
              {s.label}
            </button>
          ))}
        </div>
      </RevealOnScroll>

    </div>

    <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden><Drips /></div>
  </section>
);

export default Contact;
