import { Home, Wrench, Droplets, Shield, Settings, Hammer } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    title: "Tetőfedés",
    description: "Új tetők kivitelezése minden típusú fedőanyaggal: cserép, pala, bitumenes zsindely.",
    icon: Home,
  },
  {
    title: "Tetőfelújítás",
    description: "Meglévő tetők teljes felújítása, hőszigetelés, szerkezetmegerősítés.",
    icon: Wrench,
  },
  {
    title: "Ereszcsatorna",
    description: "Ereszcsatornák telepítése, cseréje és karbantartása minden épülettípushoz.",
    icon: Droplets,
  },
  {
    title: "Vízszigetelés",
    description: "Lapostetők, erkélyek és teraszok professzionális vízszigetelése.",
    icon: Shield,
  },
  {
    title: "Bádogozás",
    description: "Egyedi bádogos munkák: párkányok, kémények, szegélyek burkolása.",
    icon: Settings,
  },
  {
    title: "Tetőjavítás",
    description: "Gyors és megbízható tetőjavítás beázás, vihar- vagy egyéb károk esetén.",
    icon: Hammer,
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
              className="group relative overflow-hidden rounded-2xl border border-border/70 surface-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-warm-lg"
            >
              {/* Copper edge that lights up on hover */}
              <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <CardContent className="relative p-8">
                {/* Watermark index */}
                <span className="pointer-events-none absolute right-6 top-5 font-serif text-5xl leading-none text-foreground/5 transition-colors duration-300 group-hover:text-primary/15">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:ring-primary">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-card-foreground">
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
