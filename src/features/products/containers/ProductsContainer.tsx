"use client";

import { productsData } from "@/assets/asset-data";
import { ProductCards } from "../components/ProductCards";
import { ProductTypo } from "../components/ProductTypo";

export default function ProductsContainer() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full min-h-screen py-24 overflow-hidden">
      <ProductTypo title={productsData.title} className="mb-12 md:mb-16" />
      <ProductCards />
    </section>
  );
}
