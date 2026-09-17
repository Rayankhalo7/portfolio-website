type ProjectFeatureProps = {
  title: string;
  description: string;
  stack: string[];
  repoUrl: string;
  /** Present only when a real live demo is available. */
  liveUrl?: string;
};

export function ProjectFeature({
  title,
  description,
  stack,
  repoUrl,
  liveUrl,
}: ProjectFeatureProps) {
  return (
    <article className="rail">
      <h2 className="text-page-title text-foreground">{title}</h2>
      <p className="text-body-narrow mt-3 leading-relaxed text-muted">
        {description}
      </p>
      <p className="mt-4 text-sm font-semibold text-foreground" aria-label="Tech-Stack">
        {stack.join(" · ")}
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-4 text-sm font-semibold">
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
          <span className="text-muted" aria-disabled="true">
            Demo folgt
          </span>
        )}
      </div>
    </article>
  );
}
