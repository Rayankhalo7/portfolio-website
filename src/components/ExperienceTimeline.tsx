import { experience } from "@/lib/content";

export function ExperienceTimeline() {
  return (
    <section aria-labelledby="erfahrung-heading">
      <h2
        id="erfahrung-heading"
        className="text-xl font-semibold tracking-tight text-foreground"
      >
        Erfahrung
      </h2>
      <ol className="relative mt-6 space-y-8 border-l border-border pl-6">
        {experience.map((entry) => (
          <li key={entry.period} className="relative">
            <span
              className="absolute -left-[1.625rem] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background"
              aria-hidden
            />
            <p className="text-sm font-medium text-muted-strong">{entry.period}</p>
            <h3 className="mt-1 text-lg font-semibold text-foreground">
              {entry.title}
            </h3>
            <p className="text-sm text-muted">{entry.org}</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted-strong">
              {entry.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
