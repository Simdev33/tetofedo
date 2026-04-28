import Link from "next/link"
import { Phone, Mail } from "lucide-react"

const navigation = [
  { name: "Főoldal", href: "#" },
  { name: "Szolgáltatások", href: "#szolgaltatasok" },
  { name: "Rólunk", href: "#rolunk" },
  { name: "Munkáink", href: "#munkaink" },
  { name: "Kapcsolat", href: "#kapcsolat" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="#" className="font-serif text-2xl font-normal">
              TetőMester
            </Link>
            <p className="mt-4 text-primary-foreground/70 max-w-md leading-relaxed">
              Professzionális tetőfedés és bádogozás szolgáltatások 7 éves tapasztalattal. 
              Minőségi munka, megbízható kivitelezés, elégedett ügyfelek.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">
              Navigáció
            </h3>
            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">
              Elérhetőség
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+36301234567"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  +36 30 123 4567
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@tetomester.hu"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  info@tetomester.hu
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <p className="text-center text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} TetőMester. Minden jog fenntartva.
          </p>
        </div>
      </div>
    </footer>
  )
}
