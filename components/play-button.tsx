"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { AlertTriangle } from "lucide-react"

export function PlayButton() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const handleConfirm = () => {
    setOpen(false)
    router.push("/gard")
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="lg"
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
            Spill AquaVibe nå
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <AlertTriangle className="h-6 w-6 text-yellow-500" />
            Aldersbekreftelse
          </DialogTitle>
          <DialogDescription className="text-base">
            Du må bekrefte at du er 18 år eller eldre for å spille AquaVibe.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="rounded-md bg-blue-50 p-4 text-sm text-blue-900">
            <p className="mb-2 font-semibold">VIKTIG INFORMASJON:</p>
            <p>
              AquaVibe er kun en sosial spillplattform for underholdningsformål. Ingen ekte penger er involvert, ingen
              premier eller belønninger, og ingen virtuelle gjenstander har noen reell verdi. Du må være 18 år eller
              eldre for å bruke denne plattformen. Hvis det slutter å være gøy, ta et skritt tilbake. Du kan også besøke
              hjelpesider som Hjelpelinjen.no, GamCare eller GambleAware for støtte og råd.
            </p>
          </div>
          <div className="rounded-md bg-yellow-50 p-4 text-sm text-yellow-900">
            <p className="flex items-center gap-2 font-semibold">
              <AlertTriangle className="h-4 w-4" />
              ADVARSEL: 18+ INNHOLD
            </p>
            <p>
              Denne nettsiden er kun for personer som har fylt 18 år. Ved å klikke på "Jeg bekrefter" bekrefter du at du
              er 18 år eller eldre.
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
  )
}
