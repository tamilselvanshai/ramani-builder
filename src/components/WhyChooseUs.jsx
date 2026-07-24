function WhyChooseUs() {
  const features = [
    {
      icon: "🏆",
      title: "15+ Years Experience",
      description:
        "Over 15 years of delivering quality residential and commercial construction projects.",
    },
    {
      icon: "🏗️",
      title: "Quality Construction",
      description:
        "We use premium materials and proven construction practices to ensure lasting quality.",
    },
    {
      icon: "⏰",
      title: "On-Time Delivery",
      description:
        "Projects are completed on schedule without compromising on workmanship.",
    },
    {
      icon: "💰",
      title: "Transparent Pricing",
      description:
        "Clear quotations with no hidden costs, giving you complete peace of mind.",
    },
    {
      icon: "👷",
      title: "Expert Engineering",
      description:
        "Led by experienced civil engineers who focus on safety, precision, and durability.",
    },
    {
      icon: "🤝",
      title: "Customer Satisfaction",
      description:
        "We build lasting relationships by delivering homes that exceed expectations.",
    },
  ];

  return (
    <section id="why-us" className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-yellow-400 uppercase tracking-[6px] text-center font-semibold">
          WHY CHOOSE US
        </p>

        <h2 className="text-5xl font-bold text-white text-center mt-4">
          Building Excellence with Trust
        </h2>

        <p className="text-gray-300 text-center max-w-3xl mx-auto mt-6">
          At RAMANI BUILDER, we combine engineering expertise, premium
          craftsmanship, and customer-focused service to deliver exceptional
          construction projects across Salem.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-8 text-center hover:-translate-y-2 transition duration-300 shadow-lg"
            >
              <div className="text-5xl mb-5">{feature.icon}</div>

              <h3 className="text-white text-2xl font-semibold mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-300 leading-7">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;