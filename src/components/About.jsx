function About() {
  return (
    <section
  id="about"
  className="bg-white pt-24 pb-32"
>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Image */}
          <div>
            <img
              src="/images/9.jpg"
              alt="Ramani Builder"
              className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
            />
          </div>

          {/* Right Content */}
          <div>
            <p className="text-yellow-500 uppercase tracking-[6px] font-semibold">
              WHO WE ARE
            </p>

            <h2 className="text-5xl lg:text-6xl font-bold text-slate-800 mt-4 leading-tight">
              Building Trust.
              <br />
              Creating Homes.
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-8">
              RAMANI BUILDER has over 15 years of engineering excellence in
              delivering premium homes, apartments, engineering services,
              construction loans, and real estate across Salem.
            </p>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              Every project is built with uncompromising quality, modern
              architecture, transparent pricing, and complete customer
              satisfaction.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="bg-yellow-400 rounded-2xl p-8 text-center shadow-xl">
                <h3 className="text-5xl font-bold">15+</h3>
                <p className="mt-3 font-semibold">
                  Years Experience
                </p>
              </div>

              <div className="bg-slate-800 rounded-2xl p-8 text-center text-white shadow-xl">
                <h3 className="text-5xl font-bold">40+</h3>
                <p className="mt-3 font-semibold">
                  Completed Projects
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;