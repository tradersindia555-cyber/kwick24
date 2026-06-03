import { z } from "zod";
export const bookingSchema = z.object({
  serviceId: z.string().min(1, "Please select a service"),

  date: z
    .string()
    .refine(
      (date) => new Date(date) >= new Date(new Date().toDateString()),
      "Please select a valid date",
    ),

  time: z.string().min(1, "Please select a time"),

  address: z.string().min(10, "Address must be at least 10 characters"),

  phone: z.string().regex(/^[6-9]\d{9}$/, "Please enter a valid phone number"),

  notes: z.string().optional(),
});

export type BookingFormData = z.infer<typeof bookingSchema>;
