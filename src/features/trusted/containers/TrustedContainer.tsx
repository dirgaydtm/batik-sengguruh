import GlowOrb from "@/shared/components/GlowOrb";
import { TrustedGallery } from "../components/TrustedGallery";
import { TrustedInfo } from "../components/TrustedInfo";

export default function TrustedContainer() {
  return (
    <section className="relative w-full py-24 z-10">
      <GlowOrb className="-top-20 left-20" />
      <GlowOrb className="-bottom-32 right-10" />
      <div className="flex flex-col md:flex-row items-center md:items-stretch justify-between w-full max-w-6xl px-5 mx-auto gap-12 md:gap-16">
        <TrustedInfo />
        <TrustedGallery />
      </div>
    </section>
  );
}
