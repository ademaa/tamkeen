"use client"

import { Card } from "@/components/ui/card"
import { CheckIcon,CheckIcon,CheckIcon, Check } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import { translations } from "@/lib/i18n/translations"

export function Comparison() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="px-4 py-20 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{t.comparison.title}</h2>
        <p className="text-lg text-center text-muted-foreground mb-16 max-w-2xl mx-auto">{t.comparison.subtitle}</p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Global Giants */}
          <Card className="p-8 bg-[rgba(8,22,28,1)]">
            <h3 className="text-xl font-semibold mb-6 text-cyan-400">{t.comparison.globalGiants.title}</h3>
            

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckIcon className="h-5 w-5 mt-0.5 flex-shrink-0 text-cyan-400" />
                <span className="text-muted-foreground">{t.comparison.globalGiants.point1}</span>
              </li>
              
            </ul>
          </Card>

          {/* Local Agencies */}
          <Card className="p-8 bg-[rgba(0,186,219,0.05)] border-0 border-cyan-500">
            <h3 className="text-xl font-semibold mb-6 text-cyan-400">{t.comparison.localAgencies.title}</h3>
            

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckIcon className="h-5 w-5 mt-0.5 flex-shrink-0 text-cyan-400" />
                <span className="text-muted-foreground">{t.comparison.localAgencies.point1}</span>
              </li>
              
            </ul>
          </Card>

          {/* Tamkeen Solution */}
          <Card className="p-8 bg-cyan-500/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="relative">
              <h3 className="text-xl font-semibold mb-6 text-cyan-400">{t.comparison.tamkeen.title}</h3>
              

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">
                    <strong>{t.comparison.tamkeen.point1Title}</strong> {t.comparison.tamkeen.point1}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">
                    <strong>{t.comparison.tamkeen.point2Title}</strong> {t.comparison.tamkeen.point2}
                  </span>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
