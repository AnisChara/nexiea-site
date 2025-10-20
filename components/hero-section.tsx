import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
<section id="accueil" className="relative flex items-center justify-center overflow-hidden bg-primary min-h-[80vh] pt-16">
  {/* Background Pattern */}
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="max-w-4xl mx-auto text-center">

      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 text-balance leading-snug">
        L'excellence tech étudiante au service de votre entreprise
      </h1>

      <p className="text-base sm:text-lg text-primary-foreground/80 mb-6 max-w-2xl mx-auto text-pretty leading-tight">
        NEXIEA accompagne les entreprises sur leurs enjeux tech à travers des missions concrètes réalisées par des
        étudiants rigoureux, passionnés et formés aux technologies de demain.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="#services">
            Découvrir nos services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/20"
        >
          <Link href="#qui-sommes-nous">En savoir plus</Link>
        </Button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 text-primary-foreground/70 text-sm">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-accent" />
          <span>Data</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-accent" />
          <span>Cybersécurité</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-accent" />
          <span>IA</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-accent" />
          <span>Développement Web</span>
        </div>
      </div>
    </div>
  </div>

</section>

  )
}
