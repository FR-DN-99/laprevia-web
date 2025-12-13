import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"

export const metadata: Metadata = {
  title: "Sobre Nosotros - La Previa Group | Promotora de Eventos en Tenerife",
  description:
    "La Previa Group es la promotora líder de eventos de música electrónica en Tenerife. Organizamos 1515 (Drum and Bass) y Not Found (Techno), las mejores fiestas de la isla.",
  keywords:
    "la previa group, promotora eventos tenerife, organizador fiestas tenerife, electronic music promoter, drum and bass promoter, techno promoter",
  openGraph: {
    title: "Sobre Nosotros - La Previa Group Tenerife",
    description: "La promotora líder de eventos de música electrónica en Tenerife",
    type: "website",
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
