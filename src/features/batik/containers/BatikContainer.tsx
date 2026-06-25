import { batikData } from "@/assets/asset-data";
import GlowOrb from "@/shared/components/GlowOrb";
import { BatikCards } from "../components/BatikCards";
import { BatikTypo } from "../components/BatikTypo";

export default function BatikContainer() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full min-h-screen py-24">
      <GlowOrb className="-bottom-20 -right-20" />
      <GlowOrb className="top-1/3 left-10" />
      <BatikTypo title={batikData.title} className="mb-12 md:mb-16" />
      <BatikCards />
    </section>
  );
}
