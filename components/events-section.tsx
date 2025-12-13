"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Zap, Radio } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { getTranslation } from "@/lib/translations"
import Link from "next/link"

export function EventsSection() {
  const { language } = useLanguage()
  const t = getTranslation(language)

  const events = [
    {
      title: "1515",
      subtitle: language === "es" ? "Drum and Bass Tenerife" : "Drum and Bass Tenerife",
      icon: Zap,
      description:
        language === "es"
          ? "La fiesta de Drum and Bass más intensa de Tenerife. Beats rápidos, bajos profundos y la energía más explosiva de la isla."
          : "The most intense Drum and Bass party in Tenerife. Fast beats, deep bass and the most explosive energy on the island.",
      image: "/1515-cartel.jpg",
      link: "/drum-and-bass-tenerife",
    },
    {
      title: "NOT FOUND",
      subtitle: language === "es" ? "Techno Tenerife" : "Techno Tenerife",
      icon: Radio,
      description:
        language === "es"
          ? "Las mejores noches de techno en Tenerife. Sesiones marathon, producciones visuales y la mejor selección musical."
          : "The best techno nights in Tenerife. Marathon sessions, visual productions and the best musical selection.",
      image: "/techno-party-lights-tenerife-underground.jpg",
      link: "/techno-tenerife",
    },
  ]

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 text-balance">
            {t.events.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            {t.events.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {events.map((event, index) => {
            const Icon = event.icon
            return (
              <Card
                key={index}
                className="overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={`${event.title} - ${event.subtitle}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center mb-2">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </div>

                <div className="p-8 space-y-4">
                  <div>
                    <h3 className="text-3xl font-bold text-card-foreground mb-1">{event.title}</h3>
                    <p className="text-sm text-primary font-medium">{event.subtitle}</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{event.description}</p>

                  <Button asChild className="w-full">
                    <Link href={event.link}>{language === "es" ? "Ver Más" : "Learn More"}</Link>
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
