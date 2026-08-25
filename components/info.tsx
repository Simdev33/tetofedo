import { Check } from "lucide-react"

const questions = [
  {
    question: "Hol alszunk?",
    answer:
      "Önálló brigád vagyunk, nem vendégségbe megyünk Önhöz. Nem kell a szálláson aggódnia, mindig bérlünk magunknak.",
  },
  {
    question: "Mit eszünk?",
    answer:
      "Önálló brigád vagyunk, nem vendégségbe megyünk Önhöz. Nem kell az élelmezésünkről gondoskodnia, amire szükségünk van, beszerezzük magunknak.",
  },
  {
    question: "Fogyasztunk-e alkoholt?",
    answer: "Nem vendégségbe járunk, munka közben nem fogyasztunk alkoholt.",
  },
]

export function Info() {
  return (
    <section
      id="informaciok"
      className="tone-slate relative overflow-hidden py-24 lg:py-32"
    >
      {/* Seam + roof-tile texture */}
      <div className="absolute inset-x-0 top-0 h-px section-seam" />
      <div className="pointer-events-none absolute inset-0 bg-tiles opacity-25" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[26rem] w-[26rem] glow-primary opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Heading side */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary">
              <span className="h-1.5 w-1.5 rotate-45 bg-primary" />
              Gyakori kérdések
            </span>
            <h2 className="mt-6 font-serif text-3xl font-normal tracking-tight text-balance text-foreground sm:text-5xl">
              Fontos információk
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Az ország egész területén dolgozunk. Ügyfeleink gyakran kérdezték
              tőlünk a következőket:
            </p>
          </div>

          {/* Q&A side */}
          <div className="space-y-4 lg:col-span-7">
            {questions.map((item) => (
              <div
                key={item.question}
                className="group rounded-2xl border border-border/70 surface-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-warm sm:p-8"
              >
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/25 transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:ring-primary">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground sm:text-xl">
                      {item.question}
                    </h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">
                      <span className="font-medium text-foreground">A válasz:</span>{" "}
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
