import { profileText } from "@/lib/content";

export function ProfileSummary() {
  return (
    <section aria-labelledby="profil-heading">
      <h2 id="profil-heading" className="text-section-title text-foreground">
        Profil
      </h2>
      <p className="text-body-narrow mt-3 leading-relaxed text-foreground">
        {profileText}
      </p>
    </section>
  );
}
