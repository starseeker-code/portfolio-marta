import RevealOnScroll from '../components/RevealOnScroll';
import SprayHeading from '../components/SprayHeading';

const InstagramIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const INSTAGRAM_URL = 'https://www.instagram.com/nailz_by_eme/';
const WHATSAPP_URL = 'https://wa.me/34698577332';
const MAPS_URL = 'https://maps.app.goo.gl/FQQ1JhZMzYJ4jCWWA';
const PHONE = '+34 698 577 332';

/* Calendly booking URL — replace YOUR_CALENDLY_URL with the real link once set up */
const BOOK_URL = 'https://calendly.com/YOUR_CALENDLY_URL';

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

const cardBase = "flex items-start gap-3 p-4 bg-ink-mid border border-ink-border hover:border-neon-pink transition-all duration-300 group";
const cardStyle = { borderLeft: '3px solid rgba(255,20,147,0.4)' };

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
          Ver huecos disponibles
        </p>
      </RevealOnScroll>

      {/* Contact info */}
      <RevealOnScroll delay={80}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">

          {/* Ubicación */}
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer"
             className={`${cardBase} no-underline`} style={cardStyle}>
            <span className="text-xl flex-shrink-0 mt-0.5">📍</span>
            <div>
              <h4 className="font-bold text-white/45 text-[10px] tracking-widest uppercase mb-0.5 font-body group-hover:text-neon-pink transition-colors">Ubicación</h4>
              <p className="text-neon-pink font-bold text-sm font-body">Albacete</p>
              <p className="text-ink-muted text-xs mt-0.5 leading-relaxed font-body">Solo con cita previa</p>
            </div>
          </a>

          {/* Horario */}
          <div className={cardBase} style={cardStyle}>
            <span className="text-xl flex-shrink-0 mt-0.5">⏰</span>
            <div>
              <h4 className="font-bold text-white/45 text-[10px] tracking-widest uppercase mb-0.5 font-body group-hover:text-neon-pink transition-colors">Horario</h4>
              <p className="text-neon-pink font-bold text-sm font-body">Lun – Sáb: 9:00 – 20:00</p>
              <p className="text-ink-muted text-xs mt-0.5 leading-relaxed font-body">Domingos solo con cita previa</p>
            </div>
          </div>

          {/* WhatsApp / Teléfono */}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
             className={`${cardBase} no-underline`} style={cardStyle}>
            <WhatsAppIcon />
            <div>
              <h4 className="font-bold text-white/45 text-[10px] tracking-widest uppercase mb-0.5 font-body group-hover:text-neon-pink transition-colors">Teléfono y WhatsApp</h4>
              <p className="text-neon-pink font-bold text-sm font-body">{PHONE}</p>
              <p className="text-ink-muted text-xs mt-0.5 leading-relaxed font-body">WhatsApp es lo más rápido</p>
            </div>
          </a>

          {/* Instagram */}
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
             className={`${cardBase} no-underline`} style={cardStyle}>
            <InstagramIcon />
            <div>
              <h4 className="font-bold text-white/45 text-[10px] tracking-widest uppercase mb-0.5 font-body group-hover:text-neon-pink transition-colors">Instagram</h4>
              <p className="text-neon-pink font-bold text-sm font-body">@nailz_by_eme</p>
              <p className="text-ink-muted text-xs mt-0.5 leading-relaxed font-body">DM para citas, inspiración o lo que necesites</p>
            </div>
          </a>

        </div>
      </RevealOnScroll>

      {/* Social buttons */}
      <RevealOnScroll delay={120}>
        <p className="font-bold text-white/35 text-[10px] tracking-widest uppercase mb-3 font-body text-center">Sígueme</p>
        <div className="flex gap-3">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-ink-mid border border-ink-border text-white/55 font-bold text-xs tracking-widest uppercase py-3 flex-1 hover:border-neon-pink hover:text-neon-pink transition-all duration-200 font-body active:scale-95 no-underline"
          >
            <InstagramIcon />
            Instagram
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-ink-mid border border-ink-border text-white/55 font-bold text-xs tracking-widest uppercase py-3 flex-1 hover:border-neon-pink hover:text-neon-pink transition-all duration-200 font-body active:scale-95 no-underline"
          >
            <WhatsAppIcon />
            WhatsApp
          </a>
          <button
            className="flex items-center justify-center gap-2 bg-ink-mid border border-ink-border text-white/55 font-bold text-xs tracking-widest uppercase py-3 flex-1 hover:border-neon-pink hover:text-neon-pink transition-all duration-200 font-body active:scale-95"
          >
            <span>🎵</span>
            TikTok
          </button>
        </div>
      </RevealOnScroll>

    </div>

    <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden><Drips /></div>
  </section>
);

export default Contact;
