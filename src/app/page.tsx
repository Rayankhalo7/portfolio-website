import { Hero } from "@/components/Hero";
import { ProfileSummary } from "@/components/ProfileSummary";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <Hero />
      <ProfileSummary />
      <ExperienceTimeline />
    </div>
  );
}
