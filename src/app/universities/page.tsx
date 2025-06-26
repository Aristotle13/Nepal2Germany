import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const universities = [
  {
    name: "Technical University of Munich (TUM)",
    logo: "https://placehold.co/100x50.png",
    description: "A leading research university specializing in engineering, technology, medicine, and natural sciences.",
    link: "https://www.tum.de/en/",
    dataAiHint: "university logo"
  },
  {
    name: "Ludwig Maximilian University of Munich (LMU)",
    logo: "https://placehold.co/100x50.png",
    description: "One of Germany's oldest and most prestigious universities with a wide range of programs.",
    link: "https://www.lmu.de/en/",
    dataAiHint: "university logo"
  },
  {
    name: "Heidelberg University",
    logo: "https://placehold.co/100x50.png",
    description: "Germany's oldest university, renowned for research in humanities, law, and natural sciences.",
    link: "https://www.uni-heidelberg.de/en",
    dataAiHint: "university logo"
  },
  {
    name: "Karlsruhe Institute of Technology (KIT)",
    logo: "https://placehold.co/100x50.png",
    description: "A top-tier institution for engineering and technology, formed from the merger of a university and a national research center.",
    link: "https://www.kit.edu/english/",
    dataAiHint: "university logo"
  },
   {
    name: "RWTH Aachen University",
    logo: "https://placehold.co/100x50.png",
    description: "Germany's largest technical university, known for its strong industry collaborations and engineering programs.",
    link: "https://www.rwth-aachen.de/go/id/a/lidx/1",
    dataAiHint: "university logo"
  },
   {
    name: "University of Stuttgart",
    logo: "https://placehold.co/100x50.png",
    description: "A leading technically oriented university with a focus on engineering and natural sciences.",
    link: "https://www.uni-stuttgart.de/en/",
    dataAiHint: "university logo"
  }
];

export default function UniversityFinderPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
        <div className="mb-12 max-w-3xl mx-auto text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl">
            Find Your University
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore some of Germany's top tuition-free public universities. For a comprehensive search, use the DAAD database.
          </p>
           <Button asChild size="lg" className="mt-6 font-semibold">
              <a href="https://www.daad.de/en/study-and-research-in-germany/courses-of-study-in-germany/all-study-programmes-in-germany/" target="_blank" rel="noopener noreferrer">
                Search DAAD Database <ArrowUpRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {universities.map((uni) => (
            <Card key={uni.name} className="flex flex-col transform-gpu transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <CardHeader>
                 <Image src={uni.logo} alt={`${uni.name} logo`} width={100} height={50} data-ai-hint={uni.dataAiHint} className="mb-4" />
                <CardTitle className="font-headline">{uni.name}</CardTitle>
                <CardDescription>{uni.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex items-end">
                <Button asChild variant="link" className="p-0 font-semibold">
                  <a href={uni.link} target="_blank" rel="noopener noreferrer">
                    Visit Website <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
