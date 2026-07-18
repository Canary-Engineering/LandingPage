import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs: [string, string][] = [
  [
    "What exactly is Canary?",
    "Canary Core is a sealed device that reads your vehicle's CAN bus and classifies abuse the instant it happens — donuts, redline launches, harsh braking, overspeed, impact and tamper — then sends the event with the evidence behind it. Built for fleets, rentals and owners who need to know what happened, not guess.",
  ],
  [
    "What counts as an abuse event?",
    "Anything the Core can prove off the bus and the IMU: sustained wheel-spin and yaw (donuts), full-throttle redline launches, hard braking or acceleration, speed over a set limit, sharp g-force spikes from impacts or curb strikes, and tamper attempts like a harness pull or power loss.",
  ],
  [
    "Does it need cell coverage to work?",
    "No. Detection runs on the Core itself, at the edge — so it keeps classifying events in tunnels, garages and dead zones where cloud-based trackers go blind. It reports as soon as it has a connection, and falls back to its own backup path if the vehicle's power is cut.",
  ],
  [
    "How is the evidence trustworthy?",
    "Every event ships with the CAN frames, GPS trace and g-force curve that triggered it — cross-checked against multiple signals, not a single guess. Disputes end at the data instead of one person's word against another's.",
  ],
  [
    "Is it hard to install?",
    "No. It's one sealed connector to the harness — no splicing, no dealer visit. Additional Nodes, like the Starter Immobilizer, pair over the same connector whenever you add them.",
  ],
  [
    "When does it ship, and how do I get early access?",
    "Canary is in private preview. Join the waitlist and we'll reach out with early-access details and timing for your fleet, rental operation or vehicle.",
  ],
];

export function Faq() {
  return (
    <section id="faq" className="border-b border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-3 md:gap-16">
        <div className="md:col-span-1">
          <h2 className="text-4xl font-medium tracking-tight md:text-5xl">
            frequently asked{" "}
            <span className="font-normal italic text-muted-foreground">questions.</span>
          </h2>
        </div>
        <div className="md:col-span-2">
          <Accordion
            type="single"
            collapsible
            defaultValue={faqs[0][0]}
            className="w-full border-t border-border"
          >
            {faqs.map(([q, a]) => (
              <AccordionItem key={q} value={q}>
                <AccordionTrigger className="py-5 text-left text-[17px]">{q}</AccordionTrigger>
                <AccordionContent className="pb-6 text-[15px] leading-relaxed text-muted-foreground">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
