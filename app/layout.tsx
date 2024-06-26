import type { Metadata } from "next";
import { Chivo } from "next/font/google";

import { cn } from "@/lib/utils";

import { Toaster } from "@/components/ui/sonner";

import "./globals.css";

const chivo = Chivo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Master Shipping | Ship Brokers & Agents",
  description: "Ship Brokers & Agents for US and Latam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("overflow-x-hidden h-screen flex-col", chivo.className)}
      >
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
