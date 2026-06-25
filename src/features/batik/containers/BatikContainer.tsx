import { batikData } from "@/assets/asset-data";
import { BatikCards } from "../components/BatikCards";
import { BatikTypo } from "../components/BatikTypo";

export default function BatikContainer() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full min-h-screen py-24 overflow-hidden">
      <BatikTypo title={batikData.title} className="mb-12 md:mb-16" />
      <BatikCards />
    </section>
  );
}
