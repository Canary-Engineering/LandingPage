import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export function AboutContent() {
  return (
    <div className="py-16">
      <div className="container mx-auto max-w-7xl space-y-12 px-4">
        {/* Naming Section */}
        <section className="rounded-3xl border border-foreground/8 bg-background p-8 shadow-[0_8px_24px_rgba(12,10,9,0.08)]">
          <h2 className="mb-4 text-4xl font-medium text-foreground">
            everything started with an idea...
          </h2>
          <p className="mb-8 leading-relaxed text-foreground/61">
            It wasn&apos;t just to promote a safe driving environment.
          </p>
          <Image
            src="/civicandbmw_WATERMARK.png"
            alt="Canary origin"
            width={800}
            height={600}
            className="mb-4 w-full rounded-3xl"
          />
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
              </Accordion>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
