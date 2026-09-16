import { skillGroups } from "@/lib/content";
import { SkillGroup } from "./SkillGroup";

export function SkillsGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {skillGroups.map((group) => (
        <SkillGroup
          key={group.title}
          title={group.title}
          skills={group.skills}
        />
      ))}
    </div>
  );
}
