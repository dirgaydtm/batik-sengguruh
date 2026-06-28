import GlowOrb from "@/shared/components/GlowOrb";
import { ProductCards } from "../components/ProductCards";
import { ProductTypo } from "../components/ProductTypo";

export default function ProductsContainer() {
  return (
    <section className="relative hidden md:flex flex-col items-center justify-center w-full min-h-screen py-24">
      <GlowOrb className="top-0 -left-40" />
      <GlowOrb className="-bottom-20 right-0" />
      <ProductTypo title="Produk" className="mb-12 md:mb-16" />
      <ProductCards />
    </section>
  );
}
