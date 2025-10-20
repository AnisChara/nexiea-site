"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    console.log('mail')
    e.preventDefault()
    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact NEXIEA - ${formData.company || formData.name}`)
    const body = encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\nEntreprise: ${formData.company}\n\nMessage:\n${formData.message}`,
    )
    window.location.href = `mailto:contact@nexiea.fr?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Nous contacter
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Un projet en tête ? Discutons de la manière dont NEXIEA peut vous accompagner dans vos enjeux tech.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="p-8 bg-card border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nom complet
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jean Dupont"
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jean@entreprise.fr"
                      className="bg-background"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Entreprise
                  </label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Nom de votre entreprise"
                    className="bg-background"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Décrivez votre projet ou vos besoins..."
                    rows={6}
                    className="bg-background resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Envoyer le message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-card border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-1">Email</h3>
                  <a
                    href="mailto:contact@nexiea.fr"
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    contact@nexiea.fr
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-1">Localisation</h3>
                  <p className="text-sm text-muted-foreground">Paris & Ivry-sur-Seine</p>
                  <p className="text-xs text-muted-foreground mt-1">ESIEA</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-primary text-primary-foreground border-0">
              <h3 className="text-lg font-bold mb-2">Soutien ESIEA</h3>
              <p className="text-sm text-primary-foreground/80 leading-relaxed">
                NEXIEA bénéficie du soutien actif de l'administration de l'ESIEA, des enseignants et du service vie
                associative.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
