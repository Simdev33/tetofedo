import { CheckCircle } from "lucide-react"

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
    <section id="rolunk" className="py-24 lg:py-32 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src="/images/about-roof.jpg"
                alt="Tetőfedő munkások munka közben"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Stats overlay */}
            <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-card rounded-xl shadow-xl p-6 border border-border">
              <div className="flex gap-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-serif text-3xl font-normal text-primary">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1 whitespace-nowrap">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary mb-4">
              Rólunk
            </p>
            <h2 className="font-serif text-3xl font-normal tracking-tight text-foreground sm:text-4xl text-balance">
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

            <div className="mt-8 grid grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
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
