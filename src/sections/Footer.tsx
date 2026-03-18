const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* CTA Banner */}
      <div className="bg-barbie-gradient py-14 text-center px-6">
        <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
          ¿Por qué no lo ves por ti misma? ✨
        </h3>
        <p className="text-white/80 mb-7 max-w-md mx-auto">
          Pide tu cita hoy y ten las uñas de las que todos hablan
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-white text-barbie-pink font-bold px-8 py-3.5 rounded-full hover:scale-105 transition-all duration-200 shadow-lg"
        >
          Pide Cita 💅
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
                Marta<span className="text-barbie-pink">Uñas</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Artista de uñas profesional en Albacete. Haciendo lo que me apasiona y siendo la mejor en ello desde hace unos años.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-5">Secciones</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'La Artista',  href: 'about'        },
                { label: 'Servicios',   href: 'services'     },
                { label: 'El Trabajo',  href: 'gallery'      },
                { label: 'Reseñas',     href: 'testimonials' },
                { label: 'Contacta',    href: 'contact'      },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={`#${link.href}`}
                    className="text-gray-400 hover:text-barbie-light transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact details */}
          <div>
            <h4 className="font-semibold text-white mb-5">Contacto</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>📍 Albacete</li>
              <li>📱 +34 612 345 678</li>
              <li>📸 @martanails_abcte</li>
              <li>⏰ Lun – Sáb: 9:00 – 20:00</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
