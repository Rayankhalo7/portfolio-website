import { experience } from "@/lib/content";

export function ExperienceTimeline() {
  return (
    <section aria-labelledby="erfahrung-heading">
      <h2 id="erfahrung-heading" className="text-section-title text-foreground">
        Erfahrung
      </h2>
      <ol className="mt-6 list-none space-y-8 p-0">
        {experience.map((entry) => (
          <li key={entry.period}>
            <p className="text-meta">{entry.period}</p>
            <h3 className="mt-1 text-[1.05rem] font-semibold text-foreground">
              {entry.title}
            </h3>
            <p className="text-meta mt-0.5">{entry.org}</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[0.95rem] leading-relaxed text-foreground">
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
