import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/hero-roof.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center lg:px-8">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/80">
          7 Év Tapasztalat a Tetőfedésben
        </p>
        
        <h1 className="font-serif text-4xl font-normal tracking-tight text-primary-foreground sm:text-6xl lg:text-7xl text-balance">
          Minőségi tetőfedés
          <br />
          és bádogozás
        </h1>
        
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
          Professzionális tetőfedő és bádogos szolgáltatások Magyarországon. 
          Megbízható munka, tartós megoldások, elégedett ügyfelek.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="gap-2 px-8" asChild>
            <Link href="#kapcsolat">
              Ingyenes Árajánlat
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8" asChild>
            <Link href="#munkaink">
              Munkáink Megtekintése
            </Link>
          </Button>
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
