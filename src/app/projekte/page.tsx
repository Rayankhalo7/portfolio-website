import type { Metadata } from "next";
import { ProjectFeature } from "@/components/ProjectFeature";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projekte",
  description:
    "Öffentliche Demo-Projekte von Rayan Khalo, darunter ChronoTrack. Firmen-Arbeitsproben auf Anfrage.",
};

export default function ProjektePage() {
  return (
    <div className="space-y-10">
      <header>
        <h1 className="text-page-title text-foreground">Projekte</h1>
        <p className="text-body-narrow mt-2 text-muted">
          Öffentliche Demos und Hinweise zu weiteren Arbeitsproben. Die
          Live-Demo folgt nach dem Deploy; bis dahin ist der Quellcode über
          GitHub verlinkt.
        </p>
      </header>

      <div className="space-y-10">
        {projects.map((project) => (
          <ProjectFeature
            key={project.title}
            title={project.title}
            description={project.description}
            stack={project.stack}
            repoUrl={project.repoUrl}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>

      <aside className="border-t border-border pt-8 text-sm leading-relaxed text-muted">
        <p className="font-semibold text-foreground">
          Firmen-Arbeitsproben auf Anfrage
        </p>
        <p className="text-body-narrow mt-2">
          Aus Datenschutz- und Vertraulichkeitsgründen werden firmeninterne
          Projekte nicht öffentlich gezeigt. Gerne stelle ich geeignete
          Arbeitsproben im Bewerbungsprozess bereit.
        </p>
        <p className="text-body-narrow mt-3">
          Im Rahmen der Ausbildung entstand das Abschlussprojekt{" "}
          <strong className="font-semibold text-foreground">„Zeitmeister“</strong>{" "}
          — eine Zeiterfassungsanwendung (Python, Flask). Es wird hier nur
          textlich erwähnt; Firmencode wird nicht veröffentlicht.
        </p>
      </aside>
    </div>
  );
}
