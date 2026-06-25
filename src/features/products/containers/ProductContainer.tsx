import { ProductCards } from "../components/ProductCards";
import { ProductTypo } from "../components/ProductTypo";

export default function ProductsContainer() {
  return (
    <section className="relative hidden md:flex flex-col items-center justify-center w-full min-h-screen py-24 overflow-hidden">
      <ProductTypo title="Produk" className="mb-12 md:mb-16" />
      <ProductCards />
    </section>
  );
}
