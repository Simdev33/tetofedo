"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

const contactInfo = [
  {
    icon: Phone,
    label: "Telefon",
    value: "+36 30 123 4567",
    href: "tel:+36301234567",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@tetomester.hu",
    href: "mailto:info@tetomester.hu",
  },
  {
    icon: MapPin,
    label: "Cím",
    value: "1234 Budapest, Példa utca 1.",
    href: "#",
  },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("[v0] Form submitted:", formData)
  }

  return (
    <section id="kapcsolat" className="tone-deep relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px section-seam" />
      <div className="pointer-events-none absolute inset-0 bg-tiles opacity-25" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[30rem] w-[30rem] glow-primary opacity-35" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary">
            <span className="h-1.5 w-1.5 rotate-45 bg-primary" />
            Kapcsolat
          </span>
          <h2 className="mt-6 font-serif text-3xl font-normal tracking-tight text-balance text-foreground sm:text-5xl">
            Kérjen ingyenes árajánlatot
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Vegye fel velünk a kapcsolatot és 24 órán belül visszahívjuk!
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((item) => (
              <Card
                key={item.label}
                className="group rounded-2xl border border-border/70 surface-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-warm"
              >
                <CardContent className="p-6">
                  <a
                    href={item.href}
                    className="flex items-start gap-4"
                  >
                    <div className="h-12 w-12 flex-shrink-0 rounded-xl bg-primary/10 ring-1 ring-primary/20 flex items-center justify-center transition-colors group-hover:bg-primary group-hover:text-primary-foreground group-hover:ring-primary">
                      <item.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="text-foreground font-medium mt-1">{item.value}</p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-3 rounded-2xl border border-border/70 surface-card shadow-warm-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Név
                    </label>
                    <Input
                      id="name"
                      placeholder="Az Ön neve"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="email@pelda.hu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Telefonszám
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+36 30 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Üzenet
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Írja le, miben segíthetünk..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full gap-2 shadow-warm">
                  <Send className="h-4 w-4" />
                  Üzenet Küldése
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  Vagy hívjon minket közvetlenül:{" "}
                  <a href="tel:+36301234567" className="font-medium text-primary hover:underline">
                    +36 30 123 4567
                  </a>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
