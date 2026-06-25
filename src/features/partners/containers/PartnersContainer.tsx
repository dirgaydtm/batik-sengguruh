import GlowOrb from "@/shared/components/GlowOrb";
import { partnersData } from "@/assets/asset-data";
import { PartnersTypo } from "../components/PartnersTypo";
import { PartnersCards } from "../components/PartnersCards";

export default function PartnersContainer() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full py-24">
      <GlowOrb className="-bottom-10 -left-20" />
      <PartnersTypo 
        title={partnersData.title} 
        subtitle={partnersData.subtitle} 
        className="mb-12 md:mb-16" 
      />
      <PartnersCards />
    </section>
  );
}
