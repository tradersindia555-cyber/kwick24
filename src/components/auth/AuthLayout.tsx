import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-[#111] to-[#0A0A0A] border-r border-gold/10 p-12 flex-col justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/image.png" alt="Kwick24" width={56} height={56} />
          <span className="font-display text-2xl font-bold text-gold">
            Kwick24 Services
          </span>
        </Link>
        <div>
          <h2 className="font-display text-4xl font-bold text-white mb-4">
            Premium Services,
            <br />
            <span className="text-gold">Delivered.</span>
          </h2>
          <p className="text-zinc-500 max-w-md">
            Join thousands who trust Kwick24 for home and automotive services.
          </p>
        </div>
        <p className="text-zinc-600 text-sm">© Kwick24 Services</p>
      </div>

      <div className="flex-1 flex items-center justify-center p-6 md:p-12 bg-[#0A0A0A]">
        <div className="w-full max-w-md">
          <Link href="/" className="lg:hidden flex items-center gap-2 mb-8">
            <Image src="/image.png" alt="Kwick24" width={40} height={40} />
            <span className="font-display text-xl text-gold">Kwick24</span>
          </Link>
          <h1 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
            {title}
          </h1>
          <p className="text-zinc-500 mb-8">{subtitle}</p>
          {children}
        </div>
      </div>
    </div>
  );
}
