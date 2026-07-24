function Services() {
  const services = [
    {
      title: "Individual House Construction",
      icon: "🏠",
      description:
        "Custom-designed homes built with premium materials and superior engineering.",
    },
    {
      title: "Apartment Construction",
      icon: "🏢",
      description:
        "Modern apartment projects with quality construction and timely delivery.",
    },
    {
      title: "Booked House Construction",
      icon: "🏘️",
      description:
        "Complete construction solutions across Salem according to customer requirements.",
    },
    {
      title: "Engineering Services",
      icon: "📐",
      description:
        "Planning, structural design, estimation, supervision, and consulting.",
    },
    {
      title: "Real Estate",
      icon: "🏡",
      description:
        "Trusted property buying, selling, and investment guidance.",
    },
    {
      title: "Construction Loan Assistance",
      icon: "💰",
      description:
        "Helping clients obtain home construction loans with ease.",
    },
  ];

  return (
    <section id="services" className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-yellow-400 uppercase tracking-[6px] text-center font-semibold">
          WHAT WE OFFER
        </p>

        <h2 className="text-5xl font-bold text-center text-white mt-4">
          Our Services
        </h2>

        <p className="text-gray-300 text-center mt-6 max-w-3xl mx-auto">
          We provide complete construction and engineering solutions with
          unmatched quality, transparency, and customer satisfaction.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-8 hover:bg-yellow-400 hover:text-slate-900 transition duration-300 shadow-xl"
            >
              <div className="text-5xl">{service.icon}</div>

              <h3 className="text-2xl font-bold mt-6">
                {service.title}
              </h3>

              <p className="mt-4 leading-7">
                {service.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;