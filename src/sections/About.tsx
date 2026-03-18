import RevealOnScroll from '../components/RevealOnScroll';

const highlights = [
  {
    icon: '🎓',
    title: 'Certified Professional',
    desc: 'Internationally certified nail technician with advanced training in gel and acrylic techniques.',
  },
  {
    icon: '🎨',
    title: 'Nail Art Specialist',
    desc: 'From minimalist designs to elaborate 3D nail art — I bring your vision to life with every stroke.',
  },
  {
    icon: '✨',
    title: 'Premium Products Only',
    desc: 'I exclusively use high-quality, skin-safe products from top professional brands for lasting results.',
  },
  {
    icon: '🌸',
    title: 'A Relaxing Experience',
    desc: 'Every session is a self-care ritual — a moment of calm, comfort, and beauty just for you.',
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <RevealOnScroll from="left">
            <p className="text-barbie-pink font-semibold text-sm uppercase tracking-widest mb-3">About Me</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Passion for Nails,
              <br />
              <span className="text-gradient">Perfection in Every Detail</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              Hi! I'm <strong>Marta</strong>, a professional nail artist with over 8 years of experience
              transforming nails into tiny masterpieces. I believe that beautiful nails are an extension
              of your personality — and every client deserves to feel absolutely fabulous.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Whether you're looking for a classic French manicure, a trendy seasonal design, or a
              luxurious spa pedicure, I'm here to make it happen in a clean, relaxing, and welcoming
              environment. From everyday elegance to special occasions — your nails, your story.
            </p>
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-barbie-pink font-bold group"
            >
              Explore my services
              <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
            </a>
          </RevealOnScroll>

          {/* Right: Highlights grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {highlights.map((item, i) => (
              <RevealOnScroll key={item.title} delay={i * 100}>
                <div className="p-6 bg-barbie-cream rounded-2xl border border-barbie-blush hover:border-barbie-pink hover:shadow-lg transition-all duration-300 group cursor-default h-full">
                  <span className="text-3xl mb-3 block">{item.icon}</span>
                  <h3 className="font-display font-semibold text-gray-800 mb-2 group-hover:text-barbie-pink transition-colors text-base">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
