import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BookOpenCheck, FileText, ListChecks, School, CheckSquare, HelpCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/images/home/logo.png'
import second from '@/images/home/second.png'
//import second3 from '@/images/home/second3.png'

const processSteps = [
  {
    icon: <School className="h-8 w-8 text-primary" />,
    title: 'University & Course Selection',
    description: 'Find the right university and master’s program that fits your academic and career goals.',
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: 'Document Preparation',
    description: 'Gather all necessary documents, including transcripts, SOP, LORs, and language certificates.',
  },
  {
    icon: <BookOpenCheck className="h-8 w-8 text-primary" />,
    title: 'Application Submission',
    description: 'Navigate the application process through Uni-Assist or directly to the universities.',
  },
  {
    icon: <ListChecks className="h-8 w-8 text-primary" />,
    title: 'Visa & Enrollment',
    description: 'Secure your student visa and complete the enrollment process to start your journey.',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="bg-background py-20 md:py-32">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:px-6">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl">
              Your Bridge to German Universities
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              A complete guide for Nepali students aspiring to pursue a degree in Germany. I'm here to simplify the path from Nepal to Germany.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
              <Button asChild size="lg" className="font-semibold">
                <Link href="/application-process">
                  Explore the Process <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-semibold">
                <Link href="/resources">Get Checklists</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src={logo}
              alt="Graduation in Germany"
              width={500}
              height={500}
              className="rounded-xl shadow-lg"
              data-ai-hint="graduation germany"
            />
          </div>
        </div>
      </section>

      <section id="process" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">
              The Application Journey
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Follow our step-by-step guide to make your application process smooth and successful.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <Card key={index} className="transform-gpu transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                <CardHeader className="flex flex-col items-center text-center gap-4">
                  {step.icon}
                  <CardTitle className="font-headline text-xl font-semibold">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                  <p>{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="bg-secondary/50 py-16 md:py-24">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:px-6">
          <div className="flex justify-center">
            <Image
              src={second}
              alt="Student preparing documents"
              width={500}
              height={500}
              className="rounded-xl shadow-lg"
              data-ai-hint="student documents"
            />
          </div>
          <div className="space-y-6">
            <div className="mb-8">
              <h2 className="font-headline text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">
                Everything You Need in One Place
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                From eligibility criteria to downloadable templates, we've got you covered.
              </p>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <CheckSquare className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Detailed Requirements</h3>
                  <p className="text-muted-foreground">Understand eligibility, language tests (IELTS/TOEFL/German), and required documents.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <FileText className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Free Resources</h3>
                  <p className="text-muted-foreground">Download our free checklists, SOP/LOR templates, and other essential resources.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <HelpCircle className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Comprehensive FAQ</h3>
                  <p className="text-muted-foreground">Get answers to common questions about visas, blocked accounts, and Uni-Assist.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">Ready to Start Your Journey?</h2>
          <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">
            Explore our detailed guides and resources to take the first step towards your study  in Germany.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="font-semibold">
              <Link href="/resources">
                View All Resources <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
