"use client"

import { Card } from "@/components/ui/card"
import { MessageSquare, Sparkles, Zap } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import { translations } from "@/lib/i18n/translations"

export function Features() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="features" className="px-4 py-20">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{t.features.title}</h2>
        <p className="text-lg text-center text-muted-foreground mb-16 max-w-2xl mx-auto">{t.features.subtitle}</p>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-8 bg-card border-border hover:border-cyan-500/50 transition-colors group">
            <div className="mb-6">
              <div className="inline-flex p-3 rounded-xl bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors">
                <Sparkles className="h-8 w-8 text-cyan-500" />
              </div>
            </div>
            <div className="mb-2 text-sm font-semibold text-cyan-400">{t.features.step1.badge}</div>
            <h3 className="text-xl font-semibold mb-3">{t.features.step1.title}</h3>
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <p className="text-sm">
                <strong className="text-foreground">{t.features.step1.optionA}</strong> {t.features.step1.optionAText}
              </p>
              <p className="text-sm">
                <strong className="text-foreground">{t.features.step1.optionB}</strong> {t.features.step1.optionBText}
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-card border-border hover:border-amber-500/50 transition-colors group">
            <div className="mb-6">
              <div className="inline-flex p-3 rounded-xl bg-amber-500/10 group-hover:bg-amber-500/20 transition-colors">
                <MessageSquare className="h-8 w-8 text-amber-500" />
              </div>
            </div>
            <div className="mb-2 text-sm font-semibold text-amber-400">{t.features.step2.badge}</div>
            <h3 className="text-xl font-semibold mb-3">{t.features.step2.title}</h3>
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <p className="text-sm">
                {t.features.step2.question1} <strong className="text-foreground">{t.features.step2.answer1}</strong>
              </p>
              <p className="text-sm">
                {t.features.step2.question2} <strong className="text-foreground">{t.features.step2.answer2}</strong>
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-card border-border hover:border-green-500/50 transition-colors group">
            <div className="mb-6">
              <div className="inline-flex p-3 rounded-xl bg-green-500/10 group-hover:bg-green-500/20 transition-colors">
                <Zap className="h-8 w-8 text-green-500" />
              </div>
            </div>
            <div className="mb-2 text-sm font-semibold text-green-400">{t.features.step3.badge}</div>
            <h3 className="text-xl font-semibold mb-3">{t.features.step3.title}</h3>
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <p className="text-sm">{t.features.step3.point1}</p>
              <p className="text-sm">
                <strong className="text-foreground">{t.features.step3.point2}</strong>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
