const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* CTA Banner */}
      <div className="bg-barbie-gradient py-14 text-center px-6">
        <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
          Ready for Your Dream Nails? ✨
        </h3>
        <p className="text-white/80 mb-7 max-w-md mx-auto">
          Book your appointment today and let's create something beautiful together.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-white text-barbie-pink font-bold px-8 py-3.5 rounded-full hover:scale-105 transition-all duration-200 shadow-lg"
        >
          Book Now 💅
        </a>
      </div>

      {/* Footer body */}
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">💅</span>
              <span className="font-display text-xl font-bold text-barbie-light">
                Marta<span className="text-barbie-pink">Nails</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional nail artist based in Barcelona. Creating beautiful,
              long-lasting nail art with love and precision since 2016.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-5">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {['About', 'Services', 'Gallery', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-barbie-light transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact details */}
          <div>
            <h4 className="font-semibold text-white mb-5">Contact</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>📍 Carrer de la Bellesa 24, Barcelona</li>
              <li>📱 +34 612 345 678</li>
              <li>📸 @martanails_bcn</li>
              <li>⏰ Mon – Sat: 9:00 – 20:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-7 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <p>© {year} MartaNails. All rights reserved.</p>
          <p>Made with 💖 in Barcelona</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
