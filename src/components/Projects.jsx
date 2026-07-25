const images = [
  "/images/1.jpeg",
  "/images/2.jpeg",
  "/images/3.jpeg",
  "/images/4.jpeg",
  "/images/5.jpeg",
];

const videos = [
  "/images/6.mp4",
  "/images/7.mp4",
  "/images/8.mp4",
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-yellow-400">Completed Projects</span>
          </h2>

          <p className="text-gray-300 mt-4 max-w-3xl mx-auto">
            Explore some of our completed residential and engineering projects
            across Salem. Every project reflects our commitment to quality,
            durability, and customer satisfaction.
          </p>
        </div>

        {/* Project Gallery */}
        <h3 className="text-3xl font-bold text-yellow-400 text-center mb-8">
          Project Gallery
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {images.map((image, index) => (
            <div
              key={index}
              className={
                index === images.length - 1
                  ? "md:col-span-2 flex justify-center"
                  : ""
              }
            >
              <div
                className={`bg-slate-800 rounded-3xl shadow-2xl p-4 flex items-center justify-center h-[350px] ${
                  index === images.length - 1
                    ? "w-full md:w-[48%]"
                    : "w-full"
                }`}
              >
                <img
                  src={image}
                  alt={`Project ${index + 1}`}
                  className="max-w-full max-h-full object-contain transition duration-500 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Construction Videos */}
        <h3 className="text-3xl font-bold text-yellow-400 text-center mb-8">
          Construction Videos
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className={
                index === videos.length - 1
                  ? "md:col-span-2 flex justify-center"
                  : ""
              }
            >
              <div
                className={`bg-slate-800 rounded-3xl shadow-2xl p-4 flex items-center justify-center h-[350px] ${
                  index === videos.length - 1
                    ? "w-full md:w-[48%]"
                    : "w-full"
                }`}
              >
                <video
                  className="max-w-full max-h-full object-contain rounded-2xl"
                  controls
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}