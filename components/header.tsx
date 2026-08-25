"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Főoldal", href: "#" },
  { name: "Szolgáltatások", href: "#szolgaltatasok" },
  { name: "Rólunk", href: "#rolunk" },
  { name: "Munkáink", href: "#munkaink" },
  { name: "Információk", href: "#informaciok" },
  { name: "Kapcsolat", href: "#kapcsolat" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // The header floats transparently over the hero, then solidifies on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const solid = scrolled || mobileMenuOpen

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-border/70 bg-background/85 backdrop-blur-xl shadow-warm"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="#" className="group -m-1.5 inline-flex items-center gap-3 p-1.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 ring-1 ring-primary/30 transition-colors group-hover:bg-primary/25">
              <span className="h-2.5 w-2.5 rotate-45 bg-primary" />
            </span>
            <span className="font-serif text-2xl font-normal tracking-tight text-foreground">
              TetőMester
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Menü megnyitása</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-6 xl:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group relative text-sm font-medium leading-6 text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button className="gap-2 shadow-warm" asChild>
            <Link href="tel:+36301234567">
              <Phone className="h-4 w-4" />
              Hívjon Most
            </Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border/60 lg:hidden">
          <div className="space-y-1 px-6 pb-6 pt-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-lg px-3 py-2.5 text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Button className="w-full gap-2 shadow-warm" asChild>
                <Link href="tel:+36301234567" onClick={() => setMobileMenuOpen(false)}>
                  <Phone className="h-4 w-4" />
                  Hívjon Most
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
