"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import { translations } from "@/lib/i18n/translations"

export function Pricing() {
  const { language } = useLanguage()
  const t = translations[language]

  const scrollToWaitlist = () => {
    const element = document.getElementById("waitlist-form")
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" })
      // Focus the email input after scrolling
      setTimeout(() => {
        const input = element.querySelector('input[type="email"]') as HTMLInputElement
        input?.focus()
      }, 500)
    }
  }

  return (
    <section className="px-4 py-20 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.pricing.title}</h2>
          <p className="text-xl text-muted-foreground">{t.pricing.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Starter Plan */}
          <Card className="p-8 bg-card border-border">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">{t.pricing.starter.name}</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold">{t.pricing.starter.price}</span>
                <span className="text-muted-foreground">{t.pricing.starter.period}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">{t.pricing.starter.description}</p>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{t.pricing.starter.feature1}</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{t.pricing.starter.feature2}</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{t.pricing.starter.feature3}</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{t.pricing.starter.feature4}</span>
              </li>
            </ul>

            <Button onClick={scrollToWaitlist} className="w-full bg-transparent" variant="outline">
              {t.pricing.starter.cta}
            </Button>
          </Card>

          {/* Pro Plan */}
          <Card className="p-8 bg-gradient-to-br from-cyan-500/5 to-cyan-600/5 border-cyan-500/30 relative">
            <div className="absolute top-4 right-4"></div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">{t.pricing.pro.name}</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold">{t.pricing.pro.price}</span>
                <span className="text-muted-foreground">{t.pricing.pro.period}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">{t.pricing.pro.description}</p>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{t.pricing.pro.feature1}</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{t.pricing.pro.feature2}</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{t.pricing.pro.feature3}</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{t.pricing.pro.feature4}</span>
              </li>
            </ul>

            <Button
              onClick={scrollToWaitlist}
              className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white hover:from-cyan-600 hover:to-cyan-700 shadow-lg shadow-cyan-500/20"
            >
              {t.pricing.pro.cta}
            </Button>
          </Card>
        </div>

        <p className="text-center text-muted-foreground mt-8">{t.pricing.annualSave}</p>
      </div>
    </section>
  )
}
