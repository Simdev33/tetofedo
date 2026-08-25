import Link from "next/link"
import { Phone, Mail, MapPin, ArrowUpRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Főoldal", href: "#" },
  { name: "Szolgáltatások", href: "#szolgaltatasok" },
  { name: "Rólunk", href: "#rolunk" },
  { name: "Munkáink", href: "#munkaink" },
  { name: "Információk", href: "#informaciok" },
  { name: "Kapcsolat", href: "#kapcsolat" },
]

const services = [
  "Tetőfedés",
  "Tetőfelújítás",
  "Ereszcsatorna",
  "Vízszigetelés",
  "Bádogozás",
  "Tetőjavítás",
]

export function Footer() {
  return (
    <footer className="tone-deep relative overflow-hidden bg-gradient-to-b from-[color-mix(in_oklab,var(--background)_92%,black)] to-[color-mix(in_oklab,var(--background)_60%,black)]">
      {/* Copper hairline along the top edge */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      {/* Roof-tile texture + warm glow */}
      <div className="pointer-events-none absolute inset-0 bg-tiles opacity-40" />
      <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 glow-primary opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* CTA band */}
        <div className="relative mt-16 overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/20 via-card/60 to-transparent p-8 shadow-warm-lg backdrop-blur-sm sm:p-10">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 glow-primary opacity-50" />
          <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="font-serif text-2xl font-normal text-balance text-foreground sm:text-3xl">
                Beázik a teteje? Segítünk még ma.
              </h3>
              <p className="mt-2 max-w-xl leading-relaxed text-muted-foreground">
                Hívjon minket egy ingyenes, kötelezettségmentes felmérésért és árajánlatért.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button size="lg" className="gap-2 px-8 shadow-warm" asChild>
                <Link href="tel:+36301234567">
                  <Phone className="h-4 w-4" />
                  Hívjon Most
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group gap-2 border-primary/30 bg-transparent px-8 hover:bg-primary/10"
                asChild
              >
                <Link href="#kapcsolat">
                  Árajánlat kérése
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-5">
            <Link href="#" className="inline-flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 ring-1 ring-primary/30">
                <span className="h-2.5 w-2.5 rotate-45 bg-primary" />
              </span>
              <span className="font-serif text-2xl font-normal">TetőMester</span>
            </Link>
            <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
              Professzionális tetőfedés és bádogozás szolgáltatások 7 éves tapasztalattal.
              Minőségi munka, megbízható kivitelezés, elégedett ügyfelek.
            </p>
            <div className="mt-6 flex items-center gap-3 rounded-xl border border-border/60 bg-card/40 px-4 py-3 backdrop-blur-sm">
              <Clock className="h-4 w-4 flex-shrink-0 text-primary" />
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground">H–Szo: 7:00 – 19:00</span> · Sürgős esetben hétvégén is
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-foreground">
              Navigáció
            </h3>
            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-4" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-foreground">
              Szolgáltatások
            </h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="#szolgaltatasok"
                    className="group inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-4" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-3">
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-foreground">
              Elérhetőség
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+36301234567"
                  className="group flex items-center gap-3 rounded-xl border border-border/60 bg-card/40 px-4 py-3 text-muted-foreground backdrop-blur-sm transition-colors hover:border-primary/40 hover:text-foreground"
                >
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Phone className="h-4 w-4" />
                  </span>
                  +36 30 123 4567
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@tetomester.hu"
                  className="group flex items-center gap-3 rounded-xl border border-border/60 bg-card/40 px-4 py-3 text-muted-foreground backdrop-blur-sm transition-colors hover:border-primary/40 hover:text-foreground"
                >
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Mail className="h-4 w-4" />
                  </span>
                  info@tetomester.hu
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-card/40 px-4 py-3 text-muted-foreground backdrop-blur-sm">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-4 w-4" />
                  </span>
                  1234 Budapest, Példa utca 1.
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border/60 py-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TetőMester. Minden jog fenntartva.
          </p>
          <p className="text-sm text-muted-foreground/70">
            Tetőfedés · Bádogozás · Vízszigetelés
          </p>
        </div>
      </div>
    </footer>
  )
}
