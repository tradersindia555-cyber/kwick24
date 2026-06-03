"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { partnerSchema, type PartnerFormData } from "@/lib/validations/partner";

import { toast } from "react-toastify";

export function PartnerForm() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PartnerFormData>({
    resolver: zodResolver(partnerSchema),
  });

  const onSubmit = async (data: PartnerFormData) => {
    try {
      setLoading(true);

      //   const response = await axios.post(, data);
      const response = await fetch("/api/send-partners", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success("Partnership request submitted successfully.");

        reset();
      }
    } catch (error) {
      console.error(error);

      toast.error("Unable to submit partnership request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <GlassCard className="max-w-xl mx-auto p-8">
      <h3 className="font-display text-xl font-bold text-gold mb-6">
        Partner Application
      </h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            {...register("name")}
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-xl bg-black/50 border border-gold/20 text-white"
          />

          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <input
            {...register("phone")}
            placeholder="Phone Number"
            className="w-full px-4 py-3 rounded-xl bg-black/50 border border-gold/20 text-white"
          />

          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-xl bg-black/50 border border-gold/20 text-white"
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <select
            {...register("serviceType")}
            className="w-full px-4 py-3 rounded-xl bg-black/50 border border-gold/20 text-white"
          >
            <option value="">Select Service Type</option>

            <option value="cleaning">Home Cleaning</option>

            <option value="electrician">Electrician</option>

            <option value="plumber">Plumber</option>

            <option value="automotive">Automotive</option>

            <option value="other">Other</option>
          </select>

          {errors.serviceType && (
            <p className="text-red-500 text-sm mt-1">
              {errors.serviceType.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full"
          size="lg"
          glow
          disabled={loading}
        >
          {loading ? "Submitting..." : "Apply Now"}
        </Button>
      </form>
    </GlassCard>
  );
}
