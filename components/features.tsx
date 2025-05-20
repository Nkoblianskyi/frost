import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Sun, Cloud, Droplets, Sprout, Wind } from "lucide-react"

export function Features() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Spillfunksjoner</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Utforsk alle funksjonene som gjør Rik Høst til en unik gårdsopplevelse
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="feature-card border-2 border-primary/10">
            <CardHeader className="pb-2">
              <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Dyrk grønnsaker</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Plant og dyrk forskjellige grønnsaker og frukter på gården din. Hver avling har sin egen veksttid og
                verdi.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="feature-card border-2 border-primary/10">
            <CardHeader className="pb-2">
              <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Sun className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Sesongbasert spill</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Opplev alle fire årstider med unike utfordringer og muligheter for hver sesong.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="feature-card border-2 border-primary/10">
            <CardHeader className="pb-2">
              <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Cloud className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Værsystem</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Håndter ulike værforhold som påvirker avlingene dine. Tilpass strategien din etter været.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="feature-card border-2 border-primary/10">
            <CardHeader className="pb-2">
              <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Droplets className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Vanningssystem</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Vann plantene dine regelmessig for å sikre optimal vekst og maksimal avling.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="feature-card border-2 border-primary/10">
            <CardHeader className="pb-2">
              <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Sprout className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Planteutvikling</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Se plantene dine vokse gjennom forskjellige stadier, fra frø til moden avling.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="feature-card border-2 border-primary/10">
            <CardHeader className="pb-2">
              <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Wind className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Miljøutfordringer</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Takle miljøutfordringer som skadedyr, tørke og frost som kan påvirke gården din.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
