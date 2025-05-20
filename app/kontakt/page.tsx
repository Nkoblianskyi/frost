import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Kontakt Oss - StormQuest Games",
  description: "Ta kontakt med StormQuest Games for spørsmål, tilbakemeldinger eller samarbeid.",
}

export default function ContactPage() {
  return (
    <main className="container py-12">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Kontakt Oss</h1>
        <p className="text-muted-foreground">
          Har du spørsmål, tilbakemeldinger eller ønsker å samarbeide med oss? Ta gjerne kontakt!
        </p>
      </div>


      <div className="mt-12">
        <Card>
          <CardHeader>
            <CardTitle>Send oss en melding</CardTitle>
            <CardDescription>Fyll ut skjemaet nedenfor, så vil vi svare deg så snart som mulig.</CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
