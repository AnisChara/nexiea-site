"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

export function ContactSection() {
  const [state, handleSubmit] = useForm("manpzyor");

  if (state.succeeded) {
    return (
      <section className="py-32 flex flex-col items-center justify-center bg-muted/30 text-center">
        <CheckCircle2 className="h-12 w-12 text-green-500 mb-4" />
        <h2 className="text-3xl font-semibold text-foreground mb-2">
          Merci pour votre message !
        </h2>
        <p className="text-muted-foreground max-w-md">
          Nous reviendrons vers vous dans les plus brefs délais 🚀
        </p>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nous contacter
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Un projet en tête ? Discutons de la manière dont{" "}
            <span className="font-semibold text-accent">NEXIEA</span> peut vous
            accompagner dans vos enjeux tech.
          </p>
        </div>

        {/* Grille principale */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Formulaire */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-card border-border shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Adresse email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="exemple@domaine.fr"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Décrivez votre projet ou votre demande..."
                    required
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2"
                  disabled={state.submitting}
                >
                  <Send className="h-4 w-4" />
                  {state.submitting ? "Envoi en cours..." : "Envoyer le message"}
                </Button>
              </form>
            </Card>
          </div>

          {/* Informations de contact */}
          <div className="space-y-6">
            <Card className="p-6 bg-card border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-1">
                    Email
                  </h3>
                  <a
                    href="mailto:nexiea.team@gmail.com"
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    nexiea.team@gmail.com
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
                  <h3 className="text-sm font-medium text-foreground mb-1">
                    Localisation
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Paris & Ivry-sur-Seine
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">ESIEA</p>
                </div>
              </div>
            </Card>

<Card className="p-6 bg-primary text-primary-foreground border-0">
  <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-bold">Soutien ESIEA</h3>

    <img
      src="/logo-esiea-blanc.png"
      alt="Logo ESIEA"
      className="w-20 h-12 object-contain rounded-md p-1"
    />
  </div>

  <p className="text-sm text-primary-foreground/80 leading-relaxed">
    NEXIEA bénéficie du soutien actif de l'administration, des enseignants et du
    service vie associative de l'ESIEA.
  </p>
</Card>

          </div>
        </div>
      </div>
    </section>
  );
}
