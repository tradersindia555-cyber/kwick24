import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GoldDivider } from "@/components/ui/GoldDivider";
import type { ReactNode } from "react";

interface ContentPageLayoutProps {
  title: string;
  subtitle?: string;
  lastUpdated?: string;
  children: ReactNode;
}

export function ContentPageLayout({
  title,
  subtitle,
  lastUpdated,
  children,
}: ContentPageLayoutProps) {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 min-h-screen">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <GoldDivider className="mb-6 max-w-xs" />
          <h1 className="font-display text-3xl md:text-4xl font-bold text-gold mb-3">
            {title}
          </h1>
          {subtitle && (
            <p className="text-zinc-400 text-lg mb-2">{subtitle}</p>
          )}
          {lastUpdated && (
            <p className="text-zinc-500 text-sm mb-10">Last Updated: {lastUpdated}</p>
          )}
          {!lastUpdated && <div className="mb-10" />}
          <div className="space-y-6 text-zinc-400 leading-relaxed">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}

interface ContentSectionProps {
  title: string;
  children: ReactNode;
}

export function ContentSection({ title, children }: ContentSectionProps) {
  return (
    <section>
      <h2 className="text-white text-xl font-semibold mb-3 font-display">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

export function ContentList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc list-inside space-y-1.5 text-zinc-400 ml-1">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
