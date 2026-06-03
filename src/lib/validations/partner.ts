import { z } from "zod";

export const partnerSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),

  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid phone number"),

  email: z.string().email("Enter a valid email"),

  serviceType: z.string().min(1, "Please select a service type"),
});

export type PartnerFormData = z.infer<typeof partnerSchema>;
