import { statsData } from "@/assets/asset-data";
import { StatsCards } from "../components/StatsCards";

import { StatsTypo } from "../components/StatsTypo";

export default function StatsContainer() {
  return (
    <section id="stats" className="relative flex flex-col items-center justify-center w-full min-h-screen py-24 overflow-hidden">
      <StatsTypo
        title={statsData.title}
        subtitle={statsData.subtitle}
        className="mb-16"
      />

      <StatsCards />
    </section>
  );
}
