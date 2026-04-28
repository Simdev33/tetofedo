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
    <section id="kapcsolat" className="py-24 lg:py-32 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary mb-4">
            Kapcsolat
          </p>
          <h2 className="font-serif text-3xl font-normal tracking-tight text-foreground sm:text-5xl text-balance">
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
              <Card key={item.label} className="border-border bg-card">
                <CardContent className="p-6">
                  <a
                    href={item.href}
                    className="flex items-start gap-4 group"
                  >
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
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
          <Card className="lg:col-span-3 border-border bg-card">
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
                <Button type="submit" size="lg" className="w-full gap-2">
                  <Send className="h-4 w-4" />
                  Üzenet Küldése
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
