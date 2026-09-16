type SkillGroupProps = {
  title: string;
  skills: string[];
};

export function SkillGroup({ title, skills }: SkillGroupProps) {
  return (
    <section
      aria-labelledby={`skill-${title}`}
      className="rounded-xl border border-border bg-card p-5"
    >
      <h2
        id={`skill-${title}`}
        className="text-base font-semibold text-foreground"
      >
        {title}
      </h2>
      <ul className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-border bg-background px-3 py-1 text-sm text-muted"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
