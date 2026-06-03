import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(3, "Name must be at least 3 characters"),

  email: z.string().email("Please enter a valid email address"),

  phone: z.string().regex(/^[6-9]\d{9}$/, "Please enter a valid phone number"),

  serviceSlug: z.string().min(1, "Please select a service"),

  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
