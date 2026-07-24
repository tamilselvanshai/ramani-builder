function Hero() {
  return (
    <section
    id="home"
      className="min-h-screen bg-cover bg-center relative flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/9.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <p className="text-yellow-400 uppercase tracking-[6px] font-semibold">
          15+ Years of Engineering Excellence
        </p>

        <h1 className="mt-6 text-6xl md:text-7xl font-bold text-white leading-tight">
  RAMANI
  <br />
  <span className="text-yellow-400">BUILDER</span>
</h1>

        <p className="mt-6 text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-9">
          Building premium homes, apartments, and engineering projects across Salem with over 15 years of trusted experience and uncompromising quality.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
  <button className="bg-yellow-500 hover:bg-yellow-600 hover:scale-105 text-black font-semibold text-lg px-10 py-4 rounded-xl transition duration-300 shadow-lg">
    Get Free Consultation
  </button>

  <button className="border-2 border-white text-white hover:bg-white hover:text-black hover:scale-105 text-lg px-10 py-4 rounded-xl transition duration-300">
    View Projects
  </button>
</div>
      </div>
    </section>
  );
}

export default Hero;