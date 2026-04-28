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
    <section id="szolgaltatasok" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary mb-4">
            Szolgáltatásaink
          </p>
          <h2 className="font-serif text-3xl font-normal tracking-tight text-foreground sm:text-5xl text-balance">
            Teljes körű tetőfedő és bádogos megoldások
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Minden szolgáltatásunkra garanciát vállalunk. Szakértő csapatunk mindig a legjobb megoldást kínálja.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card 
              key={service.title} 
              className="group border border-border bg-card hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-8">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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
