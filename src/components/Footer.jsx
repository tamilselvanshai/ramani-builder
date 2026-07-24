function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Company */}
        <div>
          <h2 className="text-3xl font-bold text-yellow-400">
            RAMANI BUILDER
          </h2>

          <p className="text-gray-400 mt-5 leading-7">
            Building Trust. Creating Homes.
            <br />
            Premium construction and engineering services across Salem with over
            15 years of experience.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Services</h3>

          <ul className="space-y-3 text-gray-400">
            <li>Individual House Construction</li>
            <li>Apartment Construction</li>
            <li>Engineering Services</li>
            <li>Real Estate</li>
            <li>Construction Loans</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Quick Links</h3>

          <ul className="space-y-3 text-gray-400">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Contact</h3>

          <p className="text-gray-400">
            📍 Salem, Tamil Nadu
          </p>

          <p className="text-gray-400 mt-3">
            📞 +91 XXXXXXXXXX
          </p>

          <p className="text-gray-400 mt-3">
            📧 ramanibuilder@gmail.com
          </p>
        </div>

      </div>

      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500">
        © {new Date().getFullYear()} RAMANI BUILDER. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;