import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export function AboutContent() {
  return (
    <div className=" py-16">
      <div className="container px-4 max-w-7xl mx-auto space-y-12">
        {/* Naming Section */}
        <section className="rounded-3xl bg-background/50 backdrop-blur-sm p-8 border border-cream/10">
          <h2 className="text-cream text-4xl mb-4">
            everything started with an idea...
          </h2>
          <p className="text-cream/60 leading-relaxed mb-8">
            It wasn&apos;t just to promote a safe driving environment.
          </p>
          <Image
            src="/civicandbmw_WATERMARK.png"
            alt="Description"
            width={800} // Adjust based on actual image size
            height={600} // Adjust based on actual image size
            className="w-full rounded-3xl mb-4"
          />
          <p className="text-cream/60 leading-relaxed mt-8">
            LOREM IPSUM LOREM IPSUM
          </p>
        </section>

        {/* Usage Section */}
        <section className="rounded-3xl bg-background/50 backdrop-blur-sm p-8 border border-cream/10">
          <h2 className="text-cream text-4xl mb-4 text-leftr">our values</h2>
          <p className="text-cream/60 leading-relaxed mb-8">
            What we strive to be
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Div */}
            <div className="rounded-3xl bg-cream/10 p-6 border border-cream/20">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Value 1</AccordionTrigger>
                  <AccordionContent>Description for value 1.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Value 2</AccordionTrigger>
                  <AccordionContent>Description for value 2.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Value 3</AccordionTrigger>
                  <AccordionContent>Description for value 3.</AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Right Div */}
            <div className="rounded-3xl bg-cream/10 p-6 border border-cream/20">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Value 4</AccordionTrigger>
                  <AccordionContent>Description for value 4.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Value 5</AccordionTrigger>
                  <AccordionContent>Description for value 5.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>Value 6</AccordionTrigger>
                  <AccordionContent>Description for value 6.</AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Wordmark Section */}
      </div>
    </div>
  );
}
