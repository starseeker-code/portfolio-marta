import { useState } from 'react';

const galleryItems = [
  { id: 1, label: 'French Gel Manicure',   tag: 'Gel',       emoji: '💅' },
  { id: 2, label: 'Pink Ombré Nails',      tag: 'Ombré',     emoji: '🌸' },
  { id: 3, label: 'Floral Nail Art',       tag: 'Nail Art',  emoji: '🌺' },
  { id: 4, label: 'Chrome Acrylic Set',    tag: 'Acrylics',  emoji: '💎' },
  { id: 5, label: 'Minimalist Design',     tag: 'Minimalist', emoji: '✦'  },
  { id: 6, label: 'Glitter Gel Nails',     tag: 'Glitter',   emoji: '✨' },
  { id: 7, label: 'Luxury Spa Pedicure',   tag: 'Pedicure',  emoji: '🌸' },
  { id: 8, label: 'Bridal Nail Set',       tag: 'Bridal',    emoji: '👑' },
  { id: 9, label: 'Custom Nail Art',       tag: 'Nail Art',  emoji: '🎨' },
];

const tags = ['All', 'Gel', 'Nail Art', 'Acrylics', 'Ombré', 'Glitter', 'Pedicure', 'Bridal', 'Minimalist'];

const Gallery = () => {
  const [activeTag, setActiveTag] = useState('All');

  const filtered = activeTag === 'All'
    ? galleryItems
    : galleryItems.filter((i) => i.tag === activeTag);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-barbie-pink font-semibold text-sm uppercase tracking-widest mb-3">My Work</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            The <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            A glimpse into my portfolio — every set is a unique creation. Browse and get inspired!
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeTag === tag
                  ? 'bg-barbie-gradient text-white shadow-md'
                  : 'bg-barbie-pale text-barbie-pink hover:bg-barbie-blush'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              {/* Placeholder card */}
              <div className="w-full h-full shimmer flex items-center justify-center bg-gradient-to-br from-barbie-pale via-barbie-blush to-barbie-pink/20">
                <div className="text-center p-4">
                  <span className="text-5xl block mb-3">{item.emoji}</span>
                  <span className="text-barbie-rose font-semibold text-sm font-display">{item.label}</span>
                  <span className="block text-xs text-barbie-pink/70 mt-1">{item.tag}</span>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-barbie-gradient opacity-0 group-hover:opacity-85 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 px-4">
                  <span className="text-3xl block mb-2">{item.emoji}</span>
                  <p className="font-display font-bold text-sm mb-1">{item.label}</p>
                  <span className="text-xs bg-white/20 px-3 py-1 rounded-full inline-block">{item.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <p className="text-gray-500 mb-5 text-sm">
            Want to see more of my work? Follow me on Instagram for daily nail inspiration!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-barbie-gradient text-white font-bold px-8 py-3.5 rounded-full shadow-lg hover:scale-105 transition-all duration-200"
          >
            📸 @martanails_bcn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
