"use client"

import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import { translations } from "@/lib/i18n/translations"

export function ChatDemo() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="demo" className="px-4 py-20">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{t.demo.title}</h2>
        <p className="text-lg text-center text-muted-foreground mb-12">{t.demo.subtitle}</p>

        <Card className="p-6 md:p-8 bg-gradient-to-br from-slate-900/50 to-slate-950/50 backdrop-blur-xl border-slate-800/50 shadow-2xl">
          <div className="space-y-6">
            <div className="flex justify-end">
              <div className="max-w-[80%] rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border border-cyan-500/30 px-6 py-4 shadow-lg shadow-cyan-500/10">
                <p className="text-base md:text-lg text-foreground font-medium">{t.demo.userMessage}</p>
              </div>
            </div>

            {/* AI Response - Left Aligned */}
            <div className="flex justify-start">
              <div className="max-w-[85%] rounded-2xl bg-slate-800/50 border border-slate-700/50 px-6 py-4 shadow-lg">
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-2 w-2 bg-cyan-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-cyan-400">{t.demo.aiStatus}</span>
                </div>

                {/* Website Preview Card */}
                <div className="rounded-lg border border-slate-700 bg-slate-900/80 p-4 space-y-3 mt-4">
                  {/* Preview Header */}
                  <div className="flex items-center justify-between border-b border-slate-700/50 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-24 bg-gradient-to-r from-amber-500/30 to-amber-600/30 rounded flex items-center justify-center">
                        <span className="text-xs font-bold text-amber-400">{t.demo.logoText}</span>
                      </div>
                    </div>
                    <div className="flex gap-3 text-xs text-slate-400">
                      <span>{language === "ar" ? "تسوق" : "Shop"}</span>
                      <span>{language === "ar" ? "عن" : "About"}</span>
                      <span>{language === "ar" ? "اتصل" : "Contact"}</span>
                    </div>
                  </div>

                  {/* Preview Hero Section */}
                  <div className="h-32 bg-gradient-to-br from-slate-950 via-amber-950/20 to-slate-950 rounded-lg flex items-center justify-center border border-amber-500/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.1),transparent_70%)]" />
                    <div className="relative z-10 text-center">
                      <div className="h-4 w-48 bg-amber-500/20 rounded mb-2 mx-auto" />
                      <div className="h-3 w-32 bg-amber-500/10 rounded mx-auto" />
                    </div>
                  </div>

                  {/* Preview Content */}
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2">
                      <Check className="h-3 w-3 text-cyan-500" />
                      <div className="h-2 w-full bg-slate-700/50 rounded" />
                    </div>
                    <div className="flex gap-2 items-center">
                      <Check className="h-3 w-3 text-cyan-500" />
                      <div className="h-2 w-3/4 bg-slate-700/50 rounded" />
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-400 mt-4">{t.demo.aiDescription}</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
