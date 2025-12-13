"use client"

import { Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es")
  }

  return (
    <Button variant="outline" size="sm" onClick={toggleLanguage} className="gap-2 bg-transparent">
      <Languages className="h-4 w-4" />
      <span className="font-medium">{language === "es" ? "ES" : "EN"}</span>
    </Button>
  )
}
