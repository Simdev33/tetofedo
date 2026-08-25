import { MapPin } from "lucide-react"

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
    <section id="munkaink" className="tone-paper relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px section-seam" />
      <div className="pointer-events-none absolute -right-40 top-1/4 h-[28rem] w-[28rem] glow-primary opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary">
            <span className="h-1.5 w-1.5 rotate-45 bg-primary" />
            Referenciáink
          </span>
          <h2 className="mt-6 font-serif text-3xl font-normal tracking-tight text-balance text-foreground sm:text-5xl">
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
              className={`group relative overflow-hidden rounded-2xl ring-1 ring-border/70 transition-all duration-300 hover:-translate-y-1 hover:ring-primary/40 hover:shadow-warm-lg ${
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

              {/* Permanent bottom scrim so captions stay readable */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              {/* Deeper scrim on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Location chip */}
              <div className="absolute left-5 top-5 flex items-center gap-1.5 rounded-full border border-primary-foreground/20 bg-black/40 px-3 py-1 backdrop-blur-md">
                <MapPin className="h-3 w-3 text-primary" />
                <span className="text-xs font-medium text-primary-foreground/90">
                  {project.location}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-lg font-semibold text-primary-foreground sm:text-xl">
                  {project.title}
                </h3>
                <div className="mt-3 h-px w-0 bg-primary transition-all duration-500 group-hover:w-16" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
