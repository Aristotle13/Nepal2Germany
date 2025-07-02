"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText, ListChecks, GraduationCap, Mail, University, Lock } from "lucide-react";
import Link from "next/link";


const resources = [
  {
    icon: <ListChecks className="h-10 w-10 text-primary" />,
    title: "Complete Application Checklist",
    description: "A comprehensive PDF checklist to track all your required documents and application steps. Never miss a deadline again.",
    fileUrl: "/resources/checklist.pdf",
    fileName: "checklist.pdf",
    premium: false,
  },
  {
    icon: <Mail className="h-10 w-10 text-primary" />,
    title: "LOR (Letter of Recommendation) Template",
    description: "A professional DOCX template to guide your professors in writing an effective Letter of Recommendation for you.",
    fileUrl: "/resources/lor.docx",
    fileName: "lor.docx",
    premium: false,
  },
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    title: "Europass CV Template",
    description: "A ready-to-use Europass CV in PDF format, along with a customizable Canva template to help you create a professional CV effortlessly.",
    fileUrl: "/resources/Europasscv.pdf",
    fileName: "Europasscv.pdf",
    premium: false,
    canvaLink: "https://www.canva.com/design/DAGr2GbbbDU/NiVjRLf6qW7pUFX4g6DFGw/view?utm_content=DAGr2GbbbDU&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
  },
  {
    icon: <GraduationCap className="h-10 w-10 text-primary" />,
    title: "Motivation Letter Template",
    description: "A structured DOCX template to help you write a compelling Motivation Letter that stands out to admission committees.",
    fileUrl: "/resources/Motivation_Letter_Template.docx",
    fileName: "Motivation_Letter_Template.docx",
    premium: true,
  },
  {
    icon: <University className="h-10 w-10 text-primary" />,
    title: "Comprehensive List of Universities ",
    description: "A professional DOCX template to guide your professors in writing an effective Letter of Recommendation for you.",
    fileUrl: "/resources/uni.docx",
    fileName: "uni.docx",
    premium: true,
  },
  
  
];

export default function ResourcesPage() {
  function handlePremiumClick() {
    alert("\nPlease whatsapp or email us to get access.");
  }

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
        <div className="mb-12 max-w-3xl mx-auto text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl">
            Downloadable Resources
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Get access to our curated checklists and templates to make your application process easier.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <Card
              key={resource.title}
              className="flex flex-col transform-gpu transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <CardHeader className="items-center text-center">
                {resource.icon}
                <CardTitle className="font-headline mt-4">{resource.title}</CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col items-center justify-end gap-2">
              {resource.canvaLink && (
               <Button asChild  className="w-full font-semibold">
              <a
                href={resource.canvaLink}
                target="_blank"
                rel="noopener noreferrer"
                    >
                Open in Canva
              </a>
               </Button>
             )}
            

                {resource.premium ? (
                  <Button
                    type="button"
                    onClick={handlePremiumClick}
                    className="w-full font-semibold bg-muted text-muted-foreground cursor-not-allowed"
                  >
                    <Lock className="mr-2 h-4 w-4" />
                    To Access - Contact Us
                  </Button>
                ) : (
                  <Button asChild className="w-full font-semibold">
                    <a href={resource.fileUrl} download={resource.fileName}>
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

// export default function ResourcesPage() {
  
//   return (
//     <div className="bg-background">
//       <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
//         <div className="mb-12 max-w-3xl mx-auto text-center">
//           <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl">
//             Downloadable Resources
//           </h1>
//           <p className="mt-4 text-lg text-muted-foreground">
//             Get access to our curated checklists and templates to make your application process easier.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {resources.map((resource) => (
//             <Card key={resource.title} className="flex flex-col transform-gpu transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
//               <CardHeader className="items-center text-center">
//                 {resource.icon}
//                 <CardTitle className="font-headline mt-4">{resource.title}</CardTitle>
//                 <CardDescription>{resource.description}</CardDescription>
//               </CardHeader>
//               <CardContent className="flex-grow flex items-end justify-center">
//                 <Button asChild className="w-full font-semibold">
//                   <a href={resource.fileUrl} download={resource.fileName}>
//                     <Download className="mr-2 h-4 w-4" />
//                     Download
//                   </a>
//                 </Button>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//         {/* <div className="mt-16 text-center text-sm text-muted-foreground">
//           <p>Note: These files are placeholders. Please upload your actual files to the `/public/resources/` directory.</p>
//         </div> */}
//       </div>
//     </div>
//   );
// }
