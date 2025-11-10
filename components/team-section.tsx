import { Card } from "@/components/ui/card"
import { User } from "lucide-react"

export function TeamSection() {
  const founders = [
    {
      name: "Imad Sabri",
      role: "Président",
      link: "https://www.linkedin.com/in/imad-sabri/",
    },
    {
      name: "Clément Rivrin",
      role: "Directeur Financier",
      link: "https://www.linkedin.com/in/rivrin-cl%C3%A9ment/",
    },
    {
      name: "Adrien Vallon",
      role: "Directeur des Opérations",
      link: "https://www.linkedin.com/in/adrien-vallon-367971269/",
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
            <a href={founder.link} key={index}>
            <Card  className="p-8 bg-card border-border hover:shadow-white transition-shadow" >
              <div className="flex flex-col items-center text-center">
                <h3 className="text-xl font-bold text-card-foreground mb-2">{founder.name}</h3>
                <p className="text-sm font-medium text-accent mb-3">{founder.role}</p>
              </div>
            </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
