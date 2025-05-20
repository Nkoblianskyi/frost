import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function Faq() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ofte stilte spørsmål</h2>
          <p className="mt-4 text-lg text-muted-foreground">Finn svar på de vanligste spørsmålene om Rik Høst</p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-b border-primary/20">
            <AccordionTrigger className="text-lg font-medium">Hvordan spiller jeg Rik Høst?</AccordionTrigger>
            <AccordionContent className="text-base">
              For å spille Rik Høst, klikk på "Start spillet" knappen på hjemmesiden. I spillet må du klikke på grupper
              av tre eller flere like grønnsaker eller frukter for å høste dem. Jo flere like elementer du høster
              samtidig, desto flere poeng får du.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-b border-primary/20">
            <AccordionTrigger className="text-lg font-medium">Er Rik Høst gratis å spille?</AccordionTrigger>
            <AccordionContent className="text-base">
              Ja, Rik Høst er helt gratis å spille. Det er et sosialt spill kun for underholdning, og alle elementer i
              spillet er virtuelle og har ingen verdi i den virkelige verden.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-b border-primary/20">
            <AccordionTrigger className="text-lg font-medium">Kan jeg spille Rik Høst på mobilen min?</AccordionTrigger>
            <AccordionContent className="text-base">
              Ja, Rik Høst er fullt responsivt og kan spilles på alle enheter, inkludert smarttelefoner, nettbrett og
              datamaskiner.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="border-b border-primary/20">
            <AccordionTrigger className="text-lg font-medium">Hvordan fungerer sesongene i spillet?</AccordionTrigger>
            <AccordionContent className="text-base">
              I Rik Høst endres sesongene etter hvert som du spiller. Hver sesong har sine egne unike grønnsaker og
              frukter, samt værforhold som påvirker spillopplevelsen. Du må tilpasse strategien din etter gjeldende
              sesong for å maksimere avlingene dine.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5" className="border-b border-primary/20">
            <AccordionTrigger className="text-lg font-medium">Kan jeg lagre fremgangen min i spillet?</AccordionTrigger>
            <AccordionContent className="text-base">
              Ja, spillet lagrer automatisk fremgangen din i nettleseren din. Så lenge du bruker samme enhet og
              nettleser, vil fremgangen din bli bevart mellom spilløktene.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6" className="border-b border-primary/20">
            <AccordionTrigger className="text-lg font-medium">
              Hvordan kan jeg kontakte support hvis jeg har problemer?
            </AccordionTrigger>
            <AccordionContent className="text-base">
              Hvis du opplever problemer med spillet eller har spørsmål, kan du kontakte oss via kontaktskjemaet på
              nettstedet vårt. Vi vil svare på henvendelsen din så snart som mulig.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
