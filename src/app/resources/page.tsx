import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText, ListChecks } from "lucide-react";
import Link from "next/link";

const resources = [
  {
    icon: <ListChecks className="h-10 w-10 text-primary" />,
    title: "Complete Application Checklist",
    description: "A comprehensive PDF checklist to track all your required documents and application steps. Never miss a deadline again.",
    fileUrl: "/resources/application_checklist.pdf",
    fileName: "application_checklist.pdf",
  },
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    title: "SOP (Statement of Purpose) Template",
    description: "A structured DOCX template to help you write a compelling Statement of Purpose that stands out to admission committees.",
    fileUrl: "/resources/sop_template.docx",
    fileName: "sop_template.docx",
  },
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    title: "LOR (Letter of Recommendation) Template",
    description: "A professional DOCX template to guide your professors in writing an effective Letter of Recommendation for you.",
    fileUrl: "/resources/lor_template.docx",
    fileName: "lor_template.docx",
  },
];

export default function ResourcesPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
        <div className="mb-12 max-w-3xl mx-auto text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl">
            Downloadable Resources
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Get free access to our curated checklists and templates to make your application process easier.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <Card key={resource.title} className="flex flex-col transform-gpu transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <CardHeader className="items-center text-center">
                {resource.icon}
                <CardTitle className="font-headline mt-4">{resource.title}</CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex items-end justify-center">
                <Button asChild className="w-full font-semibold">
                  <a href={resource.fileUrl} download={resource.fileName}>
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center text-sm text-muted-foreground">
          <p>Note: These files are placeholders. Please upload your actual files to the `/public/resources/` directory.</p>
        </div>
      </div>
    </div>
  );
}
