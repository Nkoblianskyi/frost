"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { AlertTriangle, ExternalLink } from "lucide-react"
import Image from "next/image"

// Визначення типів для сітки та клітинок
interface GridCell {
  x: number
  y: number
  type: number
  scale: number
  rotation: number
  animationOffset: number
}

interface SelectedCell {
  row: number
  col: number
}

export function GamePreview() {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 })

  const handleConfirm = () => {
    setOpen(false)
    router.push("/gard")
  }


  return (
    <section className="w-full py-20 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Spill FrostPlay Network nå</h2>
            <p className="text-lg mb-6">
              Utforsk den frodige verdenen av FrostPlay Network, der du kan dyrke og høste en rekke forskjellige
              grønnsaker og frukter. Spillet er enkelt å lære, men gir en dypere opplevelse jo mer du spiller.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <div className="mr-3 rounded-full bg-primary/10 p-1">
                  <svg
                    className="h-5 w-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span>Opplev forskjellige sesonger og værforhold</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 rounded-full bg-primary/10 p-1">
                  <svg
                    className="h-5 w-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span>Samle sesongfremgang og øk antall høstede avlinger</span>
              </li>
            </ul>

            {/* Модальне вікно з перевіркою віку */}
            <Dialog open={open} onOpenChange={setOpen}>
              <Button
                size="lg"
                onClick={() => setOpen(true)}
                className="rounded-full px-8 py-6 h-auto text-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg hover:shadow-xl transition-all"
              >
                <span className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                  FrostPlay Network nå
                </span>
              </Button>

              <DialogContent className="max-w-md sm:max-w-lg">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2 text-xl">
                    <AlertTriangle className="h-6 w-6 text-yellow-500" />
                    Aldersbekreftelse
                  </DialogTitle>
                  <DialogDescription className="text-base">
                    Du må bekrefte at du er 18 år eller eldre for å spille FrostPlay Network.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="rounded-md bg-blue-50 p-4 text-sm text-blue-900">
                    <p className="mb-2 font-semibold">VIKTIG INFORMASJON:</p>
                    <p>
                      ADVARSEL: FrostPlay Network er kun en sosial spillplattform for underholdningsformål. Ingen ekte
                      penger er involvert, ingen premier eller belønninger, og ingen virtuelle gjenstander har noen
                      reell verdi. Du må være 18 år eller eldre for å bruke denne plattformen. Hvis det slutter å være
                      gøy, ta et skritt tilbake. Du kan også besøke hjelpesider som{" "}
                      <a
                        href="https://hjelpelinjen.no"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-0.5 rounded bg-blue-100 px-1.5 py-0.5 font-medium text-blue-800 transition-colors hover:bg-blue-200 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                      >
                        Hjelpelinjen.no
                        <ExternalLink className="ml-0.5 h-3 w-3" />
                      </a>
                      ,{" "}
                      <a
                        href="https://gamcare.org.uk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-0.5 rounded bg-blue-100 px-1.5 py-0.5 font-medium text-blue-800 transition-colors hover:bg-blue-200 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                      >
                        GamCare
                        <ExternalLink className="ml-0.5 h-3 w-3" />
                      </a>{" "}
                      eller{" "}
                      <a
                        href="https://www.gambleaware.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-0.5 rounded bg-blue-100 px-1.5 py-0.5 font-medium text-blue-800 transition-colors hover:bg-blue-200 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                      >
                        GambleAware
                        <ExternalLink className="ml-0.5 h-3 w-3" />
                      </a>{" "}
                      for støtte og råd.
                    </p>
                  </div>
                  <div className="rounded-md bg-yellow-50 p-4 text-sm text-yellow-900">
                    <p className="flex items-center gap-2 font-semibold">
                      <AlertTriangle className="h-4 w-4" />
                      ADVARSEL: 18+ INNHOLD
                    </p>
                    <p>
                      Denne nettsiden er kun for personer som har fylt 18 år. Ved å klikke på "Jeg bekrefter" bekrefter
                      du at du er 18 år eller eldre.
                    </p>
                  </div>
                </div>
                <DialogFooter className="flex flex-col gap-2 sm:flex-row">
                  <Button variant="outline" onClick={() => setOpen(false)} className="w-full sm:w-auto">
                    Avbryt
                  </Button>
                  <Button onClick={handleConfirm} className="w-full sm:w-auto">
                    Jeg bekrefter at jeg er 18 år eller eldre
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <Image src='/aeeaa1d86a840cdc893f7476073d3bea.jpg' alt="Farmer" width={600} height={600} />
        </div>
      </div>
    </section>
  )
}
