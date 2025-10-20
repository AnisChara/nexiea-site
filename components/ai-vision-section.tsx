import { Card } from "@/components/ui/card"
import { Sparkles, Zap, TrendingUp, Brain } from "lucide-react"

export function AIVisionSection() {
  return (
    <section className="py-20 lg:py-32 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground mb-6 backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Innovation & Excellence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 text-balance">
              NEXIEA × IA
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed text-pretty">
              L'intelligence artificielle au cœur de notre approche pour automatiser, optimiser et innover.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground">
              <div className="p-3 rounded-lg bg-accent/20 w-fit mb-4">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold mb-2">Automatisation</h3>
              <p className="text-sm text-primary-foreground/80 leading-relaxed">
                Organisation allégée grâce à l'automatisation intelligente de nos processus internes.
              </p>
            </Card>

            <Card className="p-6 bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground">
              <div className="p-3 rounded-lg bg-accent/20 w-fit mb-4">
                <Brain className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold mb-2">Expertise IA</h3>
              <p className="text-sm text-primary-foreground/80 leading-relaxed">
                Étudiants formés aux dernières technologies d'IA et de machine learning.
              </p>
            </Card>

            <Card className="p-6 bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground">
              <div className="p-3 rounded-lg bg-accent/20 w-fit mb-4">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold mb-2">Innovation</h3>
              <p className="text-sm text-primary-foreground/80 leading-relaxed">
                Intégration de solutions IA innovantes pour vos projets d'entreprise.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
