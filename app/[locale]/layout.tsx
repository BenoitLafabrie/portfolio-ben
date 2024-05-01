import { cn } from "@/lib/utils";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const ArchivoFont = Archivo({
  subsets: ["latin"],
  variable: "--font-caption",
});

export const metadata: Metadata = {
  title: "Benoît Lafabrie ⸱ Fullstack web developer",
  description: "Fullstack web developer using React, TypeScript, and Tailwind.",
};

export default function RootLayout({
  children,
  locale,
}: Readonly<{
  children: React.ReactNode;
  locale: string;
}>) {
  return (
    <html lang={locale} className="h-full">
      <body
        className={cn(
          GeistSans.variable,
          GeistMono.variable,
          ArchivoFont.variable,
          "font-sans h-full bg-background text-foreground"
        )}
      >
        {children}
      </body>
    </html>
  );
}
