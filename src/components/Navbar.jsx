function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">
          RAMANI <span className="text-yellow-400">BUILDER</span>
        </h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">
          <li>
            <a href="#home" className="hover:text-yellow-400 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-yellow-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#services" className="hover:text-yellow-400 transition">
              Services
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-yellow-400 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#testimonials" className="hover:text-yellow-400 transition">
              Testimonials
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-yellow-400 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Get Quote Button */}
        <a
          href="#contact"
          className="bg-yellow-500 hover:bg-yellow-600 text-black px-5 py-2 rounded-lg font-semibold transition"
        >
          Get Quote
        </a>
      </div>
    </nav>
  );
}

export default Navbar;