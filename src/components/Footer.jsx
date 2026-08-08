import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

export default function Footer() {
  const services = [
    "Individual House Construction",
    "Apartment Construction",
    "Custom Home Construction",
    "Design & Build",
    "Engineering Services",
    "Real Estate Services",
    "Construction Loan Assistance",
  ];

  const quickLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>

            {/* RB LOGO */}
            <div className="flex items-center gap-4 mb-6">

              <div className="relative w-16 h-16 rounded-2xl border border-yellow-400/50 bg-slate-900 flex items-center justify-center shadow-[0_0_25px_rgba(250,204,21,0.15)]">

                <span className="text-3xl font-black bg-gradient-to-r from-blue-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  RB
                </span>

              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight">
                  RAMANI
                  <span className="text-yellow-400"> BUILDER</span>
                </h2>

                <p className="text-xs text-gray-500 tracking-[3px] uppercase">
                  Engineering Excellence
                </p>
              </div>

            </div>

            <p className="text-gray-400 leading-7 max-w-sm">
              Building trust. Creating homes. Delivering quality
              construction, engineering and real estate solutions
              with uncompromising standards.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-3 mt-7">

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:border-yellow-400 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:border-yellow-400 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:border-yellow-400 transition"
              >
                <FaYoutube />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:border-yellow-400 transition"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>


          {/* SERVICES */}
          <div>

            <h3 className="text-xl font-bold mb-6">
              Our Services
            </h3>

            <div className="w-10 h-1 bg-yellow-400 mb-6"></div>

            <ul className="space-y-3">

              {services.map((service, index) => (
                <li key={index}>

                  <a
                    href="#services"
                    className="group flex items-start gap-2 text-gray-400 hover:text-yellow-400 transition"
                  >

                    <FaArrowRight className="text-yellow-400 text-xs mt-1.5 opacity-0 group-hover:opacity-100 transition" />

                    <span>
                      {service}
                    </span>

                  </a>

                </li>
              ))}

            </ul>

          </div>


          {/* QUICK LINKS */}
          <div>

            <h3 className="text-xl font-bold mb-6">
              Quick Links
            </h3>

            <div className="w-10 h-1 bg-yellow-400 mb-6"></div>

            <ul className="space-y-4">

              {quickLinks.map((item, index) => (
                <li key={index}>

                  <a
                    href={item.link}
                    className="group flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition"
                  >

                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 opacity-50 group-hover:opacity-100"></span>

                    {item.name}

                  </a>

                </li>
              ))}

            </ul>


            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-3 mt-8 px-6 py-3 rounded-full bg-yellow-400 text-slate-950 font-bold hover:bg-yellow-300 transition"
            >
              Get a Quote
              <FaArrowRight className="text-sm" />
            </a>

          </div>


          {/* CONTACT */}
          <div>

            <h3 className="text-xl font-bold mb-6">
              Contact Us
            </h3>

            <div className="w-10 h-1 bg-yellow-400 mb-6"></div>


            {/* LOCATION */}
            <div className="flex gap-4 mb-6">

              <div className="w-11 h-11 flex-shrink-0 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-yellow-400">
                <FaMapMarkerAlt />
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-1">
                  Location
                </p>

                <p className="text-gray-300">
                  Salem, Tamil Nadu
                </p>
              </div>

            </div>


            {/* PHONE */}
            <div className="flex gap-4 mb-6">

              <div className="w-11 h-11 flex-shrink-0 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-yellow-400">
                <FaPhoneAlt />
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-1">
                  Call Us
                </p>

                <p className="text-gray-300">
                  +91 9789796218
                </p>
              </div>

            </div>


            {/* EMAIL */}
            <div className="flex gap-4">

              <div className="w-11 h-11 flex-shrink-0 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-yellow-400">
                <FaEnvelope />
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-1">
                  Email
                </p>

                <p className="text-gray-300 break-all">
                  tamilselvanshai@gmail.com
                </p>
              </div>

            </div>

          </div>

        </div>


        {/* GOLD DIVIDER */}
        <div className="mt-16 pt-8 border-t border-slate-800">

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()}{" "}
              <span className="text-gray-300 font-semibold">
                RAMANI BUILDER
              </span>
              . All Rights Reserved.
            </p>

            <p className="text-gray-600 text-sm">
              Building Dreams • Delivering Excellence
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}