function Projects() {
  const projects = [
  {
    image: "/images/1.jpeg",
    title: "Luxury Individual House",
  },
  {
    image: "/images/2.jpeg",
    title: "Modern Home",
  },
  {
    image: "/images/3.jpeg",
    title: "Premium Interior",
  },
  {
    image: "/images/4.jpeg",
    title: "Contemporary Residence",
  },
  {
    image: "/images/5.jpeg",
    title: "Villa Construction",
  },
  {
    image: "/images/9.jpg",
    title: "Elegant Elevation",
  },
];
  return (
    <section id="projects" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-yellow-500 uppercase tracking-[6px] text-center font-semibold">
          OUR PROJECTS
        </p>

        <h2 className="text-5xl font-bold text-center text-slate-800 mt-4">
          Recent Works
        </h2>

        <p className="text-gray-600 text-center mt-6 max-w-3xl mx-auto">
          Every project reflects our commitment to quality, innovation,
          and customer satisfaction.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-xl group"
            >
              <div className="relative overflow-hidden rounded-2xl group">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-80 object-cover transition duration-500 group-hover:scale-110"
  />

  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-end">
    <h3 className="text-white text-2xl font-bold p-6">
      {project.title}
    </h3>
  </div>
</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-10 py-4 rounded-xl transition">
            View All Projects
          </button>
        </div>

      </div>
    </section>
  );
}

export default Projects;