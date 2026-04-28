const projects = [
  {
    title: "Családi ház tetőfelújítás",
    location: "Budapest",
    image: "/images/project-1.jpg",
  },
  {
    title: "Lakópark tetőfedés",
    location: "Debrecen",
    image: "/images/project-2.jpg",
  },
  {
    title: "Villa bádogozás",
    location: "Győr",
    image: "/images/project-3.jpg",
  },
]

export function Gallery() {
  return (
    <section id="munkaink" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary mb-4">
            Referenciáink
          </p>
          <h2 className="font-serif text-3xl font-normal tracking-tight text-foreground sm:text-5xl text-balance">
            Büszkék vagyunk munkáinkra
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Tekintse meg néhány befejezett projektünket országszerte.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative overflow-hidden rounded-2xl ${
                index === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-xl font-semibold text-primary-foreground">
                  {project.title}
                </h3>
                <p className="text-sm text-primary-foreground/80 mt-1">
                  {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
