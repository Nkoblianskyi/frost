import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { FarmGridGame } from "@/components/farm-grid-game"
import { Disclaimer } from "@/components/disclaimer"

export const metadata: Metadata = {
  title: "FrostPlay Network - Spillside",
  description: "Spill FrostPlay Network - en sosial underholdningsplattform.",
}

export default function GamePage() {
  return (
    <main className="container py-8">
      <div className="mb-6 flex items-center gap-2">
        <Button variant="outline" size="icon" asChild>
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Gå tilbake til hjemmesiden</span>
          </Link>
        </Button>
        <h1 className="text-2xl font-bold md:text-3xl">FrostPlay Network</h1>
      </div>
      <div className="mx-auto max-w-4xl">
        <FarmGridGame />
      </div>

      <div className="mt-8">
        <Disclaimer type="bottom" />
      </div>
    </main>
  )
}
