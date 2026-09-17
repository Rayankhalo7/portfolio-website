import { skillGroups } from "@/lib/content";
import { SkillGroup } from "./SkillGroup";

export function SkillsGrid() {
  return (
    <dl className="grid gap-6 sm:grid-cols-2">
      {skillGroups.map((group) => (
        <SkillGroup
          key={group.title}
          title={group.title}
          skills={group.skills}
          subdued={group.title === "Weitere"}
        />
      ))}
    </dl>
  );
}
