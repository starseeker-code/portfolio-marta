import { useState } from 'react';
import RevealOnScroll from '../components/RevealOnScroll';
import SprayHeading from '../components/SprayHeading';

const galleryItems = [
  { id: 1, label: 'French Gel Manicure',  tag: 'Gel',        emoji: '💅' },
  { id: 2, label: 'Pink Ombré Nails',     tag: 'Ombré',      emoji: '🌸' },
  { id: 3, label: 'Floral Nail Art',      tag: 'Nail Art',   emoji: '🌺' },
  { id: 4, label: 'Chrome Acrylic Set',   tag: 'Acrylics',   emoji: '💎' },
  { id: 5, label: 'Minimalist Design',    tag: 'Minimalist', emoji: '✦'  },
  { id: 6, label: 'Glitter Gel Nails',    tag: 'Glitter',    emoji: '✨' },
  { id: 7, label: 'Luxury Spa Pedicure',  tag: 'Pedicure',   emoji: '🌿' },
  { id: 8, label: 'Bridal Nail Set',      tag: 'Bridal',     emoji: '👑' },
  { id: 9, label: 'Custom Nail Art',      tag: 'Nail Art',   emoji: '🎨' },
];

const tags = ['All', 'Gel', 'Nail Art', 'Acrylics', 'Ombré', 'Glitter', 'Pedicure', 'Bridal', 'Minimalist'];

const Drips = () => (
  <div className="relative w-full pointer-events-none" style={{ height: '24px' }} aria-hidden>
    <div style={{ height: '1px', background: 'linear-gradient(90deg,transparent,rgba(255,20,147,0.35) 30%,rgba(255,20,147,0.35) 70%,transparent)' }}/>
    {[10,22,34,46,58,70,82,91].map((l, i) => (
      <div key={i} className="absolute top-0" style={{
        left:`${l}%`, width:`${2+i%3}px`, height:`${6+(i*3)%15}px`,
        background:'linear-gradient(180deg,#FF1493,transparent)', borderRadius:'0 0 50% 50%',
        opacity: 0.5 + (i*0.04)%0.4,
      }}/>
    ))}
  </div>
);

const Gallery = () => {
  const [activeTag, setActiveTag] = useState('All');
  const filtered = activeTag === 'All' ? galleryItems : galleryItems.filter(i => i.tag === activeTag);

  return (
    <section id="gallery" className="py-20 md:py-24 bg-ink-dark relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 left-0 right-0"><Drips /></div>
        <svg className="absolute top-8 left-0 w-[40%] md:w-[24%]" viewBox="0 0 260 180" fill="none"
             style={{ opacity: 0.09, animation: 'tagPulse 8s ease-in-out infinite 3s' }}>
          <text x="5" y="150" fontFamily="'Permanent Marker',cursive" fontSize="110" fill="#FF1493"
                transform="rotate(5,130,90)">WRK</text>
        </svg>
        <div className="absolute bottom-24 right-8 w-40 h-40 rounded-full" style={{ background: 'radial-gradient(circle, rgba(255,20,147,0.09) 0%, transparent 70%)' }}/>
      </div>

      <div className="container mx-auto px-5 relative z-10">

        {/* Header */}
        <RevealOnScroll className="text-center mb-10">
          <SprayHeading>
            <div className="section-tag justify-center">Que hago</div>
          </SprayHeading>
          <p className="text-ink-muted max-w-sm mx-auto font-body mt-4 text-sm">
            Cada trabajo es único. Nadie va a tratar tus uñas igual
          </p>
        </RevealOnScroll>

        {/* Filter buttons */}
        <RevealOnScroll delay={100} className="flex flex-wrap justify-center gap-2 mb-10">
          {tags.map((tag) => (
            <button key={tag} onClick={() => setActiveTag(tag)}
              className={`px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest transition-all duration-200 border font-body ${
                activeTag === tag
                  ? 'bg-neon-pink border-neon-pink text-white'
                  : 'bg-transparent border-ink-border text-ink-muted hover:border-neon-pink hover:text-neon-pink'
              }`}>
              {tag}
            </button>
          ))}
        </RevealOnScroll>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {filtered.map((item, i) => (
            <RevealOnScroll key={item.id} delay={i * 55}>
              <div className="group relative aspect-square overflow-hidden cursor-pointer border border-ink-border hover:border-neon-pink transition-all duration-300"
                   onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 24px rgba(255,20,147,0.3)'; }}
                   onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; }}>

                {/* Placeholder */}
                <div className="w-full h-full shimmer flex items-center justify-center"
                     style={{ background: 'linear-gradient(135deg,#181818,#222,#181818)' }}>
                  <div className="text-center p-3">
                    <span className="text-4xl md:text-5xl block mb-2">{item.emoji}</span>
                    <span className="text-white/55 font-body font-semibold text-xs">{item.label}</span>
                    <span className="block text-[10px] text-neon-pink/70 mt-1 font-body uppercase tracking-wider">{item.tag}</span>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                     style={{ background: 'linear-gradient(135deg,rgba(255,20,147,0.88),rgba(255,0,107,0.88))' }}>
                  <div className="text-white text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-300 px-3">
                    <span className="text-3xl block mb-2">{item.emoji}</span>
                    <p className="font-display text-sm mb-1.5">{item.label}</p>
                    <span className="text-[10px] border border-white/40 px-3 py-0.5 uppercase tracking-widest font-body">{item.tag}</span>
                  </div>
                </div>

                {/* Corner brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-neon-pink opacity-70" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-pink opacity-70" />
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* CTA */}
        <RevealOnScroll delay={150} className="text-center mt-12">
          <p className="text-ink-muted mb-4 text-xs font-body uppercase tracking-widest">
            Follow for daily drops of nail fire
          </p>
          <a href="#contact"
             className="inline-flex items-center gap-2 border border-neon-pink text-neon-pink font-bold text-xs tracking-widest uppercase px-8 py-4 hover:bg-neon-pink hover:text-white transition-all duration-200 active:scale-95 w-full sm:w-auto justify-center"
             style={{ boxShadow: '0 0 18px rgba(255,20,147,0.3)' }}>
            📸 @martanails_bcn
          </a>
        </RevealOnScroll>
      </div>

      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden><Drips /></div>
    </section>
  );
};

export default Gallery;
