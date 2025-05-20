import { CarrotIcon } from "@/components/animated-icons/carrot-icon"
import { TomatoIcon } from "@/components/animated-icons/tomato-icon"
import { PotatoIcon } from "@/components/animated-icons/potato-icon"
import { CucumberIcon } from "@/components/animated-icons/cucumber-icon"
import { CabbageIcon } from "@/components/animated-icons/cabbage-icon"
import { AppleIcon } from "@/components/animated-icons/apple-icon"
import { PearIcon } from "@/components/animated-icons/pear-icon"
import { CornIcon } from "@/components/animated-icons/corn-icon"
import { StrawberryIcon } from "@/components/animated-icons/strawberry-icon"

export function GameDescription() {
  return (
    <section className="w-full py-20 bg-muted">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Grønnsaker og frukter</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Utforsk mangfoldet av grønnsaker og frukter du kan dyrke og høste i Rik Høst
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-sm border border-primary/10 hover:shadow-md transition-shadow">
            <div className="mb-4 h-24 w-24">
              <CarrotIcon />
            </div>
            <h3 className="text-xl font-bold mb-2">Gulrot</h3>
            <p className="text-center text-muted-foreground">
              En næringsrik rotgrønnsak som er enkel å dyrke og gir god avkastning.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-sm border border-primary/10 hover:shadow-md transition-shadow">
            <div className="mb-4 h-24 w-24">
              <TomatoIcon />
            </div>
            <h3 className="text-xl font-bold mb-2">Tomat</h3>
            <p className="text-center text-muted-foreground">
              En allsidig frukt som trives i varme forhold og gir rikelig avling.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-sm border border-primary/10 hover:shadow-md transition-shadow">
            <div className="mb-4 h-24 w-24">
              <PotatoIcon />
            </div>
            <h3 className="text-xl font-bold mb-2">Potet</h3>
            <p className="text-center text-muted-foreground">
              En tradisjonell norsk avling som er motstandsdyktig mot kulde.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-sm border border-primary/10 hover:shadow-md transition-shadow">
            <div className="mb-4 h-24 w-24">
              <CucumberIcon />
            </div>
            <h3 className="text-xl font-bold mb-2">Agurk</h3>
            <p className="text-center text-muted-foreground">
              En forfriskende grønnsak som vokser raskt i varme og fuktige forhold.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-sm border border-primary/10 hover:shadow-md transition-shadow">
            <div className="mb-4 h-24 w-24">
              <CabbageIcon />
            </div>
            <h3 className="text-xl font-bold mb-2">Kål</h3>
            <p className="text-center text-muted-foreground">
              En hardfør grønnsak som tåler kulde godt og har lang holdbarhet.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-sm border border-primary/10 hover:shadow-md transition-shadow">
            <div className="mb-4 h-24 w-24">
              <AppleIcon />
            </div>
            <h3 className="text-xl font-bold mb-2">Eple</h3>
            <p className="text-center text-muted-foreground">En populær frukt som modnes på sensommeren og høsten.</p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-sm border border-primary/10 hover:shadow-md transition-shadow">
            <div className="mb-4 h-24 w-24">
              <PearIcon />
            </div>
            <h3 className="text-xl font-bold mb-2">Pære</h3>
            <p className="text-center text-muted-foreground">En søt og saftig frukt som trives i tempererte klimaer.</p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-sm border border-primary/10 hover:shadow-md transition-shadow">
            <div className="mb-4 h-24 w-24">
              <CornIcon />
            </div>
            <h3 className="text-xl font-bold mb-2">Mais</h3>
            <p className="text-center text-muted-foreground">
              En allsidig kornsort som trenger varme og sol for å vokse godt.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-sm border border-primary/10 hover:shadow-md transition-shadow">
            <div className="mb-4 h-24 w-24">
              <StrawberryIcon />
            </div>
            <h3 className="text-xl font-bold mb-2">Jordbær</h3>
            <p className="text-center text-muted-foreground">
              En delikat bærfrukt som er populær i norske hager om sommeren.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
