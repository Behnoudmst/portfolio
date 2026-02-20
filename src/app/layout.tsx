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
    default: "Behnoud Mostafaie | Solutions Architect (AI & Automation) based in Milan, Italy",
    template: `%s | ${DATA.name}`,
  },
  description: "Hi, I'm Behnoud Mostafaie, a Solutions Architect (AI & Automation) based in Milan, Italy. I'm passionate about building web applications and solving problems. Let's connect!",
  openGraph: {
    title: `Behnoud Mostafaie | Solutions Architect (AI & Automation) based in Milan, Italy`,
    description: `Hi, I'm Behnoud Mostafaie, a Solutions Architect (AI & Automation) based in Milan, Italy. I'm passionate about building web applications and solving problems. Let's connect!`,
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
    title: `${DATA.name}| Solutions Architect (AI & Automation) based in Milan, Italy`,
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
          "min-h-screen bg-background font-sans antialiased max-w-5xl mx-auto py-8 sm:py-16 px-4 sm:px-8",
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
