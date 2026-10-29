import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: "Behnoud Mostafaie | Senior Full-Stack / Product Engineer in Milan, Italy",
    template: `%s | ${DATA.name}`,
  },
  description: "Behnoud Mostafaie is a senior full-stack / product engineer in Milan, Italy, building SaaS, enterprise, and AI-powered products with TypeScript, React/Next.js, and Node.js/NestJS since 2021.",
  openGraph: {
    title: `Behnoud Mostafaie | Senior Full-Stack / Product Engineer in Milan, Italy`,
    description: `Behnoud Mostafaie is a senior full-stack / product engineer in Milan, Italy, building SaaS, enterprise, and AI-powered products with TypeScript, React/Next.js, and Node.js/NestJS since 2021.`,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name} | Senior Full-Stack / Product Engineer in Milan, Italy`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-5xl mx-auto pt-14 sm:pt-16 pb-8 sm:pb-16 px-4 sm:px-8",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="auto" enableSystem>
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
