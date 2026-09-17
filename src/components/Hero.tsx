import Link from "next/link";
import { site } from "@/lib/content";

export function Hero() {
  return (
    <section className="pb-2 pt-2 sm:pt-4">
      <h1 className="text-display text-foreground">{site.name}</h1>
      <p className="mt-3 text-lg font-semibold text-foreground sm:text-xl">
        {site.role}
      </p>
      <div className="text-meta mt-2 space-y-0.5">
        <p>{site.location}</p>
        <p>Verfügbarkeit {site.availability}</p>
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/projekte" className="btn btn-primary">
          Projekte ansehen
        </Link>
        <Link href="/kontakt" className="btn btn-ghost">
          Nachricht schreiben
        </Link>
      </div>
    </section>
  );
}
