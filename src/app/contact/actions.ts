"use server";

import { z } from "zod";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(2),
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

  // try {
    
    
  //   console.log("Form submitted successfully:");
  //   console.log(validatedFields.data);
    
  //   // await new Promise(resolve => setTimeout(resolve, 1000)); // Temporarily commented out simulated delay

  //   return {
  //     message: "Thank you for your message! We will get back to you soon.",
  //     success: true,
  //   };

 const { name, email, message } = validatedFields.data;

  try {
    const response = await resend.emails.send({
      from: "Nepal2Germany Contact Form <onboarding@resend.dev>",
      to: "nep2ger@gmail.com", // ✅ Replace with your Gmail
      subject: `New message from ${name}`,
      replyTo: email, // ✅ Corrected property name
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    console.log("Email sent:", response);

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
