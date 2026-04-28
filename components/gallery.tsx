const projects = [
  {
    title: "Tetőfelújítás - Referencia 1",
    location: "Budapest",
    image: "/images/Messenger_creation_3F2E7DEA-D690-489C-80C8-43D234C01C4A.jpg",
  },
  {
    title: "Tetőfedés - Referencia 2",
    location: "Debrecen",
    image: "/images/Messenger_creation_44523078-6F33-45A0-930E-8CC1F73A3BF6.jpg",
  },
  {
    title: "Bádogozás - Referencia 3",
    location: "Győr",
    image: "/images/Messenger_creation_730C3007-224B-4C94-8662-5AD89A070DC0.jpg",
  },
  {
    title: "Tetőjavítás - Referencia 4",
    location: "Székesfehérvár",
    image: "/images/Messenger_creation_7CD7391F-1BCE-4434-82D7-B6A21DB27F09.jpg",
  },
  {
    title: "Új tető kivitelezés - Referencia 5",
    location: "Kecskemét",
    image: "/images/Messenger_creation_7E9AC989-EF55-41E7-93E2-6E3B4F5C0BF2.jpg",
  },
  {
    title: "Családi ház tetőmunka - Referencia 6",
    location: "Pécs",
    image: "/images/Messenger_creation_8C41820F-937F-489A-8F4C-F2244935171F.jpg",
  },
  {
    title: "Felújítás - Referencia 7",
    location: "Szeged",
    image: "/images/Messenger_creation_FDEF0A8A-F30E-4D97-8A91-8D1914B8D7AF.jpg",
  },
  {
    title: "Tetőfedő munka - Referencia 8",
    location: "Miskolc",
    image: "/images/signal-2026-04-28-165056.jpeg",
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
