const services = [
  {
    icon: '💅',
    name: 'Classic Manicure',
    duration: '45 min',
    price: '€25',
    description: 'Shape, file, cuticle care, hand massage, and your choice of nail polish. A timeless classic to keep your nails looking their best.',
    features: ['Nail shaping & filing', 'Cuticle care & clean-up', 'Relaxing hand massage', 'Polish of your choice'],
    popular: false,
  },
  {
    icon: '✨',
    name: 'Gel Manicure',
    duration: '60 min',
    price: '€40',
    description: 'Long-lasting gel nails that stay chip-free for weeks. Glossy, strong, and absolutely stunning — the perfect low-maintenance choice.',
    features: ['Up to 3–4 weeks wear', 'Wide colour range', 'UV-cured high-shine finish', 'Nail art add-ons available'],
    popular: true,
  },
  {
    icon: '💎',
    name: 'Acrylic Nails',
    duration: '75 min',
    price: '€55',
    description: 'Strong, beautiful acrylic extensions for the perfect nail length and shape you\'ve always dreamed of. Durable and customisable.',
    features: ['Custom length & shape', 'Durable & long-lasting', 'Tip or sculpted options', 'Nail art available'],
    popular: false,
  },
  {
    icon: '🎨',
    name: 'Nail Art Design',
    duration: '30–60 min',
    price: 'From €15',
    description: 'Express yourself with custom nail art. From delicate florals to bold geometric — the canvas is yours, the art is mine.',
    features: ['Hand-painted designs', 'Gems, glitters & foils', 'Seasonal & custom themes', 'Bespoke consultations'],
    popular: false,
  },
  {
    icon: '🌸',
    name: 'Luxury Pedicure',
    duration: '60 min',
    price: '€45',
    description: 'Treat your feet to a full spa pedicure — soak, exfoliate, massage, and polish for silky smooth and beautifully groomed results.',
    features: ['Foot soak & scrub', 'Callus & dry skin removal', 'Leg & foot massage', 'Polish or gel finish'],
    popular: false,
  },
  {
    icon: '👑',
    name: 'Full Set + Nail Art',
    duration: '90 min',
    price: '€75',
    description: 'The ultimate nail experience. A full gel or acrylic set combined with a completely custom nail art design. Pure luxury.',
    features: ['Full set included', 'Custom art design', 'Premium finish & shine', 'Complimentary cuticle care'],
    popular: false,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-barbie-pale to-barbie-cream">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-barbie-pink font-semibold text-sm uppercase tracking-widest mb-3">What I Offer</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Each service is crafted with care, precision, and the finest products — because you deserve nothing less.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.name}
              className={`relative p-8 rounded-3xl border transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl flex flex-col ${
                service.popular
                  ? 'bg-barbie-gradient text-white border-transparent shadow-xl'
                  : 'bg-white border-barbie-blush hover:border-barbie-pink'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-md whitespace-nowrap">
                  ⭐ Most Popular
                </div>
              )}

              <div className="text-4xl mb-4">{service.icon}</div>

              <h3 className={`font-display text-xl font-bold mb-1 ${service.popular ? 'text-white' : 'text-gray-800'}`}>
                {service.name}
              </h3>

              <div className={`flex items-center gap-3 text-sm mb-4 ${service.popular ? 'text-white/80' : 'text-gray-400'}`}>
                <span>⏱ {service.duration}</span>
                <span>·</span>
                <span className={`font-bold text-lg ${service.popular ? 'text-white' : 'text-barbie-pink'}`}>
                  {service.price}
                </span>
              </div>

              <p className={`text-sm leading-relaxed mb-6 flex-grow ${service.popular ? 'text-white/90' : 'text-gray-500'}`}>
                {service.description}
              </p>

              <ul className="space-y-2 mb-7">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-center gap-2 text-sm ${service.popular ? 'text-white/90' : 'text-gray-600'}`}
                  >
                    <span className={`font-bold ${service.popular ? 'text-white' : 'text-barbie-pink'}`}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center font-bold text-sm py-3 px-6 rounded-full transition-all duration-200 mt-auto ${
                  service.popular
                    ? 'bg-white text-barbie-pink hover:bg-barbie-pale'
                    : 'bg-barbie-pale text-barbie-pink border border-barbie-blush hover:bg-barbie-pink hover:text-white hover:border-transparent'
                }`}
              >
                Book This Service
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-12">
          💡 Prices may vary based on nail length, condition, and design complexity.
          Contact me for a personalised quote.
        </p>
      </div>
    </section>
  );
};

export default Services;
