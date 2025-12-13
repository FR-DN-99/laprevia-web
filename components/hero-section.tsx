"use client"

import { Button } from "@/components/ui/button"
import { Music, Calendar } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { getTranslation } from "@/lib/translations"

export function HeroSection() {
  const { language } = useLanguage()
  const t = getTranslation(language)

  const scrollToEvents = () => {
    const element = document.getElementById("eventos")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/main-img.jpg"
          alt={language === "es" ? "Fiesta en Tenerife" : "Party in Tenerife"}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-balance">
            {t.hero.title} <span className="text-primary">{t.hero.titleHighlight}</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="text-base px-8 gap-2" onClick={scrollToEvents}>
              <Calendar className="h-5 w-5" />
              {t.hero.ctaEvents}
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 gap-2 bg-transparent">
              <Music className="h-5 w-5" />
              {t.hero.ctaLearnMore}
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  )
}
