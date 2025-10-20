import { Card } from "@/components/ui/card"
import { Target, Eye, Heart } from "lucide-react"

export function AboutSection() {
  return (
    <section id="qui-sommes-nous" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo + titre */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <img
            src="/LOGO_NEXIEA.png"
            alt="Logo NEXIEA"
            className="mx-auto mb-6 w-28 h-auto sm:w-36"
          />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Qui sommes-nous ?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            NEXIEA est une initiative ambitieuse lancée par des étudiants de l'ESIEA, l'une des meilleures écoles
            d'ingénieurs en informatique en France, classée parmi les références dans les domaines de la cybersécurité,
            de la data et de l'intelligence artificielle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 bg-card border-border">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-accent/10">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-card-foreground mb-3">Notre mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Créer une passerelle entre l'école et l'entreprise, en professionnalisant les étudiants tout en
                  apportant une réelle valeur aux organisations partenaires.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card border-border">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-accent/10">
                <Eye className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-card-foreground mb-3">Notre vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Faire de NEXIEA la référence des structures étudiantes tech en France, en s'appuyant sur l'excellence
                  technique de l'ESIEA et une organisation agile.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 lg:p-12 bg-primary text-primary-foreground border-0">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="p-4 rounded-lg bg-primary-foreground/10 shrink-0">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Notre différence</h3>
                <p className="text-primary-foreground/90 leading-relaxed mb-4">
                  Notre force : un haut niveau d’exigence, une organisation agile grâce à l’automatisation, et une
                  ambition claire : devenir un acteur de référence dans l’écosystème tech français.
                </p>
                <p className="text-primary-foreground/80 leading-relaxed">
                  NEXIEA est une association étudiante structurée comme une entreprise, avec une équipe dédiée à la
                  stratégie, à la qualité et un réseau de consultants spécialisés mobilisables selon les projets.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-2 px-6 py-4 rounded-lg bg-muted">
            <p className="text-sm font-medium text-muted-foreground">Basée à</p>
            <p className="text-lg font-bold text-foreground">Paris & Ivry-sur-Seine</p>
          </div>
        </div>
      </div>
    </section>
  )
}
