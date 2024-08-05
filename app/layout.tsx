import type { Metadata } from "next";
import { Chivo } from "next/font/google";

import { cn } from "@/lib/utils";

import { Toaster } from "@/components/ui/sonner";

import "./globals.css";

const chivo = Chivo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Master Shipping | Ship Brokers & Logistic Agents",
  description: "Ship Brokers & Logistic Agents for US and Latam",
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
    "latam",
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
