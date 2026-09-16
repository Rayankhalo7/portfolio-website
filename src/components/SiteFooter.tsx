import { site } from "@/lib/content";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-card">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © {year} {site.name}. Alle Rechte vorbehalten.
        </p>
        <p>
          <a
            href={`mailto:${site.email}`}
            className="text-accent hover:text-accent-hover hover:underline"
          >
            {site.email}
          </a>
          {" · "}
          {site.location}
        </p>
      </div>
    </footer>
  );
}
