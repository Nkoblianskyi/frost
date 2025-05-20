"use client"

import { useEffect, useState } from "react"
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

export function WelcomeModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // Перевіряємо, чи користувач вже бачив модальне вікно
    const hasSeenModal = localStorage.getItem("welcome-modal-seen")
    if (!hasSeenModal) {
      setOpen(true)
    }
  }, [])

  const handleAccept = () => {
    // Зберігаємо в localStorage, що користувач бачив модальне вікно
    localStorage.setItem("welcome-modal-seen", "true")
    setOpen(false)
  }

  const handleDecline = () => {
    // Перенаправляємо на Google або іншу сторінку
    window.location.href = "https://www.google.com"
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <AlertTriangle className="h-6 w-6 text-yellow-500" />
            Velkommen til FrostPlay Network
          </DialogTitle>
          <DialogDescription className="text-base">
            Vennligst les denne viktige informasjonen før du fortsetter.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="rounded-md bg-blue-50 p-4 text-sm text-blue-900">
            <p className="mb-2 font-semibold">VIKTIG INFORMASJON:</p>
            <p>
              FrostPlay Network er kun en sosial spillplattform for underholdningsformål. Ingen ekte penger er
              involvert, ingen premier eller belønninger, og ingen virtuelle gjenstander har noen reell verdi. Du må
              være 18 år eller eldre for å bruke denne plattformen. Hvis det slutter å være gøy, ta et skritt tilbake.
              Du kan også besøke hjelpesider som{" "}
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
              Denne nettsiden er kun for personer som har fylt 18 år. Ved å klikke på "Jeg bekrefter" bekrefter du at du
              er 18 år eller eldre.
            </p>
          </div>
        </div>

        <DialogFooter className="flex flex-col gap-2 sm:flex-row">
          <Button variant="outline" onClick={handleDecline} className="w-full sm:w-auto">
            Avbryt
          </Button>
          <Button onClick={handleAccept} className="w-full sm:w-auto">
            Jeg bekrefter at jeg er 18 år eller eldre
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
