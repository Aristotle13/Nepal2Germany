import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is a 'Blocked Account' (Sperrkonto) and why do I need it?",
    answer:
      "A blocked account is a special bank account required for non-EU students to prove they have sufficient funds to cover their living expenses in Germany for one year. The German government sets the required amount annually. You must deposit this amount before applying for your student visa. Each month, you can withdraw a fixed portion of the total sum.",
  },
  {
    question: "What is Uni-Assist and do I have to apply through it?",
    answer:
      "Uni-Assist is a centralized admissions portal for international students in Germany. Many universities use it to pre-check international applications for formal requirements. You need to check the specific application procedure for each university you apply to. Some require you to go through Uni-Assist, while others accept direct applications.",
  },
  {
    question: "What are the most important things to prepare for the German student visa interview?",
    answer:
      "For the visa interview at the German Embassy in Kathmandu, be prepared to discuss your study plans, reasons for choosing Germany and your specific university, and how you plan to finance your stay. Key documents include your passport, university admission letter, proof of financial means (blocked account confirmation), health insurance, and your academic documents. It is crucial to be genuine and clear about your intentions.",
  },
  {
    question: "Can I work in Germany as a student?",
    answer:
      "Yes, international students are allowed to work in Germany. You can work for up to 120 full days or 240 half days per year. This helps in covering living expenses. However, you cannot fully rely on this income to finance your studies, as the blocked account is a mandatory requirement.",
  },
  {
    question: "What is an APS certificate and is it mandatory?",
    answer:
      "The APS (Akademische Prüfstelle) is a service that verifies the authenticity of educational documents from certain countries, including Nepal. As of recent regulations, an APS certificate is mandatory for Nepali students applying to German universities. You should start the APS process well in advance, as it can take several weeks.",
  },
];

export default function FaqPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
        <div className="mb-12 max-w-3xl mx-auto text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Find answers to the most common questions about studying in Germany.
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
