import { CheckCircle, Award } from "lucide-react"

const features = [
  "7 év szakmai tapasztalat",
  "Garanciális munkavégzés",
  "Rugalmas időpontok",
  "Kompetitív árak",
  "Szakképzett csapat",
  "Országos lefedettség",
]

const stats = [
  { value: "7+", label: "Év Tapasztalat" },
  { value: "500+", label: "Befejezett Projekt" },
  { value: "100%", label: "Ügyfél Elégedettség" },
]

export function About() {
  return (
    <section id="rolunk" className="tone-slate relative overflow-hidden py-24 lg:py-32">
      {/* Seam + roof-tile texture */}
      <div className="absolute inset-x-0 top-0 h-px section-seam" />
      <div className="pointer-events-none absolute inset-0 bg-tiles opacity-30" />
      <div className="pointer-events-none absolute -right-32 top-10 h-[26rem] w-[26rem] glow-primary opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Image Side */}
          <div className="relative">
            {/* Offset copper frame */}
            <div className="pointer-events-none absolute -left-4 -top-4 h-32 w-32 rounded-tl-2xl border-l-2 border-t-2 border-primary/40" />
            <div className="pointer-events-none absolute -bottom-4 -right-4 h-32 w-32 rounded-br-2xl border-b-2 border-r-2 border-primary/40 lg:-right-8" />

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-warm-lg ring-1 ring-border/70">
              <img
                src="/images/about-roof.jpg"
                alt="Tetőfedő munkások munka közben"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Experience badge */}
            <div className="absolute -left-3 top-6 flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-primary-foreground shadow-warm-lg lg:-left-6">
              <Award className="h-4 w-4" />
              <span className="text-sm font-medium">Garanciával</span>
            </div>

            {/* Stats overlay */}
            <div className="absolute -bottom-8 -right-4 rounded-2xl border border-border surface-card p-6 shadow-warm-lg lg:-right-8">
              <div className="flex gap-6 sm:gap-8">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`text-center ${index > 0 ? "border-l border-border/70 pl-6 sm:pl-8" : ""}`}
                  >
                    <div className="font-serif text-3xl font-normal text-gradient-primary">
                      {stat.value}
                    </div>
                    <div className="mt-1 whitespace-nowrap text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="mt-12 lg:mt-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary">
              <span className="h-1.5 w-1.5 rotate-45 bg-primary" />
              Rólunk
            </span>
            <h2 className="mt-6 font-serif text-3xl font-normal tracking-tight text-balance text-foreground sm:text-4xl">
              Megbízható partner a tetőfedésben
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Cégünk 7 éve foglalkozik tetőfedéssel és bádogozással. Tapasztalt csapatunk 
              minden munkát precízen, határidőre és garanciával végez el. Legyen szó 
              új tető építéséről vagy felújításról, mi segítünk.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Célunk, hogy minden ügyfelünk elégedetten tekintsen fel az új tetejére. 
              Ezért mindig a legjobb anyagokat és legmodernebb technikákat használjuk.
            </p>

            {/* Owner signature */}
            <div className="mt-8 border-l-2 border-primary/50 pl-5">
              <p className="font-serif text-2xl font-normal text-foreground">
                Kiss Endre
              </p>
              <p className="mt-1 text-sm uppercase tracking-[0.14em] text-muted-foreground">
                Tulajdonos
              </p>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 rounded-xl border border-border/60 bg-card/50 px-4 py-3 transition-colors hover:border-primary/40"
                >
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
