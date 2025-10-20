import { Card } from "@/components/ui/card"
import { Shield, Database, Brain, Code } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Shield,
      title: "Cybersécurité",
      description: "Audit de sécurité, sensibilisation, veille vulnérabilités",
      features: ["Audits de sécurité", "Tests d'intrusion", "Sensibilisation équipes", "Veille cyber"],
    },
    {
      icon: Database,
      title: "Data / Analyse de données",
      description: "Exploration, visualisation, automatisation",
      features: ["Exploration de données", "Visualisation interactive", "Automatisation ETL", "Tableaux de bord"],
    },
    {
      icon: Brain,
      title: "IA / Machine Learning",
      description: "Proof of concept, modèles simples, intégration",
      features: ["Proof of concept", "Modèles prédictifs", "Intégration IA", "Optimisation algorithmes"],
    },
    {
      icon: Code,
      title: "Développement Web",
      description: "Sites vitrines, outils internes, front/back léger",
      features: ["Sites vitrines", "Applications web", "Outils internes", "APIs REST"],
    },
  ]

  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">Nos services</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Nous proposons des prestations sur mesure pour répondre aux besoins concrets des entreprises tech, PME,
            startups ou grands groupes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="p-8 bg-card border-border hover:border-accent/50 transition-colors group">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            )
          })}
        </div>

        <Card className="p-8 lg:p-12 bg-muted border-0">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Supervision qualité</h3>
            <p className="text-muted-foreground leading-relaxed">
              Chaque mission est supervisée par un chef de projet étudiant et validée par notre pôle qualité pour
              garantir des livrables professionnels.
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
