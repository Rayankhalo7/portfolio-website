type SkillGroupProps = {
  title: string;
  skills: string[];
  subdued?: boolean;
};

export function SkillGroup({ title, skills, subdued = false }: SkillGroupProps) {
  return (
    <div className={subdued ? "opacity-70" : undefined}>
      <dt
        className={`text-sm font-semibold ${
          subdued ? "text-muted" : "text-foreground"
        }`}
      >
        {title}
      </dt>
      <dd
        className={`mt-1.5 text-sm leading-relaxed ${
          subdued ? "text-muted" : "text-muted"
        }`}
      >
        {skills.join(", ")}
      </dd>
    </div>
  );
}
