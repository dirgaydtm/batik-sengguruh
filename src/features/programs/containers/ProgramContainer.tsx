import GlowOrb from "@/shared/components/GlowOrb";
import { programsData } from "@/assets/asset-data";
import { ProgramCards } from "../components/ProgramCards";
import { ProgramTypo } from "../components/ProgramTypo";

export default function ProgramContainer() {
  return (
    <section id="program" className="relative flex flex-col items-center justify-center w-full min-h-screen py-24">
      <GlowOrb className="top-1/4 -right-20" />
      <ProgramTypo title={programsData.title} className="mb-12" />
      <ProgramCards />
    </section>
  );
}
