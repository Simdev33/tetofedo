import { CloudRain, PaintRoller, Wrench, Layers, Droplets, Hammer } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    title: "Palatető beázás megszüntetése",
    description: "Palatetők beázás-mentesítését végezzük cseppentő-zárólemez beépítésével.",
    icon: CloudRain,
    image: "/images/Messenger_creation_3F2E7DEA-D690-489C-80C8-43D234C01C4A.jpg",
    alt: "Megbontott palatető léceléssel, beázás javítása közben",
  },
  {
    title: "4 rétegű tetőfestés",
    description:
      "Palatető, cseréptető 4!!! rétegű festése, ezáltal a tető felújítása. Csak Ön tudja, hogy nem új!",
    icon: PaintRoller,
    image: "/images/project-1.jpg",
    alt: "Frissen festett cseréptető családi házon",
  },
  {
    title: "Hullámpala tető javítása",
    description: "Hullámpala tető javítása, festése, vagy átfedése.",
    icon: Wrench,
    image: "/images/Messenger_creation_FDEF0A8A-F30E-4D97-8A91-8D1914B8D7AF.jpg",
    alt: "Hullámprofilos tetőfelület kéménnyel és ereszcsatornával",
  },
  {
    title: "Szalagzsindelyezés",
    description: "Palatető felújítása bontás nélkül, palatető átfedése szalagzsindellyel.",
    icon: Layers,
    image: "/images/Messenger_creation_730C3007-224B-4C94-8662-5AD89A070DC0.jpg",
    alt: "Bontás nélkül átfedett tető régi családi házon",
  },
  {
    title: "Ereszcsatorna beépítése",
    description:
      "A palatetők utólagos ereszcsatornázási munkálataihoz szükségtelen a palát megbontani.",
    icon: Droplets,
    image: "/images/Messenger_creation_7E9AC989-EF55-41E7-93E2-6E3B4F5C0BF2.jpg",
    alt: "Ereszcsatorna szabása és beépítése munka közben",
  },
  {
    title: "Tetőjavítás",
    description: "Gyors és megbízható tetőjavítás beázás, vihar- vagy egyéb károk esetén.",
    icon: Hammer,
    image: "/images/signal-2026-04-28-165056.jpeg",
    alt: "Kémény bádogos szegélyezése korcolt lemezfedésen",
  },
]

export function Services() {
  return (
    <section
      id="szolgaltatasok"
      className="tone-paper relative overflow-hidden py-24 lg:py-32"
    >
      {/* Seam + blueprint texture */}
      <div className="absolute inset-x-0 top-0 h-px section-seam" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-70 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[28rem] w-[28rem] glow-primary opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary">
            <span className="h-1.5 w-1.5 rotate-45 bg-primary" />
            Szolgáltatásaink
          </span>
          <h2 className="mt-6 font-serif text-3xl font-normal tracking-tight text-balance text-foreground sm:text-5xl">
            Teljes körű tetőfedő és bádogos megoldások
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Minden szolgáltatásunkra garanciát vállalunk. Szakértő csapatunk mindig a legjobb megoldást kínálja.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group relative gap-0 overflow-hidden rounded-2xl border border-border/70 surface-card py-0 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-warm-lg"
            >
              {/* Photo header */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Scrim that ties the photo into the card surface */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/15 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Index */}
                <span className="absolute right-3 top-3 rounded-lg bg-black/35 px-2.5 py-1 font-serif text-base leading-none text-white backdrop-blur-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Icon badge straddling the photo seam */}
              <div className="relative z-10 -mt-7 ml-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-card text-primary ring-1 ring-border shadow-warm transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:ring-primary">
                <service.icon className="h-6 w-6" />
              </div>

              <CardContent className="relative px-8 pb-8 pt-5">
                <h3 className="mb-3 text-xl font-semibold text-balance text-card-foreground">
                  {service.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
