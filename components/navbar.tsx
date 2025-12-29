"use client"

import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/lib/i18n/language-context"
import { translations } from "@/lib/i18n/translations"

export function Navbar() {
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
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center">
            <img
              src="/images/gemini-generated-image-69lcu569lcu569lc-removebg-preview.png"
              alt="Tamkeen Logo"
              className="w-auto h-[100px]"
            />
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t.nav.features}
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t.nav.howItWorks}
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Button
            onClick={scrollToWaitlist}
            size="sm"
            className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white hover:from-cyan-600 hover:to-cyan-700 shadow-lg shadow-cyan-500/20"
          >
            {t.nav.joinNow}
          </Button>
        </div>
      </div>
    </header>
  )
}
