import type { Metadata } from "next";
import { Syne, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeScript } from "@/components/ThemeScript";
import { SkipLink } from "@/components/SkipLink";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/lib/content";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
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
      className={`${syne.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <head>
        <ThemeScript />
      </head>
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <ThemeProvider>
          <SkipLink />
          <SiteHeader />
          <main
            id="main"
            className="mx-auto w-full max-w-[56rem] flex-1 px-4 py-10 sm:px-6"
          >
            {children}
          </main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
