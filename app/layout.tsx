import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/lib/language-context"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title:
    "La Previa Group | Fiestas Tenerife - Drum and Bass, Techno y Eventos | Parties Tenerife - Drum and Bass, Techno Events",
  description:
    "La Previa Group es la mejor promotora de eventos de música electrónica en Tenerife. Organizamos fiestas de Drum and Bass, Techno y más. The best electronic music event promoter in Tenerife. We organize Drum and Bass, Techno parties and more.",
  keywords:
    "fiesta tenerife, drum and bass tenerife, techno tenerife, fiestas electronicas tenerife, eventos tenerife, música electrónica tenerife, dnb tenerife, la previa group, party tenerife, parties tenerife, electronic music tenerife, tenerife nightlife, tenerife clubs, tenerife events",
  openGraph: {
    title: "La Previa Group | Fiestas Tenerife - Drum and Bass, Techno",
    description:
      "Los mejores eventos de música electrónica en Tenerife. The best electronic music events in Tenerife. Drum and Bass, Techno y más.",
    type: "website",
    locale: "es_ES",
    alternateLocale: "en_US",
  },
  alternates: {
    languages: {
      es: "/",
      en: "/",
    },
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
