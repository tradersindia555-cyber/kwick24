export const siteConfig = {
  name: "Kwick24 Services",
  shortName: "Kwick24",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://kwick24.com",
  description:
    "Book trusted home and automotive service professionals instantly. Car wash, cleaning, electrician, plumber, AC repair and more.",
  locale: "en_IN",
  email: "kwickservices24@gmail.com",
  phone: "7901831036",
  location: "Punjab, India",
} as const;

export function absoluteUrl(path: string): string {
  const base = siteConfig.url.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
