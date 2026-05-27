"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, Lock, User, Phone, Eye, EyeOff } from "lucide-react";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { Button } from "@/components/ui/Button";
import { PageTransition } from "@/components/ui/PageTransition";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
  };

  return (
    <PageTransition>
      <AuthLayout
        title="Create Account"
        subtitle="Join Kwick24 and book premium services instantly"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-zinc-400 mb-1.5">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/60" size={18} />
              <input
                type="text"
                required
                placeholder="John Doe"
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-gold/20 text-white placeholder:text-zinc-600 focus:border-gold focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-zinc-400 mb-1.5">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/60" size={18} />
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-gold/20 text-white placeholder:text-zinc-600 focus:border-gold focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-zinc-400 mb-1.5">Phone</label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/60" size={18} />
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-gold/20 text-white placeholder:text-zinc-600 focus:border-gold focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-zinc-400 mb-1.5">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/60" size={18} />
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="Min. 8 characters"
                className="w-full pl-11 pr-12 py-3 rounded-xl bg-white/5 border border-gold/20 text-white placeholder:text-zinc-600 focus:border-gold focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-gold"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <Button type="submit" className="w-full" size="lg" glow disabled={loading}>
            {loading ? "Creating account..." : "Create Account"}
          </Button>
        </form>

        <p className="mt-6 text-center text-zinc-500 text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-gold hover:underline">
            Sign in
          </Link>
        </p>
      </AuthLayout>
    </PageTransition>
  );
}
