"use client"

import { Card } from "@/components/ui/card"
import { Wand2, MessageSquare, Rocket } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export function HowItWorks() {
  const { t } = useLanguage()

  return (
    <section className="px-4 py-20">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{t.features.title}</h2>
        <p className="text-lg text-center text-muted-foreground mb-16 max-w-2xl mx-auto">{t.features.subtitle}</p>

        <div className="space-y-12">
          {/* Step 1 */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-semibold mb-4">
                {t.features.step1.badge}
              </div>
              <h3 className="text-2xl font-bold mb-4">{t.features.step1.title}</h3>
              <p className="text-muted-foreground text-lg mb-6">{t.features.subtitle}</p>
            </div>
            <div className="grid gap-4">
              <Card className="p-6 bg-gradient-to-br from-cyan-500/5 to-cyan-600/5 border-cyan-500/20">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-cyan-500/10">
                    <Wand2 className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{t.features.step1.optionA}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{t.features.step1.optionAText}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-amber-500/10">
                    <svg className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{t.features.step1.optionB}</h4>
                    <p className="text-sm text-muted-foreground">{t.features.step1.optionBText}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <Card className="p-8 bg-gradient-to-br from-slate-900/50 to-slate-950/50 border-slate-800/50">
                <div className="space-y-4">
                  <div className="flex justify-end">
                    <div className="max-w-[80%] bg-cyan-500/10 border border-cyan-500/30 rounded-2xl px-4 py-3">
                      <p className="text-sm">{t.features.step2.answer1}</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="max-w-[80%] bg-slate-800/50 border border-slate-700 rounded-2xl px-4 py-3">
                      <p className="text-sm text-muted-foreground">{t.features.step2.question1}</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="max-w-[80%] bg-cyan-500/10 border border-cyan-500/30 rounded-2xl px-4 py-3">
                      <p className="text-sm">{t.features.step2.answer2}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-semibold mb-4">
                {t.features.step2.badge}
              </div>
              <h3 className="text-2xl font-bold mb-4">{t.features.step2.title}</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <MessageSquare className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>
                    {t.features.step2.question1} <strong>{t.features.step2.answer1}</strong>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MessageSquare className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>
                    {t.features.step2.question2} <strong>{t.features.step2.answer2}</strong>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-semibold mb-4">
                {t.features.step3.badge}
              </div>
              <h3 className="text-2xl font-bold mb-4">{t.features.step3.title}</h3>
              <ul className="space-y-3 text-muted-foreground text-lg">
                <li className="flex items-start gap-3">
                  <Rocket className="h-5 w-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <span>{t.features.step3.point1}</span>
                </li>

                <li className="flex items-start gap-3">
                  <Rocket className="h-5 w-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <span>
                    <strong className="font-normal">{t.features.step3.point2}</strong>
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <Card className="p-8 bg-gradient-to-br from-cyan-500/5 to-cyan-600/5 border-cyan-500/30">
                <div className="flex items-center justify-center py-12">
                  <div className="text-center space-y-4">
                    <div className="inline-flex p-4 rounded-full bg-cyan-500/20">
                      <Rocket className="h-12 w-12 text-cyan-400" />
                    </div>
                    <p className="text-2xl font-bold">{t.features.step3.title}</p>
                    <p className="text-muted-foreground">yourbusiness.com</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
