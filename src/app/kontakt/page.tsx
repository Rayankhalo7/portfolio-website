import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Kontaktieren Sie Rayan Khalo per Formular oder direkt unter ${site.email}.`,
};

export default function KontaktPage() {
  return (
    <div className="mx-auto max-w-xl space-y-6">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Kontakt
        </h1>
        <p className="mt-2 text-muted-strong">
          Schreiben Sie mir über das Formular oder direkt per E-Mail. Adresse
          und Telefonnummer werden aus Datenschutzgründen nicht veröffentlicht.
        </p>
        <p className="mt-4 text-sm">
          <span className="font-medium text-foreground">E-Mail: </span>
          <a
            href={`mailto:${site.email}`}
            className="text-accent hover:text-accent-hover hover:underline"
          >
            {site.email}
          </a>
        </p>
      </header>
      <ContactForm />
    </div>
  );
}
