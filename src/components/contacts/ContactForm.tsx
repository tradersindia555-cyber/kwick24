"use client";

import { useMemo, useState, ReactNode } from "react";
import { Mail, Phone, Send, User, Wrench } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";

import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { services } from "@/lib/data/services";
import { ContactFormData, contactSchema } from "@/lib/validations/contact";

export function InputShell({
  label,
  icon,
  children,
  error,
  action,
}: {
  label: string;
  icon: ReactNode;
  children: ReactNode;
  error?: string;
  action?: ReactNode;
}) {
  return (
    <div>
      <div className="flex justify-between items-center py-1">
        <label className="block text-sm text-zinc-300 mb-1.5">{label}</label>
        {action}
      </div>
      <div
        className={cn(
          "relative rounded-xl border bg-black/40 backdrop-blur-sm transition-all",
          "border-white/10 hover:border-gold/25",
          "focus-within:border-gold/60 focus-within:ring-1 focus-within:ring-gold/25",
          error && "border-red-500/40 focus-within:border-red-500/60",
        )}
      >
        <div className="absolute left-3 top-6 -translate-y-1/2 text-gold/80">
          {icon}
        </div>

        {children}
      </div>

      {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
    </div>
  );
}

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  const serviceOptions = useMemo(
    () =>
      services.map((service) => ({
        slug: service.slug,
        name: service.name,
      })),
    [],
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      serviceSlug: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setSubmitting(true);

      const response = await fetch("/api/send-contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Unable to send message. Please try again.",
        );
      }

      toast.success(
        result.message ||
          "Message sent successfully. We'll get back to you soon.",
      );

      reset();
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <GlassCard className="p-6 md:p-8" hover={false} glow>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="font-display text-2xl font-bold text-white">
            Send us a message
          </h2>

          <p className="text-zinc-400 mt-1">
            We’ll usually respond within a few hours.
          </p>
        </div>

        <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20 flex items-center justify-center shrink-0">
          <Send className="text-gold" size={18} />
        </span>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
        <InputShell
          label="Full Name"
          icon={<User size={18} />}
          error={errors.fullName?.message}
        >
          <input
            {...register("fullName")}
            className="w-full bg-transparent text-white placeholder:text-zinc-600 px-11 py-3 rounded-xl outline-none"
            placeholder="Enter full name"
          />
        </InputShell>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputShell
            label="Email Address"
            icon={<Mail size={18} />}
            error={errors.email?.message}
          >
            <input
              {...register("email")}
              type="email"
              className="w-full bg-transparent text-white placeholder:text-zinc-600 px-11 py-3 rounded-xl outline-none"
              placeholder="Enter email"
            />
          </InputShell>

          <InputShell
            label="Phone Number"
            icon={<Phone size={18} />}
            error={errors.phone?.message}
          >
            <input
              {...register("phone")}
              className="w-full bg-transparent text-white placeholder:text-zinc-600 px-11 py-3 rounded-xl outline-none"
              placeholder="+91 9876543210"
            />
          </InputShell>
        </div>

        <InputShell
          label="Service"
          icon={<Wrench size={18} />}
          error={errors.serviceSlug?.message}
        >
          <select
            {...register("serviceSlug")}
            className="w-full bg-transparent text-white px-11 py-3 rounded-xl outline-none appearance-none"
          >
            <option value="" className="bg-[#0A0A0A]">
              Select a service
            </option>

            {serviceOptions.map((service) => (
              <option
                key={service.slug}
                value={service.slug}
                className="bg-[#0A0A0A]"
              >
                {service.name}
              </option>
            ))}
          </select>
        </InputShell>

        <div>
          <label className="block text-sm text-zinc-300 mb-1.5">Message</label>

          <div
            className={cn(
              "rounded-xl border bg-black/40 backdrop-blur-sm transition-all",
              "border-white/10 hover:border-gold/25",
              "focus-within:border-gold/60 focus-within:ring-1 focus-within:ring-gold/25",
              errors.message &&
                "border-red-500/40 focus-within:border-red-500/60",
            )}
          >
            <textarea
              {...register("message")}
              className="w-full bg-transparent text-white placeholder:text-zinc-600 px-4 py-3 rounded-xl outline-none min-h-[120px] resize-none"
              placeholder="Tell us what you need help with..."
            />
          </div>

          {errors.message && (
            <p className="mt-1.5 text-xs text-red-400">
              {errors.message.message}
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between pt-1">
          <p className="text-xs text-zinc-500">
            By submitting, you agree to be contacted by our team.
          </p>

          <Button type="submit" size="md" glow disabled={submitting}>
            {submitting ? "Submitting..." : "Submit"}
            <Send size={16} />
          </Button>
        </div>
      </form>
    </GlassCard>
  );
}
