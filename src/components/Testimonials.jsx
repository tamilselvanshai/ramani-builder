function Testimonials() {
  const testimonials = [
    {
      name: "Ramesh Kumar",
      location: "Salem",
      review:
        "RAMANI BUILDER completed our dream home on time with outstanding quality. Highly recommended!",
    },
    {
      name: "Priya S",
      location: "Attur",
      review:
        "Professional team, transparent pricing, and excellent workmanship throughout the project.",
    },
    {
      name: "Suresh",
      location: "Namakkal",
      review:
        "Their engineering knowledge and attention to detail impressed us. We are very happy with our new home.",
    },
  ];

  return (
    <section id="testimonials" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-yellow-500 uppercase tracking-[6px] text-center font-semibold">
          TESTIMONIALS
        </p>

        <h2 className="text-5xl font-bold text-slate-800 text-center mt-4">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition"
            >
              <div className="text-yellow-500 text-4xl mb-4">★★★★★</div>

              <p className="text-gray-600 leading-7 italic">
                "{item.review}"
              </p>

              <h3 className="text-xl font-bold text-slate-800 mt-6">
                {item.name}
              </h3>

              <p className="text-gray-500">{item.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;