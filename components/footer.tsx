import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">NEXIEA</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed max-w-md">
              Structure étudiante d'excellence de l'ESIEA spécialisée en cybersécurité, IA, data et développement web.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link href="#accueil" className="hover:text-accent transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="#qui-sommes-nous" className="hover:text-accent transition-colors">
                  Qui sommes-nous ?
                </Link>
              </li>
              <li>
                <Link href="#equipe" className="hover:text-accent transition-colors">
                  Équipe
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="mailto:nexiea.team@gmail.com" className="hover:text-accent transition-colors">
                  nexiea.team@gmail.com
                </a>
              </li>
              <li>Paris & Ivry-sur-Seine</li>
              <li>ESIEA</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>© {new Date().getFullYear()} NEXIEA. Tous droits réservés.</p>
            <p>Association étudiante ESIEA</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
