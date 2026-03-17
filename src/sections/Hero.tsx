const sparkles = [
  { symbol: '✨', top: '15%', left: '82%', size: '1.2rem', delay: '0s' },
  { symbol: '💅', top: '28%', left: '14%', size: '0.9rem', delay: '0.8s' },
  { symbol: '✦',  top: '48%', left: '91%', size: '1rem',   delay: '1.4s' },
  { symbol: '✦',  top: '72%', left: '6%',  size: '1.4rem', delay: '0.3s' },
  { symbol: '✨', top: '82%', left: '76%', size: '0.9rem', delay: '1.1s' },
  { symbol: '💎', top: '38%', left: '52%', size: '1.1rem', delay: '0.6s' },
  { symbol: '✦',  top: '62%', left: '66%', size: '0.8rem', delay: '1.8s' },
];

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-barbie-cream via-barbie-pale to-barbie-blush" />

      {/* Decorative blobs */}
      <div className="absolute top-16 right-8 w-80 h-80 bg-barbie-pink/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-24 left-8 w-96 h-96 bg-barbie-light/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-56 h-56 bg-barbie-rose/10 rounded-full blur-2xl pointer-events-none" />

      {/* Floating sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {sparkles.map((s, i) => (
          <span
            key={i}
            className="absolute text-barbie-pink/25 animate-pulse"
            style={{ top: s.top, left: s.left, fontSize: s.size, animationDelay: s.delay }}
          >
            {s.symbol}
          </span>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-24 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-barbie-rose text-sm font-semibold px-5 py-2 rounded-full border border-barbie-blush shadow-sm mb-8">
            <span>💅</span>
            <span>Professional Nail Artist · Barcelona</span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
            <span className="text-gray-800">Hello, I'm</span>
            <br />
            <span className="text-gradient">Marta.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed mb-3 max-w-xl">
            Where every nail becomes a{' '}
            <span className="font-semibold text-barbie-pink italic">work of art.</span>
          </p>
          <p className="text-gray-500 mb-10 max-w-lg leading-relaxed">
            Specializing in gel nails, acrylics, and bespoke nail art designs.
            Your nails deserve the best — let me make them shine. ✨
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-barbie-gradient text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Book an Appointment
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-white text-barbie-pink font-bold px-8 py-4 rounded-full border-2 border-barbie-pink hover:bg-barbie-pale transition-all duration-300"
            >
              View Services
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10">
            {[
              { value: '500+', label: 'Happy Clients' },
              { value: '5 ★',  label: 'Average Rating' },
              { value: '8+',   label: 'Years Experience' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl font-bold text-barbie-pink">{stat.value}</div>
                <div className="text-sm text-gray-500 font-medium mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 72" className="w-full fill-white block">
          <path d="M0,36 C360,72 1080,0 1440,36 L1440,72 L0,72 Z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
