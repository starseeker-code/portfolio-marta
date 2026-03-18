import RevealOnScroll from '../components/RevealOnScroll';

const testimonials = [
  {
    id: 1,
    name: 'Sofia R.',
    service: 'Gel Manicure',
    text: "Marta is absolutely incredible! My nails have never looked this good. The gel manicure lasted over a month without chipping. I'm never going anywhere else!",
    initials: 'SR',
  },
  {
    id: 2,
    name: 'Isabella M.',
    service: 'Nail Art Design',
    text: "I showed Marta a reference picture and she executed it perfectly — even better than the original! The attention to detail in her nail art is truly unmatched. Pure artist.",
    initials: 'IM',
  },
  {
    id: 3,
    name: 'Valentina P.',
    service: 'Acrylic Nails + Art',
    text: "The whole experience was so relaxing and luxurious. My acrylic set looks absolutely flawless. Marta takes her time and you can feel she truly loves what she does. 10/10!",
    initials: 'VP',
  },
  {
    id: 4,
    name: 'Luna G.',
    service: 'Luxury Pedicure',
    text: "Best pedicure I've ever had! My feet feel brand new and the polish is still perfect three weeks later. The studio is so cozy and Marta is the sweetest person.",
    initials: 'LG',
  },
  {
    id: 5,
    name: 'Camila F.',
    service: 'Classic Manicure',
    text: "Such a talented and professional nail artist! Even a simple classic manicure feels like a five-star treatment here. Highly recommend for any occasion.",
    initials: 'CF',
  },
  {
    id: 6,
    name: 'Daniela S.',
    service: 'Bridal Nails',
    text: "Marta did my bridal nails and I couldn't have been happier. She was patient, detail-oriented, and the result was absolutely breathtaking. Thank you so much, Marta!",
    initials: 'DS',
  },
];

const StarRow = () => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className="text-gold text-sm">★</span>
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-barbie-cream to-barbie-pale">
      <div className="container mx-auto px-6">

        {/* Header */}
        <RevealOnScroll className="text-center mb-16">
          <p className="text-barbie-pink font-semibold text-sm uppercase tracking-widest mb-3">Happy Clients</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What They <span className="text-gradient">Say</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Don't just take my word for it — here's what my amazing clients have to say!
          </p>
        </RevealOnScroll>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <RevealOnScroll key={t.id} delay={i * 90}>
              <div className="bg-white p-8 rounded-3xl border border-barbie-blush shadow-sm hover:shadow-lg hover:border-barbie-pink/40 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                {/* Opening quote */}
                <div className="font-display text-6xl font-bold leading-none text-barbie-pink/15 mb-2 select-none">
                  "
                </div>

                <StarRow />

                <p className="text-gray-600 italic leading-relaxed my-4 text-sm flex-grow">
                  "{t.text}"
                </p>

                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-barbie-blush">
                  <div className="w-11 h-11 rounded-full bg-barbie-gradient flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">{t.name}</h4>
                    <p className="text-xs text-barbie-pink font-medium">{t.service}</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Overall rating */}
        <RevealOnScroll delay={200} className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-2 bg-white px-10 py-7 rounded-3xl shadow-md border border-barbie-blush">
            <StarRow />
            <p className="font-display text-3xl font-bold text-gray-800">5.0 / 5.0</p>
            <p className="text-gray-400 text-sm">Based on 200+ verified reviews</p>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
};

export default Testimonials;
