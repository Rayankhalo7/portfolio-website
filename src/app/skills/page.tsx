import type { Metadata } from "next";
import { SkillsGrid } from "@/components/SkillsGrid";

export const metadata: Metadata = {
  title: "Kenntnisse",
  description:
    "Technische Kenntnisse von Rayan Khalo: Schwerpunkt, Frameworks & Web, Netzwerk & Mail, weitere Tools und Sprachen.",
};

export default function SkillsPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Kenntnisse
        </h1>
        <p className="mt-2 max-w-2xl text-muted-strong">
          Gruppierte Übersicht meiner aktiven Schwerpunkte und ergänzenden
          Kompetenzen aus Ausbildung und Berufspraxis.
        </p>
      </header>
      <SkillsGrid />
    </div>
  );
}
