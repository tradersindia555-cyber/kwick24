"use client";

import { useMemo, useState } from "react";
import {
  Mail,
  Phone,
  Send,
  User,
  Wrench,
} from "lucide-react";

import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { services } from "@/lib/data/services";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  serviceSlug: string;
  message: string;
};

const initialForm: FormState = {
  fullName: "",
  email: "",
  phone: "",
  serviceSlug: "",
  message: "",
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function isPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 13;
}

function InputShell({
  label,
  icon,
  children,
  error,
}: {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <div>
      <label className="block text-sm text-zinc-300 mb-1.5">
        {label}
      </label>

      <div
        className={cn(
          "relative rounded-xl border bg-black/40 backdrop-blur-sm transition-all",
          "border-white/10 hover:border-gold/25",
          "focus-within:border-gold/60 focus-within:ring-1 focus-within:ring-gold/25",
          error &&
            "border-red-500/40 focus-within:border-red-500/60"
        )}
      >
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gold/80">
          {icon}
        </div>

        {children}
      </div>

      {error && (
        <p className="mt-1.5 text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);

  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const serviceOptions = useMemo(() => {
    return services.map((s) => ({
      slug: s.slug,
      name: s.name,
    }));
  }, []);

  const validate = (next: FormState) => {
    const e: Partial<Record<keyof FormState, string>> = {};

    if (!next.fullName.trim()) {
      e.fullName = "Please enter your full name.";
    }

    if (!next.email.trim() || !isEmail(next.email)) {
      e.email = "Please enter a valid email.";
    }

    if (!next.phone.trim() || !isPhone(next.phone)) {
      e.phone = "Please enter a valid phone number.";
    }

    if (!next.serviceSlug.trim()) {
      e.serviceSlug = "Please select a service.";
    }

    if (!next.message.trim() || next.message.length < 10) {
      e.message = "Message must be at least 10 characters.";
    }

    return e;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate(form);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setSubmitting(true);

    await new Promise((r) => setTimeout(r, 1000));

    setSubmitting(false);
    setSubmitted(true);
    setForm(initialForm);
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

    <form onSubmit={onSubmit} className="mt-6 space-y-4">
      <InputShell
        label="Full Name"
        icon={<User size={18} />}
        error={errors.fullName}
      >
        <input
          value={form.fullName}
          onChange={(e) =>
            setForm((f) => ({ ...f, fullName: e.target.value }))
          }
          className="w-full bg-transparent text-white placeholder:text-zinc-600 px-11 py-3 rounded-xl outline-none"
          placeholder="Enter full name"
          autoComplete="name"
          aria-invalid={!!errors.fullName}
        />
      </InputShell>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputShell
          label="Email Address"
          icon={<Mail size={18} />}
          error={errors.email}
        >
          <input
            value={form.email}
            onChange={(e) =>
              setForm((f) => ({ ...f, email: e.target.value }))
            }
            className="w-full bg-transparent text-white placeholder:text-zinc-600 px-11 py-3 rounded-xl outline-none"
            placeholder="Enter email"
            autoComplete="email"
            inputMode="email"
            aria-invalid={!!errors.email}
          />
        </InputShell>

        <InputShell
          label="Phone Number"
          icon={<Phone size={18} />}
          error={errors.phone}
        >
          <input
            value={form.phone}
            onChange={(e) =>
              setForm((f) => ({ ...f, phone: e.target.value }))
            }
            className="w-full bg-transparent text-white placeholder:text-zinc-600 px-11 py-3 rounded-xl outline-none"
            placeholder="+91 78886 83637"
            autoComplete="tel"
            inputMode="tel"
            aria-invalid={!!errors.phone}
          />
        </InputShell>
      </div>

      <InputShell
        label="Service"
        icon={<Wrench size={18} />}
        error={errors.serviceSlug}
      >
        <select
          value={form.serviceSlug}
          onChange={(e) =>
            setForm((f) => ({ ...f, serviceSlug: e.target.value }))
          }
          className="w-full bg-transparent text-white px-11 py-3 rounded-xl outline-none appearance-none"
          aria-invalid={!!errors.serviceSlug}
        >
          <option value="" className="bg-[#0A0A0A]">
            Select a service
          </option>
          {serviceOptions.map((s) => (
            <option
              key={s.slug}
              value={s.slug}
              className="bg-[#0A0A0A]"
            >
              {s.name}
            </option>
          ))}
        </select>
      </InputShell>

      <div>
        <label className="block text-sm text-zinc-300 mb-1.5">
          Message
        </label>
        <div
          className={cn(
            "rounded-xl border bg-black/40 backdrop-blur-sm transition-all",
            "border-white/10 hover:border-gold/25",
            "focus-within:border-gold/60 focus-within:ring-1 focus-within:ring-gold/25",
            errors.message &&
              "border-red-500/40 focus-within:border-red-500/60 focus-within:ring-red-500/20"
          )}
        >
          <textarea
            value={form.message}
            onChange={(e) =>
              setForm((f) => ({ ...f, message: e.target.value }))
            }
            className="w-full bg-transparent text-white placeholder:text-zinc-600 px-4 py-3 rounded-xl outline-none min-h-[120px] resize-none"
            placeholder="Tell us what you need help with..."
            aria-invalid={!!errors.message}
          />
        </div>
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      {submitted && (
        <div className="rounded-xl border border-gold/25 bg-gold/10 px-4 py-3 text-sm text-zinc-200">
          Thanks! We received your message — we’ll contact you soon.
        </div>
      )}

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