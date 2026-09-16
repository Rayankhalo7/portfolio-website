type ProjectCardProps = {
  title: string;
  description: string;
  stack: string[];
  repoUrl: string;
  /** Present only when a real live demo is available. */
  liveUrl?: string;
};

export function ProjectCard({
  title,
  description,
  stack,
  repoUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <article className="rounded-xl border border-border bg-card p-6">
      <h2 className="text-xl font-semibold text-foreground">{title}</h2>
      <p className="mt-3 leading-relaxed text-muted-strong">{description}</p>
      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tech-Stack">
        {stack.map((tech) => (
          <li
            key={tech}
            className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent"
          >
            {tech}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-medium">
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-accent-hover hover:underline"
        >
          Repository
        </a>
        {liveUrl ? (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-hover hover:underline"
          >
            Live-Demo
          </a>
        ) : (
          <span
            className="cursor-not-allowed text-muted opacity-60"
            aria-disabled="true"
          >
            Demo folgt
          </span>
        )}
      </div>
    </article>
  );
}
