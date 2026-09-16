import { profileText } from "@/lib/content";

export function ProfileSummary() {
  return (
    <section aria-labelledby="profil-heading">
      <h2
        id="profil-heading"
        className="text-xl font-semibold tracking-tight text-foreground"
      >
        Profil
      </h2>
      <p className="mt-3 max-w-3xl leading-relaxed text-muted-strong">
        {profileText}
      </p>
    </section>
  );
}
