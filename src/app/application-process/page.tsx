import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, FileSignature, Plane, School, Search, Wallet } from "lucide-react";

const timelineSteps = [
  {
    icon: <Search className="h-8 w-8 text-primary" />,
    title: "Step 1: Research & University Selection",
    description: "Start by researching German universities and the master's programs they offer. Use platforms like DAAD to find tuition-free options that match your profile and interests. Shortlist 5-7 universities.",
  },
  {
    icon: <FileSignature className="h-8 w-8 text-primary" />,
    title: "Step 2: Document Preparation",
    description: "Compile all necessary documents. This includes your academic transcripts, CV, Letter of Motivation (SOP), Letters of Recommendation (LOR), and language proficiency certificates (IELTS/TOEFL or German language tests).",
  },
  {
    icon: <School className="h-8 w-8 text-primary" />,
    title: "Step 3: Apply via Uni-Assist or Directly",
    description: "Many German universities use Uni-Assist to process international applications. Check if your chosen universities require this. Otherwise, apply directly through their online portals. Pay close attention to deadlines.",
  },
  {
    icon: <Check className="h-8 w-8 text-primary" />,
    title: "Step 4: Receive Admission & Fulfill Conditions",
    description: "After applying, wait for the admission letters. Once you receive an offer, you may need to fulfill certain conditions, such as sending certified copies of your documents or formally accepting the offer.",
  },
  {
    icon: <Wallet className="h-8 w-8 text-primary" />,
    title: "Step 5: Open a Blocked Account & Get Health Insurance",
    description: "For the German student visa, you must show proof of financial resources. This is typically done by opening a 'Sperrkonto' (blocked account) with a specified amount. You will also need to get German health insurance.",
  },
  {
    icon: <Plane className="h-8 w-8 text-primary" />,
    title: "Step 6: Apply for the Student Visa",
    description: "Schedule an appointment at the German Embassy in Kathmandu. Prepare all required documents for the visa interview, including your admission letter, blocked account confirmation, and health insurance.",
  },
];

export default function ApplicationProcessPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
        <div className="mb-12 max-w-3xl mx-auto text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl">
            The Application Process
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A step-by-step guide to navigate your journey from Nepal to a German university.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border" aria-hidden="true"></div>
          <div className="space-y-12">
            {timelineSteps.map((step, index) => (
              <div key={index} className="grid grid-cols-1 items-start gap-6 md:grid-cols-5 relative"> {/* Added relative positioning */}
                {/* Number circle positioned absolutely */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 transform hidden md:flex items-center justify-center z-10"> {/* Absolute positioning, added z-10 */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-primary bg-background text-primary"> {/* Adjusted classes */}
                    <span className="font-bold text-lg">{index + 1}</span> {/* Adjusted text size */}
                  </div>
                </div>
                {/* Card content */}
                <div className={`flex justify-center md:col-span-2 ${index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-4'}`}> {/* Conditional column start */}
                  <Card className="w-full max-w-md transform-gpu transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <CardHeader className="flex flex-row items-center gap-4">
                      {step.icon}
                      <CardTitle className="font-headline text-xl pt-2">{step.title}</CardTitle> {/* Added pt-2 for slight top padding */}
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground pt-2">{step.description}</p> {/* Added pt-2 */}
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
