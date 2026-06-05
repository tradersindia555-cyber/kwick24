import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { BookingProvider } from "@/context/BookingContext";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { BookingModal } from "@/components/booking/BookingModal";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BookingStatusModel from "@/components/booking/BookingStatusModel";
import { siteConfig } from "@/lib/site";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Kwick24 Services | Professional Services at Your Doorstep",
    template: "%s | Kwick24 Services",
  },
  description: siteConfig.description,
  keywords: [
    "home services",
    "car wash",
    "electrician",
    "plumber",
    "on-demand services",
    "Kwick24",
  ],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    url: siteConfig.url,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#0A0A0A] text-white antialiased">
        <BookingProvider>
          <LoadingScreen />
          <Header />
          <main>{children}</main>
          <Footer />
          <BookingStatusModel />
          <BookingModal />
        </BookingProvider>
        <ToastContainer position="top-right" autoClose={3000} />
      </body>
    </html>
  );
}
