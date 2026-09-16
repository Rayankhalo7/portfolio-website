import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projekte",
  description:
    "Öffentliche Demo-Projekte von Rayan Khalo, darunter ChronoTrack. Firmen-Arbeitsproben auf Anfrage.",
};

export default function ProjektePage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Projekte
        </h1>
        <p className="mt-2 max-w-2xl text-muted-strong">
          Öffentliche Demos und Hinweise zu weiteren Arbeitsproben. Die
          Live-Demo folgt nach dem Deploy; bis dahin ist der Quellcode über
          GitHub verlinkt.
        </p>
      </header>

      <div className="grid gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            stack={project.stack}
            repoUrl={project.repoUrl}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>

      <aside className="rounded-xl border border-dashed border-border bg-card/60 p-5 text-sm leading-relaxed text-muted-strong">
        <p className="font-medium text-foreground">
          Firmen-Arbeitsproben auf Anfrage
        </p>
        <p className="mt-2">
          Aus Datenschutz- und Vertraulichkeitsgründen werden firmeninterne
          Projekte nicht öffentlich gezeigt. Gerne stelle ich geeignete
          Arbeitsproben im Bewerbungsprozess bereit.
        </p>
        <p className="mt-3">
          Im Rahmen der Ausbildung entstand das Abschlussprojekt{" "}
          <strong className="font-medium text-foreground">„Zeitmeister“</strong>{" "}
          — eine Zeiterfassungsanwendung (Python, Flask). Es wird hier nur
          textlich erwähnt; Firmencode wird nicht veröffentlicht.
        </p>
      </aside>
    </div>
  );
}
