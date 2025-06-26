import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl">
              Our Mission
            </h1>
            <p className="text-lg text-muted-foreground">
              Study Bridge Germany was founded with a single, clear mission: to simplify the complex process for Nepali students dreaming of pursuing a master's degree in Germany. We believe that with the right guidance and resources, every deserving student can successfully navigate their path to a world-class German education.
            </p>
            <p className="text-lg text-muted-foreground">
              We provide comprehensive, step-by-step guides, curated resources, and clear information to demystify everything from university applications and document preparation to visa processes and life in Germany. Our goal is to be your most trusted companion on this exciting academic journey.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="https://placehold.co/500x500.png"
              alt="Brandenburg Gate in Berlin"
              width={500}
              height={500}
              className="rounded-xl shadow-lg"
              data-ai-hint="berlin germany"
            />
          </div>
        </div>

        <div className="mt-24">
          <Card className="mx-auto max-w-3xl">
            <CardHeader className="text-center">
              <CardTitle className="font-headline text-3xl font-bold tracking-tighter">
                Meet the Creator
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
              <Image
                src="https://placehold.co/150x150.png"
                alt="Creator's photo"
                width={150}
                height={150}
                className="rounded-full"
                data-ai-hint="portrait professional"
              />
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  "Having gone through the entire process myself, I understand the challenges and uncertainties Nepali students face. I created this platform to share the knowledge I gained and to build a supportive community. My hope is to make your journey to Germany smoother and less stressful, so you can focus on what truly matters: your education and future."
                </p>
                <p className="font-semibold text-foreground">— A. Sharma, Founder of Study Bridge Germany</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
