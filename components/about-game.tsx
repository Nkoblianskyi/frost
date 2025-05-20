import Image from "next/image"

export function AboutGame() {
  return (
    <section id="om-spillet" className="w-full py-20 bg-muted">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Om Rik Høst</h2>
            <div className="space-y-4 text-lg">
              <p>
                Rik Høst er et avslappende gårdsspill der du kan dyrke og høste forskjellige grønnsaker og frukter.
                Spillet er inspirert av tradisjonell norsk gårdsdrift og sesongbasert landbruk.
              </p>
              <p>
                I dette spillet kan du oppleve gleden ved å se plantene dine vokse fra frø til modne avlinger. Du må ta
                hensyn til værforhold, sesongendringer og riktig timing for å maksimere avlingene dine.
              </p>
              <p>
                Rik Høst er designet for å være en avslappende og underholdende opplevelse for spillere i alle aldre.
                Det er ingen tidsbegrensninger eller stressende elementer - bare ren glede av å dyrke og høste.
              </p>
              <p className="font-semibold text-primary">
                Husk at dette er et sosialt spill kun for underholdning, og alle elementer i spillet er virtuelle og har
                ingen verdi i den virkelige verden.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/farm-scene.png"
                alt="Norwegian farm scene"
                width={600}
                height={400}
                className="object-cover w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Tradisjonell norsk gård</h3>
                <p className="text-white/80">Inspirert av Norges rike landbrukstradisjon</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
