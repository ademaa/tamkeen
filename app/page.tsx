import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ChatDemo } from "@/components/chat-demo"
import { Comparison } from "@/components/comparison"
import { HowItWorks } from "@/components/how-it-works"
import { Pricing } from "@/components/pricing"
import { Features } from "@/components/features"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="relative min-h-screen">
      {/* Grid Pattern Background */}
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />

      <Navbar />
      <main>
        <Hero />
        <ChatDemo />
        <Comparison />
        <HowItWorks />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}
