import {
  FaHome,
  FaBuilding,
  FaDraftingCompass,
  FaHardHat,
  FaHandHoldingUsd,
} from "react-icons/fa";
import { MdRealEstateAgent } from "react-icons/md";

const services = [
  {
    icon: <FaHome />,
    title: "Individual House Construction",
    desc: "Premium quality homes built with precision and durability.",
  },
  {
    icon: <FaBuilding />,
    title: "Apartment Construction",
    desc: "Modern apartment projects with quality craftsmanship.",
  },
  {
    icon: <FaHome />,
    title: "Custom Home Construction",
    desc: "Homes designed according to your lifestyle and needs.",
  },
  {
    icon: <FaDraftingCompass />,
    title: "Design & Build",
    desc: "Planning, designing and construction under one roof.",
  },
  {
    icon: <FaHardHat />,
    title: "Engineering Services",
    desc: "Professional engineering solutions with trusted quality.",
  },
  {
    icon: <MdRealEstateAgent />,
    title: "Real Estate",
    desc: "Buying, selling and investment guidance.",
  },
  {
    icon: <FaHandHoldingUsd />,
    title: "Loan Assistance",
    desc: "Helping you finance your dream construction.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-slate-950 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-yellow-400 font-semibold">
            OUR SERVICES
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Building
            <span className="text-yellow-400"> Excellence</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Complete construction, engineering and real estate
            solutions with over 15 years of trusted experience.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-yellow-400 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="w-16 h-16 rounded-full bg-yellow-400 text-slate-900 flex items-center justify-center text-3xl mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {service.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}