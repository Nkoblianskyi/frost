import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { GamePreview } from "@/components/game-preview"
import { PlayButton } from "@/components/play-button"
import { GameDescription } from "@/components/game-description"
import { Disclaimer } from "@/components/disclaimer"
import { AboutGame } from "@/components/about-game"
import { Faq } from "@/components/faq"

export default function HomePage() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <AboutGame />
      <GamePreview />
      <Features />
      <GameDescription />
      <Faq />
      <Disclaimer type="bottom" className="container my-8" />
    </main>
  )
}
