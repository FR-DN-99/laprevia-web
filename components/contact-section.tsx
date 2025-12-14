"use client"

import { Card } from "@/components/ui/card"
import { Instagram, Facebook, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { getTranslation } from "@/lib/translations"

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "#", username: "@lapreviagroup" },
  { icon: Facebook, label: "Facebook", href: "#", username: "La Previa Group" },
]

export function ContactSection() {
  const { language } = useLanguage()
  const t = getTranslation(language)

  return (
    <section id="contacto" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 text-balance">
              {t.contact.title}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground text-balance leading-relaxed">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <Card
                  key={index}
                  className="p-8 bg-card border-border hover:border-primary transition-all group cursor-pointer"
                >
                  <a href={social.href} className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-card-foreground mb-1">{social.label}</div>
                      <div className="text-muted-foreground">{social.username}</div>
                    </div>
                  </a>
                </Card>
              )
            })}
          </div>

          <Card className="p-8 md:p-12 bg-card border-border text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-card-foreground mb-2">{t.contact.collaborateTitle}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{t.contact.collaborateText}</p>
              <Button size="lg" className="gap-2">
                <Mail className="h-5 w-5" />
                {t.contact.contactButton}
              </Button>
            </div>
          </Card>

          <div className="mt-12 text-center">
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <p>{t.contact.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
