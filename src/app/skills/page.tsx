import type { Metadata } from "next";
import { SkillsGrid } from "@/components/SkillsGrid";

export const metadata: Metadata = {
  title: "Kenntnisse",
  description:
    "Technische Kenntnisse von Rayan Khalo: Schwerpunkt, Frameworks & Web, Netzwerk & Mail, weitere Tools und Sprachen.",
};

export default function SkillsPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-page-title text-foreground">Kenntnisse</h1>
        <p className="text-body-narrow mt-2 text-muted">
          Gruppierte Übersicht meiner aktiven Schwerpunkte und ergänzenden
          Kompetenzen aus Ausbildung und Berufspraxis.
        </p>
      </header>
      <SkillsGrid />
    </div>
  );
}
