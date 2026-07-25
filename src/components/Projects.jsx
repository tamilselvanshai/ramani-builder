export default function Projects() {
  const gallery = [
    { type: "image", src: "/images/1.jpeg" },
    { type: "image", src: "/images/2.jpeg" },
    { type: "image", src: "/images/3.jpeg" },
    { type: "image", src: "/images/4.jpeg" },
    { type: "image", src: "/images/5.jpeg" },
    { type: "video", src: "/images/6.mp4" },
    { type: "video", src: "/images/7.mp4" },
    { type: "video", src: "/images/8.mp4" },
    { type: "image", src: "/images/9.jpg" },
  ];

  return (
    <section id="projects" className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-white">
          Our Completed Projects
        </h2>

        <p className="text-gray-400 text-center mt-4 mb-14">
          Explore our completed homes, construction progress, and engineering projects across Salem.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {gallery.map((item, index) => (

            <div
              key={index}
              className="overflow-hidden rounded-3xl shadow-2xl bg-slate-900 hover:scale-105 transition duration-500"
            >

              {item.type === "image" ? (

                <img
                  src={item.src}
                  alt={`Project ${index + 1}`}
                  className="w-full h-[350px] object-cover"
                />

              ) : (

                <video
                  controls
                  className="w-full h-[350px] object-cover"
                >
                  <source src={item.src} type="video/mp4" />
                </video>

              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}