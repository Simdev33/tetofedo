import { ArrowRight, Phone, ShieldCheck, Star, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const highlights = [
  { icon: ShieldCheck, label: "Garanciális munkavégzés" },
  { icon: Clock, label: "24 órán belüli visszahívás" },
  { icon: Star, label: "500+ befejezett projekt" },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: `url('/images/hero-roof.jpg')`,
        }}
      >
        {/* Layered overlays: darken, warm the shadows, deepen the bottom edge */}
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-transparent to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
      </div>

      {/* Decorative glow */}
      <div className="pointer-events-none absolute -top-40 -right-32 h-[32rem] w-[32rem] glow-primary opacity-60" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center lg:px-8">
        {/* Eyebrow badge */}
        <div className="mx-auto mb-8 inline-flex items-center gap-2.5 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground/90">
            7 Év Tapasztalat a Tetőfedésben
          </span>
        </div>
        
        <h1 className="font-serif text-4xl font-normal tracking-tight text-primary-foreground sm:text-6xl lg:text-7xl text-balance">
          Minőségi tetőfedés
          <br />
          és <span className="text-gradient-primary">bádogozás</span>
        </h1>

        {/* Ornamental rule */}
        <div className="mx-auto mt-8 flex items-center justify-center gap-3">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-primary/70" />
          <span className="h-1.5 w-1.5 rotate-45 bg-primary" />
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-primary/70" />
        </div>
        
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
          Professzionális tetőfedő és bádogos szolgáltatások Magyarországon. 
          Megbízható munka, tartós megoldások, elégedett ügyfelek.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="gap-2 px-8 shadow-warm-lg"
            asChild
          >
            <Link href="tel:+36301234567">
              <Phone className="h-4 w-4" />
              Hívjon Most
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="group gap-2 border-primary-foreground/30 bg-primary-foreground/5 px-8 text-primary-foreground backdrop-blur-md hover:bg-primary-foreground/15 hover:text-primary-foreground"
            asChild
          >
            <Link href="#kapcsolat">
              Ingyenes Árajánlat
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="px-8 text-primary-foreground/90 hover:bg-primary-foreground/10 hover:text-primary-foreground"
            asChild
          >
            <Link href="#munkaink">
              Munkáink Megtekintése
            </Link>
          </Button>
        </div>

        {/* Trust strip */}
        <div className="mx-auto mt-16 flex max-w-3xl flex-col items-center justify-center gap-4 border-t border-primary-foreground/10 pt-8 sm:flex-row sm:gap-10">
          {highlights.map((item) => (
            <div key={item.label} className="flex items-center gap-2.5">
              <item.icon className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary-foreground/75">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
