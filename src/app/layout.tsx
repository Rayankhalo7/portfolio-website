import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SkipLink } from "@/components/SkipLink";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/lib/content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — Webentwickler / Fachinformatiker AE`,
    template: `%s · ${site.name}`,
  },
  description:
    "Bewerbungs-Portfolio von Rayan Khalo: Webentwickler und Fachinformatiker Anwendungsentwicklung in Hofgeismar. Projekte, Kenntnisse und Kontakt.",
  openGraph: {
    title: `${site.name} — Webentwickler / Fachinformatiker AE`,
    description:
      "Junior- bis Early-Professional-Webentwickler mit Fokus auf PHP, TypeScript, Laravel, React/Next.js und WordPress.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <ThemeProvider>
          <SkipLink />
          <SiteHeader />
          <main id="main" className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6">
            {children}
          </main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
