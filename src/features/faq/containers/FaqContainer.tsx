import { faqData } from "@/assets/asset-data";
import { FaqTypo } from "../components/FaqTypo";
import { FaqAccordion } from "../components/FaqAccordion";

export default function FaqContainer() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full py-24 overflow-hidden">
      <FaqTypo 
        title={faqData.title} 
        className="mb-8 md:mb-12" 
      />
      <FaqAccordion />
    </section>
  );
}
