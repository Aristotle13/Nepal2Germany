import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, FileText, Languages } from "lucide-react";

export default function RequirementsPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
        <div className="mb-12 max-w-3xl mx-auto text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl">
            Application Requirements
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Understand the key requirements to ensure your application is complete and successful.
          </p>
        </div>

        <Tabs defaultValue="eligibility" className="mx-auto max-w-4xl">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3">
            <TabsTrigger value="eligibility">
              <CheckCircle2 className="mr-2 h-4 w-4" /> Eligibility
            </TabsTrigger>
            <TabsTrigger value="language">
              <Languages className="mr-2 h-4 w-4" /> Language Tests
            </TabsTrigger>
            <TabsTrigger value="documents">
              <FileText className="mr-2 h-4 w-4" /> Documents
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="eligibility" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Academic Eligibility</CardTitle>
                <CardDescription>General academic criteria for master's programs.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p><strong>Bachelor's Degree:</strong> You must hold a relevant bachelor's degree from a recognized university. A four-year degree is generally preferred, but three-year degrees may be accepted if they are equivalent to 180 ECTS credits.</p>
                <p><strong>Academic Performance (GPA):</strong> While specific requirements vary, a strong academic record is crucial. A GPA of 2.5 (German system) or better is often recommended. For Nepal, this typically translates to a high percentage (e.g., >65-70%).</p>
                <p><strong>APS Certificate:</strong> Only for students with academic qualification from India, China or Vietnam.</p>
              </CardContent>
              {/* <CardHeader>
            
                <CardDescription>General academic criteria for bachelor's programs.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p><strong>Higher Secondary Education (+2 / A-Level):</strong> You must have completed 12 years of formal education, such as Nepal’s NEB (+2) or Cambridge A-Levels. Your qualification should be equivalent to the German “Abitur” to be eligible for direct admission. If not, a one-year Studienkolleg (foundation course) may be required.</p>
                <p><strong>Academic Performance (GPA/Percentage):</strong> A strong academic background is essential. While there’s no universal GPA requirement, public universities typically look for scores above 65–70% in your higher secondary education. For A-Levels, passing at least 3 relevant subjects is usually required.</p>
                <p><strong>Subject Relevance:</strong> Your high school subjects must align with your intended Bachelor's degree. For example, if you want to study engineering, you should have taken subjects like Mathematics and Physics during +2 or A-Level.</p>
              </CardContent> */}
            </Card>
            
          </TabsContent>
          
          <TabsContent value="language" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Language Proficiency</CardTitle>
                <CardDescription>Requirements for English and German taught programs.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">For English-Taught Programs:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>IELTS:</strong> Typically a minimum score of 6.5 overall, with no band less than 6.0.</li>
                    <li><strong>TOEFL iBT:</strong> Typically a minimum score of 80-90.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">For German-Taught Programs:</h3>
                   <ul className="list-disc pl-5 space-y-1">
                    <li><strong>TestDaF:</strong> A score of at least 4 in all sections (TDN 4).</li>
                    <li><strong>DSH:</strong> DSH-2 or DSH-3 level.</li>
                    <li><strong>Goethe-Zertifikat:</strong> C1 or C2 level certificate.</li>
                  </ul>
                </div>
                <p className="pt-2 text-sm"><strong>Note:</strong> Always check the specific language requirements on the university's official course page, as they can vary significantly. [I highly recommend going for English-language programs.]</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Required Documents Checklist</CardTitle>
                <CardDescription>A general list of documents you will need to prepare.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Completed Application Form (from Uni-Assist or the university portal)</li>
                  <li>Copies of your Bachelor's Degree Certificate and Transcripts</li>
                  <li>Copy of your Higher Secondary (+2) Transcript and Certificate</li>
                  <li>Copy of your SEE/SLC Marksheet and Certificate</li>
                  <li>Letter of Motivation / Statement of Purpose (SOP)</li>
                  <li>Curriculum Vitae (CV) in European format (Europass)</li>
                  <li>Letters of Recommendation (LORs), usually two from academic professors</li>
                  <li>Proof of Language Proficiency (IELTS/TOEFL/German certificate)</li>
                  <li>Copy of your Passport</li>
                  <li>Proof of application fee payment, if applicable</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
