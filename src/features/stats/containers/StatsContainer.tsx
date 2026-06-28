import { statsData } from "@/assets/asset-data";
import GlowOrb from "@/shared/components/GlowOrb";
import { StatsCards } from "../components/StatsCards";

import { StatsTypo } from "../components/StatsTypo";

export default function StatsContainer() {
  return (
    <section
      id="stats"
      className="relative flex flex-col items-center justify-center w-full min-h-screen py-24"
    >
      <GlowOrb className="-bottom-40 -right-20" />
      <GlowOrb className="top-20 -left-20" />
      <StatsTypo
        title={statsData.title}
        subtitle={statsData.subtitle}
        className="mb-16"
      />

      <StatsCards />
    </section>
  );
}
