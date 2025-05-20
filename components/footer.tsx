import Link from "next/link"
import Image from "next/image"
import { Disclaimer } from "@/components/disclaimer"
import { Logo } from "@/components/logo"
import { AgeRestrictionIcon } from "@/components/age-restriction-icon"

export function Footer() {
  return (
    <footer className="border-t bg-slate-950 text-slate-50">
      <div className="container py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <Logo variant="light" />
            <p className="text-slate-400">
              Sosial plattform for underholdning. Ingen ekte penger er involvert, ingen premier eller belønninger.
            </p>
            <div className="flex items-center gap-4">
              <AgeRestrictionIcon size={50} />
              <p className="text-sm font-semibold">18+ Aldersgrense</p>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">Lenker</h3>
            <ul className="grid gap-2 text-slate-400">
              <li>
                <Link
                  href="/vilkar"
                  className="inline-flex items-center text-slate-300 transition-colors hover:text-white hover:underline focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 focus:ring-offset-slate-950"
                >
                  Vilkår
                </Link>
              </li>
              <li>
                <Link
                  href="/personvern"
                  className="inline-flex items-center text-slate-300 transition-colors hover:text-white hover:underline focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 focus:ring-offset-slate-950"
                >
                  Personvern
                </Link>
              </li>
              <li>
                <Link
                  href="/ansvarsfraskrivelse"
                  className="inline-flex items-center text-slate-300 transition-colors hover:text-white hover:underline focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 focus:ring-offset-slate-950"
                >
                  Ansvarsfraskrivelse
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8" aria-label="Støtteorganisasjoner">
          <a
            href="https://hjelpelinjen.no"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-lg bg-slate-900 p-4 transition-all hover:bg-slate-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 focus:ring-offset-slate-950"
            aria-label="Besøk Hjelpelinjen - Åpnes i nytt vindu"
          >
            <Image
              src="/aware.webp"
              alt="Hjelpelinjen logo"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </a>
          <a
            href="https://www.gamcare.org.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-lg bg-slate-900 p-4 transition-all hover:bg-slate-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 focus:ring-offset-slate-950"
            aria-label="Besøk GamCare - Åpnes i nytt vindu"
          >
            <Image
              src="/aware2.png"
              alt="GamCare logo"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </a>
          <a
            href="https://www.gambleaware.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-lg bg-slate-900 p-4 transition-all hover:bg-slate-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 focus:ring-offset-slate-950"
            aria-label="Besøk GambleAware - Åpnes i nytt vindu"
          >
            <Image
              src="/aware1.webp"
              alt="GambleAware logo"
              width={120}
              height={40}
              className="h-15 w-auto object-contain"
            />
          </a>
          <div className="flex items-center justify-center rounded-lg bg-slate-900 p-4">
            <AgeRestrictionIcon size={50} />
          </div>
        </div>

        <Disclaimer type="bottom" className="mt-8 bg-slate-900 text-slate-300" />

        <div className="mt-8 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} FrostPlay Network. Alle rettigheter reservert.</p>
          <p className="mt-1">frostplaynetwork.com</p>
        </div>
      </div>
    </footer>
  )
}
