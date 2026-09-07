export function SectionHeader({
  index,
  eyebrow,
  title,
  description,
  titleId,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  titleId: string;
}) {
  return (
    <header className="max-w-2xl">
      <p className="kicker">
        {index} — {eyebrow}
      </p>
      <h2
        id={titleId}
        className="mt-4 font-display text-4xl leading-[1.08] tracking-tight text-ink sm:text-5xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-7 text-muted">{description}</p>
      ) : null}
    </header>
  );
}
