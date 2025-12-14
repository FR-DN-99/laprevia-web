"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { getTranslation } from "@/lib/translations"

export function Footer() {
  const { language } = useLanguage()
  const t = getTranslation(language)

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">LA PREVIA GROUP</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{t.footer.description}</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">{t.footer.eventsTitle}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/drum-and-bass-tenerife"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.footer.event1}
                </Link>
              </li>
              <li>
                <Link href="/techno-tenerife" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.footer.event2}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">{t.footer.linksTitle}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/djs" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.footer.link1}
                </Link>
              </li>
              <li>
                <Link href="/events-tenerife" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.footer.link2}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.footer.link3}
                </Link>
              </li>
              <li>
                <a
                  href="mailto:contact@lapreviagroup.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.footer.link4}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} La Previa Group. {t.footer.copyright}
          </p>
          <p className="mt-2">{t.footer.keywords}</p>
        </div>
      </div>
    </footer>
  )
}
