"use server";

import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = formSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      message: "Invalid form data. Please check your inputs.",
      success: false,
    };
  }

  try {
    // Here you would typically send an email, save to a database, etc.
    // For this example, we'll just log it and simulate a delay.
    console.log("Form submitted successfully:");
    console.log(validatedFields.data);
    
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      message: "Thank you for your message! We will get back to you soon.",
      success: true,
    };
  } catch (error) {
    console.error("Error submitting form:", error);
    return {
      message: "An unexpected error occurred. Please try again later.",
      success: false,
    };
  }
}
