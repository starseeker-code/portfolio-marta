const contactInfo = [
  {
    icon: '📍',
    title: 'Location',
    content: 'Carrer de la Bellesa 24, Barcelona',
    sub: 'Near Passeig de Gràcia · Studio access by appointment',
  },
  {
    icon: '⏰',
    title: 'Working Hours',
    content: 'Mon – Sat: 9:00 – 20:00',
    sub: 'Sunday available by appointment only',
  },
  {
    icon: '📱',
    title: 'Phone & WhatsApp',
    content: '+34 612 345 678',
    sub: 'Quick replies on WhatsApp — I usually respond within a few hours!',
  },
  {
    icon: '📸',
    title: 'Instagram',
    content: '@martanails_bcn',
    sub: 'DM me for bookings, inspiration, or questions',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-barbie-pink font-semibold text-sm uppercase tracking-widest mb-3">Get In Touch</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Book Your <span className="text-gradient">Appointment</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Ready to treat yourself? I'd love to hear from you!
            Fill in the form or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 max-w-5xl mx-auto">
          {/* Left: Info */}
          <div>
            <div className="space-y-4 mb-10">
              {contactInfo.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-5 bg-barbie-cream rounded-2xl border border-barbie-blush hover:border-barbie-pink transition-colors group"
                >
                  <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <h4 className="font-semibold text-gray-800 group-hover:text-barbie-pink transition-colors text-sm">
                      {item.title}
                    </h4>
                    <p className="text-barbie-pink font-semibold text-sm mt-0.5">{item.content}</p>
                    <p className="text-gray-400 text-xs mt-0.5 leading-relaxed">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social buttons */}
            <div>
              <p className="font-semibold text-gray-700 mb-4 text-sm">Follow me for daily nail inspiration ✨</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: 'Instagram', icon: '📸' },
                  { label: 'WhatsApp', icon: '💬' },
                  { label: 'TikTok',   icon: '🎵' },
                ].map((s) => (
                  <button
                    key={s.label}
                    className="flex items-center gap-2 bg-barbie-pale text-barbie-pink font-semibold text-sm px-5 py-2.5 rounded-full border border-barbie-blush hover:bg-barbie-pink hover:text-white hover:border-transparent transition-all duration-200"
                  >
                    <span>{s.icon}</span>
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-gradient-to-br from-barbie-pale to-barbie-cream p-8 rounded-3xl border border-barbie-blush">
            <h3 className="font-display text-2xl font-bold text-gray-800 mb-6">Send Me a Message 💌</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Sofia R."
                    className="w-full px-4 py-3 bg-white border border-barbie-blush rounded-xl focus:outline-none focus:ring-2 focus:ring-barbie-pink focus:border-transparent text-gray-700 placeholder-gray-300 transition text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="sofia@example.com"
                    className="w-full px-4 py-3 bg-white border border-barbie-blush rounded-xl focus:outline-none focus:ring-2 focus:ring-barbie-pink focus:border-transparent text-gray-700 placeholder-gray-300 transition text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Service Interested In
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 bg-white border border-barbie-blush rounded-xl focus:outline-none focus:ring-2 focus:ring-barbie-pink focus:border-transparent text-gray-700 transition text-sm"
                >
                  <option value="">Select a service...</option>
                  <option>Classic Manicure</option>
                  <option>Gel Manicure</option>
                  <option>Acrylic Nails</option>
                  <option>Nail Art Design</option>
                  <option>Luxury Pedicure</option>
                  <option>Full Set + Nail Art</option>
                  <option>Other / Not sure yet</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell me about your ideal nail look, preferred date, or any questions you have..."
                  className="w-full px-4 py-3 bg-white border border-barbie-blush rounded-xl focus:outline-none focus:ring-2 focus:ring-barbie-pink focus:border-transparent text-gray-700 placeholder-gray-300 transition resize-none text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-barbie-gradient text-white font-bold py-4 rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
              >
                Send Message ✨
              </button>

              <p className="text-center text-xs text-gray-400">
                I typically reply within 24 hours 💌
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
