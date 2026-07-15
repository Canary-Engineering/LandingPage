import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AboutContent() {
  return (
    <div className="py-16">
      <div className="container mx-auto max-w-7xl space-y-12 px-4">
        {/* Origin Section */}
        <section className="rounded-3xl border border-foreground/8 bg-background p-8 shadow-[0_8px_24px_rgba(12,10,9,0.08)]">
          <h2 className="mb-4 text-4xl font-medium text-foreground">why canary</h2>
          <p className="leading-relaxed text-foreground/61">
            Vehicles get driven hard, rented out, handed to a new driver, or
            parked across a fleet of a few hundred — and the person
            responsible for them is usually the last to know what actually
            happened. A dealer visit doesn&apos;t tell you. Footage that was
            never recorded doesn&apos;t tell you. What helps is a plug-in
            device that watches the vehicle&apos;s own systems and reports the
            truth immediately, in a form you can trust and verify.
          </p>
          <p className="mt-4 leading-relaxed text-foreground/61">
            That&apos;s what Canary is for.
          </p>
        </section>

        {/* Values Section */}
        <section className="rounded-3xl border border-foreground/8 bg-background p-8 shadow-[0_8px_24px_rgba(12,10,9,0.08)]">
          <h2 className="mb-4 text-4xl font-medium text-foreground">our values</h2>
          <p className="mb-8 leading-relaxed text-foreground/61">
            What we strive to be
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-foreground/8 bg-background-alt p-6">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Transparency</AccordionTrigger>
                  <AccordionContent>
                    Vehicle owners deserve to know exactly what is happening
                    with their car.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Reliability</AccordionTrigger>
                  <AccordionContent>
                    Telematics only matter if the data is trustworthy, every
                    time.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="rounded-2xl border border-foreground/8 bg-background-alt p-6">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Simplicity</AccordionTrigger>
                  <AccordionContent>
                    Plug-in hardware, zero-config setup, no jargon.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Security by design</AccordionTrigger>
                  <AccordionContent>
                    Every device authenticates before it&apos;s trusted, and
                    every update is signed before it&apos;s installed.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
