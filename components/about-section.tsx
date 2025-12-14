"use client"

import { Card } from "@/components/ui/card"
import { Users, MapPin, Trophy, Heart } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { getTranslation } from "@/lib/translations"

export function AboutSection() {
  const { language } = useLanguage()
  const t = getTranslation(language)

  const stats = [
    { icon: Users, label: t.about.stat1, value: "100+" },
    { icon: MapPin, label: t.about.stat2, value: t.about.stat2Value },
    { icon: Trophy, label: t.about.stat3, value: "5+" },
    { icon: Heart, label: t.about.stat4, value: "10K+" },
  ]

  return (
    <section id="nosotros" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-balance">
              {t.about.title}
            </h2>

            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                <strong className="text-foreground">La Previa Group</strong> {t.about.paragraph1}
              </p>

              <p>{t.about.paragraph2}</p>

              <p>{t.about.paragraph3}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card key={index} className="p-6 bg-card border-border text-center space-y-4">
                  <div className="w-12 h-12 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-card-foreground mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
