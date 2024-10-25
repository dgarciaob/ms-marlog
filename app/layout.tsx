import type { Metadata } from "next";
import { Chivo } from "next/font/google";

import { cn } from "@/lib/utils";

import { Toaster } from "@/components/ui/sonner";

import "./globals.css";

const chivo = Chivo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Master Shipping | Ship Brokers, Ship Agents, Logistic Agents",
  description: "Global Bulk Liquid Transportation Experts",
  openGraph: {
    title: "Master Shipping | Ship Brokers, Ship Agents, Logistic Agents",
    description: "Global Bulk Liquid Transportation Experts",
    type: "website",
    locale: "en_US",
    url: "https://mastershipping.us",
    images: ["https://mastershipping.us/logo/opg-ms.png"],
  },
  robots: {
    follow: true,
    index: true,
  },
  keywords: [
    "ship brokers",
    "logistic agents",
    "shipping",
    "ship",
    "logistic",
    "agents",
    "master shipping",
    "us",
  ],
  creator: "Magnet Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn("overflow-x-hidden h-screen flex-col", chivo.className)}
      >
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
