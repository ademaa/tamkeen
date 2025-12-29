"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { addToWaitlist } from "@/app/actions/waitlist"
import { useLanguage } from "@/lib/i18n/language-context"
import { translations } from "@/lib/i18n/translations"

export function Hero() {
  const { language } = useLanguage()
  const t = translations[language]

  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage(null)

    const result = await addToWaitlist(email)

    if (result.success) {
      setMessage({ type: "success", text: t.hero.successMessage })
      setEmail("")
    } else {
      setMessage({ type: "error", text: result.message || t.hero.errorMessage })
    }

    setIsLoading(false)
  }

  return (
    <section className="relative px-4 pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 tracking-tight leading-[1.1] text-balance">
          {t.hero.title}
          {language === "ar" ? "" : " "}
          {language === "ar" && <br />}
          <span className="bg-gradient-to-br from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent">
            {t.hero.titleGradient}
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty">
          {t.hero.subtitle}
        </p>

        {/* CTA Form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-4" id="waitlist-form">
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder={t.hero.emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 border-border bg-card"
              required
              disabled={isLoading}
            />
            <Button
              type="submit"
              size="lg"
              className="h-12 px-8 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white hover:from-cyan-600 hover:to-cyan-700 shadow-lg shadow-cyan-500/20 whitespace-nowrap"
              disabled={isLoading}
            >
              {isLoading ? t.hero.submitting : t.hero.submitButton}
            </Button>
          </div>
          {message && (
            <p className={`text-sm text-center mt-3 ${message.type === "success" ? "text-cyan-400" : "text-red-400"}`}>
              {message.text}
            </p>
          )}
        </form>
        <p className="text-sm text-center text-muted-foreground flex items-center justify-center gap-2">
          <span className="text-lg">🔒</span>
          <span>{t.hero.limitedSpots}</span>
        </p>
      </div>
    </section>
  )
}
