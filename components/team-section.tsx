import { Card } from "@/components/ui/card"
import { User } from "lucide-react"

export function TeamSection() {
  const founders = [
    {
      name: "Imad Sabri",
      role: "Président",
      description: "Vision, développement stratégique",
    },
    {
      name: "Clément Rivrin",
      role: "Trésorier & Responsable Qualité",
      description: "Gestion financière et assurance qualité",
    },
    {
      name: "Adrien Vallon",
      role: "Secrétaire Général & Responsable Opérations",
      description: "Coordination opérationnelle et administrative",
    },
  ]

  return (
    <section id="equipe" className="py-20 lg:py-32 bg-muted/30 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 text-balance">
            Les fondateurs de NEXIEA
          </h2>
          <p className="text-lg text-primary-foreground leading-relaxed text-pretty">
            Notre équipe fondatrice est composée d'étudiants engagés, portés par une vision claire :<br />créer une structure
            étudiante performante, crédible et professionnalisante pour tous ses membres.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {founders.map((founder, index) => (
            <Card key={index} className="p-8 bg-card border-border hover:shadow-white transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="h-24 w-24 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <User className="h-12 w-12 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-2">{founder.name}</h3>
                <p className="text-sm font-medium text-accent mb-3">{founder.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{founder.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          <Card className="p-6 bg-card border-border">
            <p className="text-sm text-muted-foreground leading-relaxed">
              💬 Chaque administrateur est engagé contractuellement.
            </p>
          </Card>
          <Card className="p-6 bg-card border-border">
            <p className="text-sm text-muted-foreground leading-relaxed">
              🎯 Les consultants sont formés, accompagnés, et valorisés via des lettres de recommandation, primes ou
              certifications internes.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
