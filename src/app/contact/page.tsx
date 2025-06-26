"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Instagram, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useEffect } from "react"
import { submitContactForm } from "./actions"
import { useFormState } from "react-dom"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export default function ContactPage() {
  const { toast } = useToast()
  
  const [state, formAction] = useFormState(submitContactForm, {
    message: "",
    success: false,
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  useEffect(() => {
    if (state.message) {
        if(state.success) {
            toast({
                title: "Success!",
                description: state.message,
            });
            form.reset();
        } else {
            toast({
                title: "Error",
                description: state.message,
                variant: "destructive",
            });
        }
    }
  }, [state, toast, form]);

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
        <div className="mb-12 max-w-3xl mx-auto text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Have questions? Fill out the form below or send us a DM on Instagram. We're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline flex items-center"><Send className="mr-2 h-6 w-6"/>Send a Message</CardTitle>
                    <CardDescription>We typically respond within 24-48 hours.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form action={formAction} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Your Name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="your.email@example.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                             <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Message</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Your questions or feedback..." {...field} rows={6} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full font-semibold" disabled={form.formState.isSubmitting}>
                                {form.formState.isSubmitting ? "Sending..." : "Submit"}
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>

            <div className="flex items-center justify-center">
                <Card className="w-full max-w-sm text-center">
                    <CardHeader>
                        <CardTitle className="font-headline flex items-center justify-center"><Instagram className="mr-2 h-6 w-6"/>Connect on Instagram</CardTitle>
                         <CardDescription>For quick questions and updates, follow us and send a DM!</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Image src="https://placehold.co/300x300.png" alt="QR code for Instagram" width={300} height={300} className="mx-auto rounded-lg mb-4" data-ai-hint="QR code instagram"/>
                         <Button asChild className="w-full font-semibold">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                Open Instagram
                            </a>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
      </div>
    </div>
  );
}
